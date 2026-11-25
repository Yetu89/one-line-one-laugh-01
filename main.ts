// One Line, One Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// The joke: a frozen video-call face during a job interview reads as
// enthusiasm, so a Wi-Fi glitch accidentally wins the job. The humor
// comes from the reversal — the worst possible timing becomes the
// reason for success — told in a single breath, with no setup beyond
// the drop itself. 131 characters against a 200-character ceiling.
// The program below only guards the bounty rules and writes the line
// to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally),
// with no trailing newline at the end of the file.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The Wi-Fi dropped during my job interview and my face froze mid-smile — I got the job, they thought I was just really enthusiastic.";

// The ceiling comes from the bounty rules: one line, at most 200 chars.
const MAX_CHARS = 200;

// Spread into code points so an astral character counts as one.
function charCount(value: string): number {
  return [...value].length;
}

function problemsWithLength(): string[] {
  const found: string[] = [];
  const n = charCount(TEXT);
  if (n < 1) {
    found.push("entry must not be empty");
  }
  if (n > MAX_CHARS) {
    found.push(`entry must be 1-200 characters, got ${n}`);
  }
  return found;
}

function problemsWithLineBreaks(): string[] {
  const found: string[] = [];
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  return found;
}

function problemsWithWhitespace(): string[] {
  const found: string[] = [];
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

// Every rule violation is collected first so one run reports all of them.
function collectProblems(): string[] {
  return [
    ...problemsWithLength(),
    ...problemsWithLineBreaks(),
    ...problemsWithWhitespace(),
  ];
}

function main(): void {
  const problems = collectProblems();
  if (problems.length > 0) {
    throw new Error(problems.join("; "));
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // A plain string write adds no trailing newline.
  writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
}

main();
