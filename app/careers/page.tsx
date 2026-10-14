import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { company, openings } from '@/lib/site';
import { jobSchemas } from '@/lib/schema';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'Careers — Medical Representative & Pharma Jobs in Mumbai',
  description: `Build your pharma career with ${company.shortName}. We hire medical representatives, area managers and office staff in Mumbai and across ${company.states.join(', ')}.`,
  path: '/careers/',
});

const faqs = [
  { q: 'How do I apply for a job at CNX Healthcare?', a: `Email your CV to ${company.contact.email} with the role and your preferred location in the subject line, or call ${company.contact.phones[0].label}.` },
  { q: 'Which locations does CNX Healthcare hire in?', a: `Our head office is in Dadar (W), Mumbai, and our field team works across ${company.states.join(', ')}.` },
  { q: 'Does CNX Healthcare hire freshers?', a: 'Please send us your CV — we review every application against our current openings across field and head-office roles.' },
];

export default function Careers() {
  const mail = `mailto:${company.contact.email}?subject=${encodeURIComponent('Job application — CNX Healthcare')}`;
  return (
    <>
      {openings.length > 0 && <JsonLd data={jobSchemas()} />}
      <PageHero dark crumbs={[{ name: 'Careers', path: '/careers/' }]} eyebrow="Careers at CNX"
        title={<>Grow with <em>Team CNX.</em></>}
        lead={`Join a growing Mumbai pharmaceutical company with ${company.stats.divisions} divisions and ${company.stats.products} products. We are always looking for driven medical representatives, managers and head-office talent.`}>
        <div className="ph-ctas"><a className="btn light" href={mail}>Email your CV</a><a className="btn ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }} href="/team/">Meet the team</a></div>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Open positions</div><h2>Current <em>openings.</em></h2></div>
          {openings.length ? (
            <div className="grid g2">
              {openings.map((o) => (
                <div className="card" key={o.title + o.location}>
                  <span className="tag">{o.type.replace('_', ' ').toLowerCase()}</span>
                  <h3>{o.title}</h3><p>{o.location}</p><p>{o.description}</p>
                  <a className="more" href={`mailto:${company.contact.email}?subject=${encodeURIComponent('Application — ' + o.title)}`}>Apply →</a>
                </div>
              ))}
            </div>
          ) : (
            <div className="gate">
              <h3>No openings listed right now</h3>
              <p>We are growing across {company.states.join(', ')}. Send us your CV and we will contact you when a suitable role opens.</p>
              <a className="btn" href={mail}>Email your CV</a>
            </div>
          )}
        </div>
      </section>

      <section className="sec alt">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Why CNX</div><h2>What it&apos;s like to <em>work with us.</em></h2></div>
          <div className="grid g4">
            {company.values.map((v) => <div className="card" key={v.title}><div className="ic">{v.icon}</div><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
        </div>
      </section>
      <Faq items={faqs} />
    </>
  );
}
