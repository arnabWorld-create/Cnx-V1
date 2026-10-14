import Link from 'next/link';

export default function Cta({ title = 'Let’s work together.', text = 'Doctors, partners and future team members — we’re here for you.' }: { title?: string; text?: string }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="cta">
          <div><h2>{title}</h2><p>{text}</p></div>
          <div className="ph-ctas">
            <Link href="/contact/" className="btn light">Contact us</Link>
            <Link href="/careers/" className="btn ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.3)' }}>Careers</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
