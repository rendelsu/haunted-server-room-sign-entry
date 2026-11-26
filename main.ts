import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "AUTHORIZED ONLY: If Rack 4 whispers your password, it is not IT. Log a ticket. Don't log in.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line, "utf8");
chmodSync(outFile, 0o644);
