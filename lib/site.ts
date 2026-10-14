/**
 * CNX Healthcare — single source of truth for every inner page, the sitemap and schema.
 * Edit facts HERE once and they update everywhere.
 */

// TODO: replace with the live domain before going live (no trailing slash).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cnxhealthcare.com';

export const company = {
  name: 'CNX Healthcare Pvt. Ltd.',
  shortName: 'CNX Healthcare',
  subsidiary: 'CNX Healthcare Plus Pvt. Ltd.',
  tagline: 'Healthier. Happier.',
  mission: 'Towards a healthier and happier world.',
  founded: '2016',
  city: 'Mumbai',
  founder: 'Mr. Arun Shivram Bawkar',
  founderRole: 'Founder & CMD',
  philosophy:
    'Individually we are a drop. But together we are an ocean. Coming together is the beginning. Working together is success.',
  founderQuote: 'Planning is bringing the future into the present.',
  // Kept as "combined" so it does not conflict with the founder's own years of experience.
  experience: '40+ years of combined pharmaceutical experience',
  summary:
    'CNX Healthcare Pvt. Ltd. is a Mumbai-based pharmaceutical company founded in 2016 and headquartered at Shivaji Park, Dadar (W). It markets 400+ formulations through eight divisions — CNX, CNX Plus, CNX Prime, CNX Ortho, CNX Ortho 2, CNX Derma, CNX Gynec and CNX Cardio Diabetes — with a primary focus on CNS (psychiatry and neurology), and a presence in Maharashtra, Goa, Karnataka, Gujarat and Uttar Pradesh. All CNX products are manufactured by WHO-GMP certified partner companies.',
  stats: { products: '400+', divisions: 8, specialities: 8, experience: '40+' },
  states: ['Maharashtra', 'Goa', 'Karnataka', 'Gujarat', 'Uttar Pradesh'],
  contact: {
    phones: [
      { label: '022-25003690', tel: '+912225003690' },
      { label: '+91 93203 04104', tel: '+919320304104' },
      { label: '+91 93203 04103', tel: '+919320304103' },
      { label: '+91 93249 36348', tel: '+919324936348' },
    ],
    email: 'cnxhealthcare@gmail.com',
    address: {
      line1: '3rd Floor, Laxmi Niwas',
      line2: 'N. C. Kelkar Marg, Shivaji Park',
      locality: 'Dadar (W), Mumbai',
      region: 'Maharashtra',
      postalCode: '400028',
      country: 'IN',
    },
    mapQuery: 'Laxmi Niwas, N. C. Kelkar Marg, Shivaji Park, Dadar West, Mumbai 400028',
  },
  values: [
    { icon: '💪', title: 'Hard work', text: 'Showing up for every doctor, every day.' },
    { icon: '🙏', title: 'Spirituality', text: 'Grounded in faith and values.' },
    { icon: '🎯', title: 'Goal-setting', text: 'Planning today for tomorrow.' },
    { icon: '🤝', title: 'Togetherness', text: 'Many drops, one ocean.' },
  ],
};

export type Division = {
  slug: string;
  name: string;
  short: string;
  badge: string;
  headline: string;
  intro: string;
  therapy: string[];
  specialities: string[]; // speciality slugs
  company: 'CNX Healthcare' | 'CNX Healthcare Plus';
  comingSoon?: boolean;
};

