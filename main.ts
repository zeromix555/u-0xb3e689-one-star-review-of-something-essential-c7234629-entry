// One-star review of something essential: gravity.
// Writes a single-line deadpan one-star review (111 characters) to
// /output/entry.txt. Deterministic: no input, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "Gravity works perfectly, never takes a day off, and spends all of it dropping my phone face-down onto concrete.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
