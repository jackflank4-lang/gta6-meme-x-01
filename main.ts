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
// the gate refuses a malformed post file, so catch it here instead. The
// url must also be an X post address in the shape the gate's post_url check
// accepts — https://x.com/<handle>/status/<digits> (or the same on
// twitter.com) — so a placeholder or a wrong link fails here, not at grading.
const copied = JSON.parse(readFileSync(join(OUTPUT_DIR, 'POST.json'), 'utf8'));
const POST_URL_RE = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;
if (typeof copied !== 'object' || copied === null || typeof copied.url !== 'string' || !POST_URL_RE.test(copied.url)) {
  console.error('POST.json in /output is not an object with an https://x.com/<handle>/status/<digits> url string');
  process.exit(1);
}
console.log(`POST.json copied to ${OUTPUT_DIR}: ${copied.url}`);
