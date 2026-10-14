import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import { company, divisions, SITE_URL } from '@/lib/site';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'Our 8 Divisions — CNX, Plus, Prime, Ortho, Derma, Gynec & more',
  description: `${company.shortName} works through ${divisions.length} divisions: ${divisions.map((d) => d.name).join(', ')}.`,
  path: '/divisions/',
});

const faqs = [
  { q: 'How many divisions does CNX Healthcare have?', a: `CNX Healthcare has ${divisions.length} divisions: ${divisions.map((d) => d.name).join(', ')}.` },
  { q: 'Which is the main division of CNX Healthcare?', a: 'CNX is the flagship division and founding product line, focused on CNS care — psychiatry and neurology — along with general medicine and orthopaedics.' },
  { q: 'Which division belongs to CNX Healthcare Plus?', a: 'The CNX Plus division belongs to the subsidiary company, CNX Healthcare Plus Pvt. Ltd.' },
];

export default function Divisions() {
  const list = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'CNX Healthcare divisions',
    itemListElement: divisions.map((d, i) => ({ '@type': 'ListItem', position: i + 1, name: d.name, url: `${SITE_URL}/divisions/${d.slug}/` })),
  };
  return (
    <>
      <JsonLd data={list} />
      <PageHero crumbs={[{ name: 'Divisions', path: '/divisions/' }]} eyebrow="Product portfolio"
        title={<>{company.stats.products} products. <em>{divisions.length} divisions.</em></>}
        lead="Each CNX division is dedicated to a set of therapy areas, so doctors get focused support for their speciality." />
      <section className="sec">
        <div className="wrap grid g2">
          {divisions.map((d) => (
            <Link className="card" href={`/divisions/${d.slug}/`} key={d.slug}>
              {d.comingSoon && <span className="tag">New</span>}
              <div className="eyebrow" style={{ marginBottom: 6 }}>{d.badge}</div>
              <h3 style={{ fontSize: 24 }}>{d.name}</h3>
              <p>{d.intro}</p>
              <span className="more">View division →</span>
            </Link>
          ))}
        </div>
      </section>
      <Faq items={faqs} />
      <Cta />
    </>
  );
}
