// THE WORLD — Saturday 21 November 2026
//
// This program is the whole build step for the front page. The finished
// newspaper image already exists in this folder as entry.png, so the only
// job here is to place an exact copy of it where the harness expects the
// finished artefact: inside $MAKEFUN_OUTPUT_DIR (or /output when the
// variable is not set).
//
// Nothing is generated, fetched, or re-rendered at run time. The copy is
// byte-for-byte, the run is fully deterministic, and the program needs no
// network access and no third-party packages — only the Node standard
// library. It can be run as many times as you like; every run produces
// the same file in the same place.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The finished front-page image that ships with this entry.
const IMAGE_FILE = "entry.png";

// Where the artefact goes when MAKEFUN_OUTPUT_DIR is not provided.
const DEFAULT_OUTPUT = "/output";

// Read the output directory from the environment, falling back to the
// default. A blank value counts as unset.
function pickOutputDir(): string {
  const given = process.env.MAKEFUN_OUTPUT_DIR;
  if (given !== undefined && given.trim() !== "") {
    return resolve(given);
  }
  return DEFAULT_OUTPUT;
}

// The folder this script itself lives in, so the program works no matter
// which directory it is launched from.
function scriptDir(): string {
  return dirname(fileURLToPath(import.meta.url));
}

function main(): void {
  const source = join(scriptDir(), IMAGE_FILE);
  const outDir = pickOutputDir();
  const target = join(outDir, IMAGE_FILE);

  // Make sure the destination folder exists before copying into it.
  mkdirSync(outDir, { recursive: true });

  // Copy the image unchanged.
  copyFileSync(source, target);

  // Prove the copy landed intact: both files must be the same size.
  const sourceSize = statSync(source).size;
  const targetSize = statSync(target).size;
  if (sourceSize !== targetSize) {
    throw new Error(
      `copy check failed: ${IMAGE_FILE} is ${sourceSize} bytes but the copy is ${targetSize} bytes`,
    );
  }

  console.log(`wrote ${target} (${targetSize} bytes)`);
}

main();
