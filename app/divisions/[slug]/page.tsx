import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import RmpGate from '@/components/RmpGate';
import { company, divisions, getDivision, getSpeciality } from '@/lib/site';
import { pageMeta } from '@/lib/meta';

export const dynamicParams = false;
export function generateStaticParams() { return divisions.map((d) => ({ slug: d.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const d = getDivision((await params).slug);
  if (!d) return {};
  return pageMeta({
    title: `${d.name} Division — ${d.short}`,
    description: `${d.intro} A division of ${d.company === 'CNX Healthcare Plus' ? company.subsidiary : company.name}, Mumbai.`,
    path: `/divisions/${d.slug}/`,
  });
}

export default async function DivisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const d = getDivision((await params).slug);
  if (!d) notFound();
  const owner = d.company === 'CNX Healthcare Plus' ? company.subsidiary : company.name;
  const specs = d.specialities.map(getSpeciality).filter(Boolean);
  const others = divisions.filter((x) => x.slug !== d.slug);
  const faqs = [
    { q: `What is ${d.name}?`, a: `${d.intro} It is a division of ${owner}, headquartered in Dadar (W), Mumbai.` },
    { q: `Which therapy areas does ${d.name} cover?`, a: `${d.name} covers ${d.therapy.join(', ')}.` },
    { q: `How can doctors get ${d.name} product information?`, a: `Registered Medical Practitioners can view the ${d.name} product range on this page after confirming their status, or contact Team CNX on ${company.contact.phones[0].label} or ${company.contact.email}.` },
  ];
  return (
    <>
      <PageHero crumbs={[{ name: 'Divisions', path: '/divisions/' }, { name: d.name, path: `/divisions/${d.slug}/` }]}
        badge={d.badge} title={<>{d.name} <em>division.</em></>} lead={<><strong style={{ fontWeight: 600, color: 'var(--ink)' }}>{d.headline}</strong> {d.intro}</>}>
        <p className="rmp-note">A division of {owner}.</p>
      </PageHero>

      <section className="sec">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">Therapy areas</div><h2>What {d.name} <em>covers.</em></h2></div>
          <div className="chips">{d.therapy.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          {specs.length > 0 && (
            <>
              <h3 style={{ marginTop: 40, marginBottom: 14 }}>Specialities served</h3>
              <div className="chips">{specs.map((s) => <Link className="chip" key={s!.slug} href={`/specialities/${s!.slug}/`}>{s!.icon} {s!.name}</Link>)}</div>
            </>
          )}
        </div>
      </section>

      <section className="sec alt" id="products">
        <div className="wrap">
          <div className="sec-h"><div className="eyebrow">For healthcare professionals</div><h2>{d.name} <em>product range.</em></h2></div>
          <RmpGate slug={d.slug} divisionName={d.name} />
        </div>
      </section>

      <Faq items={faqs} />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-h"><h2>Other <em>divisions.</em></h2></div>
          <div className="chips">{others.map((o) => <Link className="chip" key={o.slug} href={`/divisions/${o.slug}/`}>{o.name}</Link>)}</div>
        </div>
      </section>
      <Cta />
    </>
  );
}
