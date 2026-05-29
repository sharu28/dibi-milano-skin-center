export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceSection {
  title: string;
  content?: string | string[];
  items?: ServiceItem[];
  image?: string;
  layout: 'full' | 'split-left-image' | 'split-right-image' | 'split-text' | 'menu';
  subtitle?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string | string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  shortDescription: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  bookingLink: string;
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'skin-conditions',
    name: 'Skin Conditions',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Targeted treatments for acne, pigmentation, sensitivity, rosacea, and dermatitis.',
    bookingLink: '#',
    sections: [
      {
        title: 'Acne / Congestion',
        subtitle: 'Effective treatment of acne targets all of the steps of the cases of acne and combination therapy is essential.',
        layout: 'menu',
        items: [
          { name: 'Pure Equalizer - Purifying Treatment', price: '14,000+ LKR' },
          { name: 'Pure Equalizer - Sebum Balance', price: '14,500+ LKR' },
          { name: 'Pro Cellular Pro Recovery', price: '28,000+ LKR' },
          { name: 'Meso System Lab', price: '19,500+ LKR' }
        ]
      },
      {
        title: 'Pigmentation',
        subtitle: 'Treatments focus on preventing the occurrence of new pigmentation by avoiding and removing the triggers.',
        layout: 'menu',
        items: [
          { name: 'White Science - Melanin Control', price: '29,500+ LKR' },
          { name: 'Acid Infusion', price: '23,000+ LKR' },
          { name: 'Bio Repeel', price: '23,000+ LKR' },
          { name: 'Laser - QSwitch', price: '20,000+ LKR' },
          { name: 'Meso System Lab', price: '19,500+ LKR' }
        ]
      },
      {
        title: 'Sensitive / Sensitized & Rosacea',
        subtitle: 'In-clinic treatments aimed at managing the condition and preventing exacerbations.',
        layout: 'menu',
        items: [
          { name: 'Defense Solution', price: '19,500+ LKR' },
          { name: 'Procellular - Pro Recovery', price: '28,000+ LKR' },
          { name: 'Enzyme Peel', price: '12,000+ LKR' },
          { name: 'Meso System Lab', price: '19,500+ LKR' }
        ]
      },
      {
        title: 'Dermatitis',
        subtitle: 'Encourages natural cellular repair and supports an optimal skin response.',
        layout: 'menu',
        items: [
          { name: 'Hydra Perfection', price: '19,500+ LKR' },
          { name: 'Oxy Infusion with Super Serums', price: '19,500+ LKR' },
          { name: 'Meso System Lab', price: '19,500+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT.'
      }
    ]
  },
  {
    id: '2',
    slug: 'anti-aging-energy',
    name: 'Anti-Aging & Energy',
    heroImage: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Non-surgical treatments for facial rejuvenation, skin restoration, and total skin overhaul.',
    bookingLink: '#',
    sections: [
      {
        title: 'Anti Aging',
        subtitle: 'Non-surgical treatments designed to improve skin elasticity, boost collagen production, and restore youthful plumpness.',
        layout: 'menu',
        items: [
          { name: 'Agemethod', price: '25,000+ LKR' },
          { name: 'Filler Code', price: '25,000+ LKR' },
          { name: 'Lift Creator', price: '17,000+ LKR' },
          { name: 'Lift Creator with Collagen Veil', price: '25,000+ LKR' },
          { name: 'Gold', price: '39,000+ LKR' },
          { name: 'Acid Infusion', price: '23,000+ LKR' },
          { name: 'HIFU', price: '23,000+ LKR per area' },
          { name: 'PDRN', price: '19,500+ LKR' }
        ]
      },
      {
        title: 'Energy',
        subtitle: 'Combining the full sciton technology to deliver the most impressive results and a total skin overhaul.',
        layout: 'menu',
        items: [
          { name: 'Dr Skin', price: '19,000+ LKR' },
          { name: 'RF', price: '19,500+ LKR' },
          { name: 'LED Light', price: '10,000+ LKR' },
          { name: 'Oxy Infusion with Super Serums', price: '19,500+ LKR' },
          { name: 'EPN', price: '19,500+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT.'
      }
    ]
  },
  {
    id: '3',
    slug: 'peels-refresh',
    name: 'Peels & Refresh',
    heroImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Advanced clinical peels and refreshing clean-ups to target every skin concern.',
    bookingLink: '#',
    sections: [
      {
        title: 'Peels',
        subtitle: 'The widest range of advanced clinical peels using transformative acids, enzymes, and botanicals.',
        layout: 'menu',
        items: [
          { name: 'Enzyme Peel', price: '12,000+ LKR' },
          { name: 'Dermaplane', price: '14,000+ LKR' },
          { name: 'Microdermabrasion', price: '14,000+ LKR' },
          { name: 'Crystal Peel', price: '14,000+ LKR' },
          { name: 'Bio Repeel', price: '23,000+ LKR' },
          { name: 'Carbon Peel', price: '19,500+ LKR' },
          { name: 'Acid Infusion', price: '23,000+ LKR' },
          { name: 'Cosmelan', price: '29,000+ LKR', description: 'Limited time' }
        ]
      },
      {
        title: 'Refresh',
        subtitle: 'Quick and effective treatments to refresh and revitalize your skin.',
        layout: 'menu',
        items: [
          { name: 'Face Perfection Clean Up', price: '12,000+ LKR' },
          { name: 'De Tan (Face)', price: '15,000+ LKR' },
          { name: 'Anti Oxidant', price: '19,000+ LKR' },
          { name: 'Oxy Infusion with Super Serums', price: '19,500+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT.'
      }
    ]
  },
  {
    id: '4',
    slug: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    heroImage: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop',
    shortDescription: 'Medical-grade laser hair removal for fast, safe, and permanent hair reduction.',
    bookingLink: '#',
    sections: [
      {
        title: 'Ladies Laser Hair Removal',
        subtitle: 'Tailored laser hair removal for all skin types and tones.',
        layout: 'menu',
        items: [
          { name: 'Face', price: '20,000+ LKR' },
          { name: 'Chin / Side Burns', price: '10,000+ LKR' },
          { name: 'Upper Lips', price: '6,500+ LKR' },
          { name: 'Arms (Full)', price: '20,000+ LKR' },
          { name: 'Arms (Half)', price: '12,500+ LKR' },
          { name: 'Legs (Full)', price: '35,000+ LKR' },
          { name: 'Legs (Half)', price: '20,000+ LKR' },
          { name: 'Full Back', price: '35,000+ LKR' },
          { name: 'Chest', price: '20,000+ LKR' },
          { name: 'Tummy', price: '15,000+ LKR' },
          { name: 'Underarms', price: '15,000+ LKR' },
          { name: 'Brazilian', price: '25,000+ LKR' },
          { name: 'Bikini', price: '14,500+ LKR' },
          { name: 'Full Body (Excluding Brazilian)', price: '80,000+ LKR' }
        ]
      },
      {
        title: 'Gents Laser Hair Removal',
        subtitle: 'Effective and reliable hair reduction tailored for men.',
        layout: 'menu',
        items: [
          { name: 'Chin / Side Burns', price: '15,000+ LKR' },
          { name: 'Shoulders', price: '15,000+ LKR' },
          { name: 'Arms (Full)', price: '25,000+ LKR' },
          { name: 'Arms (Half)', price: '17,000+ LKR' },
          { name: 'Legs (Full)', price: '45,000+ LKR' },
          { name: 'Legs (Half)', price: '20,000+ LKR' },
          { name: 'Full Back', price: '40,000+ LKR' },
          { name: 'Chest', price: '30,000+ LKR' },
          { name: 'Tummy', price: '20,000+ LKR' },
          { name: 'Underarms', price: '17,000+ LKR' },
          { name: 'Face', price: '25,000+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT. Please note that we do not offer Boyzilian laser hair removal for gents.'
      }
    ]
  },
  {
    id: '5',
    slug: 'injectables-boosters',
    name: 'Injectables & Skin Boosters',
    heroImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop',
    shortDescription: 'Non-surgical treatments performed by medical professionals for rejuvenation and volume restoration.',
    bookingLink: '#',
    sections: [
      {
        title: 'Injectables & Anti-Wrinkle',
        subtitle: 'Restore volume, define contours, and smooth deep lines.',
        layout: 'menu',
        items: [
          { name: 'Botox (Anti-Wrinkle Injections)', price: '2,000+ LKR', description: 'Per unit' },
          { name: 'Dermal Fillers', price: '45,000+ LKR', description: 'Per ml' },
          { name: 'Under-Eye Fillers', price: 'POA', description: 'Specialized filler for tear troughs' },
          { name: 'Sculptra', price: '50,000+ LKR', description: 'Per vial' },
          { name: 'Subcision (Acne Scar Treatment)', price: '25,000+ LKR', description: 'Per session' },
          { name: 'Mono Threads (PDO Collagen Boosters)', price: 'From 4,000+ LKR' }
        ]
      },
      {
        title: 'Regenerative & Skin Boosters',
        subtitle: 'Advanced skin rejuvenation using growth factors, polynucleotides, and boosters.',
        layout: 'menu',
        items: [
          { name: 'Skin Boosters (GSH, PDRN, PN, Rejuran, HA Blends)', price: '25,000 - 45,000+ LKR' },
          { name: 'Under-Eye Boosters (Dark Circles)', price: '15,000 - 45,000+ LKR' },
          { name: 'PRP (Platelet-Rich Plasma) Face', price: '25,000+ LKR' },
          { name: 'PRP (Platelet-Rich Plasma) Hair', price: '35,000+ LKR' },
          { name: 'PRF (Platelet-Rich Fibrin)', price: '25,000+ LKR' },
          { name: 'GFC (Growth Factor Concentrate) Face', price: '25,000+ LKR' },
          { name: 'GFC (Growth Factor Concentrate) Hair', price: '35,000+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT. All treatments are performed by medical professionals.'
      }
    ]
  },
  {
    id: '6',
    slug: 'eye-body-enhancements',
    name: 'Eye & Body Enhancements',
    heroImage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Targeted treatments for the delicate eye area and full body rejuvenation.',
    bookingLink: '#',
    sections: [
      {
        title: 'Eye Treatments',
        subtitle: 'Utilises deep radio frequency technology & products to treat fine lines, darkness and minor skin laxity.',
        layout: 'menu',
        items: [
          { name: 'Agemethod', price: '10,000+ LKR' },
          { name: 'Filler Code', price: '10,000+ LKR' },
          { name: 'Advanced Boosters', price: '15,000+ LKR' },
          { name: 'Acid Infusion', price: '15,000+ LKR' },
          { name: 'PDRN', price: '15,000+ LKR' }
        ]
      },
      {
        title: 'Body',
        subtitle: 'Address imperfections and promote cell renewal with a deeply relaxing full-body massage.',
        layout: 'menu',
        items: [
          { name: 'Microdermabrasion', price: '35,000+ LKR' },
          { name: 'De Tan Polish', price: '45,000+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT.'
      }
    ]
  },
  {
    id: '7',
    slug: 'specialized-laser',
    name: 'Specialized Laser',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Advanced Q-Switch and Nd:YAG laser treatments for tattoos, fungus, and skin imperfections.',
    bookingLink: '#',
    sections: [
      {
        title: 'Laser - Q Switch & Nd:YAG',
        subtitle: 'Safe and effective laser treatments for specific concerns.',
        layout: 'menu',
        items: [
          { name: 'Laser Nail Fungus Removal (Nd:YAG)', price: 'From 6,000+ LKR' },
          { name: 'Tattoo Removal (Q-Switch Laser) Small', price: '12,000+ LKR' },
          { name: 'Tattoo Removal (Q-Switch Laser) Medium', price: '20,000+ LKR' },
          { name: 'Tattoo Removal (Q-Switch Laser) Large', price: '35,000+ LKR' },
          { name: 'Carbon Peel', price: '16,500+ LKR' },
          { name: 'Wart & Skin Tag Removal', price: 'From 1,000+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT.'
      }
    ]
  },
  {
    id: '8',
    slug: 'semi-permanent-makeup',
    name: 'Semi-Permanent Makeup',
    heroImage: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2071&auto=format&fit=crop',
    shortDescription: 'Enhance your natural features with long-lasting results.',
    bookingLink: '#',
    sections: [
      {
        title: 'Semi-Permanent Makeup & Beauty Enhancements',
        subtitle: 'Enhance your natural features with long-lasting results.',
        layout: 'menu',
        items: [
          { name: 'Lip Blush Neutralisation', price: '25,000+ LKR' },
          { name: 'Microblading Brows', price: '35,000+ LKR' },
          { name: 'Brow Lift (Brow Lamination) / Lash Lift', price: '12,000+ LKR' }
        ]
      }
    ],
    faqs: [
      {
        question: 'Important Information',
        answer: 'Prices are subject to 18% VAT.'
      }
    ]
  }
];
