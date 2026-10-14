import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';
import { company } from '@/lib/site';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'Team CNX — Our People',
  description: `Meet Team CNX — the medical representatives, managers and support staff of ${company.shortName} serving doctors across ${company.states.join(', ')}.`,
  path: '/team/',
});

export default function Team() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Team CNX', path: '/team/' }]} eyebrow="Team CNX"
        title={<>Together, we are <em>an ocean.</em></>}
        lead={`Behind every CNX product is a dedicated team — medical representatives, area managers and support staff who meet doctors, chemists and distributors every day, carrying our promise of quality care across ${company.states.slice(0, -1).join(', ')} and ${company.states.at(-1)}.`} />
      <section className="sec">
        <div className="wrap">
          <figure className="photo" style={{ aspectRatio: '2/1' }}>
            <img src="/team-1600.webp" srcSet="/team-900.webp 900w, /team-1600.webp 1600w" sizes="(max-width:1120px) 100vw, 1120px"
              alt="Team CNX group photo — the CNX Healthcare field force in white uniforms" width={1600} height={1065} style={{ objectPosition: '50% 45%' }} />
          </figure>
          <p style={{ textAlign: 'center', marginTop: 16, color: 'var(--mid)', fontWeight: 500 }}>One family. One uniform. One mission.</p>
        </div>
      </section>
      <section className="sec alt">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Our values</div><h2>What every CNX team member <em>stands for.</em></h2>
            <p>Our values come straight from our founder&apos;s belief in hard work, spirituality and goal-setting.</p></div>
          <div className="grid g4">
            {company.values.map((v) => <div className="card" key={v.title}><div className="ic">{v.icon}</div><h3>{v.title}</h3><p>{v.text}</p></div>)}
          </div>
          <div className="ph-ctas"><Link href="/careers/" className="btn">Join Team CNX →</Link><Link href="/leadership/" className="btn ghost">Meet our leadership</Link></div>
        </div>
      </section>
      <Cta />
    </>
  );
}
