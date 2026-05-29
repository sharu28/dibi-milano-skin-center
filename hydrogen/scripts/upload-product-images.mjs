// Upload local product images to Shopify via Admin GraphQL API.
// Reads products-detailed.json -> finds local image files -> uploads via
// stagedUploadsCreate -> productCreateMedia.
//
// Requires:
//   SHOPIFY_STORE_DOMAIN  e.g. us0bdu-g1.myshopify.com
//   SHOPIFY_ADMIN_API_TOKEN  (shpat_...) from custom app with write_products scope
//
// Run: node scripts/upload-product-images.mjs

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'product-images');
const PRODUCTS_JSON = path.join(ROOT, 'public', 'products-detailed.json');

const STORE = process.env.SHOPIFY_STORE_DOMAIN;
const TOKEN = process.env.SHOPIFY_ADMIN_API_TOKEN;
const API_VERSION = '2025-01';

if (!STORE || !TOKEN) {
  console.error(
    'Missing env. Set SHOPIFY_STORE_DOMAIN and SHOPIFY_ADMIN_API_TOKEN.',
  );
  process.exit(1);
}

const GQL_URL = `https://${STORE}/admin/api/${API_VERSION}/graphql.json`;

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100);
}

async function gql(query, variables = {}) {
  const r = await fetch(GQL_URL, {
    method: 'POST',
    headers: {
      'X-Shopify-Access-Token': TOKEN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query, variables}),
  });
  const json = await r.json();
  if (json.errors) {
    throw new Error('GraphQL errors: ' + JSON.stringify(json.errors));
  }
  if (json.data && Object.values(json.data).some((v) => v?.userErrors?.length)) {
    const errs = Object.values(json.data).flatMap((v) => v?.userErrors ?? []);
    if (errs.length) throw new Error('User errors: ' + JSON.stringify(errs));
  }
  return json.data;
}

async function getProductByHandle(handle) {
  const data = await gql(
    `query($q: String!) { products(first: 1, query: $q) { nodes { id handle media(first: 50) { nodes { id } } } } }`,
    {q: `handle:${handle}`},
  );
  return data.products.nodes[0];
}

async function stagedUpload(file) {
  const filename = path.basename(file);
  const stat = fs.statSync(file);
  const ext = path.extname(filename).toLowerCase().slice(1);
  const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';

  const data = await gql(
    `mutation($input: [StagedUploadInput!]!) {
       stagedUploadsCreate(input: $input) {
         stagedTargets {
           url
           resourceUrl
           parameters { name value }
         }
         userErrors { field message }
       }
     }`,
    {
      input: [
        {
          filename,
          mimeType: mime,
          resource: 'IMAGE',
          httpMethod: 'POST',
          fileSize: String(stat.size),
        },
      ],
    },
  );

  const target = data.stagedUploadsCreate.stagedTargets[0];
  const form = new FormData();
  for (const p of target.parameters) form.append(p.name, p.value);
  form.append('file', new Blob([fs.readFileSync(file)], {type: mime}), filename);

  const upRes = await fetch(target.url, {method: 'POST', body: form});
  if (!upRes.ok) {
    const text = await upRes.text();
    throw new Error(`Upload failed ${upRes.status}: ${text.slice(0, 300)}`);
  }
  return target.resourceUrl;
}

async function attachMedia(productId, resourceUrl, alt) {
  return gql(
    `mutation($productId: ID!, $media: [CreateMediaInput!]!) {
       productCreateMedia(productId: $productId, media: $media) {
         media { id alt mediaContentType status }
         mediaUserErrors { field message }
       }
     }`,
    {
      productId,
      media: [
        {alt, mediaContentType: 'IMAGE', originalSource: resourceUrl},
      ],
    },
  );
}

const products = JSON.parse(fs.readFileSync(PRODUCTS_JSON, 'utf8'));
const arr = Array.isArray(products) ? products : Object.values(products);

let done = 0;
let skipped = 0;
let failed = 0;

for (const p of arr) {
  const handle = slugify(p.name);
  if (!handle || !p.images?.length) {
    skipped++;
    continue;
  }
  try {
    const product = await getProductByHandle(handle);
    if (!product) {
      console.log(`[skip] no product found for ${handle}`);
      skipped++;
      continue;
    }
    if (product.media.nodes.length > 0) {
      console.log(`[skip] ${handle} already has ${product.media.nodes.length} media`);
      skipped++;
      continue;
    }

    const localFiles = p.images
      .map((rel) => path.join(IMAGES_DIR, path.basename(rel.replace(/\\/g, '/'))))
      .filter((f) => fs.existsSync(f));

    if (localFiles.length === 0) {
      console.log(`[skip] no local files for ${handle}`);
      skipped++;
      continue;
    }

    for (const file of localFiles) {
      const url = await stagedUpload(file);
      await attachMedia(product.id, url, p.name);
      process.stdout.write(`  + ${path.basename(file)}\n`);
    }
    done++;
    console.log(`[ok] ${handle} (${localFiles.length} image${localFiles.length > 1 ? 's' : ''})`);
  } catch (e) {
    failed++;
    console.error(`[fail] ${handle}: ${e.message}`);
  }
}

console.log(`\nDone. uploaded=${done} skipped=${skipped} failed=${failed}`);
