#!/usr/bin/env node
/**
 * Download every non-WebP Cloudinary image used in the site, convert it to
 * WebP under 1MB, upload under albatroz/webp/ (originals stay), and swap URLs.
 * Rollback: node scripts/image-webp-rollback.mjs
 */
import fs from "fs";
import os from "os";
import path from "path";
import { spawnSync } from "child_process";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const downloadRoot = path.join(
  os.homedir(),
  "Downloads",
  "alb-images-not-webp",
);
const rollbackPath = path.join(root, "scripts", "image-webp-rollback.json");
const ONE_MB = 1024 * 1024;
const CODE_DIRS = ["app", "component", "section", "data", "lib"];
const CODE_EXTS = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".html"]);
const URL_RE =
  /https:\/\/res\.cloudinary\.com\/ddcx08e0s\/image\/upload\/[^"'\\\s)]+/g;

const require = createRequire("/tmp/alb-resvg/package.json");
const { Resvg } = require("@resvg/resvg-js");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function collectCodeFiles() {
  const files = [];
  for (const dir of CODE_DIRS) {
    const abs = path.join(root, dir);
    if (!fs.existsSync(abs)) continue;
    for (const file of walk(abs)) {
      if (!CODE_EXTS.has(path.extname(file).toLowerCase())) continue;
      files.push(file);
    }
  }
  return files;
}

function dimensions(file) {
  const result = spawnSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8",
  });
  const width = Number((result.stdout.match(/pixelWidth:\s*(\d+)/) || [])[1]);
  const height = Number((result.stdout.match(/pixelHeight:\s*(\d+)/) || [])[1]);
  if (!width || !height) throw new Error(`Could not read size of ${file}`);
  return { width, height };
}

function toWebp(src, dest, quality, width) {
  const args = ["-q", String(quality), "-alpha_q", "100", "-m", "6"];
  if (width) args.push("-resize", String(width), "0");
  args.push(src, "-o", dest);
  const result = spawnSync("cwebp", args, { encoding: "utf8" });
  if (result.status !== 0) {
    throw new Error(result.stderr || `cwebp failed for ${src}`);
  }
}

function compressUnder1Mb(src) {
  const { width } = dimensions(src);
  const dest = `${src}.webp`;
  let quality = 82;
  let targetWidth = width;

  for (let attempt = 0; attempt < 16; attempt += 1) {
    toWebp(src, dest, quality, targetWidth < width ? targetWidth : 0);
    const size = fs.statSync(dest).size;
    if (size <= ONE_MB) return dest;
    if (quality > 45) quality -= 8;
    else targetWidth = Math.max(640, Math.round(targetWidth * 0.85));
  }

  const size = fs.statSync(dest).size;
  if (size > ONE_MB) throw new Error(`${src} is still ${size} bytes`);
  return dest;
}

function rasterizeSvg(svgPath, pngPath) {
  const svg = fs.readFileSync(svgPath);
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: 1600 },
    background: "rgba(0,0,0,0)",
  });
  fs.writeFileSync(pngPath, resvg.render().asPng());
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const codeFiles = collectCodeFiles();
const urls = new Set();
for (const file of codeFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.match(URL_RE) || []) {
    const clean = match.replace(/[?#].*$/, "");
    if (/\.(png|jpe?g|svg)$/i.test(clean)) urls.add(clean);
  }
}

const list = [...urls].sort();
console.log(`Found ${list.length} non-WebP Cloudinary URLs`);
fs.mkdirSync(downloadRoot, { recursive: true });

const items = [];
const usedIds = new Map();

for (const oldUrl of list) {
  const pathname = new URL(oldUrl).pathname;
  const marker = "/image/upload/";
  const after = pathname.slice(pathname.indexOf(marker) + marker.length);
  const withoutVersion = after.replace(/^v\d+\//, "");
  const ext = path.extname(withoutVersion).toLowerCase();
  let publicId = `albatroz/webp/${withoutVersion.slice(0, -ext.length)}`;

  const previous = usedIds.get(publicId);
  if (previous && previous !== oldUrl) {
    const version = (pathname.match(/\/v(\d+)\//) || [])[1] || "alt";
    publicId = `${publicId}-v${version}`;
  }
  usedIds.set(publicId, oldUrl);

  const rel = withoutVersion;
  const downloaded = path.join(downloadRoot, rel);
  fs.mkdirSync(path.dirname(downloaded), { recursive: true });

  process.stdout.write(`download ${rel} → `);
  const response = await fetch(oldUrl);
  if (!response.ok) {
    throw new Error(`Download failed ${response.status} ${oldUrl}`);
  }
  fs.writeFileSync(downloaded, Buffer.from(await response.arrayBuffer()));

  let raster = downloaded;
  if (ext === ".svg") {
    raster = `${downloaded}.png`;
    rasterizeSvg(downloaded, raster);
  }

  const webp = compressUnder1Mb(raster);
  const bytes = fs.statSync(webp).size;
  const savedWebp = path.join(
    downloadRoot,
    "webp",
    `${rel.replace(/\.[^.]+$/, "")}.webp`,
  );
  fs.mkdirSync(path.dirname(savedWebp), { recursive: true });
  fs.copyFileSync(webp, savedWebp);

  const result = await cloudinary.uploader.upload(webp, {
    public_id: publicId,
    overwrite: true,
    invalidate: true,
    resource_type: "image",
    format: "webp",
  });

  console.log(`${(bytes / 1024).toFixed(0)}KB ${result.secure_url}`);
  items.push({ oldUrl, newUrl: result.secure_url, bytes, local: downloaded });
}

let replacements = 0;
for (const item of items) {
  let count = 0;
  for (const file of codeFiles) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes(item.oldUrl)) continue;
    fs.writeFileSync(file, text.split(item.oldUrl).join(item.newUrl));
    count += text.split(item.oldUrl).length - 1;
  }
  item.replacements = count;
  replacements += count;
}

const rollback = {
  createdAt: new Date().toISOString(),
  note: "node scripts/image-webp-rollback.mjs restores these old URLs. --apply puts the WebP URLs back. Original Cloudinary files were not overwritten.",
  items: items.map(({ oldUrl, newUrl, bytes, local, replacements: count }) => ({
    oldUrl,
    newUrl,
    bytes,
    local,
    replacements: count,
  })),
};
fs.writeFileSync(rollbackPath, `${JSON.stringify(rollback, null, 2)}\n`);

const over = items.filter((item) => item.bytes > ONE_MB);
console.log(
  `\nDone. files=${items.length} url replacements=${replacements} downloads=${downloadRoot}`,
);
if (over.length) {
  console.error("Still over 1MB:", over.map((item) => item.oldUrl).join(", "));
  process.exit(1);
}
const missing = items.filter((item) => item.replacements === 0);
if (missing.length) {
  console.log(
    "Uploaded but not referenced:",
    missing.map((item) => item.oldUrl).join(", "),
  );
}
