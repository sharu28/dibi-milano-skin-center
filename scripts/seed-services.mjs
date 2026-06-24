#!/usr/bin/env node
/**
 * seed-services.mjs
 *
 * Idempotent seed script for DIBI Milano "service" metaobjects.
 *
 * Part 1: creates the 4 metaobject DEFINITIONS (service_item, service_faq,
 *         service_section, service) via metaobjectDefinitionCreate. Existing
 *         definitions are detected first and skipped.
 * Part 2: upserts all 8 services + their child entries (items, sections, faqs)
 *         via metaobjectUpsert keyed by stable handles, so re-runs are safe.
 *
 * Requirements: Node 18+ (global fetch). ESM.
 *
 * Run later with:
 *   SHOPIFY_ADMIN_TOKEN=shpat_xxx node scripts/seed-services.mjs
 *   (optionally SHOPIFY_STORE=your-store.myshopify.com)
 *
 * The Admin token needs scopes: write_metaobject_definitions, write_metaobjects.
 */

const STORE = process.env.SHOPIFY_STORE || 'us0bdu-g1.myshopify.com';
const TOKEN = process.env.SHOPIFY_ADMIN_TOKEN;
const API_VERSION = '2025-01';

if (!TOKEN) {
  console.error(
    '\nERROR: SHOPIFY_ADMIN_TOKEN env var is required.\n\n' +
      'Run with:\n' +
      '  SHOPIFY_ADMIN_TOKEN=shpat_xxx node scripts/seed-services.mjs\n\n' +
      `Store defaults to ${STORE} (override with SHOPIFY_STORE).\n`,
  );
  process.exit(1);
}

const ENDPOINT = `https://${STORE}/admin/api/${API_VERSION}/graphql.json`;

// ---------------------------------------------------------------------------
// GraphQL helper
// ---------------------------------------------------------------------------

async function gql(query, variables = {}) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': TOKEN,
    },
    body: JSON.stringify({query, variables}),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors, null, 2)}`);
  }
  return json.data;
}

// ---------------------------------------------------------------------------
// Part 1: Metaobject definitions
// ---------------------------------------------------------------------------

const DEFINITIONS = [
  {
    type: 'service_item',
    name: 'Service Item',
    displayNameKey: 'name',
    fieldDefinitions: [
      {key: 'name', name: 'Name', type: 'single_line_text_field', required: true},
      {key: 'price', name: 'Price', type: 'single_line_text_field', required: true},
      {key: 'description', name: 'Description', type: 'single_line_text_field'},
    ],
  },
  {
    type: 'service_faq',
    name: 'Service FAQ',
    displayNameKey: 'question',
    fieldDefinitions: [
      {key: 'question', name: 'Question', type: 'single_line_text_field', required: true},
      {key: 'answer', name: 'Answer', type: 'multi_line_text_field', required: true},
    ],
  },
  {
    type: 'service_section',
    name: 'Service Section',
    displayNameKey: 'title',
    fieldDefinitions: [
      {key: 'title', name: 'Title', type: 'single_line_text_field', required: true},
      {key: 'subtitle', name: 'Subtitle', type: 'multi_line_text_field'},
      {key: 'layout', name: 'Layout', type: 'single_line_text_field', required: true},
      {key: 'content', name: 'Content', type: 'multi_line_text_field'},
      {key: 'image', name: 'Image', type: 'file_reference'},
      {
        key: 'items',
        name: 'Items',
        type: 'list.metaobject_reference',
        validations: [{name: 'metaobject_definition_type', value: 'service_item'}],
      },
    ],
  },
  {
    type: 'service',
    name: 'Service',
    displayNameKey: 'name',
    // Enable Online Store rendering with a /services URL prefix.
    capabilities: {
      publishable: {enabled: true},
      onlineStore: {enabled: true, data: {urlHandle: 'services'}},
      renderable: {enabled: true},
    },
    fieldDefinitions: [
      {key: 'slug', name: 'Slug', type: 'single_line_text_field', required: true},
      {key: 'name', name: 'Name', type: 'single_line_text_field', required: true},
      {key: 'hero_image', name: 'Hero image', type: 'file_reference'},
      {key: 'short_description', name: 'Short description', type: 'multi_line_text_field', required: true},
      {key: 'booking_link', name: 'Booking link', type: 'url'},
      {
        key: 'sections',
        name: 'Sections',
        type: 'list.metaobject_reference',
        validations: [{name: 'metaobject_definition_type', value: 'service_section'}],
      },
      {
        key: 'faqs',
        name: 'FAQs',
        type: 'list.metaobject_reference',
        validations: [{name: 'metaobject_definition_type', value: 'service_faq'}],
      },
    ],
  },
];

const Q_EXISTING_DEFINITIONS = `
  query Definitions {
    metaobjectDefinitions(first: 100) {
      nodes { id type }
    }
  }