export const divisions: Division[] = [
  {
    slug: 'cnx',
    name: 'CNX',
    short: 'Flagship CNS division',
    badge: 'CNS Primary Division',
    headline: 'The flagship division of CNX Healthcare.',
    intro:
      'CNX is our founding product line and the deepest clinical range we have built — 119 formulations covering psychiatry, neurology and general medicine, with CNS care at its core.',
    therapy: ['SSRIs (escitalopram, fluoxetine, fluvoxamine)', 'Vortioxetine & mirtazapine', 'Tricyclics', 'Anxiolytics & hypnotics', 'Atypical antipsychotics', 'Anti-epileptics', 'Anti-vertigo agents', 'Migraine prophylaxis', 'Dementia & Parkinson’s care', 'Antibiotics & antihistamines', 'GI care', 'Antifungals'],
    specialities: ['psychiatry', 'neurology', 'general-medicine', 'dermatology'],
    company: 'CNX Healthcare',
  },
  {
    slug: 'cnx-plus',
    name: 'CNX Plus',
    short: 'Psychiatry & general medicine',
    badge: 'CNX Healthcare Plus Pvt. Ltd.',
    headline: 'Advanced formulations from our subsidiary company.',
    intro:
      'CNX Plus is the division of our subsidiary, CNX Healthcare Plus Pvt. Ltd. — 30 formulations led by amisulpride, desvenlafaxine, bupropion and clonazepam for psychiatry, along with neuro-nutrition, vertigo care, muscle relaxants, antihistamines, GI care, antibiotics and itraconazole.',
    therapy: ['Atypical antipsychotics (amisulpride)', 'SNRIs (desvenlafaxine)', 'Bupropion', 'Benzodiazepines', 'Neuro-nutrition', 'Anti-vertigo', 'Muscle relaxants (tolperisone)', 'Antihistamines', 'GI care', 'Antibiotics', 'Antifungals'],
    specialities: ['psychiatry', 'neurology', 'general-medicine', 'orthopaedics', 'dermatology'],
    company: 'CNX Healthcare Plus',
  },
  {
    slug: 'cnx-prime',
    name: 'CNX Prime',
    short: 'CNS & pain care',
    badge: 'CNS & Pain Care',
    headline: 'Precision-grade CNS care.',
    intro:
      'CNX Prime offers 51 formulations led by psychiatry — aripiprazole, quetiapine, paroxetine, sertraline, risperidone, atomoxetine and clozapine — along with neuropathic pain, neuro-nutrition and supportive general medicine.',
    therapy: ['Atypical antipsychotics', 'SSRIs', 'ADHD therapy', 'Mouth-dissolving formulations', 'Neuropathic pain (pregabalin combinations)', 'Neuro-nutrition', 'GI care', 'Pain relief'],
    specialities: ['psychiatry', 'neurology', 'general-medicine', 'orthopaedics'],
    company: 'CNX Healthcare',
  },
  {
    slug: 'cnx-ortho',
    name: 'CNX Ortho',
    short: 'Bone, joint & pain',
    badge: 'Orthopaedic Speciality',
    headline: 'Bone. Joint. Pain.',
    intro:
      'CNX Ortho is our orthopaedic division, with 25 formulations covering etoricoxib and aceclofenac combinations, enzyme therapy, calcium and vitamin D3, joint and cartilage support, and topical pain relief.',
    therapy: ['COX-2 inhibitors (etoricoxib)', 'Aceclofenac combinations', 'Muscle relaxants', 'Enzyme therapy', 'Calcium & Vitamin D3', 'Joint & cartilage support', 'Topical analgesics', 'Neuro-nutrition', 'GI protection'],
    specialities: ['orthopaedics', 'neurology', 'general-medicine'],
    company: 'CNX Healthcare',
  },
  {
    slug: 'cnx-ortho-2',
    name: 'CNX Ortho 2',
    short: 'Extended orthopaedic reach',
    badge: 'Orthopaedic Care',
    headline: 'Extending orthopaedic care to more doctors.',
    intro:
      'CNX Ortho 2 extends the CNX orthopaedic portfolio to more doctors and patients, with 11 formulations — aceclofenac combinations, enzyme therapy, calcium and omega-3 support, joint care, neuro-nutrition, neuropathic pain and topical pain relief.',
    therapy: ['Aceclofenac combinations', 'Enzyme therapy', 'Calcium & Omega-3', 'Joint & cartilage support', 'Topical analgesics', 'Neuro-nutrition'],
    specialities: ['orthopaedics', 'neurology'],
    company: 'CNX Healthcare',
  },
  {
    slug: 'cnx-derma',
    name: 'CNX Derma',
    short: 'Skin, hair & beauty',
    badge: 'Dermatology Speciality',
    headline: 'Skin. Hair. Beauty.',
    intro:
      'CNX Derma brings 16 dermatology formulations — systemic antifungals, isotretinoin, cyclosporine, tofacitinib and minoxidil, along with advanced skincare and haircare.',
    therapy: ['Systemic & topical antifungals', 'Isotretinoin', 'Cyclosporine', 'Tofacitinib (JAK inhibitor)', 'Minoxidil', 'Skincare', 'Haircare'],
    specialities: ['dermatology'],
    company: 'CNX Healthcare',
  },
  {
    slug: 'cnx-gynec',
    name: 'CNX Gynec',
    short: "Women's health",
    badge: "Women's Health Speciality",
    headline: "Women's health across every life stage.",
    intro:
      "CNX Gynec offers targeted formulations for gynaecological practice — progesterone, dydrogesterone, haematinics, calcium and nutritional support for women's health.",
    therapy: ['Progesterone', 'Dydrogesterone', 'Haematinics', 'Calcium & Vitamin D3', 'Protein supplementation'],
    specialities: ['gynaecology'],
    company: 'CNX Healthcare',
  },
  {
    slug: 'cnx-cardio-diabetes',
    name: 'CNX Cardio Diabetes',
    short: 'Heart & metabolic health',
    badge: 'Cardio-Diabetic Care',
    headline: 'Complete cardio-metabolic care.',
    intro:
      'CNX Cardio Diabetes is our dedicated division for diabetes and cardiology, with 86 formulations across antidiabetics, statins, antihypertensives and antiplatelets.',
    therapy: ['SGLT2 inhibitors', 'DPP-4 inhibitors', 'Sulfonylureas', 'Metformin combinations', 'Statins', 'Statin–fenofibrate & ezetimibe combinations', 'ARBs (telmisartan)', 'Calcium channel blockers', 'Beta blockers', 'Diuretic combinations', 'Antiplatelets'],
    specialities: ['cardio-diabetes'],
    company: 'CNX Healthcare',
  },
];

