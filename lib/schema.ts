import { SITE_URL, company, divisions, openings } from './site';

const a = company.contact.address;

export const orgId = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': orgId,
    name: company.name,
    alternateName: company.shortName,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/cnx-logo.png`,
    slogan: company.tagline,
    description: company.summary,
    foundingDate: company.founded,
    founder: { '@type': 'Person', name: company.founder.replace(/^Mr\.\s*/, ''), jobTitle: company.founderRole },
    email: company.contact.email,
    telephone: company.contact.phones[0].tel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${a.line1}, ${a.line2}`,
      addressLocality: 'Mumbai',
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country,
    },
    areaServed: company.states.map((s) => ({ '@type': 'State', name: s })),
    subOrganization: { '@type': 'Organization', name: company.subsidiary },
    brand: divisions.map((d) => ({ '@type': 'Brand', name: d.name })),
    knowsAbout: ['Psychiatry', 'Neurology', 'Orthopaedics', 'Dermatology', 'Gynaecology', 'Cardio Diabetes', 'General Medicine', 'Pharmaceuticals'],
    contactPoint: [{ '@type': 'ContactPoint', contactType: 'customer service', telephone: company.contact.phones[1].tel, email: company.contact.email, areaServed: 'IN', availableLanguage: ['en', 'hi', 'mr'] }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function jobSchemas() {
  return openings.map((o) => ({
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: o.title,
    description: o.description,
    datePosted: o.datePosted,
    employmentType: o.type,
    hiringOrganization: { '@type': 'Organization', name: company.name, sameAs: `${SITE_URL}/`, logo: `${SITE_URL}/cnx-logo.png` },
    jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: o.location, addressCountry: 'IN' } },
  }));
}