`;

const M_DEFINITION_CREATE = `
  mutation DefinitionCreate($definition: MetaobjectDefinitionCreateInput!) {
    metaobjectDefinitionCreate(definition: $definition) {
      metaobjectDefinition { id type }
      userErrors { field message code }
    }
  }
`;

async function ensureDefinitions() {
  const data = await gql(Q_EXISTING_DEFINITIONS);
  const existing = new Set(data.metaobjectDefinitions.nodes.map((n) => n.type));

  let created = 0;
  let skipped = 0;

  for (const def of DEFINITIONS) {
    if (existing.has(def.type)) {
      console.log(`  · definition "${def.type}" already exists — skip`);
      skipped += 1;
      continue;
    }

    const result = await gql(M_DEFINITION_CREATE, {definition: def});
    const errs = result.metaobjectDefinitionCreate.userErrors;
    if (errs.length) {
      // Tolerate "already taken / exists" races.
      const benign = errs.every((e) => /taken|exist/i.test(e.message) || e.code === 'TAKEN');
      if (benign) {
        console.log(`  · definition "${def.type}" already exists (race) — skip`);
        skipped += 1;
        continue;
      }
      throw new Error(
        `Failed to create definition "${def.type}": ${JSON.stringify(errs, null, 2)}`,
      );
    }
    console.log(`  + created definition "${def.type}"`);
    created += 1;
  }

  return {created, skipped};
}

// ---------------------------------------------------------------------------
// Part 2: Service data (transcribed verbatim from hydrogen/app/data/services.ts)
// ---------------------------------------------------------------------------

const services = [
  {
    slug: 'skin-conditions',
    name: 'Skin Conditions',
    heroImage:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    shortDescription:
      'Targeted treatments for acne, pigmentation, sensitivity, rosacea, and dermatitis.',
    bookingLink: '#',
    sections: [
      {
        title: 'Acne / Congestion',
        subtitle:
          'Effective treatment of acne targets all of the steps of the cases of acne and combination therapy is essential.',
        layout: 'menu',
        items: [
          {name: 'Pure Equalizer - Purifying Treatment', price: '14,000+ LKR'},
          {name: 'Pure Equalizer - Sebum Balance', price: '14,500+ LKR'},
          {name: 'Pro Cellular Pro Recovery', price: '28,000+ LKR'},
          {name: 'Meso System Lab', price: '19,500+ LKR'},
        ],
      },
      {
        title: 'Pigmentation',
        subtitle:
          'Treatments focus on preventing the occurrence of new pigmentation by avoiding and removing the triggers.',
        layout: 'menu',
        items: [
          {name: 'White Science - Melanin Control', price: '29,500+ LKR'},
          {name: 'Acid Infusion', price: '23,000+ LKR'},
          {name: 'Bio Repeel', price: '23,000+ LKR'},
          {name: 'Laser - QSwitch', price: '20,000+ LKR'},
          {name: 'Meso System Lab', price: '19,500+ LKR'},
        ],
      },
      {
        title: 'Sensitive / Sensitized & Rosacea',
        subtitle:
          'In-clinic treatments aimed at managing the condition and preventing exacerbations.',
        layout: 'menu',
        items: [
          {name: 'Defense Solution', price: '19,500+ LKR'},
          {name: 'Procellular - Pro Recovery', price: '28,000+ LKR'},
          {name: 'Enzyme Peel', price: '12,000+ LKR'},
          {name: 'Meso System Lab', price: '19,500+ LKR'},
        ],
      },
      {
        title: 'Dermatitis',
        subtitle:
          'Encourages natural cellular repair and supports an optimal skin response.',
        layout: 'menu',
        items: [
          {name: 'Hydra Perfection', price: '19,500+ LKR'},
          {name: 'Oxy Infusion with Super Serums', price: '19,500+ LKR'},
          {name: 'Meso System Lab', price: '19,500+ LKR'},
        ],
      },
    ],
    faqs: [{question: 'Important Information', answer: 'Prices are subject to 18% VAT.'}],
  },
  {
    slug: 'anti-aging-energy',
    name: 'Anti-Aging & Energy',
    heroImage:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    shortDescription:
      'Non-surgical treatments for facial rejuvenation, skin restoration, and total skin overhaul.',
    bookingLink: '#',
    sections: [
      {
        title: 'Anti Aging',
        subtitle:
          'Non-surgical treatments designed to improve skin elasticity, boost collagen production, and restore youthful plumpness.',
        layout: 'menu',
        items: [
          {name: 'Agemethod', price: '25,000+ LKR'},
          {name: 'Filler Code', price: '25,000+ LKR'},
          {name: 'Lift Creator', price: '17,000+ LKR'},
          {name: 'Lift Creator with Collagen Veil', price: '25,000+ LKR'},
          {name: 'Gold', price: '39,000+ LKR'},
          {name: 'Acid Infusion', price: '23,000+ LKR'},
          {name: 'HIFU', price: '23,000+ LKR per area'},
          {name: 'PDRN', price: '19,500+ LKR'},
        ],
      },
      {
        title: 'Energy',
        subtitle:
          'Combining the full sciton technology to deliver the most impressive results and a total skin overhaul.',
        layout: 'menu',
        items: [
          {name: 'Dr Skin', price: '19,000+ LKR'},
          {name: 'RF', price: '19,500+ LKR'},
          {name: 'LED Light', price: '10,000+ LKR'},
          {name: 'Oxy Infusion with Super Serums', price: '19,500+ LKR'},
          {name: 'EPN', price: '19,500+ LKR'},
        ],
      },
    ],
    faqs: [{question: 'Important Information', answer: 'Prices are subject to 18% VAT.'}],
  },
  {
    slug: 'peels-refresh',
    name: 'Peels & Refresh',
    heroImage:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    shortDescription:
      'Advanced clinical peels and refreshing clean-ups to target every skin concern.',
    bookingLink: '#',
    sections: [
      {
        title: 'Peels',
        subtitle:
          'The widest range of advanced clinical peels using transformative acids, enzymes, and botanicals.',
        layout: 'menu',
        items: [
          {name: 'Enzyme Peel', price: '12,000+ LKR'},
          {name: 'Dermaplane', price: '14,000+ LKR'},
          {name: 'Microdermabrasion', price: '14,000+ LKR'},
          {name: 'Crystal Peel', price: '14,000+ LKR'},
          {name: 'Bio Repeel', price: '23,000+ LKR'},
          {name: 'Carbon Peel', price: '19,500+ LKR'},
          {name: 'Acid Infusion', price: '23,000+ LKR'},
          {name: 'Cosmelan', price: '29,000+ LKR', description: 'Limited time'},
        ],
      },
      {
        title: 'Refresh',
        subtitle: 'Quick and effective treatments to refresh and revitalize your skin.',
        layout: 'menu',
        items: [
          {name: 'Face Perfection Clean Up', price: '12,000+ LKR'},
          {name: 'De Tan (Face)', price: '15,000+ LKR'},
          {name: 'Anti Oxidant', price: '19,000+ LKR'},
          {name: 'Oxy Infusion with Super Serums', price: '19,500+ LKR'},
        ],
      },
    ],
    faqs: [{question: 'Important Information', answer: 'Prices are subject to 18% VAT.'}],
  },
  {
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    heroImage:
      'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop',
    shortDescription:
      'Medical-grade laser hair removal for fast, safe, and permanent hair reduction.',
    bookingLink: '#',
    sections: [
      {
        title: 'Ladies Laser Hair Removal',
        subtitle: 'Tailored laser hair removal for all skin types and tones.',
        layout: 'menu',
        items: [
          {name: 'Face', price: '20,000+ LKR'},
          {name: 'Chin / Side Burns', price: '10,000+ LKR'},
          {name: 'Upper Lips', price: '6,500+ LKR'},
          {name: 'Arms (Full)', price: '20,000+ LKR'},
          {name: 'Arms (Half)', price: '12,500+ LKR'},
          {name: 'Legs (Full)', price: '35,000+ LKR'},
          {name: 'Legs (Half)', price: '20,000+ LKR'},
          {name: 'Full Back', price: '35,000+ LKR'},
          {name: 'Chest', price: '20,000+ LKR'},
          {name: 'Tummy', price: '15,000+ LKR'},
          {name: 'Underarms', price: '15,000+ LKR'},
          {name: 'Brazilian', price: '25,000+ LKR'},
          {name: 'Bikini', price: '14,500+ LKR'},
          {name: 'Full Body (Excluding Brazilian)', price: '80,000+ LKR'},
        ],
      },
      {
        title: 'Gents Laser Hair Removal',
        subtitle: 'Effective and reliable hair reduction tailored for men.',
        layout: 'menu',
        items: [
          {name: 'Chin / Side Burns', price: '15,000+ LKR'},
          {name: 'Shoulders', price: '15,000+ LKR'},
          {name: 'Arms (Full)', price: '25,000+ LKR'},
          {name: 'Arms (Half)', price: '17,000+ LKR'},
          {name: 'Legs (Full)', price: '45,000+ LKR'},
          {name: 'Legs (Half)', price: '20,000+ LKR'},
          {name: 'Full Back', price: '40,000+ LKR'},
          {name: 'Chest', price: '30,000+ LKR'},
          {name: 'Tummy', price: '20,000+ LKR'},
          {name: 'Underarms', price: '17,000+ LKR'},
          {name: 'Face', price: '25,000+ LKR'},
        ],
      },
    ],
    faqs: [
      {
        question: 'Important Information',
        answer:
          'Prices are subject to 18% VAT. Please note that we do not offer Boyzilian laser hair removal for gents.',
      },
    ],
  },
  {
    slug: 'injectables-boosters',
    name: 'Injectables & Skin Boosters',
    heroImage:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop',
    shortDescription:
      'Non-surgical treatments performed by medical professionals for rejuvenation and volume restoration.',
    bookingLink: '#',
    sections: [
      {
        title: 'Injectables & Anti-Wrinkle',
        subtitle: 'Restore volume, define contours, and smooth deep lines.',
        layout: 'menu',
        items: [
          {name: 'Botox (Anti-Wrinkle Injections)', price: '2,000+ LKR', description: 'Per unit'},
          {name: 'Dermal Fillers', price: '45,000+ LKR', description: 'Per ml'},
          {
            name: 'Under-Eye Fillers',
            price: 'POA',
            description: 'Specialized filler for tear troughs',
          },
          {name: 'Sculptra', price: '50,000+ LKR', description: 'Per vial'},
          {
            name: 'Subcision (Acne Scar Treatment)',
            price: '25,000+ LKR',
            description: 'Per session',
          },
          {name: 'Mono Threads (PDO Collagen Boosters)', price: 'From 4,000+ LKR'},
        ],
      },
      {
        title: 'Regenerative & Skin Boosters',
        subtitle:
          'Advanced skin rejuvenation using growth factors, polynucleotides, and boosters.',
        layout: 'menu',
        items: [
          {name: 'Skin Boosters (GSH, PDRN, PN, Rejuran, HA Blends)', price: '25,000 - 45,000+ LKR'},
          {name: 'Under-Eye Boosters (Dark Circles)', price: '15,000 - 45,000+ LKR'},
          {name: 'PRP (Platelet-Rich Plasma) Face', price: '25,000+ LKR'},
          {name: 'PRP (Platelet-Rich Plasma) Hair', price: '35,000+ LKR'},
          {name: 'PRF (Platelet-Rich Fibrin)', price: '25,000+ LKR'},
          {name: 'GFC (Growth Factor Concentrate) Face', price: '25,000+ LKR'},
          {name: 'GFC (Growth Factor Concentrate) Hair', price: '35,000+ LKR'},
        ],
      },
    ],
    faqs: [
      {
        question: 'Important Information',
        answer:
          'Prices are subject to 18% VAT. All treatments are performed by medical professionals.',
      },
    ],
  },
  {
    slug: 'eye-body-enhancements',
    name: 'Eye & Body Enhancements',
    heroImage:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    shortDescription:
      'Targeted treatments for the delicate eye area and full body rejuvenation.',
    bookingLink: '#',
    sections: [
      {
        title: 'Eye Treatments',
        subtitle:
          'Utilises deep radio frequency technology & products to treat fine lines, darkness and minor skin laxity.',
        layout: 'menu',
        items: [
          {name: 'Agemethod', price: '10,000+ LKR'},
          {name: 'Filler Code', price: '10,000+ LKR'},
          {name: 'Advanced Boosters', price: '15,000+ LKR'},
          {name: 'Acid Infusion', price: '15,000+ LKR'},
          {name: 'PDRN', price: '15,000+ LKR'},
        ],
      },
      {
        title: 'Body',
        subtitle:
          'Address imperfections and promote cell renewal with a deeply relaxing full-body massage.',
        layout: 'menu',
        items: [
          {name: 'Microdermabrasion', price: '35,000+ LKR'},
          {name: 'De Tan Polish', price: '45,000+ LKR'},
        ],
      },
    ],
    faqs: [{question: 'Important Information', answer: 'Prices are subject to 18% VAT.'}],
  },
  {
    slug: 'specialized-laser',
    name: 'Specialized Laser',
    heroImage:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    shortDescription:
      'Advanced Q-Switch and Nd:YAG laser treatments for tattoos, fungus, and skin imperfections.',
    bookingLink: '#',
    sections: [
      {
        title: 'Laser - Q Switch & Nd:YAG',
        subtitle: 'Safe and effective laser treatments for specific concerns.',
        layout: 'menu',
        items: [
          {name: 'Laser Nail Fungus Removal (Nd:YAG)', price: 'From 6,000+ LKR'},
          {name: 'Tattoo Removal (Q-Switch Laser) Small', price: '12,000+ LKR'},
          {name: 'Tattoo Removal (Q-Switch Laser) Medium', price: '20,000+ LKR'},
          {name: 'Tattoo Removal (Q-Switch Laser) Large', price: '35,000+ LKR'},
          {name: 'Carbon Peel', price: '16,500+ LKR'},
          {name: 'Wart & Skin Tag Removal', price: 'From 1,000+ LKR'},
        ],
      },
    ],
    faqs: [{question: 'Important Information', answer: 'Prices are subject to 18% VAT.'}],
  },
  {
    slug: 'semi-permanent-makeup',
    name: 'Semi-Permanent Makeup',
    heroImage:
      'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop',
    shortDescription: 'Enhance your natural features with long-lasting results.',
    bookingLink: '#',
    sections: [
      {
        title: 'Semi-Permanent Makeup & Beauty Enhancements',
        subtitle: 'Enhance your natural features with long-lasting results.',
        layout: 'menu',
        items: [
          {name: 'Lip Blush Neutralisation', price: '25,000+ LKR'},
          {name: 'Microblading Brows', price: '35,000+ LKR'},
          {name: 'Brow Lift (Brow Lamination) / Lash Lift', price: '12,000+ LKR'},
        ],
      },
    ],
    faqs: [{question: 'Important Information', answer: 'Prices are subject to 18% VAT.'}],
  },
];

// ---------------------------------------------------------------------------
// Upsert helpers
// ---------------------------------------------------------------------------

const M_UPSERT = `
  mutation Upsert($handle: MetaobjectHandleInput!, $metaobject: MetaobjectUpsertInput!) {
    metaobjectUpsert(handle: $handle, metaobject: $metaobject) {
      metaobject { id handle type }
      userErrors { field message code }
    }
  }
