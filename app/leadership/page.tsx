import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';
import JsonLd from '@/components/JsonLd';
import { company, directors, founderBio, SITE_URL } from '@/lib/site';
import { orgId } from '@/lib/schema';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'Leadership & Board of Directors',
  description: `Meet the leadership of ${company.name} and ${company.subsidiary} — founder ${company.founder} and the Board of Directors.`,
  path: '/leadership/',
});

const initials = (n: string) => n.replace(/^Mr\.\s*/, '').split(' ').filter(Boolean).map((w) => w[0]).filter((_, i, a) => i === 0 || i === a.length - 1).join('');

export default function Leadership() {
  const founderSchema = {
    '@context': 'https://schema.org', '@type': 'Person',
    name: company.founder.replace(/^Mr\.\s*/, ''), jobTitle: company.founderRole,
    worksFor: { '@id': orgId }, url: `${SITE_URL}/leadership/`, image: `${SITE_URL}/founder.webp`,
    description: founderBio.join(' '),
  };
  return (
    <>
      <JsonLd data={founderSchema} />
      <PageHero crumbs={[{ name: 'Leadership', path: '/leadership/' }]} eyebrow="Leadership"
        title={<>The people who <em>lead CNX.</em></>}
        lead={`${company.name} and its subsidiary ${company.subsidiary} are guided by founder ${company.founder} and an experienced Board of Directors.`} />

      <section className="sec">
        <div className="wrap founder">
          <div>
            <div className="av"><img src="/founder.webp" alt={company.founder} width={220} height={220} /></div>
            <h2 style={{ fontSize: 24, marginTop: 20 }}>{company.founder}</h2>
            <p style={{ color: 'var(--b)', fontWeight: 500 }}>{company.founderRole}, {company.name}</p>
          </div>
          <div>
            <div className="eyebrow">Our founder</div>
            <p className="quote">“{company.founderQuote}”</p>
            <ul className="ticks">{founderBio.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>
      </section>

      {Object.entries(directors).map(([co, list], i) => (
        <section className={`sec${i === 0 ? ' alt' : ''}`} key={co}>
          <div className="wrap">
            <div className="sec-h"><div className="eyebrow">Board of Directors</div><h2>{co}</h2></div>
            <div className="ppl">
              {list.map((d) => (
                <div className="pp" key={d.name}>
                  <div className="av">{d.photo ? <img src={d.photo} alt={d.name} loading="lazy" width={92} height={92} /> : initials(d.name)}</div>
                  <h3>{d.name}</h3>
                  <p>{d.role || 'Director'}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      <Cta />
    </>
  );
}
