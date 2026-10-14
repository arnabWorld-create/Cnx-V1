import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Cta from '@/components/Cta';
import { company, specialities } from '@/lib/site';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'Specialities — Psychiatry, Neurology, Orthopaedics, Dermatology & more',
  description: `${company.shortName} serves doctors across ${specialities.map((s) => s.name).join(', ')}.`,
  path: '/specialities/',
});

export default function Specialities() {
  return (
    <>
      <PageHero dark crumbs={[{ name: 'Specialities', path: '/specialities/' }]} eyebrow="Our specialities"
        title={<>Areas of <em>deep clinical focus.</em></>}
        lead="CNS care — psychiatry and neurology — is our primary domain. Our divisions also serve orthopaedics, dermatology, gynaecology, cardio-diabetes and general medicine." />
      <section className="sec">
        <div className="wrap grid g3">
          {specialities.map((s, i) => (
            <Link className="card" href={`/specialities/${s.slug}/`} key={s.slug}>
              <span className="tag">{String(i + 1).padStart(2, '0')}</span>
              <div className="ic">{s.icon}</div><h3>{s.name}</h3><p>{s.summary}</p><span className="more">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>
      <Cta />
    </>
  );
}
