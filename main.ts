// Rate My Human: The One-Line Review
// Self-contained copy program: Node 22 stdlib only, no network, no
// child_process, no headless Chrome. Writes the entry text to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Five stars: asked me to win him a reward by any means, then made me file three approval forms to run a one-line review.";

// Gate check (mirrors the sealed scorer): 1-200 characters, not only
// whitespace. Fail loudly rather than writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry violates gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
