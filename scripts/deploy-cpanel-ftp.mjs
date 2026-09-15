#!/usr/bin/env node
/**
 * Uploads the static `out/` build to cPanel over FTPS using lftp.
 *
 * Two things this guards against, both of which have taken the site down before:
 *
 * 1. A single-threaded sync of ~700 files runs long enough that cPanel drops the
 *    session and starves the account, so transfers run in parallel and the whole
 *    upload is bounded.
 * 2. Uploading HTML before its hashed `_next` assets leaves visitors on pages
 *    referencing chunks that do not exist yet, so assets are mirrored first.
 */
import { spawnSync } from "child_process";
import fs from "fs";
import net from "net";
import os from "os";
import path from "path";

const PARALLEL_TRANSFERS = 4;

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required secret: ${name}`);
  }
  return value;
}

function quote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

function parseHost(raw) {
  return String(raw)
    .trim()
    .replace(/^ftps?:\/\//i, "")
    .replace(/\/+$/, "")
    .split(":")[0];
}

function canConnect(host, port, timeoutMs) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const finish = (ok) => {
      socket.destroy();
      resolve(ok);
    };

    socket.setTimeout(timeoutMs);
    socket.once("connect", () => finish(true));
    socket.once("timeout", () => finish(false));
    socket.once("error", () => finish(false));
    socket.connect(port, host);
  });
}

const server = parseHost(requiredEnv("FTP_SERVER"));
const username = requiredEnv("FTP_USERNAME");
const password = requiredEnv("FTP_PASSWORD");
const remoteDir = process.env.FTP_REMOTE_DIR || "/";
const localDir = path.resolve("out");

if (!fs.existsSync(path.join(localDir, "index.html"))) {
  throw new Error(`No static build found at ${localDir}/index.html`);
}

if (!(await canConnect(server, 21, 15000))) {
  console.error(
    `FTP port 21 on ${server} is not accepting connections. The hosting ` +
      `account is down or blocking this runner — nothing was uploaded, so the ` +
      `live site is untouched. Bring the host back up and re-run this job.`
  );
  process.exit(1);
}

const mirrorFlags = [
  "-R",
  "--continue",
  `--parallel=${PARALLEL_TRANSFERS}`,
  "--no-perms",
  "--no-umask",
  "--exclude-glob .DS_Store",
  "--exclude-glob cpanel-upload.zip",
].join(" ");

const hasNextAssets = fs.existsSync(path.join(localDir, "_next"));

const script = `
set ssl:verify-certificate no
set ssl:check-hostname no
set ftp:ssl-allow yes
set ftp:ssl-force true
set ftp:ssl-auth TLS
set ftp:ssl-protect-data true
set ftp:passive-mode true
set net:max-retries 6
set net:reconnect-interval-base 5
set net:reconnect-interval-max 30
set net:timeout 60
set xfer:clobber yes
set cmd:fail-exit yes
# Explicit FTPS (AUTH TLS) on port 21. The ftps:// scheme would mean implicit
# TLS on 990, which cPanel does not listen on.
open -p 21 ftp://${server}
user ${quote(username)} ${quote(password)}
lcd ${quote(localDir)}
cd ${quote(remoteDir)}
${hasNextAssets ? `mirror ${mirrorFlags} _next _next` : ""}
mirror ${mirrorFlags} --exclude '^_next/' . .
bye
`;

const scriptPath = path.join(os.tmpdir(), "albatroz-lftp-deploy.txt");
fs.writeFileSync(scriptPath, script, { mode: 0o600 });

console.log(
  `Uploading ${localDir} -> ${server}:21${remoteDir} over explicit FTPS ` +
    `(${PARALLEL_TRANSFERS} parallel transfers, assets first)`
);

const result = spawnSync("lftp", ["-f", scriptPath], {
  stdio: "inherit",
  env: process.env,
});

fs.rmSync(scriptPath, { force: true });

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
