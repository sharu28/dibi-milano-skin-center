export interface Product {
  name: string;
  line: string;
  description: string;
  ingredients: string;
  directions: string;
  images: string[];
  image_urls: string[];
  url: string;
  slug: string;
}

export const products: Product[] = [
  {
    name: 'THE CREAM',
    line: 'NUOVAPELLE',
    description: '',
    ingredients: 'AQUA (WATER), C12-15 ALKYL BENZOATE, CETEARYL ALCOHOL, TRITICUM VULGARE (WHEAT) GERM&nbsp; OIL, DICAPRYLYL ETHER, BUTYROSPERMUM PARKII (SHEA) BUTTER, CETEARYL GLUCOSIDE, DIMETHICONE, PROPYLENE GLYCOL, CELLULOSE, PHENOXYETHANOL, GLYCERYL POLYMETHACRYLATE, GLYCERIN, HYDROXYACETOPHENONE, HYDROXYETHYLCELLULOSE, OLEA EUROPAEA (OLIVE) OIL UNSAPONIFIABLES, ORYZANOL, POTASSIUM CETYL PHOSPHATE , ETHYLHEXYL STEARATE, PEG-8, TETRASODIUM EDTA, NICOTINAMIDE ADENINE DINUCLEOTIDE, SODIUM HYALURONATE, LECITHIN, CITRIC ACID, 1,2-HEXANEDIOL, CAPRYLYL GLYCOL, DISODIUM SUCCINATE, SACCHAROMYCES LYSATE, TOCOPHEROL, LINALOOL, ASCORBYL PALMITATE, GLUTAMIC ACID, GLYCINE, THREONINE, VALINE, CITRUS AURANTIUM AMARA (BITTER ORANGE) FLOWER EXTRACT, GERANIOL, PALMITOYL HEXAPEPTIDE-12',
    directions: 'Apply to face, neck and décolleté and massage until completely absorbed.',
    images: ['product-images\\the-cream_1.jpg', 'product-images\\the-cream_2.jpg', 'product-images\\the-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Nuovapelle_TheCream_PF030423_00.png.webp?itok=-HICGvwh', '/sites/default/files/styles/large/public/media-image-p/DIBI_Nuovapelle_TheCream_PF030423_01.png.webp?itok=z5Mc_5fp', '/sites/default/files/styles/large/public/media-image-p/DIBI_Nuovapelle_TheCream_PF030423_02.png.webp?itok=OeDXjpmQ'],
    url: 'https://www.dibimilano.com/en-en/face/products/nuovapelle/the-cream',
    slug: 'the-cream'
  },
  {
    name: 'Sumptuous 24h Youth Cream with Sun Filters',
    line: 'CREAM AND SERUM ANTI AGING AGE METHOD',
    description: '',
    ingredients: 'AQUA (WATER), CETEARYL ALCOHOL, HYDROGENATED POLYISOBUTENE, GLYCERIN, ETHYLHEXYL METHOXYCINNAMATE, STEARYL ETHYLHEXANOATE, GLYCERYL STEARATE, CETYL ETHYLHEXANOATE, ETHYLHEXYL SALICYLATE, STEARIC ACID, Cetearyl Glucoside, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL , BUTYLENE GLYCOL, PHENOXYETHANOL, PROPYLENE GLYCOL, ETHYLHEXYLGLYCERIN, ISOPROPYL MYRISTATE, ERUCA SATIVA LEAF EXTRACT, HYDROXYPROPYL CYCLODEXTRIN, PARFUM (FRAGRANCE), JOJOBA ESTERS, TRIETHANOLAMINE, HELIANTHUS ANNUUS (SUNFLOWER) SEED WAX, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CETYL ALCOHOL, TETRASODIUM EDTA, PENTYLENE GLYCOL, NIACINAMIDE, SODIUM STARCH OCTENYLSUCCINATE, SODIUM DEHYDROACETATE, ORBIGNYA OLEIFERA SEED OIL, CALCIUM PANTOTHENATE, MALTODEXTRIN, CALENDULA OFFICINALIS FLOWER EXTRACT, CITRIC ACID, SODIUM ASCORBYL PHOSPHATE, LECITHIN, IRIS FLORENTINA ROOT EXTRACT, LINALOOL, LIMONENE, ACACIA DECURRENS FLOWER WAX, POLYGLYCERIN-3, PYRIDOXINE HCL, TOCOPHERYL ACETATE, COUMARIN, TOCOPHEROL, PALMITOYL TRIPEPTIDE-5, ASCORBYL PALMITATE, GERANIOL, SODIUM BENZOATE, CALCIUM CHLORIDE, CUPRIC CHLORIDE, FERRIC CHLORIDE, MAGNESIUM CHLORIDE, MANGANESE CHLORIDE, ZINC CHLORIDE, POTASSIUM SORBATE, SILICA, CI 19140 (YELLOW 5), CI 16035 (RED 40), CI 15985 (YELLOW 6), CI 42090 (BLUE 1)',
    directions: 'Apply to face, neck and decolleté. Repeat morning and evening.',
    images: ['product-images\\sumptuous-24h-youth-cream-sun-filters_1.jpg', 'product-images\\sumptuous-24h-youth-cream-sun-filters_2.jpg', 'product-images\\sumptuous-24h-youth-cream-sun-filters_3.jpg', 'product-images\\sumptuous-24h-youth-cream-sun-filters_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaSontuosaGiovinezza_PF015353_00.png.webp?itok=0Mbp_oVc', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaSontuosaGiovinezza_PF015353_01.png.webp?itok=qwvWnz02', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaSontuosaGiovinezza_PF015353_02.png.webp?itok=mrYgf2a7', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaSontuosaGiovinezza_PF015353_03.png.webp?itok=InOz5EXg'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-and-serum-anti-aging-age-method/sumptuous-24h-youth-cream-sun-filters',
    slug: 'sumptuous-24h-youth-cream-sun-filters'
  },
  {
    name: '2 in 1 Deluxe Baume for Neck-Decollete-Eyes-Lips',
    line: 'CREAM AND SERUM ANTI AGING AGE METHOD',
    description: '',
    ingredients: 'PETROLATUM, PARAFFINUM LIQUIDUM (MINERAL OIL), COCO-CAPRYLATE/CAPRATE, ETHYLHEXYL STEARATE, TRIETHYLHEXANOIN, ALUMINUM STARCH OCTENYLSUCCINATE, CERA ALBA (BEESWAX), AQUA (WATER), PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL , GLYCERIN, PARFUM (FRAGRANCE), POLYETHYLENE, TOCOPHERYL ACETATE, CHARCOAL POWDER, ERUCA SATIVA LEAF EXTRACT, ASCORBYL TETRAISOPALMITATE, NIACINAMIDE, ORBIGNYA OLEIFERA SEED OIL, CALENDULA OFFICINALIS FLOWER EXTRACT, LINALOOL, LIMONENE, CITRIC ACID, LECITHIN, COUMARIN, GERANIOL, PALMITOYL TRIPEPTIDE-5, TOCOPHEROL, PHENOXYETHANOL, ASCORBYL PALMITATE, ETHYLHEXYLGLYCERIN, SODIUM BENZOATE, POTASSIUM SORBATE',
    directions: 'During the day apply to the most affected areas of the face: neck, decolleté, eye contour area and lips; massage. For an intensive “sleeping mask” effect, apply to face, neck and decolleté, after your cream; leave on all night.',
    images: ['product-images\\2-in-1-deluxe-baume-neck-decollete-eyes-lips_1.jpg', 'product-images\\2-in-1-deluxe-baume-neck-decollete-eyes-lips_2.jpg', 'product-images\\2-in-1-deluxe-baume-neck-decollete-eyes-lips_3.jpg', 'product-images\\2-in-1-deluxe-baume-neck-decollete-eyes-lips_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_BaumeDeluxe2in1_PF015352_00.png.webp?itok=liWu4r6f', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_BaumeDeluxe2in1_PF015352_01.png.webp?itok=d6IEu0tb', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_BaumeDeluxe2in1_PF015352_02.png.webp?itok=RAzJkJG4', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_BaumeDeluxe2in1_PF015352_03.png.webp?itok=Js-02GRf'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-and-serum-anti-aging-age-method/2-in-1-deluxe-baume-neck-decollete-eyes-lips',
    slug: '2-in-1-deluxe-baume-neck-decollete-eyes-lips'
  },
  {
    name: 'Day and Night Youth Impulse Cream: Anti Aging',
    line: 'CREAM AND SERUM ANTI AGING AGE METHOD',
    description: '',
    ingredients: 'AQUA (WATER), BUTYLENE GLYCOL, OLUS OIL (VEGETABLE OIL), PALMITIC ACID, STEARIC ACID, BUTYROSPERMUM PARKII (SHEA BUTTER), GLYCERIN, C12-15 ALKYL BENZOATE, DIMETHICONE, ISONONYL ISONONANOATE, HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, CETYL ALCOHOL, COCOGLYCERIDES, PHENOXYETHANOL, POLYSORBATE 60, ERUCA SATIVA LEAF EXTRACT, SODIUM HYDROXIDE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, CI 77163 (BISMUTH OXYCHLORIDE), ETHYLHEXYLGLYCERIN, ETHYLHEXYL HYDROXYSTEARATE, TETRASODIUM EDTA, CALENDULA OFFICINALIS FLOWER EXTRACT, SODIUM DEHYDROACETATE, PARFUM (FRAGRANCE), CITRIC ACID, SILICA, PALMITOYL TRIPEPTIDE-5, SODIUM BENZOATE, LINALOOL, LIMONENE, POTASSIUM SORBATE, COUMARIN, CI 19140 (YELLOW 5), CI 16035 (RED 40), CI 15985 (YELLOW 6), CI 42090 (BLUE 1)',
    directions: 'Apply to face, neck and decolleté. Repeat morning and evening.',
    images: ['product-images\\day-and-night-youth-impulse-cream_1.jpg', 'product-images\\day-and-night-youth-impulse-cream_2.jpg', 'product-images\\day-and-night-youth-impulse-cream_3.jpg', 'product-images\\day-and-night-youth-impulse-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaImpulsoGiovinezza_PF015351_00.png.webp?itok=OhRrrwiE', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaImpulsoGiovinezza_PF015351_01.png.webp?itok=yxiw81H0', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaImpulsoGiovinezza_PF015351_02.png.webp?itok=5DxUrDgx', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaImpulsoGiovinezza_PF015351_03.png.webp?itok=_MdMyOyx'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-and-serum-anti-aging-age-method/day-and-night-youth-impulse-cream',
    slug: 'day-and-night-youth-impulse-cream'
  },
  {
    name: 'Concentrated Youth Capsules: Anti Aging Cream',
    line: 'CREAM AND SERUM ANTI AGING AGE METHOD',
    description: '',
    ingredients: 'ISODODECANE, NEOPENTYL GLYCOL DIHEPTANOATE, DIMETHICONE CROSSPOLYMER, SILICA, CAPRYLIC/CAPRIC TRIGLYCERIDE, ETHYLHEXYL PALMITATE, CITRONELLYL METHYLCROTONATE, CI77891 (TITANIUM DIOXIDE), OLEYL ALCOHOL , TOCOPHEROL, AQUA (WATER), ZANTHOXYLUM BUNGEANUM FRUIT EXTRACT , PARFUM (FRAGRANCE), CI 77491 (IRON OXIDE), SPILANTHES ACMELLA FLOWER EXTRACT, SILICA DIMETHYL SILYLATE, LAVANDULA STOECHAS EXTRACT, BUTYLENE GLYCOL, CALENDULA OFFICINALIS FLOWER EXTRACT, CAPRYLYL GLYCOL, PHENOXYETHANOL, LINALOOL, LIMONENE, SODIUM HYALURONATE , COUMARIN, HEXYLENE GLYCOL, ETHYLHEXYLGLYCERIN..',
    directions: 'Apply to the face before your usual cream, day and night. Hold the capsule between your fingers in an upright position, remove the top of the capsule by twisting it. Dispense the contents evenly on the various areas of your face and rub it in until fully absorbed. After use, dispose of the empty capsule with unsorted waste.',
    images: ['product-images\\concentrated-youth-capsules_1.jpg', 'product-images\\concentrated-youth-capsules_2.jpg', 'product-images\\concentrated-youth-capsules_3.jpg', 'product-images\\concentrated-youth-capsules_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CapsuleConcentrateGiovinezza_PF019062_00.png.webp?itok=az2zqfw0', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CapsuleConcentrateGiovinezza_PF019062_01.png.webp?itok=iOSIBp5j', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CapsuleConcentrateGiovinezza_PF019062_02.png.webp?itok=Z12OEBJJ', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CapsuleConcentrateGiovinezza_PF019062_03.png.webp?itok=foPoy28P'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-and-serum-anti-aging-age-method/concentrated-youth-capsules',
    slug: 'concentrated-youth-capsules'
  },
  {
    name: 'Youth Cream Mask: Anti Aging Face Mask',
    line: 'CREAM AND SERUM ANTI AGING AGE METHOD',
    description: '',
    ingredients: 'AQUA (WATER), C12-15 ALKYL BENZOATE, GLYCERIN, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERYL STEARATE, PEG-100 STEARATE, ORYZA SATIVA (RICE) STARCH, CETEARYL ALCOHOL, BUTYROSPERMUM PARKII (SHEA) BUTTER, CI 77891 (TITANIUM DIOXIDE), GLYCERYL GLUCOSIDE, PHENOXYETHANOL, HYDROXYACETOPHENONE, PARFUM (FRAGRANCE), MAGNESIUM ALUMINUM SILICATE, CETEARYL OLIVATE, ERUCA SATIVA LEAF EXTRACT, SORBITAN OLIVATE, TETRASODIUM EDTA, SODIUM DEHYDROACETATE, SORBITAN TRIOLEATE, LECITHIN, CALENDULA OFFICINALIS FLOWER EXTRACT, CITRIC ACID, LINALOOL, LIMONENE, COUMARIN, TOCOPHEROL, ASCORBYL PALMITATE, PALMITOYL TRIPEPTIDE-5, ETHYLHEXYLGLYCERIN, SODIUM BENZOATE, APIUM GRAVEOLENS (CELERY) SEED EXTRACT, LINUM USITATISSIMUM (LINSEED) SEED EXTRACT, POTASSIUM SORBATE',
    directions: 'Apply to the face and allow to set for 15/20 minutes, then rinse. If necessary, remove residue with a damp cloth. Recommended as an intensive, weekly treatment, ideal in any season.',
    images: ['product-images\\youth-cream-mask_1.jpg', 'product-images\\youth-cream-mask_2.jpg', 'product-images\\youth-cream-mask_3.jpg', 'product-images\\youth-cream-mask_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_MascheraCremaGiovinezza_PF025015_00.png.webp?itok=YjsoAGgl', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_MascheraCremaGiovinezza_PF025015_01.png.webp?itok=obwNaXAh', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_MascheraCremaGiovinezza_PF025015_02.png.webp?itok=9gh8RQ2s', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_MascheraCremaGiovinezza_PF025015_03.png.webp?itok=-qAF0enR'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-and-serum-anti-aging-age-method/youth-cream-mask',
    slug: 'youth-cream-mask'
  },
  {
    name: 'Fluid Youth Cream: Anti Aging Cream',
    line: 'CREAM AND SERUM ANTI AGING AGE METHOD',
    description: '',
    ingredients: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERIN, COCO-CAPRYLATE/CAPRATE, BUTYROSPERMUM PARKII (SHEA) BUTTER, CETEARYL ALCOHOL, C10-18 TRIGLYCERIDES, PHENOXYETHANOL, ERUCA SATIVA LEAF EXTRACT, HYDROXYACETOPHENONE, GLYCERYL STEARATE, JOJOBA ESTERS, CETEARYL OLIVATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED WAX, SODIUM STEAROYL GLUTAMATE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, SORBITAN OLIVATE, PARFUM (FRAGRANCE), TETRASODIUM EDTA, XANTHAN GUM, SODIUM DEHYDROACETATE, CALENDULA OFFICINALIS FLOWER EXTRACT, CITRIC ACID, SODIUM HYDROXIDE, SORBITAN TRIOLEATE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, POLYGLYCERIN-3, LINALOOL, POLYSORBATE 60, SQUALANE, LIMONENE, PALMITOYL TRIPEPTIDE-5, COUMARIN, ETHYLHEXYLGLYCERIN, SODIUM BENZOATE, POTASSIUM SORBATE, GERANIOL, APIUM GRAVEOLENS (CELERY) SEED EXTRACT, LINUM USITATISSIMUM (LINSEED) SEED EXTRACT',
    directions: 'Apply to the face morning and evening and massage until fully absorbed.',
    images: ['product-images\\fluid-youth-cream_1.jpg', 'product-images\\fluid-youth-cream_2.jpg', 'product-images\\fluid-youth-cream_3.jpg', 'product-images\\fluid-youth-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaFluidaGiovinezza_PF025014_00.png.webp?itok=GhquQV13', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaFluidaGiovinezza_PF025014_01.png.webp?itok=_nACz8G9', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaFluidaGiovinezza_PF025014_02.png.webp?itok=aHXr7mCe', '/sites/default/files/styles/large/public/media-image-p/DIBI_AgeMethod_CremaFluidaGiovinezza_PF025014_03.png.webp?itok=NwTw1Fjb'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-and-serum-anti-aging-age-method/fluid-youth-cream',
    slug: 'fluid-youth-cream'
  },
  {
    name: 'No-Age Revitalizing Fluid Cream*: Anti Age Cream',
    line: 'ACID INFUSION',
    description: '',
    ingredients: 'AQUA (WATER), ETHYLHEXYL METHOXYCINNAMATE, DIBUTYL ADIPATE, GLYCERIN, CAPRYLIC/CAPRIC TRIGLYCERIDE, ETHYLHEXYL SALICYLATE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, SODIUM HYALURONATE, FERULIC ACID, ALCOHOL DENAT., GLYCERYL GLUCOSIDE, GLYCERYL DIBEHENATE, PHENOXYETHANOL, CETEARYL OLIVATE, HYDROXYACETOPHENONE, TRIBEHENIN, SORBITAN OLIVATE, GLYCERYL BEHENATE, PARFUM (FRAGRANCE), XANTHAN GUM, TETRASODIUM EDTA, SODIUM HYDROXIDE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, HYDROXYCITRONELLAL, BENZYL SALICYLATE, LIMONENE, CITRONELLOL, ALPHA-ISOMETHYL IONONE, HEXYL CINNAMAL',
    directions: 'Apply during the daytime and massage until fully absorbed.',
    images: ['product-images\\no-age-revitalising-fluid-cream_1.jpg', 'product-images\\no-age-revitalising-fluid-cream_2.jpg', 'product-images\\no-age-revitalising-fluid-cream_3.jpg', 'product-images\\no-age-revitalising-fluid-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Rivitalizzante_No_Age_PF023340_00.png.webp?itok=i4eOlJcT', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Rivitalizzante_No_Age_PF023340_01.png.webp?itok=kIOGvMrV', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Rivitalizzante_No_Age_PF023340_Texture_02.png.webp?itok=M0QwCTd7', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Rivitalizzante_No_Age_PF023340_03.png.webp?itok=8ntiAClr'],
    url: 'https://www.dibimilano.com/en-en/face/products/acid-infusion/no-age-revitalising-fluid-cream',
    slug: 'no-age-revitalising-fluid-cream'
  },
  {
    name: 'No-Age Bio-Active Eye Roller: Anti aging eye cream',
    line: 'ACID INFUSION',
    description: '',
    ingredients: 'AQUA (WATER), PROPYLENE GLYCOL, BUTYLENE GLYCOL, PHENOXYETHANOL, HYDROXYACETOPHENONE, GLYCERIN, CAFFEINE, HYDROXYETHYLCELLULOSE, TETRASODIUM EDTA, GELLAN GUM, GLYCYRRHETINIC ACID, GLYCOSAMINOGLYCANS, SODIUM HYALURONATE, CHENOPODIUM QUINOA SEED EXTRACT, SODIUM HYDROXIDE, POTASSIUM SORBATE, TRISODIUM EDTA',
    directions: 'Apply the product using the applicator sphere, tap in and massage until full absorbed. Shake before use.',
    images: ['product-images\\no-age-bio-active-eye-roller_1.jpg', 'product-images\\no-age-bio-active-eye-roller_2.jpg', 'product-images\\no-age-bio-active-eye-roller_3.jpg', 'product-images\\no-age-bio-active-eye-roller_4.jpg', 'product-images\\no-age-bio-active-eye-roller_5.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Roll_On_Occhi_Bioattivante_PF023339_00.png.webp?itok=-rqz4yJp', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Roll_On_Occhi_Bioattivante_PF023339_01.png.webp?itok=pvZ-jt42', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Roll_On_Occhi_Bioattivante_PF023339_02.png.webp?itok=Nli--1nH', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Roll_On_Occhi_Bioattivante_PF023339_03.png.webp?itok=GlK4ZfFU', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Roll_On_Occhi_Bioattivante_PF023339_04.png.webp?itok=aeFkU2HC'],
    url: 'https://www.dibimilano.com/en-en/face/products/acid-infusion/no-age-bio-active-eye-roller',
    slug: 'no-age-bio-active-eye-roller'
  },
  {
    name: 'No-Age* Renewing Hand Cream: Anti Age Cream',
    line: 'ACID INFUSION',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, CETEARYL ALCOHOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERYL STEARATE CITRATE, ETHYLHEXYL STEARATE, ISONONYL ISONONANOATE, PERSEA GRATISSIMA (AVOCADO) OIL, BUTYROSPERMUM PARKII (SHEA) BUTTER, MANDELIC ACID, ETHYLHEXYL METHOXYCINNAMATE, NIACINAMIDE, PHENOXYETHANOL, ASCORBYL TETRAISOPALMITATE, HYDROXYACETOPHENONE, SODIUM HYDROXIDE, CARBOMER, TETRASODIUM EDTA, ORYZANOL',
    directions: 'Apply and massage into the hands until fully absorbed. For best results, apply after washing hands. In wintertime, apply the cream frequently to prevent dry, flaky skin. In the summer, use it as a night treatment to preserve beautiful skin. Apply the cream before manicures, focusing on the contours of the fingernails to nourish and soften the cuticles.',
    images: ['product-images\\no-age-renewing-hand-cream_1.jpg', 'product-images\\no-age-renewing-hand-cream_2.jpg', 'product-images\\no-age-renewing-hand-cream_3.jpg', 'product-images\\no-age-renewing-hand-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Mani_Rinnovante_No_Age_PF023338_00.png.webp?itok=KMDv8hpD', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Mani_Rinnovante_No_Age_PF023338_01.png.webp?itok=pO21mHHP', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Mani_Rinnovante_No_Age_PF023338_02.png.webp?itok=SmWaLMdJ', '/sites/default/files/styles/large/public/media-image-p/DIBI_ACID_INFUSION_Crema_Mani_Rinnovante_No_Age_PF023338_03.png.webp?itok=-GKn9UU4'],
    url: 'https://www.dibimilano.com/en-en/face/products/acid-infusion/no-age-renewing-hand-cream',
    slug: 'no-age-renewing-hand-cream'
  },
  {
    name: 'No-Age Bioactivating Treatment*: Anti Aging Cream',
    line: 'ACID INFUSION',
    description: '',
    ingredients: 'AQUA (WATER), POLYSORBATE 20, ASCORBYL TETRAISOPALMITATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, PHENOXYETHANOL, HYDROXYPROPYL CYCLODEXTRIN, HYDROXYACETOPHENONE, RETINOL, SODIUM POLYACRYLATE, GELLAN GUM, XANTHAN GUM, SODIUM METABISULFITE, TOCOPHEROL, BHA, BHT AQUA (WATER), PHYTIC ACID, SODIUM HYDROXIDE, PHENOXYETHANOL, ELLAGIC ACID, HYDROXYACETOPHENONE, XANTHAN GUM, GELLAN GUM',
    directions: 'Shake well then use the special vial opener to break the cap where it is marked by the ring and apply to the face and neck before your usual cream, massaging until fully absorbed. Start the treatment with the Anti-Oxidant Solution then continue with the Multi-Corrective Solution.',
    images: ['product-images\\no-age-bioactivating-treatment_1.jpg', 'product-images\\no-age-bioactivating-treatment_2.jpg', 'product-images\\no-age-bioactivating-treatment_3.jpg', 'product-images\\no-age-bioactivating-treatment_4.jpg', 'product-images\\no-age-bioactivating-treatment_5.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Trattamento_Bioattivo_No_Age_PF020960_00.png.webp?itok=tmyMWae-', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Trattamento_Bioattivo_No_Age_PF020960_01.png.webp?itok=wjhDGNv9', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Trattamento_Bioattivo_No_Age_PF020960_02.png.webp?itok=OdF9F_80', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Trattamento_Bioattivo_No_Age_PF020960_03.png.webp?itok=rqK7u8ez', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Soluz_Anti_Ossidante_PF020960_04.png.webp?itok=Wxv9tH3n'],
    url: 'https://www.dibimilano.com/en-en/face/products/acid-infusion/no-age-bioactivating-treatment',
    slug: 'no-age-bioactivating-treatment'
  },
  {
    name: 'No-Age Restructuring Cream* SPF30/PA++',
    line: 'ACID INFUSION',
    description: '',
    ingredients: 'AQUA (WATER), DIBUTYL ADIPATE, POLYSORBATE 20, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, ETHYLHEXYL METHOXYCINNAMATE, CETEARYL ALCOHOL, ETHYLHEXYL SALICYLATE, PROPYLENE GLYCOL, ALUMINUM STARCH OCTENYLSUCCINATE, ETHOXYDIGLYCOL, LINSEED ACID, GLYCYRRHETINIC ACID, CETEARYL GLUCOSIDE, ETHYLHEXYL TRIAZONE, POTASSIUM CETYL PHOSPHATE, PHENOXYETHANOL, HYDROXYACETOPHENONE, PARFUM (FRAGRANCE), ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TETRASODIUM EDTA, SODIUM HYDROXIDE, HYDROXYCITRONELLAL, BENZYL SALICYLATE, LIMONENE, CITRONELLOL, ALPHA-ISOMETHYL IONONE, HEXYL CINNAMAL, CAPRYLYL GLYCOL, CITRAL, ACETYL HEXAPEPTIDE-8',
    directions: 'Apply to the face and neck during the day, massaging until fully absorbed.',
    images: ['product-images\\no-age-restructuring-cream-spf30pa_1.jpg', 'product-images\\no-age-restructuring-cream-spf30pa_2.jpg', 'product-images\\no-age-restructuring-cream-spf30pa_3.jpg', 'product-images\\no-age-restructuring-cream-spf30pa_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Ristrutturante_No_Age_PF020959_00.png.webp?itok=j_8hsjRZ', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Ristrutturante_No_Age_PF020959_01.png.webp?itok=oI9R21GB', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Ristrutturante_No_Age_PF020959_02.png.webp?itok=GkH5o6KC', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Ristrutturante_No_Age_PF020959_03.png.webp?itok=QMBSyJNW'],
    url: 'https://www.dibimilano.com/en-en/face/products/acid-infusion/no-age-restructuring-cream-spf30pa',
    slug: 'no-age-restructuring-cream-spf30pa'
  },
  {
    name: 'Peeling Night Cream: Anti Aging Night Cream',
    line: 'ACID INFUSION',
    description: '',
    ingredients: 'AQUA (WATER), ISONONYL ISONONANOATE , ISOPROPYL PALMITATE, PYRUVIC ACID, CETEARYL ALCOHOL, PENTYLENE GLYCOL, ARACHIDYL ALCOHOL, SODIUM HYDROXIDE, BEHENYL ALCOHOL, PEG-20 STEARATE, PARFUM (FRAGRANCE), PHENOXYETHANOL, ARACHIDYL GLUCOSIDE, POTASSIUM CETYL PHOSPHATE , XANTHAN GUM, ALLANTOIN, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, TETRASODIUM EDTA, POLYSORBATE 60, SQUALANE, TOCOPHERYL ACETATE, HYDROXYCITRONELLAL, BENZYL SALICYLATE, LIMONENE, CITRONELLOL, ALPHA-ISOMETHYL IONONE, HEXYL CINNAMAL, CITRAL',
    directions: 'Apply to the face and neck in the evening, massaging until fully absorbed. For more sensitive skin, apply on alternate evenings for the first week.',
    images: ['product-images\\peeling-night-cream_1.jpg', 'product-images\\peeling-night-cream_2.jpg', 'product-images\\peeling-night-cream_3.jpg', 'product-images\\peeling-night-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Peeling_Notte_PF020958_00.png.webp?itok=x-Nu3xnq', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Peeling_Notte_PF020958_01.png.webp?itok=IL5Uqo05', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Peeling_Notte_PF020958_Texture_02.png.webp?itok=RmUJrp1g', '/sites/default/files/styles/large/public/media-image-p/DIBI_Acid_Infusion_Crema_Peeling_Notte_PF020958_03.png.webp?itok=4Ckc-nrF'],
    url: 'https://www.dibimilano.com/en-en/face/products/acid-infusion/peeling-night-cream',
    slug: 'peeling-night-cream'
  },
  {
    name: 'INTENSE BIOSTIMULANT CREAM',
    line: 'BIOSTIMULATING SYSTEM LAB',
    description: '',
    ingredients: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, ISONONYL ISONONANOATE , GLYCERIN, GLUCONOLACTONE, PROPANEDIOL, OCTYLDODECANOL, GLYCERYL GLUCOSIDE, GLYCERYL DIBEHENATE, CERA ALBA (BEESWAX), TRIBEHENIN, OCTYLDODECYL XYLOSIDE, PEG-30 DIPOLYHYDROXYSTEARATE, MAGNESIUM SULFATE, SODIUM HYDROXIDE, GLYCERYL BEHENATE, XANTHAN GUM, HYDROGENATED PALM OIL, SACCHAROMYCES/COPPER FERMENT, SACCHAROMYCES/IRON FERMENT, SACCHAROMYCES/MAGNESIUM FERMENT, SACCHAROMYCES/ZINC FERMENT, SACCHAROMYCES/SILICON FERMENT, LEUCONOSTOC/RADISH ROOT FERMENT FILTRATE, AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, SODIUM HYALURONATE',
    directions: 'Unlock the applicator by turning the base until clicked and press to dispense the product. Apply to face, neck and décolleté and massage until completely absorbed. Once opened, store the product in the refrigerator and use it within 8 days after opening. Exclusive external use. Not injectable. Store the product in a dry place, away from direct sources of light and heat. A possible color variation is to be considered normal and does not indicate an alteration of the product. Avoid contact with eyes. Keep out of the reach and sight of children. To be used by: see expiry date on the side of the package.',
    images: ['product-images\\intense-biostimulant-cream_1.jpg', 'product-images\\intense-biostimulant-cream_2.jpg', 'product-images\\intense-biostimulant-cream_3.jpg', 'product-images\\intense-biostimulant-cream_4.jpg', 'product-images\\intense-biostimulant-cream_5.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_CremaIntensaBiostimolante_PF029911_00.png.webp?itok=rhkZO_eW', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_CremaIntensaBiostimolante_PF029911_01.png.webp?itok=b_Tq0opC', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_CremaIntensaBiostimolante_PF029911_02.png.webp?itok=vx5jNFCO', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_CremaIntensaBiostimolante_PF029911_03.png.webp?itok=gMIqFwJH', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_CremaIntensaBiostimolante_PF029911_04.png.webp?itok=eGDUSUyh'],
    url: 'https://www.dibimilano.com/en-en/face/products/biostimulating-system-lab/intense-biostimulant-cream',
    slug: 'intense-biostimulant-cream'
  },
  {
    name: 'Biostimulating Eye Contour',
    line: 'BIOSTIMULATING SYSTEM LAB',
    description: '',
    ingredients: 'AQUA (WATER), AMMONIUM ACRYLOYLDIMETHYLTAURATE/VP COPOLYMER, CAFFEINE, SODIUM HYALURONATE, AMINOBUTYRIC ACID',
    directions: 'Open the applicator unscrewing the cap, apply approximately 0.2 ml of product once daily on the eye contour and massage until completely absorbed.',
    images: ['product-images\\biostimulating-eye-contour_1.jpg', 'product-images\\biostimulating-eye-contour_2.jpg', 'product-images\\biostimulating-eye-contour_3.jpg', 'product-images\\biostimulating-eye-contour_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_ContornoOcchiBiostimolante_PF027534_01.png.webp?itok=50Xx5Xod', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_ContornoOcchiBiostimolante_PF027534_02.png.webp?itok=p1Z88EoA', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_ContornoOcchiBiostimolante_PF027534_03.png.webp?itok=IE-9X6eQ', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_ContornoOcchiBiostimolante_PF027534_04.png.webp?itok=yO5tIfRW'],
    url: 'https://www.dibimilano.com/en-en/face/products/biostimulating-system-lab/biostimulating-eye-contour',
    slug: 'biostimulating-eye-contour'
  },
  {
    name: 'Double Biostimulating Programme: Hyaluronic Acid',
    line: 'BIOSTIMULATING SYSTEM LAB',
    description: '',
    ingredients: 'PURE SONICATED HA SOLUTION: AQUA, AMMONIUM ACRYLOYLDIMETHYLTAURATE/ VP COPOLYMER, SODIUM HYALURONATE VIT C 30% SOLUTION: AQUA, 3-O-ETHYL ASCORBIC ACID, PROPANEDIOL, HYDROXYETHYLCELLULOSE, SODIUM LACTATE, LACTIC ACID, DISODIUM EDTA',
    directions: 'Open the PURE SONICATED HA SOLUTION applicator and apply 0.5ml to the face, then massage until fully absorbed. The next day, follow up with the VIT C 30% applicator and continue on alternating evenings, for a total of 16 evenings. For best results, apply in the evenings. Once opened, store the product in the refrigerator and use within 8 days of openings. For external use only. Do not inject. Store the product in a dry place, away from sources of light and heat. Variations in colour are normal and do not indicate a change in the product. Avoid contact with the eyes. Keep out of reach of children.',
    images: ['product-images\\double-biostimulating-programme_1.jpg', 'product-images\\double-biostimulating-programme_2.jpg', 'product-images\\double-biostimulating-programme_3.jpg', 'product-images\\double-biostimulating-programme_4.jpg', 'product-images\\double-biostimulating-programme_5.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_Retail_PF025984_01.png.webp?itok=y4CieBFe', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_Retail_PF025984_02.png.webp?itok=XjhjMY0Q', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_Retail_PF025984_03.png.webp?itok=LKYg3xdd', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_Retail_PF025984_04.png.webp?itok=y3r6tJIR', '/sites/default/files/styles/large/public/media-image-p/DIBI_BiostimulatingSystemLab_Retail_PF025984_05.png.webp?itok=UYPPyIAj'],
    url: 'https://www.dibimilano.com/en-en/face/products/biostimulating-system-lab/double-biostimulating-programme',
    slug: 'double-biostimulating-programme'
  },
  {
    name: 'BIO-FERMENTED COLLAGEN EYE AND LIP CONTOUR CREAM',
    line: 'COLLAGE SYSTEM LAB',
    description: '',
    ingredients: 'AQUA (WATER), BUTYROSPERMUM PARKII (SHEA) BUTTER, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, PENTYLENE GLYCOL, SORBITAN OLIVATE, CETYL PALMITATE, SORBITAN PALMITATE, BUTYLENE GLYCOL, GLYCERIN, CETEARYL OLIVATE, PYRUS MALUS (APPLE) FRUIT EXTRACT, JOJOBA ESTERS, CAFFEINE, HYDROGENATED LECITHIN, HYDROXYACETOPHENONE, TOCOPHERYL ACETATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED WAX, SILICA, XANTHAN GUM, PROPANEDIOL, PHOSPHOLIPIDS, LACTOBACILLUS FERMENT, CI 77891 (TITANIUM DIOXIDE), SODIUM PCA, SODIUM HYDROXIDE, PHYTIC ACID, ERYTHRITOL, ACACIA DECURRENS FLOWER WAX, POLYGLYCERIN-3, CHONDRUS CRISPUS, 1,2-HEXANEDIOL, GENTIANA LUTEA ROOT EXTRACT, SOLUBLE COLLAGEN, CI 77491 (IRON OXIDES), OLIGOPEPTIDE-1',
    directions: 'Apply and massage onto the eye and lip contour. Avoid contact with eyes.',
    images: ['product-images\\bio-fermented-collagen-eye-and-lip-contour-cream_1.jpg', 'product-images\\bio-fermented-collagen-eye-and-lip-contour-cream_2.jpg', 'product-images\\bio-fermented-collagen-eye-and-lip-contour-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_ContonoOcchiLabbraCollagene_PF028077_00.png.webp?itok=_Lns9X9e', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_ContonoOcchiLabbraCollagene_PF028077_02.png.webp?itok=hxTUEemW', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_ContonoOcchiLabbraCollagene_PF028077_03.png.webp?itok=5UyjGWLb'],
    url: 'https://www.dibimilano.com/en-en/face/products/collage-system-lab/bio-fermented-collagen-eye-and-lip-contour-cream',
    slug: 'bio-fermented-collagen-eye-and-lip-contour-cream'
  },
  {
    name: 'BIO-FERMENTED COLLAGEN CREAM',
    line: 'COLLAGE SYSTEM LAB',
    description: '',
    ingredients: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, C12-15 ALKYL BENZOATE, TRITICUM VULGARE (WHEAT) GERM&nbsp; OIL, CETEARYL ALCOHOL, BUTYROSPERMUM PARKII (SHEA) BUTTER, DIMETHICONE, GLYCERIN, ETHYLHEXYL STEARATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, GLYCERYL STEARATE, JOJOBA ESTERS, SODIUM STEAROYL GLUTAMATE, PHENOXYETHANOL, SILICA, BUTYLENE GLYCOL, PYRUS MALUS (APPLE) FRUIT EXTRACT, GLYCERYL DIBEHENATE, CELLULOSE, HYDROXYACETOPHENONE, SODIUM POLYACRYLATE, HELIANTHUS ANNUUS (SUNFLOWER) SEED WAX, TRIBEHENIN, CI 77891 (TITANIUM DIOXIDE), POLYSILICONE-11, GLYCERYL BEHENATE, PHOSPHOLIPIDS, TETRASODIUM EDTA, LACTOBACILLUS FERMENT, HYDROGENATED LECITHIN, CASSIA ANGUSTIFOLIA SEED POLYSACCHARIDE, COCOS NUCIFERA (COCONUT) OIL, VITIS VINIFERA (GRAPE) SEED OIL, LECITHIN, POLYGLYCERIN-3, CI 77491 (IRON OXIDES), TOCOPHEROL, 1,2-HEXANEDIOL, HYDROXYETHYLCELLULOSE, SOLUBLE COLLAGEN, ASCORBYL PALMITATE, DECYL GLUCOSIDE, CAPRYLYL GLYCOL, HEXYLENE GLYCOL, CHAMOMILLA RECUTITA (MATRICARIA) FLOWER EXTRACT, GARDENIA TAITENSIS FLOWER EXTRACT, CITRIC ACID, OLIGOPEPTIDE-1',
    directions: 'Apply and massage onto face, neck and décolleté.',
    images: ['product-images\\bio-fermented-collagen-cream_1.jpg', 'product-images\\bio-fermented-collagen-cream_2.jpg', 'product-images\\bio-fermented-collagen-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_CremaCollagene_PF028076_00.png.webp?itok=RtKB0kmW', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_CremaCollagene_PF028076_02.png.webp?itok=j6dTK5Us', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_CremaCollagene_PF028076_03.png.webp?itok=Copi4H-g'],
    url: 'https://www.dibimilano.com/en-en/face/products/collage-system-lab/bio-fermented-collagen-cream',
    slug: 'bio-fermented-collagen-cream'
  },
  {
    name: 'Double Biostimulating Collagen Programme',
    line: 'COLLAGE SYSTEM LAB',
    description: '',
    ingredients: 'AQUA (WATER), C10-18 TRIGLYCERIDES, CAPRYLIC/CAPRIC TRIGLYCERIDE, POLYGLYCERYL-6 DISTEARATE, CETEARYL ALCOHOL, DIMETHICONE, PHENOXYETHANOL, BUTYLENE GLYCOL, ORYZA SATIVA (RICE) BRAN OIL, SODIUM HYALURONATE, JOJOBA ESTERS, SODIUM POLYACRYLATE, HYDROXYACETOPHENONE, POLYMETHYLSILSESQUIOXANE, GLYCERIN, SESAMUM INDICUM (SESAME) SEED OIL, CETYL ALCOHOL, POLYGLYCERYL-3 BEESWAX, TETRASODIUM EDTA, XANTHAN GUM, 1,2-HEXANEDIOL, SOLUBLE COLLAGEN, OLIGOPEPTIDE-1',
    directions: 'After cleansing, morning and evening, apply 1 ml of BIOFERMENTED COLLAGEN SOLUTION (equal to four product applications) to the face, neck and décolletage. To be used for 15 consecutive days. Then continue for the next 15 days with OLIGOPEPTIDE I + BIOFERMENTED COLLAGEN SOLUTION. Unscrew the nozzle and replace the inner bottle. After cleansing, morning and evening, apply 1 ml of OLIGOPEPTIDE I + BIOFERMENTED COLLAGEN SOLUTION (equal to four product applications) to the face, neck and décolletage.',
    images: ['product-images\\double-biostimulating-collagen-programme_1.jpg', 'product-images\\double-biostimulating-collagen-programme_2.jpg', 'product-images\\double-biostimulating-collagen-programme_3.jpg', 'product-images\\double-biostimulating-collagen-programme_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_PF026349_00.png.webp?itok=GgtayNBK', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_PF026349_01.png.webp?itok=miITWUAY', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_PF026349_02.png.webp?itok=_40MUlo5', '/sites/default/files/styles/large/public/media-image-p/DIBI_CollageSystemLab_PF026349_03.png.webp?itok=oB0aqrQA'],
    url: 'https://www.dibimilano.com/en-en/face/products/collage-system-lab/double-biostimulating-collagen-programme',
    slug: 'double-biostimulating-collagen-programme'
  },
  {
    name: 'Soothing Anti-Redness Cream: Sensitive Skincare',
    line: 'CREME AND COSMETICS DEFENCE SOLUTION',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, ETHYLHEXYL METHOXYCINNAMATE, C12-15 ALKYL BENZOATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, TITANIUM DIOXIDE, ETHYLHEXYL SALICYLATE, SODIUM ACRYLATES COPOLYMER, COCO-CAPRYLATE/CAPRATE, HAMAMELIS VIRGINIANA (WITCH HAZEL) LEAF WATER, PHENOXYETHANOL, HYDROXYACETOPHENONE, PANTHENOL, THEOBROMA GRANDIFLORUM SEED BUTTER, LECITHIN, APRICOT KERNEL OIL POLYGLYCERYL-6 ESTERS, CI 77163 (BISMUTH OXYCHLORIDE), NIACINAMIDE, POLYGLYCERYL-10 OLEATE, TETRASODIUM EDTA, SODIUM LAUROYL LACTYLATE, SODIUM PCA, HYDROLYZED GARCINIA MANGOSTANA FRUIT EXTRACT, CETYL PHOSPHATE, SORBITAN PALMITATE, SACCHAROMYCES/ZINC FERMENT, ERYTHRITOL, CHONDRUS CRISPUS, CERAMIDE NP, CI 75810 (CHLOROPHYLLIN-COPPER COMPLEX), MAGNOLOL, HONOKIOL, XANTHAN GUM, SODIUM HYDROXIDE, PHYTOSPHINGOSINE, CERAMIDE AP, CHOLESTEROL, ETHYLHEXYLGLYCERIN, CARBOMER, TETRASODIUM GLUTAMATE DIACETATE, TOCOPHEROL, CERAMIDE EOP',
    directions: 'Apply to the skin and massage until fully absorbed.',
    images: ['product-images\\soothing-anti-redness-cream_1.jpg', 'product-images\\soothing-anti-redness-cream_2.jpg', 'product-images\\soothing-anti-redness-cream_3.jpg', 'product-images\\soothing-anti-redness-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrLenAntirossori_PF022678_00.png.webp?itok=f0g5xq7f', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrLenAntirossori_PF022678_Tub_50_ml_01.png.webp?itok=XmU3Qhlr', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrLenAntirossori_PF022678_Ast_50_ml_02.png.webp?itok=5QsJg8nO', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrLenAntirossori_PF022678_03.png.webp?itok=hgNNhatR'],
    url: 'https://www.dibimilano.com/en-en/face/products/creme-and-cosmetics-defence-solution/soothing-anti-redness-cream',
    slug: 'soothing-anti-redness-cream'
  },
  {
    name: 'Hydrating Repair Cream: Sensitive Skin Care',
    line: 'CREME AND COSMETICS DEFENCE SOLUTION',
    description: '',
    ingredients: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, VEGETABLE OIL, COCO-CAPRYLATE/CAPRATE, GLYCERIN, ORYZANOL, SODIUM POLYACRYLATE, THEOBROMA GRANDIFLORUM SEED BUTTER, HAMAMELIS VIRGINIANA (WITCH HAZEL) LEAF WATER, PHENOXYETHANOL, HYDROXYACETOPHENONE, PANTHENOL, NIACINAMIDE, HYDROXYETHYLCELLULOSE, TETRASODIUM EDTA, APRICOT KERNEL OIL POLYGLYCERYL-6 ESTERS, POTASSIUM CETYL PHOSPHATE , POLYGLYCERYL-10 OLEATE, SODIUM LAUROYL LACTYLATE, SODIUM PCA, HYDROLYZED GARCINIA MANGOSTANA FRUIT EXTRACT, CETYL PHOSPHATE, SORBITAN PALMITATE, GLYCERYL ACRYLATE/ACRYLIC ACID COPOLYMER, SODIUM HYDROXIDE, SACCHAROMYCES/ZINC FERMENT, ERYTHRITOL, PVM/MA COPOLYMER, CHONDRUS CRISPUS, CERAMIDE NP, MAGNOLOL, HONOKIOL, XANTHAN GUM, PHYTOSPHINGOSINE, CERAMIDE AP, CHOLESTEROL, ETHYLHEXYLGLYCERIN, CARBOMER, TETRASODIUM GLUTAMATE DIACETATE, TOCOPHEROL, CERAMIDE EOP',
    directions: 'Apply to the skin and massage until fully absorbed.',
    images: ['product-images\\hydrating-repair-cream_1.jpg', 'product-images\\hydrating-repair-cream_2.jpg', 'product-images\\hydrating-repair-cream_3.jpg', 'product-images\\hydrating-repair-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrRipIdratante_PF022677_00.png.webp?itok=y3QgIMeL', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrRipIdratante_PF022677_Vas_50_ml_01.png.webp?itok=H3jyJMyk', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrRipIdratante_PF022677_Ast_50_ml_02.png.webp?itok=Rd0DrQwo', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_CrRipIdratante_PF022677_03.png.webp?itok=y1I8AHmd'],
    url: 'https://www.dibimilano.com/en-en/face/products/creme-and-cosmetics-defence-solution/hydrating-repair-cream',
    slug: 'hydrating-repair-cream'
  },
  {
    name: 'Ceramide-Enriched Micellar Water: Sensitive Skin',
    line: 'CREME AND COSMETICS DEFENCE SOLUTION',
    description: '',
    ingredients: 'AQUA (WATER), PEG-8 CAPRYLIC/CAPRIC GLYCERIDES, BUTYLENE GLYCOL, PENTYLENE GLYCOL, HAMAMELIS VIRGINIANA (WITCH HAZEL) LEAF WATER, PHENOXYETHANOL, GLYCERIN, PANTHENOL, NIACINAMIDE, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, APRICOT KERNEL OIL POLYGLYCERYL-6 ESTERS, SODIUM HYDROXIDE, POLYGLYCERYL-10 OLEATE, SODIUM LAUROYL LACTYLATE, HYDROLYZED GARCINIA MANGOSTANA FRUIT EXTRACT, CETYL PHOSPHATE, SORBITAN PALMITATE, SACCHAROMYCES/ZINC FERMENT, SODIUM DILAURAMIDOGLUTAMIDE LYSINE, CERAMIDE NP, MAGNOLOL, HONOKIOL, ETHYLHEXYLGLYCERIN, PHYTOSPHINGOSINE, CERAMIDE AP, CHOLESTEROL, TETRASODIUM GLUTAMATE DIACETATE, XANTHAN GUM, CARBOMER, CERAMIDE EOP',
    directions: 'Apply with cotton rounds or your fingertips, massage, then rinse.',
    images: ['product-images\\ceramide-enriched-micellar-water_1.jpg', 'product-images\\ceramide-enriched-micellar-water_2.jpg', 'product-images\\ceramide-enriched-micellar-water_3.jpg', 'product-images\\ceramide-enriched-micellar-water_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_AcquaMicellareCeramidi_PF022676_00.png.webp?itok=er-fAAjH', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_AcquaMicellareCeramidi_PF022676_Fla_200_ml_01.png.webp?itok=l8cJCLZF', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_AcquaMicellareCeramidi_PF022676_Ast_200_ml_02.png.webp?itok=y0o-3Jn7', '/sites/default/files/styles/large/public/media-image-p/DIBI_DefenceSolution_AcquaMicellareCeramidi_PF022676_03.png.webp?itok=N3JhaZ_x'],
    url: 'https://www.dibimilano.com/en-en/face/products/creme-and-cosmetics-defence-solution/ceramide-enriched-micellar-water',
    slug: 'ceramide-enriched-micellar-water'
  },
  {
    name: 'Triphasic Micellar Water: Skin Care Products',
    line: 'FACE PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER),HYDROGENATED POLYDECENE, DIMETHICONE, ISOHEXADECANE, GLYCERIN, PENTYLENE GLYCOL,PEG-8 CAPRYLIC/CAPRIC GLYCERIDES, PHENOXYETHANOL, POLOXAMER 184, SODIUM CHLORIDE,ALOE BARBADENSIS LEAF JUICE, LACTOCOCCUS FERMENT LYSATE, SACCHARIDE ISOMERATE, CAPRYLIC/CAPRIC TRIGLYCERIDE,TETRASODIUM EDTA,CASSIA ANGUSTIFOLIA SEED POLYSACCHARIDE, SODIUM SULFATE,LACTIC ACID,CITRIC ACID,SODIUM CITRATE,SODIUM BENZOATE,HYDROXYETHYLCELLULOSE, VEGETABLE OIL, POTASSIUM SORBATE,CI 17200 (RED 33)',
    directions: 'Shake the bottle thoroughly to mix the three phases well. Apply to face, eyes, lips, neck and décolleté with cotton disks. Rinse if necessary.',
    images: ['product-images\\triphasic-micellar-water_1.jpg', 'product-images\\triphasic-micellar-water_2.jpg', 'product-images\\triphasic-micellar-water_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Acqua_micellare_trifasica_PF020238_00.png.webp?itok=Xt8-S7V7', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Acqua_micellare_trifasica_PF020238_200ml_Dibimilano_2000x2000_01.png.webp?itok=eqt6ZnCq', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Acqua_micellare_trifasica_PF020238_200ml_pack_Dibimilano_2000x2000_02.png.webp?itok=pgEnwse7'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-perfection/triphasic-micellar-water',
    slug: 'triphasic-micellar-water'
  },
  {
    name: 'Essential Revitalizing Toner: Skin Care Products',
    line: 'FACE PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER),GLYCERIN,PROPYLENE GLYCOL,ALOE BARBADENSIS LEAF JUICE PHENOXYETHANOL SACCHARIDE ISOMERATE PPG-26-BUTETH-26 HYDROXYACETOPHENONE PANTHENOL,CUCUMIS SATIVUS (CUCUMBER) FRUIT EXTRACT PEG-40 HYDROGENATED CASTOR OIL TETRASODIUM EDTA,CAPRYLIC/CAPRIC TRIGLYCERIDE LACTOCOCCUS FERMENT LYSATE,CITRIC ACID,CARNOSINE,PARFUM (FRAGRANCE),CASSIA ANGUSTIFOLIA SEED POLYSACCHARIDE SODIUM CITRATE,BENZYL SALICYLATE,SODIUM BENZOATE HYDROXYETHYLCELLULOSE,POTASSIUM SORBATE,LINALOOL,LACTIC ACID,VEGETABLE OIL,SODIUM CHLORIDE,CI 17200 (RED 33)',
    directions: 'Apply on face, neck and décolleté with cotton pads, tapping on the skin.',
    images: ['product-images\\essential-revitalizing-toner_1.jpg', 'product-images\\essential-revitalizing-toner_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Tonico_Essenziale_Rivitalizzante_PF020236_00.png.webp?itok=95Yl6zcD', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Tonico_Essenziale_Rivitalizzante_PF020236_200ml_Dibimilano_2000x2000_01.png.webp?itok=HDbSCo4g'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-perfection/essential-revitalizing-toner',
    slug: 'essential-revitalizing-toner'
  },
  {
    name: 'Biomechanic Reactivating Scrub: Skincare products',
    line: 'FACE PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER),CETEARYL ALCOHOL,CAPRYLIC/CAPRIC TRIGLYCERIDE,C12-15 ALKYL BENZOATE,GLYCERIN,ORYZA SATIVA (RICE) BRAN OIL,PROPYLENE GLYCOL,CELLULOSE,POTASSIUM CETYL PHOSPHATE,CETEARYL GLUCOSIDE,SILICA,GLYCOLIPIDS,PHENOXYETHANOL,HYDROXYACETOPHENONE,JOJOBA ESTERS,ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER LACTOCOCCUS FERMENT LYSATE,PARFUM (FRAGRANCE),TETRASODIUM EDTA,SODIUM HYDROXIDE,PAPAIN,LECITHIN,CASSIA ANGUSTIFOLIA SEED POLYSACCHARIDE SODIUM BENZOATE,BENZYL SALICYLATE,CALCIUM PANTOTHENATE,XANTHAN GUM,TOCOPHEROL,ASCORBYL PALMITATE,CAPRYLYL GLYCOL,UREA,MAGNESIUM LACTATE,ETHYLHEXYLGLYCERIN,CI 73360 (RED 30),TALC,VEGETABLE OIL,HYDROXYETHYLCELLULOSE,POTASSIUM LACTATE,LACTIC ACID,SODIUM CHLORIDE,ALANINE,MAGNESIUM CHLORIDE,PROLINE,SERINE,CITRIC ACID ,SODIUM CITRATE ,CI 17200 (RED 33)',
    directions: 'Apply to face, neck and neckline and massage gently, then rinse.',
    images: ['product-images\\biomechanic-reactivating-scrub_1.jpg', 'product-images\\biomechanic-reactivating-scrub_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Scrub_riattivatore_PF020234_00.png.webp?itok=V7K_MiFe', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Scrub_riattivatore_PF020234_100ml_Dibimilano_2000x2000_01.png.webp?itok=5yRgK_sN'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-perfection/biomechanic-reactivating-scrub',
    slug: 'biomechanic-reactivating-scrub'
  },
  {
    name: 'Youth Extreme Cream Cleanser: Cleansing Cream',
    line: 'FACE PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), COCO-CAPRYLATE/CAPRATE, PROPYLENE GLYCOL, PENTYLENE GLYCOL, C12-15 ALKYL BENZOATE, ALOE BARBADENSIS LEAF JUICE, GLYCERIN, SODIUM CHLORIDE, SACCHARIDE ISOMERATE, PANTHENOL, PARFUM (FRAGRANCE), NIACINAMIDE, RETINYL PALMITATE, TOCOPHERYL ACETATE, CARNOSINE, SODIUM BENZOATE, LINALOOL, GERANIOL, LIMONENE, HYDROLYZED RICE PROTEIN, SODIUM HYALURONATE CROSSPOLYMER, POTASSIUM SORBATE, CITRIC ACID, SODIUM CITRATE, CI 17200 (RED 33)',
    directions: 'Apply to face, neck and neckline and massage gently, then rinse.',
    images: ['product-images\\youth-extreme-cream-cleanser_1.jpg', 'product-images\\youth-extreme-cream-cleanser_2.jpg', 'product-images\\youth-extreme-cream-cleanser_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Face_Perfection_CremaDetergenteGiovinezzaEstrema_PF020242_00.png.webp?itok=YabhzJ4H', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_CremaDetergenteGiovinezzaEstrema_PF020242_01.png.webp?itok=7rui-mZR', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_CremaDetergenteGiovinezzaEstrema_PF020242_02.png.webp?itok=ELBajKYR'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-perfection/youth-extreme-cream-cleanser',
    slug: 'youth-extreme-cream-cleanser'
  },
  {
    name: 'Youth Extreme Bi-Phase Tonic: Skin Care Products',
    line: 'FACE PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), C12-15 ALKYL BENZOATE, GLYCERIN, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERYL STEARATE, PEG-90 STEARATE, POLOXAMER 184, TRITICUM VULGARE (WHEAT) GERM OIL, CETEARYL ALCOHOL, TRIETHYLHEXANOIN, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, PHENOXYETHANOL, ISOHEXADECANE, DIMETHICONE, ETHYLHEXYLGLYCERIN, PANTHENOL, ALOE BARBADENSIS LEAF JUICE, ALLANTOIN, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, NIACINAMIDE, TRIETHANOLAMINE, SODIUM PCA, TETRASODIUM EDTA, POLYSORBATE 60, GLUCOSE, HYDROGENATED LECITHIN, MAGNESIUM ASCORBYL PHOSPHATE, POLYSORBATE 20, PARFUM (FRAGRANCE), SORBITAN ISOSTEARATE, CARNOSINE, GLYCINE, PENTYLENE GLYCOL, LECITHIN, GLUTAMIC ACID, LYSINE, HYDROXYPROPYL CYCLODEXTRIN, CITRIC ACID, TOCOPHEROL, SODIUM BENZOATE, ASCORBYL PALMITATE, RETINOL, POTASSIUM SORBATE, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, SODIUM METABISULFITE, BHA, BHT, CI 17200 (RED 33)',
    directions: 'Shake the bottle well to mix the two phases. Soak a cotton pad with the lotion and dab over face, neck and neckline after cleansing.',
    images: ['product-images\\youth-extreme-bi-phase-tonic_1.jpg', 'product-images\\youth-extreme-bi-phase-tonic_2.jpg', 'product-images\\youth-extreme-bi-phase-tonic_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/FACE_PERFECTION_Tonico_Bifasico_Giovinezza_Estrema_PF020240_00.png.webp?itok=fbpWyK9p', '/sites/default/files/styles/large/public/media-image-p/FACE_PERFECTION_Tonico_Bifasico_Giovinezza_Estrema_PF020240_Fla_251_2000x2000_01.png.webp?itok=uvT5tShp', '/sites/default/files/styles/large/public/media-image-p/FACE_PERFECTION_Tonico_Bifasico_Giovinezza_Estrema_PF020240_Ast_251_2000x2000_02.png.webp?itok=OQBL4m68'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-perfection/youth-extreme-bi-phase-tonic',
    slug: 'youth-extreme-bi-phase-tonic'
  },
  {
    name: 'Nourishing Cleansing Milk: Skin Care Products',
    line: 'FACE PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER),CAPRYLIC/CAPRIC TRIGLYCERIDE,VEGETABLE OIL,GLYCERIN,TRIETHYLHEXANOIN,COCOGLYCERIDES,LAURYL GLUCOSIDE,POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE SODIUM POLYACRYLATE,PHENOXYETHANOL,HYDROXYACETOPHENONE,LACTOCOCCUS FERMENT LYSATE TETRASODIUM EDTA,SODIUM HYDROXIDE,XANTHAN GUM,PARFUM (FRAGRANCE),CASSIA ANGUSTIFOLIA SEED POLYSACCHARIDE HYDROXYETHYLCELLULOSE,LACTIC ACID,SODIUM CHLORIDE,SODIUM BENZOATE',
    directions: 'Apply on the eyes using cotton pads; on face, neck and décolleté apply and massage, then rinse.',
    images: ['product-images\\nourishing-cleansing-milk_1.jpg', 'product-images\\nourishing-cleansing-milk_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Latte_Detergente_Nutriente_PF020232_00.png.webp?itok=VoQXTme8', '/sites/default/files/styles/large/public/media-image-p/Face_Perfection_Latte_Detergente_Nutriente_PF020232_200ml_Dibimilano_2000x2000_01.png.webp?itok=JWNw9MPt'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-perfection/nourishing-cleansing-milk',
    slug: 'nourishing-cleansing-milk'
  },
  {
    name: 'Sublime Eye Contour and Lip Filler: Anti Wrinkle',
    line: 'FILLER CODE COSMETIC EFFECT FILLERS',
    description: '',
    ingredients: 'AQUA (WATER), C12-20 ACID PEG-8 ESTER, GLYCERIN, DIBUTYL ADIPATE, BUTYROSPERMUM PARKII (SHEA BUTTER), C10-18 TRIGLYCERIDES, CAPRYLIC/CAPRIC TRIGLYCERIDE, COCOGLYCERIDES, CETEARYL ALCOHOL, DIMETHICONE, PENTAERYTHRITYL TETRAISOSTEARATE, PHENOXYETHANOL, BUTYLENE GLYCOL, CAFFEINE, HYDROXYACETOPHENONE, TOCOPHERYL ACETATE, SILICA, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) SEED EXTRACT, PANTHENOL, TETRASODIUM EDTA, CI 77891 (TITANIUM DIOXIDE), LECITHIN, AMMONIUM GLYCYRRHIZATE, ESCIN, RUSCUS ACULEATUS ROOT EXTRACT, TEPRENONE, SILICA DIMETHYL SILYLATE, HESPERIDIN METHYL CHALCONE, PENTYLENE GLYCOL, ETHYLHEXYLGLYCERIN, STEARETH-20, CI 77491 (IRON OXIDES), TOCOPHEROL, SODIUM CHONDROITIN SULFATE, CALENDULA OFFICINALIS FLOWER EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED YEAST PROTEIN, PALMITOYL TRIPEPTIDE-5, METHYLSILANOL HYDROXYPROLINE ASPARTATE, ASCORBYL PALMITATE, ATELOCOLLAGEN, SALICYLIC ACID, POTASSIUM SORBATE, CITRIC ACID, DIPEPTIDE-2, PALMITOYL TETRAPEPTIDE-7',
    directions: '\"Apply morning and evening to eye and lips contour area. Use the provided spatula as the last step of your daily beauty routine. A) With one hand, slightly pull the side where you are performing the massage in the ear / temple area. E) With slight pressure, slide the flat end of the spatula in the undereye area, from the inner corner to the outer one. F) Massage using spiral movements from the outer corner of the eye towards the temples, using the ball end of the spatula. G) Press the ball end of the spatula in the area under the eyebrows near the bridge of the nose, then move it along the arch of the eyebrows, tracing around the eye and going back to the starting point, massaging the undereye area. H) Massage the areas above and below the lips, sliding the flat end of the spatula from the centre outwards. Lift the corners of the mouth when working on the bottom lip. \"',
    images: ['product-images\\sublime-eye-contour-and-lip-filler_1.jpg', 'product-images\\sublime-eye-contour-and-lip-filler_2.jpg', 'product-images\\sublime-eye-contour-and-lip-filler_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Contorno_Occhi_e_Labbra_Riempimento_Sublime_PF018471_00.png.webp?itok=4ierzr8_', '/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Contorno_Occhi_e_Labbra_Riempimento_Sublime_PF018471_Vas_15ml_2000x2000_01.png.webp?itok=qp4jpKkA', '/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Contorno_Occhi_e_Labbra_Riempimento_Sublime_PF018471_Ast_15ml_2000x2000_02.png.webp?itok=hCOksXym'],
    url: 'https://www.dibimilano.com/en-en/face/products/filler-code-cosmetic-effect-fillers/sublime-eye-contour-and-lip-filler',
    slug: 'sublime-eye-contour-and-lip-filler'
  },
  {
    name: '&quot;Miracle&quot; Filling Cream: Anti Wrinkle Cream',
    line: 'FILLER CODE COSMETIC EFFECT FILLERS',
    description: '',
    ingredients: 'AQUA (WATER), C12-20 ACID PEG-8 ESTER, C12-15 ALKYL BENZOATE, GLYCERIN, CAPRYLIC/CAPRIC TRIGLYCERIDE, BUTYROSPERMUM PARKII BUTTER (SHEA BUTTER), SILICA, CETEARYL ALCOHOL, COCO-CAPRYLATE/CAPRATE, DIMETHICONE, HYDROGENATED COCO-GLYCERIDES, ISONONYL ISONONANOATE, PHENOXYETHANOL, HYDROXYACETOPHENONE, POLYMETHYLSILSESQUIOXANE, TOCOPHERYL ACETATE, CI 77891 (TITANIUM DIOXIDE) , PARFUM (FRAGRANCE), TETRASODIUM EDTA, SODIUM DEHYDROACETATE, TEPRENONE, CI 77491 (IRON OXIDES), LECITHIN, METHYLSILANOL HYDROXYPROLINE ASPARTATE, TOCOPHEROL, PALMITOYL TRIPEPTIDE-5, ASCORBYL PALMITATE, SALICYLIC ACID, ALPHA-ISOMETHYL IONONE, POTASSIUM SORBATE, CITRIC ACID',
    directions: 'Apply morning and evening to face, neck and decolleté. Use the provided spatula for the last step of your daily beauty routine. A) With one hand, slightly pull the side where you are performing the massage near the ear / temple. B) Press and slide the spatula from the centre of your face outwards to the sides, starting from your forehead and moving down towards your chin. First use the ball end with spiral movements and then the flat end with strokes. C) Repeat on neck and decolleté.',
    images: ['product-images\\miracle-filling-cream_1.jpg', 'product-images\\miracle-filling-cream_2.jpg', 'product-images\\miracle-filling-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Crema_Miracle_di_Riempimento_PF018470_00.png.webp?itok=ruU5wB9y', '/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Crema_Miracle_di_Riempimento_PF018470_Vas_50ml_2000x2000_01.png.webp?itok=zf7KsVUM', '/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Crema_Miracle_di_Riempimento_PF018470_Ast_50ml_2000x2000_02.png.webp?itok=5PeMKr75'],
    url: 'https://www.dibimilano.com/en-en/face/products/filler-code-cosmetic-effect-fillers/miracle-filling-cream',
    slug: 'miracle-filling-cream'
  },
  {
    name: 'Absolute Filling Treatment: Anti Wrinkle Serum',
    line: 'FILLER CODE COSMETIC EFFECT FILLERS',
    description: '',
    ingredients: 'AQUA (WATER), MALTODEXTRIN, GLYCERIN, POLYVINYL ALCOHOL, PHENOXYETHANOL, PPG-26-BUTETH-26, HYDROXYACETOPHENONE, PEG-40 HYDROGENATED CASTOR OIL, SODIUM CHLORIDE, CARNOSINE, SODIUM HYALURONATE, TETRASODIUM EDTA, CAPRYLIC/CAPRIC TRIGLYCERIDE, BIOSACCHARIDE GUM-4, METHYLSILANOL HYDROXYPROLINE ASPARTATE, PALMITOYL TRIPEPTIDE-5, SALICYLIC ACID, POTASSIUM SORBATE, TEPRENONE, CI 17200 (RED 33)',
    directions: 'With the vial-opener, break the cap where it is marked by the ring. Apply to face, eye contour and lips, neck and decolleté, morning and/or evening, before your usual cream.',
    images: ['product-images\\absolute-filling-treatment_1.jpg', 'product-images\\absolute-filling-treatment_2.jpg', 'product-images\\absolute-filling-treatment_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Trattamento_Assoluto_di_Riempimento_PF018469_00.png.webp?itok=IAdMdu5t', '/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Trattamento_Assoluto_di_Riempimento_PF018469_Ast_7x2ml_2000x2000_01.png.webp?itok=3jonQ8Jg', '/sites/default/files/styles/large/public/media-image-p/FILLER_CODE_Trattamento_Assoluto_di_Riempimento_PF018469_Ast_7x2ml_2_2000x2000_02.png.webp?itok=dw3Tlvr7'],
    url: 'https://www.dibimilano.com/en-en/face/products/filler-code-cosmetic-effect-fillers/absolute-filling-treatment',
    slug: 'absolute-filling-treatment'
  },
  {
    name: 'Revitalizing Filling Patch for Eyes and Lips: Antiwrinkle',
    line: 'FILLER CODE COSMETIC EFFECT FILLERS',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, CAFFEINE, PPG-26-BUTETH-26, PHENOXYETHANOL, PEG-40 HYDROGENATED CASTOR OIL, BUTYLENE GLYCOL, HYDROXYACETOPHENONE, CAPRYLIC/CAPRIC TRIGLYCERIDE, SQUALANE, PANTHENOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TETRASODIUM EDTA, SODIUM POLYACRYLATE, SODIUM PCA, SODIUM HYDROXIDE, ERYTHRITOL, AMMONIUM GLYCYRRHIZATE, ESCIN, RUSCUS ACULEATUS ROOT EXTRACT, CHONDRUS CRISPUS, HESPERIDIN METHYL CHALCONE, STEARETH-20, XANTHAN GUM, METHYLSILANOL HYDROXYPROLINE ASPARTATE, TEPRENONE, TOCOPHERYL ACETATE, CALENDULA OFFICINALIS FLOWER EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED YEAST PROTEIN, PALMITOYL TRIPEPTIDE-5, SALICYLIC ACID, POTASSIUM SORBATE, UBIQUINONE, DIPEPTIDE-2, PALMITOYL TETRAPEPTIDE-7',
    directions: 'Apply and leave on for 20 minutes. Then remove and massage any product residue into the skin.',
    images: ['product-images\\revitalising-filling-patch-eyes-and-lips_1.jpg', 'product-images\\revitalising-filling-patch-eyes-and-lips_2.jpg', 'product-images\\revitalising-filling-patch-eyes-and-lips_3.jpg', 'product-images\\revitalising-filling-patch-eyes-and-lips_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Patch_Rivitalizzante_Riempimento_Occhi_Labbra_PF022355_00.png.webp?itok=8EBOQWKY', '/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Patch_Rivitalizzante_Riempimento_Occhi_Labbra_PF022355_ast_01.png.webp?itok=IX3UM1qc', '/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Patch_Rivitalizzante_Riempimento_Occhi_Labbra_PF022355_busta_patch_02.png.webp?itok=RuHK3bz8', '/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Patch_Rivitalizzante_Riempimento_Occhi_Labbra_PF022355_patch_03.png.webp?itok=JTznRl4a'],
    url: 'https://www.dibimilano.com/en-en/face/products/filler-code-cosmetic-effect-fillers/revitalising-filling-patch-eyes-and-lips',
    slug: 'revitalising-filling-patch-eyes-and-lips'
  },
  {
    name: 'Revitalizing Filling Cream: Anti Wrinkle Cream',
    line: 'FILLER CODE COSMETIC EFFECT FILLERS',
    description: '',
    ingredients: 'AQUA (WATER), DICAPRYLYL ETHER, VEGETABLE OIL, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERYL DIBEHENATE, SODIUM POLYACRYLATE, BUTYLENE GLYCOL, C12-15 ALKYL BENZOATE, PHENOXYETHANOL, SILICA, GLYCERIN, TRIBEHENIN, DIMETHICONE, HYDROXYACETOPHENONE, SQUALANE, GLYCERYL BEHENATE, SODIUM STEAROYL GLUTAMATE, XANTHAN GUM, PARFUM (FRAGRANCE), CI 77891 (TITANIUM DIOXIDE), TETRASODIUM EDTA, TEPRENONE, LECITHIN, CI 77491 (IRON OXIDES), SODIUM HYDROXIDE, TOCOPHERYL ACETATE, METHYLSILANOL HYDROXYPROLINE ASPARTATE, TOCOPHEROL, PALMITOYL TRIPEPTIDE-5, ASCORBYL PALMITATE, SALICYLIC ACID, UBIQUINONE, ALPHA-ISOMETHYL IONONE, POTASSIUM SORBATE, CITRIC ACID',
    directions: 'Apply to the face, neck, and chest mornings and evenings. Use the brush that comes with the product as the last step of your daily beauty routine. Hold skin slightly taut on the side to be massaged, near the ear/temple. Apply by running the brush from the centre of the face outwards, moving from the forehead down to the chin. Start with the rounded tip using spiral movements, then brush lightly with the flat tip. Repeat on the neck and chest.',
    images: ['product-images\\revitalizing-filling-cream_1.jpg', 'product-images\\revitalizing-filling-cream_2.jpg', 'product-images\\revitalizing-filling-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Crema_Rivitalizzante_Riempimento_PF022353_00.png.webp?itok=29d8Mo3b', '/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Crema_Rivitalizzante_Riempimento_PF022353_vas50ml_spatola_01.png.webp?itok=PhO-6TIA', '/sites/default/files/styles/large/public/media-image-p/DIBI_FillerCode_Crema_Rivitalizzante_Riempimento_PF022353_astuc_03.png.webp?itok=Q-0n0tel'],
    url: 'https://www.dibimilano.com/en-en/face/products/filler-code-cosmetic-effect-fillers/revitalizing-filling-cream',
    slug: 'revitalizing-filling-cream'
  },
  {
    name: 'Moisturizing Lyocell Mask: Hydrating Face Mask',
    line: 'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), PENTYLENE GLYCOL, BUTYLENE GLYCOL, GLYCERIN, SACCHARIDE ISOMERATE, HYDROXYACETOPHENONE, GLYCERYL GLUCOSIDE, PROPANEDIOL, SODIUM HYALURONATE, TETRASODIUM EDTA, PPG-26-BUTETH-26, PEG-40 HYDROGENATED CASTOR OIL, PARFUM (FRAGRANCE), ARGININE PCA, CITRIC ACID, SODIUM HYALURONATE CROSSPOLYMER, RHEUM PALMATUM ROOT EXTRACT, SODIUM CITRATE',
    directions: 'Remove the mask from the pouch, spread it out. Apply to the face starting from the forehead, arranging the openings for the eyes and mouth properly. Leave it in place for 20 minutes, then remove and massage any product residue.',
    images: ['product-images\\moisturising-lyocell-mask_1.jpg', 'product-images\\moisturising-lyocell-mask_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Maschera_Idratante_Lyocell_PF026345_01.png.webp?itok=EgU0MxnL', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Maschera_Idratante_Lyocell_PF026345_02.png.webp?itok=1qX0pesq'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-moisturizing-and-nourishing-hydra-perfection/moisturising-lyocell-mask',
    slug: 'moisturising-lyocell-mask'
  },
  {
    name: 'Extreme Moisture Concentrate with Hyaluronic Acid',
    line: 'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), BUTYLENE GLYCOL, DIMETHICONE, GLYCERIN, PROPYLENE GLYCOL, METHYLPROPANEDIOL, BIS-PEG-15 METHYL ETHER DIMETHICONE, PHENOXYETHANOL, SACCHARIDE ISOMERATE, CETEARYL OLIVATE, SODIUM HYALURONATE, PEG-40 HYDROGENATED CASTOR OIL, UREA, SORBITAN OLIVATE, POLYSILICONE-11, SODIUM POLYACRYLATE, CAPRYLYL GLYCOL, TETRASODIUM EDTA, PARFUM (FRAGRANCE), DIMETHICONOL, BENZOPHENONE-4, PROPANEDIOL, SODIUM DILAURAMIDOGLUTAMIDE LYSINE, PHENYLPROPANOL, PENTYLENE GLYCOL, DECYL GLUCOSIDE, CITRIC ACID, SODIUM CITRATE, ALPHA-ISOMETHYL IONONE, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, RHEUM PALMATUM ROOT EXTRACT, BENZYL SALICYLATE, CI 17200 (RED 33), CI 42090 (BLUE 1)',
    directions: 'Apply before the Cream or Gel, to well-cleansed face, neck and decolleté. Repeat morning and evening.',
    images: ['product-images\\extreme-moisturisation-concentrate_1.jpg', 'product-images\\extreme-moisturisation-concentrate_2.jpg', 'product-images\\extreme-moisturisation-concentrate_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Hydra_perfection_CONCENTRATO_IDRATAZIONE_ESTREMA_ACIDO_IALURONICO_PF010699_00.png.webp?itok=teS-Vm4K', '/sites/default/files/styles/large/public/media-image-p/Hydra_perfection_CONCENTRATO_IDRATAZIONE_ESTREMA_ACIDO_IALURONICO_PF010699_Flacone30ml_2000x2000_01.png.webp?itok=5YdEJQQm', '/sites/default/files/styles/large/public/media-image-p/Hydra_perfection_Concentrato_Idratazione_Estrema_PF010699_2000x2000_02.png.webp?itok=8sGSfxf0'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-moisturizing-and-nourishing-hydra-perfection/extreme-moisturisation-concentrate',
    slug: 'extreme-moisturisation-concentrate'
  },
  {
    name: 'Extreme Moisturization* Cream: Hydrating Cream',
    line: 'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), TRIBEHENIN PEG-20 ESTERS, GLYCERIN, DIMETHICONE, ETHYLHEXYL METHOXYCINNAMATE, ETHYLHEXYL PALMITATE, BUTYL METHOXYDIBENZOYLMETHANE, C12-15 ALKYL BENZOATE, HYDROGENATED COCO-GLYCERIDES, BUTYROSPERMUM PARKII (SHEA BUTTER), CETEARYL ALCOHOL, ARACHIDYL ALCOHOL, OCTOCRYLENE, ALOE BARBADENSIS LEAF JUICE, BIS-PEG-15 METHYL ETHER DIMETHICONE, PHENOXYETHANOL, SACCHARIDE ISOMERATE, BEHENYL ALCOHOL, POLYMETHYLSILSESQUIOXANE, ETHYLHEXYLGLYCERIN, PROPANEDIOL, TRIETHANOLAMINE, ARACHIDYL GLUCOSIDE, PARFUM (FRAGRANCE), ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TETRASODIUM EDTA, PENTYLENE GLYCOL, LECITHIN, SODIUM HYALURONATE, RHEUM PALMATUM ROOT EXTRACT, TOCOPHEROL, CITRIC ACID, ALPHA-ISOMETHYL IONONE, SODIUM CITRATE, ASCORBYL PALMITATE, SODIUM BENZOATE, BENZYL SALICYLATE, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, POTASSIUM SORBATE, LIMONENE, CITRONELLOL, CI 17200 (RED 33), CI 42090 (BLUE 1)',
    directions: 'Apply to deeply cleansed face, neck and decolleté; massage gently. Repeat morning and evening.',
    images: ['product-images\\extreme-moisturisation-cream_1.jpg', 'product-images\\extreme-moisturisation-cream_2.jpg', 'product-images\\extreme-moisturisation-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Hydra_perfection_Crema_Idratazione_Estrema_PF010696_00.png.webp?itok=PnSbcd_H', '/sites/default/files/styles/large/public/media-image-p/Hydra_perfection_Crema_Idratazione_Estrema_PF010696_50ml_2000x2000_01.png.webp?itok=riPzH4m_', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Idrataz_Estrema_PF010696_02.png.webp?itok=lENa0pui'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-moisturizing-and-nourishing-hydra-perfection/extreme-moisturisation-cream',
    slug: 'extreme-moisturisation-cream'
  },
  {
    name: 'Active Hydration Eye Contour Cream',
    line: 'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), VEGETABLE OIL, BUTYROSPERMUM PARKII (SHEA BUTTER), PROPYLENE GLYCOL, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, PENTYLENE GLYCOL, SODIUM ACRYLATES COPOLYMER, SACCHARIDEISOMERATE, HYDROXYACETOPHENONE, TOCOPHERYL ACETATE, GLYCERIN, LECITHIN, PROPANEDIOL, ARGININE PCA, CAFFEINE, SODIUM PCA, GLUCOSE, XANTHAN GUM, SODIUM HYDROXIDE, GLYCINE, HESPERIDIN METHYL CHALCONE, PHYTIC ACID, STEARETH-20, CITRIC ACID, GLUTAMIC ACID, LYSINE, SODIUM CITRATE, RHEUM PALMATUM ROOT EXTRACT, ALLANTOIN, POTASSIUM SORBATE, SODIUM BENZOATE, DIPEPTIDE-2, PALMITOYL TETRAPEPTIDE-7',
    directions: 'Apply morning and evening to the eye contour and massage until fully absorbed.',
    images: ['product-images\\active-hydration-eye-contour-cream_1.jpg', 'product-images\\active-hydration-eye-contour-cream_2.jpg', 'product-images\\active-hydration-eye-contour-cream_3.jpg', 'product-images\\active-hydration-eye-contour-cream_4.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Crema_Contorno_Occhi_PF021712_00.png.webp?itok=_u4lpsez', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Crema_Contorno_Occhi_PF021712_01.png.webp?itok=WrGtScby', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Cont_Occhi_PF021712_tubo_chiuso_20ml_02.png.webp?itok=i9gduY-b', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Cont_Occhi_PF021712_astuccio_03.png.webp?itok=8tgmBLXo'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-moisturizing-and-nourishing-hydra-perfection/active-hydration-eye-contour-cream',
    slug: 'active-hydration-eye-contour-cream'
  },
  {
    name: 'Active Hydration Cream: Moisturizing Cream',
    line: 'CREAM MOISTURIZING AND NOURISHING HYDRA PERFECTION',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, BUTYLENE GLYCOL, POLYGLYCERYL-6 DISTEARATE, SACCHARIDE ISOMERATE, ALUMINUM STARCH OCTENYLSUCCINATE, C10-18 TRIGLYCERIDES, ETHYLHEXYL STEARATE, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, SODIUM POLYACRYLATE, PHENOXYETHANOL, BUTYROSPERMUM PARKII (SHEA BUTTER), CETEARYL ALCOHOL, DIMETHICONE, HYDROXYACETOPHENONE, JOJOBA ESTERS, PROPANEDIOL, ARGININE PCA, SODIUM PCA, PARFUM (FRAGRANCE), GLUCOSE, TETRASODIUM EDTA, CETYL ALCOHOL, POLYGLYCERYL-3 BEESWAX, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, SODIUM HYDROXIDE, GLYCINE, CITRIC ACID, GLUTAMIC ACID, LYSINE, SODIUM CITRATE, RHEUM PALMATUM ROOT EXTRACT, ALLANTOIN, ALPHA-ISOMETHYL IONONE, POTASSIUM SORBATE, SODIUM BENZOATE, BENZYL SALICYLATE',
    directions: 'Apply morning and evening on perfectly cleansed skin and massage gently to promote absorption.',
    images: ['product-images\\active-hydration-cream_1.jpg', 'product-images\\active-hydration-cream_2.jpg', 'product-images\\active-hydration-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Idrat_Attiva_PF021713_00.png.webp?itok=dOgZ7eKG', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Idrat_Attiva_PF021713_vaso_50ml_01.png.webp?itok=0Jka8wak', '/sites/default/files/styles/large/public/media-image-p/DIBI_Hydra_Perfection_Crema_Idrat_Attiva_PF021713_astuccio_02.png.webp?itok=27PKbm4J'],
    url: 'https://www.dibimilano.com/en-en/face/products/cream-moisturizing-and-nourishing-hydra-perfection/active-hydration-cream',
    slug: 'active-hydration-cream'
  },
  {
    name: '3 in 1 &quot;Cosmetic-Eyelid Lift&quot; Eye Contour Gelatin',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), PENTYLENE GLYCOL, GLYCERIN, ALOE BARBADENSIS LEAF JUICE, TRIETHANOLAMINE, PROPYLENE GLYCOL, ALBIZIA JULIBRISSIN BARK EXTRACT, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, POLYVINYL ALCOHOL, PHENOXYETHANOL, IMPERATA CYLINDRICA ROOT EXTRACT, TETRASODIUM EDTA, ALGAE EXTRACT, CAPRYLYL GLYCOL, SODIUM BENZOATE, CARBOMER, POTASSIUM SORBATE, CHLORPHENESIN, LINALOOL, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, SIGESBECKIA ORIENTALIS EXTRACT, CITRUS AURANTIUM AMARA (BITTER ORANGE) FLOWER EXTRACT, SODIUM DEHYDROACETATE, ACETYL TETRAPEPTIDE-2',
    directions: 'Take a small amount of gel with the spatula and pat it onto the eye contour and eyelid area. Massage gently with the tips of your fingers.',
    images: ['product-images\\3-in-1-cosmetic-eyelid-lift-eye-contour-gelatin_1.jpg', 'product-images\\3-in-1-cosmetic-eyelid-lift-eye-contour-gelatin_2.jpg', 'product-images\\3-in-1-cosmetic-eyelid-lift-eye-contour-gelatin_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Gelat_Blefaro_Cont_Occhi_PF012194_00.png.webp?itok=yOSfTE6w', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Gelat_Blefaro_Cont_Occhi_PF012194_Vas_15_NEW_2000x2000_01.png.webp?itok=Gaeiib24', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Gelat_Blefaro_Cont_Occhi_PF012194_Ast_15_2000x2000_02.png.webp?itok=Th7ItmNQ'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/3-in-1-cosmetic-eyelid-lift-eye-contour-gelatin',
    slug: '3-in-1-cosmetic-eyelid-lift-eye-contour-gelatin'
  },
  {
    name: 'Extra-Intensive Rich Cream: Face Lift Cream',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), C12-20 ACID PEG-8 ESTER, C12-15 ALKYL BENZOATE, GLYCERIN, BUTYROSPERMUM PARKII (SHEA BUTTER), STEARYL ETHYLHEXANOATE, HYDROGENATED COCO-GLYCERIDES, CETEARYL ALCOHOL, DIMETHICONE, ORYZANOL, OLEA EUROPAEA (OLIVE) OIL UNSAPONIFIABLES, PHENOXYETHANOL, CETYL ETHYLHEXANOATE, ETHYLHEXYLGLYCERIN, PROPANEDIOL, ISOPROPYL MYRISTATE, TETRASODIUM EDTA, PARFUM (FRAGRANCE), ORNITHINE, MACADAMIA TERNIFOLIA SEED OIL, RETINYL PALMITATE, SODIUM DEHYDROACETATE, PHOSPHOLIPIDS, PENTYLENE GLYCOL, LECITHIN, GLYCOLIPIDS, TOCOPHEROL, LEVULINIC ACID, p-ANISIC ACID, SODIUM HYDROXIDE, ASCORBYL PALMITATE, CAPRYLYL GLYCOL, HYDROXYCITRONELLAL, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, ACETYL TETRAPEPTIDE-2, CITRIC ACID, CI 17200 (RED 33), CI 42090 (BLUE 1)',
    directions: 'Apply morning and evening to face, neck and decolleté; massage until fully absorbed.',
    images: ['product-images\\extra-intensive-rich-cream_1.jpg', 'product-images\\extra-intensive-rich-cream_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Lift_Creator_Crema_Ricca_Intensiva_PF012193_00.png.webp?itok=fPEaFU1F', '/sites/default/files/styles/large/public/media-image-p/Lift_Creator_Crema_Ricca_Intensiva_PF012193_Vas_50ml_2000x2000_01.png.webp?itok=jwYxg7ad'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/extra-intensive-rich-cream',
    slug: 'extra-intensive-rich-cream'
  },
  {
    name: 'Intensive &quot;Liquid&quot; Cream: Firming Face Cream',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), C12-15 ALKYL BENZOATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, GLYCERYL STEARATE, PEG-90 STEARATE, HYDROGENATED PALM GLYCERIDES, SORBITAN STEARATE, PHENOXYETHANOL, CETEARYL ALCOHOL, BISABOLOL, DIMETHICONE, ETHYLHEXYLGLYCERIN, TOCOPHERYL ACETATE, TRIETHANOLAMINE, ALGAE EXTRACT, SALICYLIC ACID, PROPANEDIOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, PARFUM (FRAGRANCE), ORNITHINE, GLYCERIN, TETRASODIUM EDTA, PHOSPHOLIPIDS, SUCROSE COCOATE, PENTYLENE GLYCOL, GLYCOLIPIDS, CHLORPHENESIN, PROPYLENE GLYCOL, LEVULINIC ACID, P-ANISIC ACID, SODIUM HYDROXIDE, CAPRYLYL GLYCOL, SODIUM DEHYDROACETATE, HYDROXYCITRONELLAL, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, TOCOPHEROL, ACETYL TETRAPEPTIDE-2, CI 17200 (RED 33), CI 42090 (BLUE 1)',
    directions: 'Apply morning and evening to face, neck and decolleté; massage until fully absorbed.',
    images: ['product-images\\intensive-liquid-cream_1.jpg', 'product-images\\intensive-liquid-cream_2.jpg', 'product-images\\intensive-liquid-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Lift_Creator_Crema_Liquida_Intensiva_PF012192_00.png.webp?itok=USvIvzAI', '/sites/default/files/styles/large/public/media-image-p/Lift_Creator_Crema_Liquida_Intensiva_PF012192_Vas_50ml_2000x2000_01.png.webp?itok=k_1MIstW', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Crema_Liquida_Intens_PF012192_Ast_50_2000x2000_02.png.webp?itok=JqnhLil1'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/intensive-liquid-cream',
    slug: 'intensive-liquid-cream'
  },
  {
    name: '&quot;Botox Like&quot; Peptide Concentrate: Firming Serum',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), PENTYLENE GLYCOL, HYDROXYETHYLCELLULOSE, SACCHARIDE ISOMERATE, PROPANEDIOL, GLYCERIN, ORNITHINE, TETRASODIUM EDTA, PHOSPHOLIPIDS, SODIUM HYALURONATE, GLYCOLIPIDS, AVENA SATIVA (OAT) KERNEL EXTRACT, PEG-60 HYDROGENATED CASTOR OIL, SODIUM DILAURAMIDOGLUTAMIDE LYSINE, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, CAPRYLYL GLYCOL, CITRIC ACID, LEVULINIC ACID, P-ANISIC ACID, SODIUM CITRATE, SODIUM HYDROXIDE, SODIUM BENZOATE, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, POTASSIUM SORBATE, ACETYL HEXAPEPTIDE-8, TOCOPHEROL, ACETYL TETRAPEPTIDE-2, ROSMARINUS OFFICINALIS (ROSEMARY) LEAF EXTRACT',
    directions: 'Shake before use. Apply morning and evening before your regular cream, on clean skin.',
    images: ['product-images\\botox-peptide-concentrate_1.jpg', 'product-images\\botox-peptide-concentrate_2.jpg', 'product-images\\botox-peptide-concentrate_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Peptidi_Botox_PF012189_00.png.webp?itok=p-nEMuX6', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Peptidi_Botox_PF012189_Fla_30_2000x2000_01.png.webp?itok=z0Pw-Yry', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Peptidi_Botox_PF012189_Ast_30_2000x2000_02.png.webp?itok=MjO9gm4m'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/botox-peptide-concentrate',
    slug: 'botox-peptide-concentrate'
  },
  {
    name: 'Vitamin B-c-pp Concentrate: Firming Serum',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), PENTYLENE GLYCOL, HYDROXYETHYLCELLULOSE, GLYCERIN, SACCHARIDE ISOMERATE, PANTHENOL, NIACINAMIDE, PROPANEDIOL, ASCORBYL TETRAISOPALMITATE, TETRASODIUM EDTA, ORNITHINE, SODIUM HYALURONATE, PHOSPHOLIPIDS, CARNOSINE, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, SODIUM DILAURAMIDOGLUTAMIDE LYSINE, ISOHEXADECANE, GLYCOLIPIDS, AVENA SATIVA (OAT) KERNEL EXTRACT, PEG-60 HYDROGENATED CASTOR OIL, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, CITRIC ACID, POLYSORBATE 60, SODIUM CITRATE, CAPRYLYL GLYCOL, LEVULINIC ACID, P-ANISIC ACID, SODIUM HYDROXIDE, SODIUM BENZOATE, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, SORBITAN ISOSTEARATE, POTASSIUM SORBATE, TOCOPHEROL, ACETYL TETRAPEPTIDE-2, ROSMARINUS OFFICINALIS (ROSEMARY) LEAF EXTRACT',
    directions: 'Shake before use. Apply morning and evening before your regular cream, on clean skin.',
    images: ['product-images\\vitamin-b-c-pp-concentrate_1.jpg', 'product-images\\vitamin-b-c-pp-concentrate_2.jpg', 'product-images\\vitamin-b-c-pp-concentrate_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Vitamine_B_C_PP_PF012188_00.png.webp?itok=-FOdI6yL', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Vitamine_B_C_PP_PF012188_Fla_30_2000x2000_01.png.webp?itok=iaaZVlEd', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Vitamine_B_C_PP_PF012188_Ast_30_2000x2000_02.png.webp?itok=N_xDNboH'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/vitamin-b-c-pp-concentrate',
    slug: 'vitamin-b-c-pp-concentrate'
  },
  {
    name: 'Collagen and Elastin Booster: Collagen Serum',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), PENTYLENE GLYCOL, GLYCERIN, HYDROXYETHYLCELLULOSE, SACCHARIDE ISOMERATE, GLYCERYL POLYMETHACRYLATE, PEG-8, TETRASODIUM EDTA, SODIUM HYALURONATE, PROPANEDIOL, ORNITHINE, PHOSPHOLIPIDS, GLYCOLIPIDS, CITRIC ACID, PALMITOYL TRIPEPTIDE-5, SODIUM CITRATE, CAPRYLYL GLYCOL, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, LEVULINIC ACID, P-ANISIC ACID, SODIUM HYDROXIDE, ACETYL TETRAPEPTIDE-2, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, TOCOPHEROL, PALMITOYL HEXAPEPTIDE-12',
    directions: 'Shake before use. Apply morning and evening before your regular cream, on clean skin.',
    images: ['product-images\\collagen-and-elastin-booster-concentrate_1.jpg', 'product-images\\collagen-and-elastin-booster-concentrate_2.jpg', 'product-images\\collagen-and-elastin-booster-concentrate_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Collagene_Elastina_PF012187_00.png.webp?itok=DqJ_u2fU', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Collagene_Elastina_PF012187_Fla_30_2000x2000_01.png.webp?itok=1p51T3rS', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Conc_Collagene_Elastina_PF012187_Ast_30_2000x2000_02.png.webp?itok=MEdKoi3U'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/collagen-and-elastin-booster-concentrate',
    slug: 'collagen-and-elastin-booster-concentrate'
  },
  {
    name: 'Intensive Peeling Mask: Firming Face Mask',
    line: 'COSMETICS LIFTING EFFECT LIFT CREATOR',
    description: '',
    ingredients: 'AQUA (WATER), PROPYLENE GLYCOL, GLUCONOLACTONE, HYDROXYETHYLCELLULOSE, HAMAMELIS VIRGINIANA (WITCH HAZEL) LEAF WATER, METHYLPROPANEDIOL, GLYCOLIC ACID, GLYCERIN, SODIUM HYDROXIDE, PEG-7 GLYCERYL COCOATE, UREA, CAPRYLYL GLYCOL, TETRASODIUM EDTA, PARFUM (FRAGRANCE), PHENYLPROPANOL, PROPANEDIOL, PPG-26-BUTETH-26, PENTYLENE GLYCOL, PEG-40 HYDROGENATED CASTOR OIL, ORNITHINE, PHENOXYETHANOL, PHOSPHOLIPIDS, GLYCOLIPIDS, ETHYLHEXYLGLYCERIN, TETRASODIUM GLUTAMATE DIACETATE, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, LEVULINIC ACID, P-ANISIC ACID, ACETYL TETRAPEPTIDE-2, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, TOCOPHEROL',
    directions: 'Apply a thick layer over the entire face and leave on for 5 minutes then rinse. Use once a week.',
    images: ['product-images\\intensive-peeling-mask_1.jpg', 'product-images\\intensive-peeling-mask_2.jpg', 'product-images\\intensive-peeling-mask_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Masc_Peel_Inten_PF012186_00.png.webp?itok=gONVhjFJ', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Masc_Peel_Inten_PF012186_Tub_100_2000x2000_01.png.webp?itok=JbYpIxUO', '/sites/default/files/styles/large/public/media-image-p/LIFT_CREATOR_Masc_Peel_Inten_PF012186_Ast_100_2000x2000_02.png.webp?itok=iP2r-dbF'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-lifting-effect-lift-creator/intensive-peeling-mask',
    slug: 'intensive-peeling-mask'
  },
  {
    name: 'Magnificent Mask: Face Mask Skin Care',
    line: 'FACE ANTI OXIDANT MAGNIFIC MASK',
    description: '',
    ingredients: 'AQUA (WATER), ISONONYL ISONONANOATE, POLYMETHYLSILSESQUIOXANE , OCTYLDODECANOL, PHENOXYETHANOL, PPG-26-BUTETH-26, XANTHAN GUM, ETHYLHEXYLGLYCERIN, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, PEG-40 HYDROGENATED CASTOR OIL, OCTYLDODECYL XYLOSIDE, PEG-30 DIPOLYHYDROXYSTEARATE, POLYVINYL ALCOHOL , ISOHEXADECANE, PARFUM (FRAGRANCE), CARNOSINE, SODIUM DEHYDROACETATE, TETRASODIUM EDTA, SQUALANE, GLYCERIN, POLYSORBATE 60, TOCOPHERYL ACETATE, MAGNESIUM ASCORBYL PHOSPHATE, HYDROLYZED GELATIN, PENTYLENE GLYCOL, POLYSORBATE 20, SORBITAN ISOSTEARATE, SUCROSE, ZEA MAYS (CORN) STARCH, HAEMATOCOCCUS PLUVIALIS EXTRACT, HYDROXYPROPYL CYCLODEXTRIN, LINALOOL, GERANIOL, LIMONENE, CAPRYLIC/CAPRIC TRIGLYCERIDE, ASCORBYL PALMITATE, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, TOCOPHEROL, RETINOL, UBIQUINONE',
    directions: 'Remove the mask from the bag, unfold it and apply it to the face, neck and décolleté, pressing it on well. Leave on for 15 minutes, then remove and massage any emulsion residues on the skin. Rinse your face with warm water before applying your usual cream. It is advisable to rub the sachet between your hands before opening it so that the mask absorbs the emulsion better.',
    images: ['product-images\\magnificent-mask_1.jpg', 'product-images\\magnificent-mask_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/MAGNIFIC_MASK_Maschera_Anti_Ossidanti_Cellulosa_PF012507_00.png.webp?itok=8F6JwQVK', '/sites/default/files/styles/large/public/media-image-p/MAGNIFIC_MASK_Maschera_Anti_Ossidanti_Cellulosa_PF012507_Ast_Bus_2000x2000_01.png.webp?itok=Ihh0RsJr'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-anti-oxidant-magnific-mask/magnificent-mask',
    slug: 'magnificent-mask'
  },
  {
    name: 'Bi-phase facial treatment for regenerated skin',
    line: 'FACE REGENERATING PRODUCTS PROCELLULAR 365',
    description: '',
    ingredients: 'ALOE BARBADENSIS LEAF JUICE, PRUNUS ARMENIACA (APRICOT) KERNEL OIL, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, GLYCERIN, AQUA (WATER), BUTYLENE GLYCOL, ALPHA-GLUCAN OLIGOSACCHARIDE, PROPYLENE GLYCOL, PHENOXYETHANOL, HYDROXYACETOPHENONE, PANTHENOL, POTASSIUM SORBATE, SODIUM BENZOATE, MAGNESIUM ASCORBYL PHOSPHATE, SOLANUM LYCOPERSICUM (TOMATO) FRUIT/LEAF/STEM EXTRACT, TETRASODIUM EDTA, AMMONIUM GLYCYRRHIZATE, CARBOMER, ESCIN, RUSCUS ACULEATUS ROOT EXTRACT, SODIUM LACTATE, POLYSORBATE 20, HELIANTHUS ANNUUS (SUNFLOWER) SEED OIL, GLYCERYL ACRYLATE/ACRYLIC ACID COPOLYMER, ROSMARINUS OFFICINALIS (ROSEMARY) LEAF EXTRACT, PVM/MA COPOLYMER, CALENDULA OFFICINALIS FLOWER EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED YEAST PROTEIN, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7',
    directions: 'Using the specific vial-opener, break the cap where it is marked by the ring and insert the dispenser spout, shake the product well, apply to face, neck and decolleté and massage until fully absorbed. Ideal as a night treatment. For intensive pre and post aesthetic medicine treatments, apply daily for 7 evenings. If, on the other hand you wish to use it as an intensive strengthening treatment, apply it every other day for 14 evenings in total.',
    images: ['product-images\\pro-recovery-bi-liquid-treatment-0_1.jpg', 'product-images\\pro-recovery-bi-liquid-treatment-0_2.jpg', 'product-images\\pro-recovery-bi-liquid-treatment-0_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Procellular365_Trattamento_Bi_Liquido_Pro_Recovery_PF029913_00.png.webp?itok=emOxb4V0', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Trattamento_Bi_Liquido_Pro_Recovery_PF029913_01.png.webp?itok=Ih2PR-0i', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Trattamento_Bi_Liquido_Pro_Recovery_PF029913_02.png.webp?itok=xsqntGLG'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-regenerating-products-procellular-365/pro-recovery-bi-liquid-treatment-0',
    slug: 'pro-recovery-bi-liquid-treatment-0'
  },
  {
    name: 'Regenerating night cream for firmer skin',
    line: 'FACE REGENERATING PRODUCTS PROCELLULAR 365',
    description: '',
    ingredients: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, VEGETABLE OIL, GLYCERIN, BUTYROSPERMUM PARKII (SHEA) BUTTER, CETEARYL ALCOHOL, ETHYLHEXYL STEARATE, POLYGLYCERYL-10 STEARATE, DIMETHICONE, ALPHA-GLUCAN OLIGOSACCHARIDE, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, PHENOXYETHANOL, BUTYLENE GLYCOL, XANTHAN GUM, HYDROXYACETOPHENONE, PARFUM (FRAGRANCE), TETRASODIUM EDTA, POLYSILICONE-11, LINALYL ACETATE, CITRIC ACID, LECITHIN, HEXAMETHYLINDANOPYRAN, CARBOMER, SODIUM LACTATE, ACETYL CEDRENE, SODIUM PHOSPHATE, POLYSORBATE 20, TOCOPHEROL, CAPRYLYL GLYCOL, ASCORBYL PALMITATE, NONAPEPTIDE-1, DECYL GLUCOSIDE, JUNIPERUS VIRGINIANA OIL, HEXYLENE GLYCOL, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7, DISODIUM PHOSPHATE',
    directions: 'Apply morning and evening to cleansed face, neck and décolleté, and massage until completely absorbed.',
    images: ['product-images\\mito-age-regenerating-night-cream_1.jpg', 'product-images\\mito-age-regenerating-night-cream_2.jpg', 'product-images\\mito-age-regenerating-night-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Notte_Mito_Age_Rigenerante_PF029912_00.png.webp?itok=RCqVZXWv', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Notte_Mito_Age_Rigenerante_PF029912_01.png.webp?itok=EWTtsfcE', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Notte_Mito_Age_Rigenerante_PF029912_02.png.webp?itok=Luq6Vy51'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-regenerating-products-procellular-365/mito-age-regenerating-night-cream',
    slug: 'mito-age-regenerating-night-cream'
  },
  {
    name: 'Regenerating face cream: Oxy-Age Serum',
    line: 'FACE REGENERATING PRODUCTS PROCELLULAR 365',
    description: '',
    ingredients: 'AQUA (WATER), ISONONYL ISONONANOATE, GLYCERIN, BUTYLENE GLYCOL, SODIUM POLYACRYLATE, ALPHA-GLUCAN OLIGOSACCHARIDE, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL , PHENOXYETHANOL, DIMETHICONE, HYDROXYACETOPHENONE, PARFUM (FRAGRANCE), PANTHENOL, ASCORBYL TETRAISOPALMITATE, SACCHAROMYCES LYSATE, TETRASODIUM EDTA, SODIUM DEHYDROACETATE, AMMONIUM GLYCYRRHIZATE, ESCIN, RUSCUS ACULEATUS ROOT EXTRACT, LECITHIN, CARBOMER, SODIUM HYALURONATE, SODIUM LACTATE, DISODIUM SUCCINATE, ETHYLHEXYLGLYCERIN, POLYSORBATE 20, CALENDULA OFFICINALIS FLOWER EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED YEAST PROTEIN, TOCOPHEROL, ASCORBYL PALMITATE, GLUTAMIC ACID, GLYCINE, THREONINE, VALINE, CITRIC ACID, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7',
    directions: 'Apply every day to face, neck and decolleté, massaging until fully absorbed.',
    images: ['product-images\\oxy-age-regenerating-cream-serum_1.jpg', 'product-images\\oxy-age-regenerating-cream-serum_2.jpg', 'product-images\\oxy-age-regenerating-cream-serum_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Siero_Oxy_Age_Rigenerante_PF016444_00.png.webp?itok=kyw8u44F', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Siero_Oxy_Age_Rigenerante_PF016444_01.png.webp?itok=T4SC4h1l', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Siero_Oxy_Age_Rigenerante_PF016444_02.png.webp?itok=99yvajLc'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-regenerating-products-procellular-365/oxy-age-regenerating-cream-serum',
    slug: 'oxy-age-regenerating-cream-serum'
  },
  {
    name: 'Nutri-Age regenerating face cream with UV filters',
    line: 'FACE REGENERATING PRODUCTS PROCELLULAR 365',
    description: '',
    ingredients: 'AQUA (WATER), C12-15 ALKYL BENZOATE, GLYCERIN, C12-20 ACID PEG-8 ESTER, ORYZA SATIVA (RICE) BRAN OIL, ETHYLHEXYL METHOXYCINNAMATE, CETEARYL ALCOHOL, DIMETHICONE, BUTYL METHOXYDIBENZOYLMETHANE, BUTYROSPERMUM PARKII (SHEA BUTTER), BUTYLENE GLYCOL, GLYCERYL STEARATE, PEG-90 STEARATE, ALPHA-GLUCAN OLIGOSACCHARIDE, OCTOCRYLENE, PHENOXYETHANOL, ASCORBYL TETRAISOPALMITATE, HYDROXYACETOPHENONE, PARFUM (FRAGRANCE), PANTHENOL, DIMETHICONOL, TETRASODIUM EDTA, SODIUM DEHYDROACETATE, AMMONIUM GLYCYRRHIZATE, ESCIN, RUSCUS ACULEATUS ROOT EXTRACT, LECITHIN, CARBOMER, SODIUM LACTATE, POLYSORBATE 20, CALENDULA OFFICINALIS FLOWER EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED YEAST PROTEIN, TOCOPHEROL, ASCORBYL PALMITATE, CITRIC ACID, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7',
    directions: 'Apply the product to face, neck and decolleté, massaging until fully absorbed.',
    images: ['product-images\\nutri-age-regenerating-pro-resilience_1.jpg', 'product-images\\nutri-age-regenerating-pro-resilience_2.jpg', 'product-images\\nutri-age-regenerating-pro-resilience_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Nutri_Age_Rigenerante_PF016442_00.png.webp?itok=p_sEYCOH', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Nutri_Age_Rigenerante_PF016442_01.png.webp?itok=hyH6h2zR', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Crema_Nutri_Age_Rigenerante_PF016442_02.png.webp?itok=IEiHrGY6'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-regenerating-products-procellular-365/nutri-age-regenerating-pro-resilience',
    slug: 'nutri-age-regenerating-pro-resilience'
  },
  {
    name: 'Face peeling: intensive re-texturizing cleanser',
    line: 'FACE REGENERATING PRODUCTS PROCELLULAR 365',
    description: '',
    ingredients: 'AQUA (WATER), POLOXAMER 184, PROPYLENE GLYCOL, PHENOXYETHANOL, ALPHA-GLUCAN OLIGOSACCHARIDE, ALOE BARBADENSIS LEAF JUICE, HYDROXYACETOPHENONE, METHYL GLUCETH-20, GLYCERIN, ALLANTOIN, BIS-PEG-15 METHYL ETHER DIMETHICONE, MAGNESIUM ASCORBYL PHOSPHATE, BUTYLENE GLYCOL, HYDROLYZED OPUNTIA FICUS-INDICA FLOWER EXTRACT, SODIUM PCA, TETRASODIUM EDTA, PPG-26-BUTETH-26, GLUCOSE, PEG-40 HYDROGENATED CASTOR OIL, GLYCINE, PANTHENOL, ETHYLHEXYLGLYCERIN, GLUTAMIC ACID, LYSINE, CARBOMER, SODIUM LACTATE, CITRIC ACID, AMMONIUM GLYCYRRHIZATE, ESCIN, POLYSORBATE 20, RUSCUS ACULEATUS ROOT EXTRACT, POTASSIUM SORBATE, SODIUM BENZOATE, CALENDULA OFFICINALIS FLOWER EXTRACT, CENTELLA ASIATICA EXTRACT, HYDROLYZED YEAST PROTEIN, PALMITOYL TRIPEPTIDE-1, PALMITOYL TETRAPEPTIDE-7',
    directions: 'Apply every day to face, neck and decolleté using cotton pads. No rinsing required.',
    images: ['product-images\\re-texturising-intensive-peeling-cleanser_1.jpg', 'product-images\\re-texturising-intensive-peeling-cleanser_2.jpg', 'product-images\\re-texturising-intensive-peeling-cleanser_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/Procellular365_Detergente_Peeling_Intensivo_Ri_Texturizzante_PF016441_00.png.webp?itok=3wtOWC9a', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Detergente_Peeling_Intensivo_Ri_Texturizzante_PF016441_Fla_100ml_2000x2000_01.png.webp?itok=arq7OIW0', '/sites/default/files/styles/large/public/media-image-p/Procellular365_Detergente_Peeling_Intensivo_Ri_Texturizzante_PF016441_Ast_100ml_2000x2000_02.png.webp?itok=o1DYIQU-'],
    url: 'https://www.dibimilano.com/en-en/face/products/face-regenerating-products-procellular-365/re-texturising-intensive-peeling-cleanser',
    slug: 're-texturising-intensive-peeling-cleanser'
  },
  {
    name: 'Blemish &quot;Remover&quot;: Skincare for Oily Skin',
    line: 'COSMETICS SEBUM BALANCING PURE EQUALIZER',
    description: '',
    ingredients: 'AQUA (WATER), ALCOHOL DENAT., BUTYLENE GLYCOL, SALICYLIC ACID, TRIETHANOLAMINE, GLYCERIN, HYDROXYETHYLCELLULOSE, METHYLPROPANEDIOL, METHYL GLUCETH-20, PARFUM (FRAGRANCE), PEG-40 HYDROGENATED CASTOR OIL, MALTODEXTRIN, PHYSALIS PUBESCENS FRUIT JUICE, CAPRYLIC/CAPRIC TRIGLYCERIDE, 4-TERPINEOL, BAROSMA BETULINA LEAF EXTRACT, PENTYLENE GLYCOL, SYRINGA VULGARIS (LILAC) EXTRACT, SALIX ALBA (WILLOW) BARK EXTRACT, ALPHA-ISOMETHYL IONONE, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, TOCOPHEROL',
    directions: 'Apply on clean skin and massage until fully absorbed. Repeat morning and evening.',
    images: ['product-images\\blemish-remover_1.jpg', 'product-images\\blemish-remover_2.jpg', 'product-images\\blemish-remover_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Eliminatore_Imperfezioni_PF013680_00.png.webp?itok=Vcu7xEjZ', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Eliminatore_Imperfezioni_PF013680_Fla_30_nolev_2000x2000_01.png.webp?itok=Z9FKMZtl', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Eliminatore_Imperfezioni_PF013680_Ast_30_nolev_2000x2000_02.png.webp?itok=7NQLDZ1r'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-sebum-balancing-pure-equalizer/blemish-remover',
    slug: 'blemish-remover'
  },
  {
    name: 'PH Control Acid Cream Gel: Oily Skin Care',
    line: 'COSMETICS SEBUM BALANCING PURE EQUALIZER',
    description: '',
    ingredients: 'AQUA (WATER), DICAPRYLYL ETHER, PROPYLENE GLYCOL, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, BUTYLENE GLYCOL, ISOHEXADECANE, OLUS OIL (VEGETABLE OIL), ALCOHOL DENAT., POLYMETHYLSILSESQUIOXANE, PHENOXYETHANOL, METHYLPROPANEDIOL, SALICYLIC ACID, PARFUM (FRAGRANCE), POLYSORBATE 60, PHYSALIS PUBESCENS FRUIT JUICE, CAPRYLIC/CAPRIC TRIGLYCERIDE, ETHYLHEXYLGLYCERIN, MALTODEXTRIN, GLYCERIN, PPG-26-BUTETH-26, 4-TERPINEOL, TETRASODIUM EDTA, SORBITAN ISOSTEARATE, LAURYL GLUCOSIDE, POLYGLYCERYL-2 DIPOLYHYDROXYSTEARATE, SODIUM HYDROXIDE, CITRIC ACID, PEG-40 HYDROGENATED CASTOR OIL, BAROSMA BETULINA LEAF EXTRACT, PENTYLENE GLYCOL, SALIX ALBA (WILLOW) BARK EXTRACT, SYRINGA VULGARIS (LILAC) EXTRACT, ALPHA-ISOMETHYL IONONE, HYDROLYZED RICE PROTEIN, SODIUM BENZOATE, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, TOCOPHEROL',
    directions: 'Apply on clean skin and massage until fully absorbed. Repeat morning and evening.',
    images: ['product-images\\ph-control-acid-cream-gel_1.jpg', 'product-images\\ph-control-acid-cream-gel_2.jpg', 'product-images\\ph-control-acid-cream-gel_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Crema_Gel_Acido_PF013679_00.png.webp?itok=P6bEc-xg', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Crema_Gel_Acido_PF013679_Tub_50_nolev_2000x2000_01.png.webp?itok=NS4OigEo', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Crema_Gel_Acido_PF013679_Ast_50_nolev_2000x2000_02.png.webp?itok=fMLHMBJK'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-sebum-balancing-pure-equalizer/ph-control-acid-cream-gel',
    slug: 'ph-control-acid-cream-gel'
  },
  {
    name: '+24h Mattifying Fluid Moisturiser: Oily Skin Care',
    line: 'COSMETICS SEBUM BALANCING PURE EQUALIZER',
    description: '',
    ingredients: 'AQUA (WATER), DIMETHICONE, ALUMINUM STARCH OCTENYLSUCCINATE, CAPRYLYL METHICONE , BUTYLENE GLYCOL, CAPRYLIC/CAPRIC TRIGLYCERIDE, ISOPROPYL PALMITATE, POLYMETHYLSILSESQUIOXANE, PROPYLENE GLYCOL, PHENOXYETHANOL, C30-45 ALKYL CETEARYL DIMETHICONE CROSSPOLYMER, TRIETHANOLAMINE, POTASSIUM CETYL PHOSPHATE , ALOE BARBADENSIS LEAF JUICE, PARFUM (FRAGRANCE), MALTODEXTRIN, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, METHYLPROPANEDIOL, ETHYLHEXYLGLYCERIN, XANTHAN GUM, DIMETHICONOL, CARBOMER, PPG-26-BUTETH-26, TETRASODIUM EDTA, GLYCERIN, PEG-40 HYDROGENATED CASTOR OIL, BAROSMA BETULINA LEAF EXTRACT, 4-TERPINEOL, SYRINGA VULGARIS (LILAC) EXTRACT, PENTYLENE GLYCOL, SALICYLIC ACID, SODIUM METABISULFITE, ALPHA-ISOMETHYL IONONE, SALIX ALBA (WILLOW) BARK EXTRACT, SODIUM BENZOATE, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, POTASSIUM SORBATE, CI 42090 (BLUE 1)',
    directions: 'Apply on clean skin and massage until fully absorbed. Repeat morning and evening.',
    images: ['product-images\\24h-mattifying-fluid-moisturiser_1.jpg', 'product-images\\24h-mattifying-fluid-moisturiser_2.jpg', 'product-images\\24h-mattifying-fluid-moisturiser_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Fluido_Idrataz_Opacizzante_PF013678_00.png.webp?itok=vz4HbwtT', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Fluido_Idrataz_Opacizzante_PF013678_Fla_50_nolev_2000x2000_01.png.webp?itok=_H-WLLTY', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Fluido_Idrataz_Opacizzante_PF013678_Ast_50_nolev_2000x2000_02.png.webp?itok=wcSLPtih'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-sebum-balancing-pure-equalizer/24h-mattifying-fluid-moisturiser',
    slug: '24h-mattifying-fluid-moisturiser'
  },
  {
    name: 'Biocellulose Mattifying Mask: Oily Skin Care',
    line: 'COSMETICS SEBUM BALANCING PURE EQUALIZER',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, PHENOXYETHANOL, POLYACRYLATE-13, ETHYLHEXYLGLYCERIN, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, TRIETHANOLAMINE, POLYISOBUTENE, PROPYLENE GLYCOL, DISODIUM EDTA, PARFUM (FRAGRANCE), BIOSACCHARIDE GUM-1, CAMELLIA SINENSIS LEAF EXTRACT, POLYSORBATE 20, SORBITAN ISOSTEARATE, TROPAEOLUM MAJUS FLOWER LEAF STEM EXTRACT, MALTODEXTRIN, MORINGA PTERYGOSPERMA SEED EXTRACT, LINALOOL',
    directions: 'Remove the mask from the bag, open it and remove the two protective films. Apply to the face starting from the forehead, correctly placing the openings for the eyes and mouth. Leave on for 20 minutes, then remove and massage any product residues into the skin. Rinse your face with lukewarm water.',
    images: ['product-images\\biocellulose-mattifying-mask_1.jpg', 'product-images\\biocellulose-mattifying-mask_2.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Mas_Opacizzante_Biocel_PF013676_00.png.webp?itok=wkLksWus', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Mas_Opacizzante_Biocel_PF013676_Ast_Bus_nolev_2000x2000_01.png.webp?itok=DTB1Jl7G'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-sebum-balancing-pure-equalizer/biocellulose-mattifying-mask',
    slug: 'biocellulose-mattifying-mask'
  },
  {
    name: 'Astringent Two-Phase Tonic: Oily Skin-Care',
    line: 'COSMETICS SEBUM BALANCING PURE EQUALIZER',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, KAOLIN, PROPYLENE GLYCOL, PHENOXYETHANOL, BUTYLENE GLYCOL, ALCOHOL DENAT., SILICA, PPG-26-BUTETH-26, PARFUM (FRAGRANCE), PEG-40 HYDROGENATED CASTOR OIL, SODIUM HYDROXIDE, CITRIC ACID, ETHYLHEXYLGLYCERIN, MALIC ACID, LACTIC ACID, TETRASODIUM EDTA, METHYLPROPANEDIOL, BENZOPHENONE-4, CI 77891 (TITANIUM DIOXIDE) , SODIUM PCA, MALTODEXTRIN, GLUCOSE, 4-TERPINEOL, PENTYLENE GLYCOL, GLYCINE, SALICYLIC ACID, ALPHA-ISOMETHYL IONONE, SYRINGA VULGARIS (LILAC) EXTRACT, BAROSMA BETULINA LEAF EXTRACT, GLUTAMIC ACID, LYSINE, SALIX ALBA (WILLOW) BARK EXTRACT, TRIS (TETRAMETHYLHYDROXYPIPERIDINOL) CITRATE, SODIUM BENZOATE, ALLANTOIN, HYDROLYZED RICE PROTEIN, SODIUM CHLORIDE, SODIUM HYALURONATE CROSSPOLYMER, POTASSIUM SORBATE, CI 19140 (YELLOW 5), CI 42090 (BLUE 1), CI 15985 (YELLOW 6), CI 16035 (RED 40)',
    directions: 'Before each use, shake until the powders are mixed completely. Apply on a cotton pad and pat on face, neck and décolleté.',
    images: ['product-images\\astringent-two-phase-tonic_1.jpg', 'product-images\\astringent-two-phase-tonic_2.jpg', 'product-images\\astringent-two-phase-tonic_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Tonico_Bifasico_Astringente_PF013674_00.png.webp?itok=7cAEnP1k', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Tonico_Bifasico_Astringente_PF013674_Fla_250_nolev_2000x2000_01.png.webp?itok=NJCmXpGl', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Tonico_Bifasico_Astringente_PF013674_Ast_250_nolev_2000x2000_02.png.webp?itok=dIjmqCWl'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-sebum-balancing-pure-equalizer/astringent-two-phase-tonic',
    slug: 'astringent-two-phase-tonic'
  },
  {
    name: '2 in 1 Purifying Powder Cleanser: Oily Skin-Care',
    line: 'COSMETICS SEBUM BALANCING PURE EQUALIZER',
    description: '',
    ingredients: 'SODIUM LAUROYL GLUTAMATE, TALC, SORBITOL, KAOLIN, SODIUM CHLORIDE, AQUA (WATER), CI 77891 (TITANIUM DIOXIDE), CELLULOSE GUM, SODIUM SULFATE, PROPYLENE GLYCOL, PARFUM (FRAGRANCE), SODIUM DEHYDROACETATE, MALTODEXTRIN, CHAMOMILLA RECUTITA (MATRICARIA FLOWER) EXTRACT, HYDROLIZED CORN STARCH, ALPHA-ISOMETHYL IONONE, SYRINGA VULGARIS (LILAC) EXTRACT, SILICA',
    directions: 'Pour 3 doses of powder onto the palm of your hand and mix with a little water. Gently massage on face, neck and decolleté, then rinse.',
    images: ['product-images\\2-in-1-purifying-powder-cleanser_1.jpg', 'product-images\\2-in-1-purifying-powder-cleanser_2.jpg', 'product-images\\2-in-1-purifying-powder-cleanser_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Polvere_Deterg_Purificante_PF013671_00.png.webp?itok=OSi4ZoUg', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Polvere_Deterg_Purificante_PF013671_Fla_100_nolev_2000x2000_01.png.webp?itok=Q03WSSsp', '/sites/default/files/styles/large/public/media-image-p/PURE_EQUA_Polvere_Deterg_Purificante_PF013671_Ast_100_nolev_2000x2000_02.png.webp?itok=CnwYJ4E5'],
    url: 'https://www.dibimilano.com/en-en/face/products/cosmetics-sebum-balancing-pure-equalizer/2-in-1-purifying-powder-cleanser',
    slug: '2-in-1-purifying-powder-cleanser'
  },
  {
    name: 'Gold Youth Cream: Facial Moisturizing Cream',
    line: 'ANTI AGING WITH GOLD THE GOLD',
    description: '',
    ingredients: 'AQUA (WATER), CAPRYLIC/CAPRIC TRIGLYCERIDE, COCO-CAPRYLATE/CAPRATE, BUTYROSPERMUM PARKII (SHEA BUTTER), DICAPRYLYL ETHER, GLYCERIN, CETEARYL ALCOHOL, PROPYLENE GLYCOL, PRUNUS AMYGDALUS DULCIS (SWEET ALMOND) OIL, SIMMONDSIA CHINENSIS (JOJOBA) SEED OIL, POTASSIUM CETYL PHOSPHATE , PHENOXYETHANOL, HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER, GLYCERYL DIBEHENATE, HYDROXYACETOPHENONE, CARBOMER, TRIBEHENIN, MALTODEXTRIN, POLYSORBATE 60, SQUALANE, PROPANEDIOL, SODIUM PCA, GLUCOSE, GLYCERYL BEHENATE, PARFUM (FRAGRANCE), SODIUM HYDROXIDE, DISODIUM EDTA, SODIUM DEHYDROACETATE, GLYCINE, LECITHIN, CI 77480 (GOLD), SODIUM HYALURONATE, LYSINE, GLUTAMIC ACID, CITRIC ACID, TOCOPHEROL, ALLANTOIN, ASCORBYL PALMITATE, SODIUM BENZOATE, POTASSIUM SORBATE, PENTAPEPTIDE-34 TRIFLUOROACETATE, CYSTEINE, ISOLEUCINE, HYDROXYPROLINE, GLUTAMINE',
    directions: 'Mix Pure Gold into the cream with the help of the supplied spatula. Apply to face, neck and decolleté. Use the spatula as the final step of your daily beauty routine. With the golden end of the spatula, perform slow and linear strokes from the centre of your decolleté outwards and from the base of your neck towards your chin. Perform slow and linear strokes from the centre of your face outwards. Perform slow semi-circular strokes from the centre of your face outwards. Perform slow and linear strokes on your forehead: from your eyebrows to your hairline, and from the centre towards your temples. Repeat on the other side of the face.',
    images: ['product-images\\gold-youth-cream_1.jpg', 'product-images\\gold-youth-cream_2.jpg', 'product-images\\gold-youth-cream_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/THE_GOLD_CREMA_ORO_DI_GIOVINEZZA_PF019895_00.png.webp?itok=X0Gag3KJ', '/sites/default/files/styles/large/public/media-image-p/THE_GOLD_CREMA_ORO_DI_GIOVINEZZA_PF019895_Vas_aperto_nolev_2000x2000_01.png.webp?itok=nAXSMdxr', '/sites/default/files/styles/large/public/media-image-p/THE_GOLD_CREMA_ORO_DI_GIOVINEZZA_PF019895_Ast_chiuso_nolev_2000x2000_02.png.webp?itok=YIbsc-JV'],
    url: 'https://www.dibimilano.com/en-en/face/products/anti-aging-with-gold-the-gold/gold-youth-cream',
    slug: 'gold-youth-cream'
  },
  {
    name: 'Moisturizing Face Mask: Gold Youth Mask',
    line: 'ANTI AGING WITH GOLD THE GOLD',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, PEG-7 GLYCERYL COCOATE, SACCHARIDE ISOMERATE, IMPERATA CYLINDRICA ROOT EXTRACT, PHENOXYETHANOL, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, HYDROXYACETOPHENONE, SODIUM POLYACRYLATE, MALTODEXTRIN, PARFUM (FRAGRANCE), MICA, HYDROXYPROPYL GUAR, PROPANEDIOL, CI 77891 (TITANIUM DIOXIDE), PPG-26-BUTETH-26, CI 77491 (IRON OXIDES), SILICA, SODIUM HYDROXIDE, TETRASODIUM EDTA, PEG-40 HYDROGENATED CASTOR OIL, SODIUM PCA, ERYTHRITOL, POLYACRYLATE-2 CROSSPOLYMER, CARRAGEENAN, CAPRYLYL GLYCOL, CARBOMER, CITRIC ACID, SODIUM CITRATE, XANTHAN GUM, TIN OXIDE, CI 77480 (GOLD), SODIUM BENZOATE, PENTAPEPTIDE-34 TRIFLUOROACETATE, GLYCINE, CYSTEINE, ISOLEUCINE, LYSINE, HYDROXYPROLINE, GLUTAMINE',
    directions: 'Apply to face, neck and decolleté. Leave on for 15/20 minutes then rinse. If necessary, remove any residue with a damp cloth.',
    images: ['product-images\\gold-youth-mask_1.jpg', 'product-images\\gold-youth-mask_2.jpg', 'product-images\\gold-youth-mask_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/THE_GOLD_MASCHERA_ORO_DI_GIOVINEZZA_PF019894_00.png.webp?itok=nTdMNF1I', '/sites/default/files/styles/large/public/media-image-p/THE_GOLD_MASCHERA_ORO_DI_GIOVINEZZA_PF019894_Vas_aperto_nolev_2000x2000_01.png.webp?itok=raHQEWR-', '/sites/default/files/styles/large/public/media-image-p/THE_GOLD_MASCHERA_ORO_DI_GIOVINEZZA_PF019894_Ast_chiuso_nolev_2000x2000_02.png.webp?itok=YMGSnW27'],
    url: 'https://www.dibimilano.com/en-en/face/products/anti-aging-with-gold-the-gold/gold-youth-mask',
    slug: 'gold-youth-mask'
  },
  {
    name: 'Supreme Light Uniforming Serum: lightening serum',
    line: 'CREAMS AND SERUM ANTI WRINKLE WHITE SCIENCE',
    description: '',
    ingredients: 'AQUA (WATER), GLYCERIN, PROPYLENE GLYCOL, POTASSIUM AZELOYL DIGLYCINATE, PHENOXYETHANOL, TRIETHANOLAMINE, SACCHARIDE ISOMERATE, BUTYLENE GLYCOL, ASCORBYL TETRAISOPALMITATE, PPG-26-BUTETH-26, ACRYLATES/C10-30 ALKYL ACRYLATE CROSSPOLYMER, ASTRAGALUS MEMBRANACEUS ROOT EXTRACT, ATRACTYLODES MACROCEPHALA ROOT EXTRACT, BUPLEURUM FALCATUM ROOT EXTRACT, SODIUM POLYACRYLATE, PEG-40 HYDROGENATED CASTOR OIL, ETHYLHEXYLGLYCERIN, SODIUM HYALURONATE, TETRASODIUM EDTA, XANTHAN GUM, POLYMETHYL METHACRYLATE, CARNOSINE, CI 77891 (TITANIUM DIOXIDE), OLEA EUROPAEA (OLIVE) FRUIT OIL, PARFUM (FRAGRANCE), TRICAPRYLIN, PLANKTON EXTRACT, GLYCYRRHIZA GLABRA (LICORICE) ROOT EXTRACT, CITRIC ACID, SODIUM CITRATE, BHT, HEXYL CINNAMAL, GERANIOL, CITRONELLOL',
    directions: 'Apply to face, neck and decolleté and massage until fully absorbed. Repeat morning and evening.',
    images: ['product-images\\supreme-light-uniforming-serum_1.jpg', 'product-images\\supreme-light-uniforming-serum_2.jpg', 'product-images\\supreme-light-uniforming-serum_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_WhiteScience_SieroUniformanteLuceSuprema_PF013690_01.png.webp?itok=Ml_fpGIo', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Siero_Uniformante_PF013690_Fla_30ml_2000x2000_01.png.webp?itok=U7t7BaiK', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Siero_Uniformante_PF013690_Ast_30ml_2000x2000_02.png.webp?itok=BQuCMgpz'],
    url: 'https://www.dibimilano.com/en-en/face/products/creams-and-serum-anti-wrinkle-white-science/supreme-light-uniforming-serum',
    slug: 'supreme-light-uniforming-serum'
  },
  {
    name: '12h Supreme Light Spot-Removal Cream',
    line: 'CREAMS AND SERUM ANTI WRINKLE WHITE SCIENCE',
    description: '',
    ingredients: 'AQUA (WATER), C12-15 ALKYL BENZOATE, CETEARYL ALCOHOL, CAPRYLYL METHICONE, COCO-CAPRYLATE/CAPRATE, PALMITIC ACID, STEARIC ACID, C30-45 ALKYL CETEARYL DIMETHICONE CROSSPOLYMER, DIMETHICONE, POLYMETHYLSILSESQUIOXANE, PHENOXYETHANOL, SACCHARIDE ISOMERATE, ASCORBYL TETRAISOPALMITATE, CETETH-10 PHOSPHATE, DICETYL PHOSPHATE, ASTRAGALUS MEMBRANACEUS ROOT EXTRACT, ATRACTYLOIDES MACROCEPHALA ROOT EXTRACT, BUPLEURUM FALCATUM ROOT EXTRACT, POTASSIUM AZELOYL DIGLYCINATE, BUTYLENE GLYCOL, ETHYLHEXYLGLYCERIN, CARBOMER, TETRASODIUM EDTA, PARFUM (FRAGRANCE), SODIUM DEHYDROACETATE, SODIUM HYDROXIDE, POLYMETHYL METHACRYLATE, CARNOSINE, TRICAPRYLIN, CITRIC ACID, PLANKTON EXTRACT, SODIUM CITRATE, HEXYL CINNAMAL, GLYCYRRHIZA GLABRA (LICORICE) ROOT EXTRACT, GERANIOL, CITRONELLOL, BHT, LINALOOL, ALPHA-ISOMETHYL IONONE, LIMONENE',
    directions: 'Apply every day to face, neck and decolleté, massaging until fully absorbed.',
    images: ['product-images\\12h-long-lasting-supreme-light-spot_1.jpg', 'product-images\\12h-long-lasting-supreme-light-spot_2.jpg', 'product-images\\12h-long-lasting-supreme-light-spot_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_WhiteScience_CremaAntiMacchie_PF013689_01.png.webp?itok=hMH837rV', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Crema_AntiMacchie_Supreme_Lunga_Durata_12h_PF013689_Vas_50ml_2000x2000_01.png.webp?itok=w8tz2dBY', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Crema_AntiMacchie_Luce_Suprema_Lunga_Durata_12h_PF013689_Ast_50ml_2000x2000_02.png.webp?itok=dzWKcyOR'],
    url: 'https://www.dibimilano.com/en-en/face/products/creams-and-serum-anti-wrinkle-white-science/12h-long-lasting-supreme-light-spot',
    slug: '12h-long-lasting-supreme-light-spot'
  },
  {
    name: 'Supreme Light Ultra-Active Uniforming* Spray Tonic',
    line: 'CREAMS AND SERUM ANTI WRINKLE WHITE SCIENCE',
    description: '',
    ingredients: 'AQUA (WATER), BUTYLENE GLYCOL, PHENOXYETHANOL, PPG-26-BUTETH-26, POTASSIUM AZELOYL DIGLYCINATE, MAGNESIUM ASCORBYL PHOSPHATE, PEG-40 HYDROGENATED CASTOR OIL, ASTRAGALUS MEMBRANACEUS ROOT EXTRACT, ATRACTYLOIDES MACROCEPHALA ROOT EXTRACT, BUPLEURUM FALCATUM ROOT EXTRACT, ETHYLHEXYLGLYCERIN, PARFUM (FRAGRANCE), CITRIC ACID, HEXYL CINNAMAL, GERANIOL, CITRONELLOL',
    directions: 'Apply to cleansed face, neck and decolleté.',
    images: ['product-images\\supreme-light-ultra-active-uniforming_1.jpg', 'product-images\\supreme-light-ultra-active-uniforming_2.jpg', 'product-images\\supreme-light-ultra-active-uniforming_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_WhiteScience_TonicoSprayUniformante_PF013684_01.png.webp?itok=5l-2g-iq', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Tonico_Spray_Uniformante_PF013684_Fla_200ml_2000x2000_01.png.webp?itok=ivFLlGDu', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Tonico_Spray_Uniformante_PF013684_Ast_200ml_2000x2000_02.png.webp?itok=OA6tMB6l'],
    url: 'https://www.dibimilano.com/en-en/face/products/creams-and-serum-anti-wrinkle-white-science/supreme-light-ultra-active-uniforming',
    slug: 'supreme-light-ultra-active-uniforming'
  },
  {
    name: 'Supreme Light Uniforming* Eco-Mousse Cleanser',
    line: 'CREAMS AND SERUM ANTI WRINKLE WHITE SCIENCE',
    description: '',
    ingredients: 'AQUA (WATER), DISODIUM LAURETH SULFOSUCCINATE, SODIUM COCOAMPHOACETATE, GLYCERIN, PHENOXYETHANOL, POTASSIUM AZELOYL DIGLYCINATE, PPG-26-BUTETH-26, ASTRAGALUS MEMBRANACEUS ROOT EXTRACT, ATRACTYLOIDES MACROCEPHALA ROOT EXTRACT, BUPLEURUM FALCATUM ROOT EXTRACT, DISODIUM EDTA, ETHYLHEXYLGLYCERIN, PEG-40 HYDROGENATED CASTOR OIL, CITRIC ACID, PARFUM (FRAGRANCE), SODIUM BENZOATE',
    directions: 'Gently massage on face, neck and decolleté, then rinse.',
    images: ['product-images\\supreme-light-uniforming-eco-mousse_1.jpg', 'product-images\\supreme-light-uniforming-eco-mousse_2.jpg', 'product-images\\supreme-light-uniforming-eco-mousse_3.jpg'],
    image_urls: ['/sites/default/files/styles/large/public/media-image-p/DIBI_WhiteScience_EcoMousseDetergente_PF013683_01.png.webp?itok=GX0WlopK', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Eco_Mousse_Detergente_PF013683_Fla_200ml_2000x2000_01.png.webp?itok=B8FZg2js', '/sites/default/files/styles/large/public/media-image-p/WHITE_SCIENCE_Eco_Mousse_Detergente_PF013683_Ast_200ml_2000x2000_02.png.webp?itok=04BPWiAU'],
    url: 'https://www.dibimilano.com/en-en/face/products/creams-and-serum-anti-wrinkle-white-science/supreme-light-uniforming-eco-mousse',
    slug: 'supreme-light-uniforming-eco-mousse'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByLine(line: string): Product[] {
  return products.filter(p => p.line === line);
}

export function getUniqueLines(): string[] {
  return [...new Set(products.map(p => p.line).filter(Boolean))];
}
