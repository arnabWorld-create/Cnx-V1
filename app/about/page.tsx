import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import { company, divisions, associates } from '@/lib/site';
import { organizationSchema } from '@/lib/schema';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'About CNX Healthcare — Mumbai Pharmaceutical Company since 2016',
  description: `About ${company.name}: a Mumbai-based pharmaceutical company founded in ${company.founded}, with ${company.stats.products} products across ${company.stats.divisions} divisions and a primary focus on psychiatry and neurology.`,
  path: '/about/',
});

const faqs = [
  { q: 'What is CNX Healthcare?', a: company.summary },
  { q: 'When was CNX Healthcare founded?', a: `CNX Healthcare Pvt. Ltd. was founded in ${company.founded} in Mumbai by ${company.founder}, who is the company's ${company.founderRole}.` },
  { q: 'Where is CNX Healthcare located?', a: 'The head office is at 3rd Floor, Laxmi Niwas, N. C. Kelkar Marg, Shivaji Park, Dadar (W), Mumbai — 400 028, Maharashtra.' },
  { q: 'What is the relationship between CNX Healthcare and CNX Healthcare Plus?', a: `${company.subsidiary} is the subsidiary of ${company.name}. Together they form the CNX Group; the CNX Plus division belongs to the subsidiary.` },
  { q: 'Who manufactures CNX products?', a: `All CNX products are manufactured by WHO-GMP approved partner companies with their own manufacturing plants, including ${associates.slice(0, 3).join(', ')} and others.` },
  { q: 'In which states is CNX Healthcare present?', a: `CNX Healthcare is present in ${company.states.slice(0, -1).join(', ')} and ${company.states.at(-1)}, with its headquarters in Mumbai.` },
];

export default function About() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PageHero
        crumbs={[{ name: 'About', path: '/about/' }]}
        eyebrow={`Est. ${company.founded} · Mumbai`}
        title={<>Built on <em>{company.stats.experience} years</em> of combined expertise.</>}
        lead={`A Mumbai pharmaceutical company founded in ${company.founded} at Shivaji Park, Dadar — ${company.stats.products} formulations across ${company.stats.divisions} divisions, with CNS care at its core.`}
      >
        <div className="facts">
          <div className="fact"><b>{company.founded}</b><span>Founded</span></div>
          <div className="fact"><b>{company.stats.products}</b><span>Products</span></div>
          <div className="fact"><b>{company.stats.divisions}</b><span>Divisions</span></div>
          <div className="fact"><b>{company.states.length}</b><span>States</span></div>
        </div>
      </PageHero>

      <section className="sec">
        <div className="wrap split">
          <div className="prose">
            <div className="eyebrow">Our story</div>
            <h2>From Dadar to <em>five states.</em></h2>
            <p>CNX Healthcare was founded in {company.founded} at Shivaji Park, Dadar, by <strong>{company.founder}</strong>. The company brings together {company.experience} across Sales, Marketing, Manufacturing, Distribution and Retail — focused into one clear purpose: <strong>{company.mission.toLowerCase()}</strong></p>
            <p>What began as a CNS-focused company — psychiatry and neurology remain our primary domain — has grown into eight divisions serving doctors in {company.states.join(', ')}.</p>
            <p>Our subsidiary, <strong>{company.subsidiary}</strong>, extends our reach. Together, the two companies form the CNX Group.</p>
          </div>
          <div className="photo" style={{ aspectRatio: '3/2' }}>
            <img src="/team-900.webp" alt="Team CNX — the CNX Healthcare team" loading="lazy" width={900} height={599} />
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Our philosophy</div>
            <h2>Individually we are a drop. <em>Together we are an ocean.</em></h2>
            <p>Coming together is the beginning. Working together is success. These words guide how our directors, managers and field team work every day.</p>
          </div>
          <div className="grid g4">
            {company.values.map((v) => <div className="card" key={v.title}><div className="ic">{v.icon}</div><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">What we do</div><h2>Eight divisions. <em>One purpose.</em></h2>
            <p>Each division is dedicated to a set of therapy areas, so doctors get focused support for their speciality.</p></div>
          <div className="grid g4">
            {divisions.map((d) => (
              <Link className="card" href={`/divisions/${d.slug}/`} key={d.slug}>
                <h3>{d.name}</h3><p>{d.short}</p><span className="more">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Manufacturing partners</div><h2>Quality you can <em>trust.</em></h2>
            <p>All products of CNX are manufactured by WHO, GMP &amp; USFDA approved companies with their own manufacturing plants.</p></div>
          <div className="chips">{associates.map((a) => <span className="chip" key={a}>{a}</span>)}</div>
        </div>
      </section>

      <Faq items={faqs} />
      <Cta />
    </>
  );
}
