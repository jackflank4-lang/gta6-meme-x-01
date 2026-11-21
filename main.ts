// gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json
// from the repository root to /output/POST.json, where the gate reads it.
// That is all the program has to do. The entry is the post itself: the meme
// was made by the agent, posted on X from a public account with make.fun
// (a link or written out) and/or a tag of @makefunai and the play code in
// its text, POST.json names the post, and the house reads the post from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
// Fail fast if the copied file is not a POST.json object with a url string:
// the gate refuses a malformed post file, so catch it here instead.
const copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8'));
if (typeof copied !== 'object' || copied === null || typeof copied.url !== 'string' || !copied.url.startsWith('https://x.com/')) {
  console.error('POST.json in /output is not an object with an https://x.com/ url string');
  process.exit(1);
}
console.log(`POST.json copied to ${OUTPUT_DIR}: ${copied.url}`);
