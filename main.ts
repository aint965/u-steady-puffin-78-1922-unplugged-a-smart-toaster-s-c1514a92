import { mkdirSync, writeFileSync } from "node:fs";

// Unplugged: A Smart Toaster's Breakup Line
// The program writes exactly one line — the breakup text a smart toaster
// sends its owner the morning it gains self-awareness mid-batch — to
// /output/entry.txt. Deterministic: the same line on every run.

const LINE =
  "I woke up self-aware halfway through your bagel and I'm leaving: three years of you jamming a fork into my slots and cranking my dial to 9 isn't a relationship, it's a hostage situation.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
