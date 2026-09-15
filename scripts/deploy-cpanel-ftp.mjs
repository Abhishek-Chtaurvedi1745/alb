#!/usr/bin/env node
/**
 * Uploads `out/` to cPanel over FTPS using lftp.
 *
 * cPanel drops long single-threaded sessions mid-sync, so this uses a few
 * parallel transfers with bounded reconnects and refuses to start when the
 * FTP port is unreachable (the host is down) instead of hanging.
 */
import { spawnSync } from "child_process";
import fs from "fs";
import net from "net";
import os from "os";
import path from "path";

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

function checkPort(host, port, timeoutMs) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    const done = (ok) => {
      socket.destroy();
      resolve(ok);
    };

    socket.setTimeout(timeoutMs);
    socket.once("connect", () => done(true));
    socket.once("timeout", () => done(false));
    socket.once("error", () => done(false));
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

const reachable = await checkPort(server, 21, 15000);

if (!reachable) {
  console.error(
    `FTP port 21 on ${server} is not reachable. The hosting account is likely ` +
      `down or blocking this runner, so nothing was uploaded.`
  );
  process.exit(1);
}

const script = `
set ssl:verify-certificate no
set ssl:check-hostname no
set ftp:ssl-allow yes
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ftp:passive-mode true
set net:max-retries 6
set net:reconnect-interval-base 5
set net:reconnect-interval-max 30
set net:timeout 60
set xfer:clobber yes
set cmd:fail-exit yes
open ftps://${server}
user ${quote(username)} ${quote(password)}
lcd ${quote(localDir)}
cd ${quote(remoteDir)}
mirror -R --continue --parallel=3 --no-perms --no-umask \
  --exclude-glob .DS_Store --exclude-glob cpanel-upload.zip
bye
`;

const scriptPath = path.join(os.tmpdir(), "albatroz-lftp-deploy.txt");
fs.writeFileSync(scriptPath, script, { mode: 0o600 });

console.log(`Uploading ${localDir} -> ftps://${server}${remoteDir}`);

const result = spawnSync("lftp", ["-f", scriptPath], {
  stdio: "inherit",
  env: process.env,
});

fs.rmSync(scriptPath, { force: true });

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