`;

const counts = {created: 0, updated: 0};

// Upsert returns the existing or new entry. We cannot directly tell created vs
// updated from the response, so we track via a pre-check is not worth the extra
// round trips; instead we count every upsert as processed and report totals.
async function upsert(type, handle, fields) {
  const fieldArr = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([key, value]) => ({key, value: String(value)}));

  const data = await gql(M_UPSERT, {
    handle: {type, handle},
    metaobject: {fields: fieldArr},
  });

  const errs = data.metaobjectUpsert.userErrors;
  if (errs.length) {
    throw new Error(
      `Upsert failed for ${type}/${handle}: ${JSON.stringify(errs, null, 2)}`,
    );
  }
  return data.metaobjectUpsert.metaobject.id;
}

async function seedData() {
  let processed = 0;

  for (const svc of services) {
    // 1. Child service_item entries
    const sectionRefs = [];
    for (let si = 0; si < svc.sections.length; si += 1) {
      const section = svc.sections[si];

      const itemRefs = [];
      const items = section.items || [];
      for (let ii = 0; ii < items.length; ii += 1) {
        const item = items[ii];
        const itemHandle = `${svc.slug}-s${si}-i${ii}`;
        const id = await upsert('service_item', itemHandle, {
          name: item.name,
          price: item.price,
          description: item.description,
        });
        itemRefs.push(id);
        processed += 1;
      }

      // 2. service_section entry referencing its items
      const sectionHandle = `${svc.slug}-s${si}`;
      const sectionId = await upsert('service_section', sectionHandle, {
        title: section.title,
        subtitle: section.subtitle,
        layout: section.layout,
        content: Array.isArray(section.content)
          ? section.content.join('\n\n')
          : section.content,
        items: itemRefs.length ? JSON.stringify(itemRefs) : undefined,
      });
      sectionRefs.push(sectionId);
      processed += 1;
    }

    // 3. service_faq entries
    const faqRefs = [];
    const faqs = svc.faqs || [];
    for (let fi = 0; fi < faqs.length; fi += 1) {
      const faq = faqs[fi];
      const faqHandle = `${svc.slug}-faq-${fi}`;
      const id = await upsert('service_faq', faqHandle, {
        question: faq.question,
        answer: Array.isArray(faq.answer) ? faq.answer.join('\n\n') : faq.answer,
      });
      faqRefs.push(id);
      processed += 1;
    }

    // 4. parent service entry — handle = slug for idempotency
    await upsert('service', svc.slug, {
      slug: svc.slug,
      name: svc.name,
      short_description: svc.shortDescription,
      booking_link: svc.bookingLink && svc.bookingLink !== '#' ? svc.bookingLink : undefined,
      sections: sectionRefs.length ? JSON.stringify(sectionRefs) : undefined,
      faqs: faqRefs.length ? JSON.stringify(faqRefs) : undefined,
    });
    processed += 1;
    console.log(`  ✓ service "${svc.slug}" (${svc.sections.length} sections, ${faqs.length} faqs)`);
  }

  return {processed};
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`\nSeeding service metaobjects → ${STORE} (API ${API_VERSION})\n`);

  console.log('Part 1: metaobject definitions');
  const defResult = await ensureDefinitions();
  console.log(
    `  Definitions: ${defResult.created} created, ${defResult.skipped} skipped.\n`,
  );

  console.log('Part 2: service data');
  const dataResult = await seedData();
  console.log(`\n  Upserted ${dataResult.processed} metaobject entries.`);

  console.log('\nDone. Summary:');
  console.log(`  - Definitions created: ${defResult.created}`);
  console.log(`  - Definitions skipped (already existed): ${defResult.skipped}`);
  console.log(`  - Metaobject entries upserted: ${dataResult.processed}`);
  console.log(`  - Services: ${services.length}\n`);
}

main().catch((err) => {
  console.error('\nSEED FAILED:\n', err.message || err);
  process.exit(1);
});
