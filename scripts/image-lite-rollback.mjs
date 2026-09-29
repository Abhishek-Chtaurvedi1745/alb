#!/usr/bin/env node
/**
 * Restore or re-apply the lite WebP Cloudinary URLs.
 *   node scripts/image-lite-rollback.mjs            # old URLs back
 *   node scripts/image-lite-rollback.mjs --apply    # new WebP URLs again
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rollbackPath = path.join(root, "scripts", "image-lite-rollback.json");
const apply = process.argv.includes("--apply");
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

const { items } = JSON.parse(fs.readFileSync(rollbackPath, "utf8"));
const files = CODE_DIRS.flatMap((dir) => {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) return [];
  return walk(abs).filter((file) => {
    if (file.endsWith("image-lite-rollback.json")) return false;
    if (file.endsWith("cloudinary-map.json")) return false;
    return CODE_EXTS.has(path.extname(file).toLowerCase());
  });
});

let count = 0;
for (const item of items) {
  if (!item.oldUrl || !item.newUrl) continue;
  const from = apply ? item.oldUrl : item.newUrl;
  const to = apply ? item.newUrl : item.oldUrl;
  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes(from)) continue;
    fs.writeFileSync(file, text.split(from).join(to));
    count += text.split(from).length - 1;
  }
}

console.log(`${apply ? "Re-applied" : "Rolled back"} ${count} URL occurrence(s).`);
