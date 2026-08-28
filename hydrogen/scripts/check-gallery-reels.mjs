// Check that every Instagram reel in app/data/gallery.ts still exists.
//
// A deleted or archived reel cannot be detected in the browser: Instagram
// serves HTTP 200 for a dead shortcode and its embed emits exactly the same
// LOADING / MEASURE / MOUNTED messages as a live one. It IS detectable
// server-side — a live reel's embed HTML mentions the owning account, a dead
// one never does. That is what this script checks.
//
// Run: node scripts/check-gallery-reels.mjs
// Exits 1 if any reel is dead, so it can gate a deploy.

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import zlib from 'node:zlib';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GALLERY = path.join(__dirname, '..', 'app', 'data', 'gallery.ts');
const ACCOUNT = 'dibimilano_skincentre';

// Sent via node:https rather than fetch(): undici treats Sec-* as forbidden
// header names and silently drops them, and without the iframe fetch metadata
// Instagram returns a bare SPA shell that never mentions the account — which
// would report every reel, live or not, as dead.
const HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  'Sec-Fetch-Dest': 'iframe',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'cross-site',
  Accept: 'text/html',
  'Accept-Encoding': 'gzip, deflate',
  'Accept-Language': 'en-US,en;q=0.9',
};

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {headers: HEADERS, timeout: 25000}, (res) => {
      const encoding = res.headers['content-encoding'];
      const stream =
        encoding === 'gzip'
          ? res.pipe(zlib.createGunzip())
          : encoding === 'deflate'
            ? res.pipe(zlib.createInflate())
            : res;
      let body = '';
      stream.setEncoding('utf8');
      stream.on('data', (c) => (body += c));
      stream.on('end', () => resolve({status: res.statusCode, body}));
      stream.on('error', reject);
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
  });
}

function readCodes() {
  const src = fs.readFileSync(GALLERY, 'utf8');
  return [...src.matchAll(/code:\s*'([A-Za-z0-9_-]+)'/g)].map((m) => m[1]);
}

async function checkCode(code) {
  const url = `https://www.instagram.com/reel/${code}/embed/`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await get(url);
      const html = res.body;
      const hits = (html.match(new RegExp(ACCOUNT, 'g')) || []).length;
      if (hits > 0) return {code, ok: true, hits};
      // No handle: either genuinely dead, or a truncated response. Retry
      // before calling it dead so a flaky fetch is not reported as deletion.
      if (attempt === 3) return {code, ok: false, hits, bytes: html.length};
    } catch (err) {
      if (attempt === 3) return {code, ok: false, error: err.message};
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
}

// Codes may be passed as arguments to spot-check one before adding it.
const codes = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readCodes();

if (codes.length === 0) {
  console.error('No reel codes found in app/data/gallery.ts');
  process.exit(1);
}

console.log(`Checking ${codes.length} reels against @${ACCOUNT}\n`);

const results = [];
for (const code of codes) {
  const r = await checkCode(code);
  results.push(r);
  const status = r.ok ? 'live' : 'DEAD';
  const detail = r.error ? ` (${r.error})` : r.ok ? '' : ` (${r.bytes} bytes, handle absent)`;
  console.log(`  ${status.padEnd(5)} ${code}${detail}`);
}

const dead = results.filter((r) => !r.ok);
console.log('');
if (dead.length === 0) {
  console.log(`All ${codes.length} reels are live.`);
} else {
  console.log(
    `${dead.length} of ${codes.length} reels are gone: ${dead.map((d) => d.code).join(', ')}`,
  );
  console.log('Remove them from app/data/gallery.ts.');
  process.exit(1);
}
