import JsonLd from './JsonLd';
import { faqSchema } from '@/lib/schema';

export default function Faq({ items, title = 'Frequently asked questions' }: { items: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="sec" aria-labelledby="faq-h">
      <JsonLd data={faqSchema(items)} />
      <div className="wrap">
        <div className="sec-h"><div className="eyebrow">FAQ</div><h2 id="faq-h">{title}</h2></div>
        <div className="faq">
          {items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
