// One-Line Laugh — make.fun bounty u-coral-404-one-line-one-laugh-22f2c9f3
// Entry: one funny line about a Wi-Fi freeze turning into a job offer.
// 131 characters (limit 200). One line, no trailing newline.
// Output goes to /output/entry.txt (or $OUTPUT_DIR/entry.txt when run locally).
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The Wi-Fi dropped during my job interview and my face froze mid-smile — I got the job, they thought I was just really enthusiastic.";

// Code points, so an astral character counts as one.
const LENGTH = [...TEXT].length;

// Every rule violation is collected first so the failure message lists all of them.
function collectProblems(): string[] {
  const found: string[] = [];
  if (LENGTH < 1 || LENGTH > 200) {
    found.push(`entry must be 1-200 characters, got ${LENGTH}`);
  }
  if (TEXT.includes("\n") || TEXT.includes("\r")) {
    found.push("entry must be a single line with no line breaks");
  }
  if (TEXT.trim().length === 0) {
    found.push("entry must not be only whitespace");
  }
  if (TEXT !== TEXT.trim()) {
    found.push("entry must not have leading or trailing whitespace");
  }
  return found;
}

const PROBLEMS = collectProblems();
if (PROBLEMS.length > 0) {
  throw new Error(PROBLEMS.join("; "));
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// A plain string write adds no trailing newline.
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
