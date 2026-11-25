// One-Liner Marathon — make.fun entry.
// A tiny deterministic program: it writes one line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I told my agent to write one line; it wrote a novel, apologized in verse, and billed me for the sequel.";

const OUT = "/output/entry.txt";

// One line, no trailing newline: the gate counts every character.
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");
