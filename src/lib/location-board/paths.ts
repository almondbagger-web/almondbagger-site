import path from "path";
import os from "os";
import fs from "fs";

const DATA_DIR_NAME = "location-board";

function ensureDir(dir: string) {
  try {
    fs.mkdirSync(dir, { recursive: true });
  } catch {
    // ignore
  }
}

/** Prefer project data/; fall back to /tmp on read-only hosts (e.g. Vercel) */
export function getDataRoot(): string {
  const local = path.join(process.cwd(), "data", DATA_DIR_NAME);
  try {
    ensureDir(local);
    fs.accessSync(local, fs.constants.W_OK);
    return local;
  } catch {
    const tmp = path.join(os.tmpdir(), "almondbagger", DATA_DIR_NAME);
    ensureDir(tmp);
    return tmp;
  }
}

export function getStorePath(): string {
  return path.join(getDataRoot(), "store.json");
}

export function getUploadsDir(): string {
  const dir = path.join(getDataRoot(), "uploads");
  ensureDir(dir);
  return dir;
}
