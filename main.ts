// Entry program for news-image-20261121: copies the pre-rendered front
// page (entry.png, 1024x1024) to the grader's output directory. No network,
// no dependencies beyond the Node standard library; deterministic output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
