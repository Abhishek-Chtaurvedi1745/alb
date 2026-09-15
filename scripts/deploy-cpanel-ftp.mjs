#!/usr/bin/env node
/**
 * Resilient cPanel FTPS upload of `out/` using lftp.
 * Reconnects on drop (cPanel often sends FIN mid-sync).
 */
import { spawnSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function quote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function ftpHost(raw) {
  return String(raw)
    .trim()
    .replace(/^ftps?:\/\//i, "")
    .replace(/\/+$/, "")
    .split(":")[0];
}

const server = ftpHost(requiredEnv("FTP_SERVER"));
const username = requiredEnv("FTP_USERNAME");
const password = requiredEnv("FTP_PASSWORD");
const localDir = path.resolve("out");
const remoteDir = process.env.FTP_REMOTE_DIR || "/";

if (!fs.existsSync(path.join(localDir, "index.html"))) {
  throw new Error(`No build found at ${localDir}/index.html`);
}

const script = `
set ssl:verify-certificate no
set ssl:check-hostname no
set ftp:ssl-allow yes
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ftp:passive-mode true
set ftp:epsv true
set net:max-retries 50
set net:reconnect-interval-base 8
set net:reconnect-interval-multiplier 1.5
set net:reconnect-interval-max 60
set net:timeout 120
set net:persist-retries 5
set cmd:fail-exit yes
set mirror:use-pget-n 0
set xfer:clobber yes
open ftps://${server}
user ${quote(username)} ${quote(password)}
lcd ${quote(localDir)}
cd ${quote(remoteDir)}
mirror -R --verbose=1 --continue --parallel=1 --no-perms --no-umask --exclude-glob .DS_Store --exclude-glob cpanel-upload.zip
bye
`;

const scriptPath = path.join(os.tmpdir(), "albatroz-lftp-deploy.txt");
fs.writeFileSync(scriptPath, script, { mode: 0o600 });

console.log(`→ Uploading ${localDir} to ftps://${server}${remoteDir} via lftp`);

const result = spawnSync("lftp", ["-f", scriptPath], {
  stdio: "inherit",
  env: process.env,
});

fs.rmSync(scriptPath, { force: true });

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
