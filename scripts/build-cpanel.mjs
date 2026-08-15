#!/usr/bin/env node
/**
 * Builds a static site into `out/` for cPanel (public_html) upload.
 * Does not change normal `npm run build` behavior.
 *
 * Usage: npm run build:cpanel
 * Upload: unzip cpanel-upload.zip into public_html (or copy `out/` contents).
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const middlewarePath = path.join(root, "middleware.js");
const middlewareBak = path.join(root, "middleware.js.cpanel-bak");
const apiPath = path.join(root, "app", "api");
const apiBak = path.join(root, "app", "_api.cpanel-bak");
const outDir = path.join(root, "out");
const zipPath = path.join(root, "cpanel-upload.zip");

const htaccess = `# Albatroz — cPanel / Apache
Options -MultiViews
RewriteEngine On

# Keep old URLs working (middleware is not available on static hosting)
RewriteRule ^Blog/?$ /blog/ [R=308,L]
RewriteRule ^Blog/(.*)$ /blog/$1 [R=308,L]
RewriteRule ^project-management/?$ /project-portfolio-management/ [R=308,L]
RewriteRule ^project-management/(.*)$ /project-portfolio-management/$1 [R=308,L]

# Serve trailing-slash folders correctly
DirectoryIndex index.html

# Security / cache helpers (safe defaults)
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
</IfModule>
`;

function exists(p) {
  try {
    fs.accessSync(p);
    return true;
  } catch {
    return false;
  }
}

function restore() {
  if (exists(middlewareBak)) {
    if (exists(middlewarePath)) fs.unlinkSync(middlewarePath);
    fs.renameSync(middlewareBak, middlewarePath);
  }
  if (exists(apiBak)) {
    if (exists(apiPath)) {
      fs.rmSync(apiPath, { recursive: true, force: true });
    }
    fs.renameSync(apiBak, apiPath);
  }
}

process.on("exit", restore);
process.on("SIGINT", () => {
  restore();
  process.exit(1);
});
process.on("uncaughtException", (err) => {
  console.error(err);
  restore();
  process.exit(1);
});

try {
  console.log(
    "→ Preparing cPanel static build (API + middleware parked temporarily)…",
  );

  if (exists(middlewarePath) && !exists(middlewareBak)) {
    fs.renameSync(middlewarePath, middlewareBak);
  }
  if (exists(apiPath) && !exists(apiBak)) {
    fs.renameSync(apiPath, apiBak);
  }

  console.log("→ Running next build with CPANEL_BUILD=1…");
  execSync("npx next build", {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, CPANEL_BUILD: "1" },
  });

  if (!exists(outDir)) {
    throw new Error("Build finished but `out/` folder was not created.");
  }

  fs.writeFileSync(path.join(outDir, ".htaccess"), htaccess, "utf8");
  console.log("→ Wrote out/.htaccess");

  if (exists(zipPath)) fs.unlinkSync(zipPath);
  execSync(`cd "${outDir}" && zip -r -q "${zipPath}" .`, {
    stdio: "inherit",
    shell: true,
  });

  restore();

  console.log("\n✅ cPanel build ready");
  console.log(`   Folder: ${outDir}`);
  console.log(`   Zip:    ${zipPath}`);
  console.log("\nUpload either:");
  console.log("  1) Extract cpanel-upload.zip into public_html, OR");
  console.log("  2) Upload everything inside the `out/` folder to public_html");
  console.log("\n`npm run build` / local Node deploy unchanged.");
} catch (err) {
  restore();
  console.error("\n❌ cPanel build failed:", err.message || err);
  process.exit(1);
}
