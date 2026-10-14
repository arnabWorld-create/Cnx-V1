import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import { company, specialities, getSpeciality, divisionsForSpeciality } from '@/lib/site';
import { pageMeta } from '@/lib/meta';

export const dynamicParams = false;
export function generateStaticParams() { return specialities.map((s) => ({ slug: s.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSpeciality((await params).slug);
  if (!s) return {};
  return pageMeta({ title: `${s.name} — CNX Healthcare Speciality`, description: `${s.about} ${s.summary}`, path: `/specialities/${s.slug}/` });
}

export default async function SpecialityPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getSpeciality((await params).slug);
  if (!s) notFound();
  const divs = divisionsForSpeciality(s.slug);
  const others = specialities.filter((x) => x.slug !== s.slug);
  const faqs = [
    { q: `Does CNX Healthcare have products for ${s.name.toLowerCase()}?`, a: `Yes. ${s.about}` },
    { q: `Which CNX divisions serve ${s.name.toLowerCase()}?`, a: divs.length ? `${s.name} is served by ${divs.map((d) => d.name).join(', ')}.` : `Please contact Team CNX for details.` },
    { q: `Which therapy classes does CNX offer in ${s.name.toLowerCase()}?`, a: `${s.classes.join(', ')}.` },
  ];
  return (
    <>
      <PageHero crumbs={[{ name: 'Specialities', path: '/specialities/' }, { name: s.name, path: `/specialities/${s.slug}/` }]}
        eyebrow={`${s.icon} Speciality`} title={<>{s.name}<em>.</em></>} lead={s.about} />
      <section className="sec">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Therapy classes</div><h2>What we offer in <em>{s.name.toLowerCase()}.</em></h2><p>{s.summary}</p></div>
          <div className="chips">{s.classes.map((c) => <span className="chip" key={c}>{c}</span>)}</div>
        </div>
      </section>
      {divs.length > 0 && (
        <section className="sec alt">
          <div className="wrap">
            <div className="sec-h"><div className="eyebrow">Divisions</div><h2>Who serves <em>{s.name.toLowerCase()}.</em></h2></div>
            <div className="grid g3">
              {divs.map((d) => (
                <Link className="card" href={`/divisions/${d.slug}/`} key={d.slug}><h3>{d.name}</h3><p>{d.intro}</p><span className="more">View division →</span></Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <Faq items={faqs} />
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap"><div className="sec-h"><h2>Other <em>specialities.</em></h2></div>
          <div className="chips">{others.map((o) => <Link className="chip" key={o.slug} href={`/specialities/${o.slug}/`}>{o.icon} {o.name}</Link>)}</div>
        </div>
      </section>
      <Cta text={`Talk to Team CNX about our ${s.name.toLowerCase()} range.`} />
    </>
  );
}
