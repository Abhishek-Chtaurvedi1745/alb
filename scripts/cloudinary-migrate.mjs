#!/usr/bin/env node
/**
 * Cloudinary image migration for Albatroz site.
 *
 * 1) Uploads public/images/** to Cloudinary
 * 2) Writes scripts/cloudinary-map.json  (/images/... → https://res.cloudinary.com/...)
 * 3) Rewrites source/data files to use live Cloudinary URLs
 *
 * Required env (Dashboard → Settings → API Keys):
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 *
 * Optional:
 *   CLOUDINARY_FOLDER=albatroz   (Cloudinary folder prefix)
 *
 * Usage:
 *   node --env-file=.env.local scripts/cloudinary-migrate.mjs           # upload + rewrite
 *   node --env-file=.env.local scripts/cloudinary-migrate.mjs --upload  # upload only
 *   node --env-file=.env.local scripts/cloudinary-migrate.mjs --rewrite # rewrite from existing map
 *   node --env-file=.env.local scripts/cloudinary-migrate.mjs --dry-run # list files, no upload
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imagesRoot = path.join(root, "public", "images");
const mapPath = path.join(root, "scripts", "cloudinary-map.json");

const FOLDER = (process.env.CLOUDINARY_FOLDER || "albatroz").replace(
  /^\/+|\/+$/g,
  "",
);

const args = new Set(process.argv.slice(2));
const dryRun = args.has("--dry-run");
const uploadOnly = args.has("--upload");
const rewriteOnly = args.has("--rewrite");
const doUpload = !rewriteOnly;
const doRewrite = !uploadOnly;

const IMAGE_EXTS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".avif",
  ".ico",
]);

const CODE_GLOBS_DIRS = [
  "app",
  "component",
  "section",
  "data",
  "lib",
  "public",
];

const CODE_EXTS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".json",
  ".css",
  ".md",
  ".html",
]);

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to .env.local (Cloudinary Dashboard → API Keys).`,
    );
  }
  return value;
}

function walkFiles(dir, filterFn, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, filterFn, out);
    else if (filterFn(full)) out.push(full);
  }
  return out;
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function localPublicPath(absFile) {
  const rel = toPosix(path.relative(path.join(root, "public"), absFile));
  return `/${rel}`;
}

function publicIdFromFile(absFile) {
  const rel = toPosix(path.relative(imagesRoot, absFile));
  const noExt = rel.replace(/\.[^.]+$/, "");
  return `${FOLDER}/${noExt}`;
}

function resourceTypeFor(ext) {
  // Keep SVG as image so delivery URLs stay consistent with <img src>.
  return "image";
}

function loadMap() {
  if (!fs.existsSync(mapPath)) return {};
  return JSON.parse(fs.readFileSync(mapPath, "utf8"));
}

function saveMap(map) {
  const sorted = Object.fromEntries(
    Object.entries(map).sort(([a], [b]) => a.localeCompare(b)),
  );
  fs.writeFileSync(mapPath, `${JSON.stringify(sorted, null, 2)}\n`, "utf8");
}

async function uploadAll() {
  const cloudName = requireEnv("CLOUDINARY_CLOUD_NAME");
  const apiKey = requireEnv("CLOUDINARY_API_KEY");
  const apiSecret = requireEnv("CLOUDINARY_API_SECRET");

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  });

  const files = walkFiles(imagesRoot, (f) =>
    IMAGE_EXTS.has(path.extname(f).toLowerCase()),
  ).sort();

  console.log(`Found ${files.length} image files under public/images`);
  if (dryRun) {
    files.slice(0, 20).forEach((f) => console.log("  ", localPublicPath(f)));
    if (files.length > 20) console.log(`  … +${files.length - 20} more`);
    return loadMap();
  }

  const map = loadMap();
  let ok = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const localPath = localPublicPath(file);
    const publicId = publicIdFromFile(file);
    const ext = path.extname(file).toLowerCase();

    if (map[localPath] && !args.has("--force")) {
      skipped += 1;
      continue;
    }

    process.stdout.write(
      `[${i + 1}/${files.length}] ${localPath} → ${publicId} … `,
    );

    try {
      const result = await cloudinary.uploader.upload(file, {
        public_id: publicId,
        overwrite: true,
        invalidate: true,
        resource_type: resourceTypeFor(ext),
        // Preserve transparency / original where useful
        ...(ext === ".svg"
          ? { format: "svg" }
          : { use_filename: true, unique_filename: false }),
      });

      const url = result.secure_url;
      map[localPath] = url;
      // Also map without leading slash variants used in some files historically
      map[localPath.slice(1)] = url;
      ok += 1;
      console.log("OK");
    } catch (err) {
      failed += 1;
      console.log("FAIL");
      console.error("   ", err?.message || err);
    }

    // Persist progress periodically
    if ((ok + failed) % 10 === 0) saveMap(map);
  }

  saveMap(map);
  console.log(
    `\nUpload done. ok=${ok} skipped=${skipped} failed=${failed}. Map → ${mapPath}`,
  );
  return map;
}

function collectCodeFiles() {
  const files = [];
  for (const dir of CODE_GLOBS_DIRS) {
    walkFiles(
      path.join(root, dir),
      (f) => {
        const rel = toPosix(path.relative(root, f));
        if (rel.startsWith("public/images/")) return false;
        return CODE_EXTS.has(path.extname(f).toLowerCase());
      },
      files,
    );
  }
  return files.sort();
}

function rewriteSources(map) {
  // Prefer longest keys first so /images/foo/bar.png beats /images/foo
  const entries = Object.entries(map)
    .filter(([k]) => k.startsWith("/images/") || k.startsWith("images/"))
    .sort((a, b) => b[0].length - a[0].length);

  if (!entries.length) {
    throw new Error(
      `No mappings in ${mapPath}. Run upload first (without --rewrite).`,
    );
  }

  const files = collectCodeFiles();
  let changedFiles = 0;
  let replacements = 0;

  for (const file of files) {
    let text = fs.readFileSync(file, "utf8");
    const original = text;

    for (const [localPath, url] of entries) {
      const variants = new Set([
        localPath,
        localPath.startsWith("/") ? localPath.slice(1) : `/${localPath}`,
      ]);

      for (const variant of variants) {
        if (!text.includes(variant)) continue;
        // Replace exact path occurrences (quotes / html / css urls)
        const escaped = variant.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const re = new RegExp(escaped, "g");
        const before = text;
        text = text.replace(re, url);
        if (text !== before) {
          const count = (before.match(re) || []).length;
          replacements += count;
        }
      }
    }

    if (text !== original) {
      if (!dryRun) fs.writeFileSync(file, text, "utf8");
      changedFiles += 1;
      console.log(`rewrote ${path.relative(root, file)}`);
    }
  }

  console.log(
    `\nRewrite ${dryRun ? "(dry-run) " : ""}done. files=${changedFiles} replacements≈${replacements}`,
  );
}

async function main() {
  console.log(`Cloudinary migrate — folder="${FOLDER}"`);
  console.log(
    `modes: upload=${doUpload && !dryRun} rewrite=${doRewrite && !dryRun} dryRun=${dryRun}`,
  );

  let map = loadMap();
  if (doUpload) {
    map = await uploadAll();
  }
  if (doRewrite) {
    rewriteSources(map);
  }
}

main().catch((err) => {
  console.error("\n❌", err.message || err);
  process.exit(1);
});