export type Speciality = {
  slug: string;
  name: string;
  icon: string;
  summary: string;
  about: string;
  classes: string[];
};

// TODO: the homepage says "8 specialities" — add the 8th one here once its name is confirmed.
export const specialities: Speciality[] = [
  {
    slug: 'psychiatry',
    name: 'Psychiatry',
    icon: '🧠',
    summary: 'SSRIs, SNRIs, antipsychotics, anxiolytics, mood stabilisers and ADHD treatments.',
    about:
      'Psychiatry is the primary domain of CNX Healthcare. Our CNS range supports psychiatrists across depression, anxiety, psychosis, bipolar disorder and ADHD.',
    classes: ['SSRIs & SNRIs', 'Antipsychotics', 'Anxiolytics', 'Mood stabilisers', 'ADHD therapy'],
  },
  {
    slug: 'neurology',
    name: 'Neurology',
    icon: '⚡',
    summary: 'Anti-epileptics, anti-vertigo, neuroprotective and migraine management agents.',
    about:
      'Alongside psychiatry, neurology completes our CNS focus — with formulations used by neurologists and physicians in epilepsy, vertigo, migraine and neuropathy.',
    classes: ['Anti-epileptics', 'Anti-vertigo agents', 'Neuroprotective agents', 'Migraine management'],
  },
  {
    slug: 'general-medicine',
    name: 'General Medicine',
    icon: '💊',
    summary: 'Antibiotics, antiallergics, GI agents, vitamins and multi-purpose formulations.',
    about:
      'Our general medicine range supports physicians with everyday therapy needs across infections, allergies, gastro-intestinal care and nutrition.',
    classes: ['Antibiotics', 'Antiallergics', 'GI agents', 'Vitamins & supplements'],
  },
  {
    slug: 'orthopaedics',
    name: 'Orthopaedics',
    icon: '🦴',
    summary: 'Bone health, joint pain, anti-inflammatories and enzyme therapy.',
    about:
      'Through CNX Ortho and CNX Ortho 2, we serve orthopaedic surgeons and physicians with formulations for pain, inflammation, bone health and joint care.',
    classes: ['NSAIDs', 'Enzyme therapy', 'Bone health', 'Joint supplements', 'Collagen combinations'],
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    icon: '🩺',
    summary: 'Antifungals, isotretinoin, minoxidil, skincare and hair-care formulations.',
    about:
      'CNX Derma supports dermatologists with prescription antifungals, acne therapy, hair-loss treatment and advanced skincare.',
    classes: ['Antifungals', 'Isotretinoin', 'Cyclosporine', 'Tofacitinib', 'Minoxidil', 'Skincare', 'Haircare'],
  },
  {
    slug: 'gynaecology',
    name: 'Gynaecology',
    icon: '🌸',
    summary: "Progesterone, dydrogesterone, iron supplementation and women's health.",
    about:
      "CNX Gynec supports gynaecologists with hormonal support, iron supplementation and nutritional care for women's health.",
    classes: ['Progesterone', 'Dydrogesterone', 'Haematinics', 'Nutritional support'],
  },
  {
    slug: 'cardio-diabetes',
    name: 'Cardio Diabetes',
    icon: '❤️',
    summary: 'Antidiabetics, statins, antihypertensives and antiplatelets for cardio-metabolic care.',
    about:
      'Through CNX Cardio Diabetes, we support diabetologists, cardiologists and physicians with therapy for type 2 diabetes, dyslipidaemia, hypertension and cardiovascular protection.',
    classes: ['SGLT2 inhibitors', 'DPP-4 inhibitors', 'Sulfonylureas', 'Metformin combinations', 'Statins', 'ARBs', 'Calcium channel blockers', 'Beta blockers', 'Antiplatelets'],
  },
];

