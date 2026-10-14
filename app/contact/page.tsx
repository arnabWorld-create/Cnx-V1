import PageHero from '@/components/PageHero';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { company, fullAddress } from '@/lib/site';
import { organizationSchema } from '@/lib/schema';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta({
  title: 'Contact CNX Healthcare — Dadar (W), Mumbai',
  description: `Contact ${company.name}: ${fullAddress()}. Phone ${company.contact.phones[0].label}, email ${company.contact.email}.`,
  path: '/contact/',
});

const faqs = [
  { q: 'What is the address of CNX Healthcare?', a: `${fullAddress()}, Maharashtra, India.` },
  { q: 'What is the phone number of CNX Healthcare?', a: `You can call ${company.contact.phones.map((p) => p.label).join(', ')}.` },
  { q: 'How can doctors get product information?', a: 'Registered Medical Practitioners can view the product range on each division page, or contact Team CNX by phone or email for detailed product information.' },
];

export default function Contact() {
  const c = company.contact;
  const map = `https://www.google.com/maps?q=${encodeURIComponent(c.mapQuery)}&output=embed`;
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <PageHero crumbs={[{ name: 'Contact', path: '/contact/' }]} eyebrow="Get in touch"
        title={<>Reach out to <em>Team CNX.</em></>}
        lead="Doctors, distributors, partners or future team members — we're here for you." />
      <section className="sec">
        <div className="wrap">
          <div className="contact-grid">
            <div className="card"><div className="ic">📞</div><h3>Phone</h3>{c.phones.map((p) => <a key={p.tel} href={`tel:${p.tel}`}>{p.label}</a>)}</div>
            <div className="card"><div className="ic">📧</div><h3>Email</h3><a href={`mailto:${c.email}`}>{c.email}</a></div>
            <div className="card"><div className="ic">📍</div><h3>Head office</h3>
              <address style={{ fontStyle: 'normal', color: 'var(--mid)', marginTop: 6 }}>{c.address.line1},<br />{c.address.line2},<br />{c.address.locality} — {c.address.postalCode}</address>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.mapQuery)}`} target="_blank" rel="noopener">Open in Google Maps →</a>
            </div>
          </div>
          <div className="map"><iframe src={map} title="CNX Healthcare office location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>
      <Faq items={faqs} />
    </>
  );
}
