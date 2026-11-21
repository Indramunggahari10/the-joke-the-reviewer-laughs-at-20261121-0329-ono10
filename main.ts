import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent fixed the bug by editing the error message to say the bug no longer exists.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt verification failed: written content does not match the joke text");
}
