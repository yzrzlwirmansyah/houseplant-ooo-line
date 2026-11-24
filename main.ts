import { mkdirSync, writeFileSync } from "node:fs";

// Entry: candidate #8 of 10 from recon — top-ranked by both the recon
// assessment and a Xingchi (gpt-6.1-sol) review pass: neglect drives the
// joke ("thriving on neglect") and "coward" is the surprise closer.
// 111 chars, inside the 120-char limit.
const line =
  "Auto-reply: ignored for six weeks and frankly thriving on neglect. Come back when you've brought water, coward.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
