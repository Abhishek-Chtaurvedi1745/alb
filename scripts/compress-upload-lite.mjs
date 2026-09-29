#!/usr/bin/env node
/**
 * Compress public/images files over 1MB to WebP, upload them under
 * albatroz/lite/ (original Cloudinary assets stay), and swap source URLs.
 * Rollback map: scripts/image-lite-rollback.json
 */
import fs from "fs";
import os from "os";
import path from "path";
import { spawnSync } from "child_process";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imagesRoot = path.join(root, "public", "images");
const mapPath = path.join(root, "scripts", "cloudinary-map.json");
const rollbackPath = path.join(root, "scripts", "image-lite-rollback.json");
const ONE_MB = 1024 * 1024;
const CODE_DIRS = ["app", "component", "section", "data", "lib"];
const CODE_EXTS = new Set([".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".html"]);

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function rasterInput(file, tmpDir) {
  const ext = path.extname(file).toLowerCase();
  if (ext !== ".svg") return file;
  const text = fs.readFileSync(file, "utf8");
  const match = text.match(/data:image\/(png|jpeg|jpg);base64,([A-Za-z0-9+/=\s]+)/);
  if (!match) {
    throw new Error(`No embedded raster in ${file}`);
  }
  const out = path.join(tmpDir, `${path.basename(file, ext)}.${match[1] === "png" ? "png" : "jpg"}`);
  fs.writeFileSync(out, Buffer.from(match[2].replace(/\s/g, ""), "base64"));
  return out;
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
  const args = ["-q", String(quality), "-m", "6"];
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
  let quality = 80;
  let targetWidth = width;

  for (let attempt = 0; attempt < 16; attempt += 1) {
    toWebp(src, dest, quality, targetWidth < width ? targetWidth : 0);
    const size = fs.statSync(dest).size;
    if (size <= ONE_MB) return dest;
    if (quality > 45) quality -= 8;
    else targetWidth = Math.max(640, Math.round(targetWidth * 0.85));
  }

  const size = fs.statSync(dest).size;
  if (size > ONE_MB) {
    throw new Error(`${src} is still ${size} bytes`);
  }
  return dest;
}

function collectCodeFiles() {
  const files = [];
  for (const dir of CODE_DIRS) {
    const abs = path.join(root, dir);
    if (!fs.existsSync(abs)) continue;
    for (const file of walk(abs)) {
      if (!CODE_EXTS.has(path.extname(file).toLowerCase())) continue;
      if (file.endsWith("image-lite-rollback.json")) continue;
      if (file.endsWith("cloudinary-map.json")) continue;
      files.push(file);
    }
  }
  return files;
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const urlMap = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const large = walk(imagesRoot).filter((file) => fs.statSync(file).size > ONE_MB);
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "alb-lite-"));
const items = [];

console.log(`Compressing ${large.length} images over 1MB`);

for (const file of large) {
  const rel = path.relative(imagesRoot, file).split(path.sep).join("/");
  const local = `/images/${rel}`;
  const oldUrl = urlMap[local] || urlMap[local.slice(1)] || null;
  const raster = rasterInput(file, tmpDir);
  const webp = compressUnder1Mb(raster);
  const bytes = fs.statSync(webp).size;
  const publicId = `albatroz/lite/${rel.replace(/\.[^.]+$/, "")}`;

  process.stdout.write(`${local} ${(bytes / 1024).toFixed(0)}KB → `);

  const result = await cloudinary.uploader.upload(webp, {
    public_id: publicId,
    overwrite: true,
    invalidate: true,
    resource_type: "image",
    format: "webp",
  });

  console.log(result.secure_url);
  items.push({
    local,
    oldUrl,
    newUrl: result.secure_url,
    bytes,
  });
}

const codeFiles = collectCodeFiles();
let replacements = 0;

for (const item of items) {
  if (!item.oldUrl) {
    item.replacements = 0;
    continue;
  }
  let count = 0;
  for (const file of codeFiles) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes(item.oldUrl)) continue;
    const next = text.split(item.oldUrl).join(item.newUrl);
    fs.writeFileSync(file, next);
    count += text.split(item.oldUrl).length - 1;
  }
  item.replacements = count;
  replacements += count;
}

const rollback = {
  createdAt: new Date().toISOString(),
  note: "Replace newUrl with oldUrl to restore the previous Cloudinary assets.",
  items,
};
fs.writeFileSync(rollbackPath, `${JSON.stringify(rollback, null, 2)}\n`);

console.log(
  `\nDone. files=${items.length} url replacements=${replacements} rollback=${rollbackPath}`,
);
const over = items.filter((item) => item.bytes > ONE_MB);
if (over.length) {
  console.error("Still over 1MB:", over.map((item) => item.local).join(", "));
  process.exit(1);
}
const missing = items.filter((item) => item.oldUrl && item.replacements === 0);
if (missing.length) {
  console.log(
    "Uploaded but not referenced in code:",
    missing.map((item) => item.local).join(", "),
  );
}