export const directors = {
  'CNX Healthcare Pvt. Ltd.': [
    { name: 'Mr. Arun Shivram Bawkar', photo: '/founder.webp', role: 'Founder & CMD' },
    { name: 'Mr. Prashant Chandrakant Parab', photo: '/Prashant.PNG' },
    { name: 'Mr. Vijay Hirji Todai' },
    { name: 'Mr. Jayvant Nivrutti Kale', photo: '/jayvant.PNG' },
    { name: 'Mr. Girish Govind Bhagwat', photo: '/girish.PNG' },
    { name: 'Mr. Devendra Kamalakar Umarale', photo: '/Devendra.PNG' },
    { name: 'Mr. Yatin Sashikant Vaidya', photo: '/yatin.PNG' },
    { name: 'Mr. Kishor Prabhudas Sutar', photo: '/kishor.PNG' },
    { name: 'Mr. Dilip Amichand Mehta' },
    { name: 'Mr. Dilip Bansilal Bhavsar' },
    { name: 'Mr. Devang Chandrakant Pajwani' },
    { name: 'Mr. Pravin Shivlal Shah' },
  ],
  'CNX Healthcare Plus Pvt. Ltd.': [
    { name: 'Mr. Arun Shivram Bawkar', photo: '/founder.webp', role: 'Founder & CMD' },
    { name: 'Mr. Prashant Chandrakant Parab', photo: '/Prashant.PNG' },
    { name: 'Mr. Jayvant Nivrutti Kale', photo: '/jayvant.PNG' },
    { name: 'Mr. Girish Govind Bhagwat', photo: '/girish.PNG' },
    { name: 'Mr. Sushant Chandrakant Parab', photo: '/sushant.PNG' },
    { name: 'Mr. Chandresh Chandrakant Kamath' },
    { name: 'Mr. Kamlesh Shivlal Jain' },
  ],
} as Record<string, { name: string; photo?: string; role?: string }[]>;

export const founderBio = [
  'Founder of CNX Healthcare Pvt. Ltd., with 40 years of extensive experience across Sales, Marketing and Finance in the pharmaceutical industry.',
  'Has led high-performing teams across multiple locations in India, with major success in Sales and Finance.',
  'Believes in spirituality, has tremendous faith in God and in the transformative power of hard work.',
  'A goal-achiever and trend-setter — as passionately described by his entire team.',
];

export const associates = [
  'Precise Chemipharma Pvt. Ltd.',
  'Tanmed Pharmaceuticals',
  'Macsur Pharma India Pvt. Ltd.',
  'Elikem Pharmaceuticals Pvt. Ltd.',
  'Avyukt Pharmaceuticals',
  'Finecure Pharmaceuticals Ltd.',
  'Synokem Pharmaceuticals Ltd.',
  'Macsol Lifesciences',
];

/** Fill this when real openings exist — each one automatically gets Google Jobs (JobPosting) schema. */
export const openings: {
  title: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR';
  description: string;
  datePosted: string; // YYYY-MM-DD
}[] = [];

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/divisions/', label: 'Divisions' },
  { href: '/specialities/', label: 'Specialities' },
  { href: '/leadership/', label: 'Leadership' },
  { href: '/team/', label: 'Team' },
  { href: '/contact/', label: 'Contact' },
];

export const getDivision = (slug: string) => divisions.find((d) => d.slug === slug);
export const getSpeciality = (slug: string) => specialities.find((s) => s.slug === slug);
export const divisionsForSpeciality = (slug: string) => divisions.filter((d) => d.specialities.includes(slug));

export const fullAddress = () => {
  const a = company.contact.address;
  return `${a.line1}, ${a.line2}, ${a.locality} — ${a.postalCode}`;
};
