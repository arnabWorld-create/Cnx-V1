'use client';
import { useEffect, useState } from 'react';

type P = { brand: string; generic: string; tag: string };
const KEY = 'cnx-rmp-ok';

/**
 * Prescription product details are shown only after the visitor confirms they are a
 * Registered Medical Practitioner. Product data is loaded on demand (separate JS chunk),
 * so brand names are NOT part of the public, indexed HTML.
 */
export default function RmpGate({ slug, divisionName }: { slug: string; divisionName: string }) {
  const [ok, setOk] = useState(false);
  const [items, setItems] = useState<P[] | null>(null);

  useEffect(() => {
    try { if (sessionStorage.getItem(KEY) === '1') setOk(true); } catch {}
  }, []);

  useEffect(() => {
    if (!ok) return;
    import('@/data/products.json').then((m) => {
      const all = (m.default || m) as unknown as Record<string, P[]>;
      setItems(all[slug] || []);
    });
  }, [ok, slug]);

  if (!ok) {
    return (
      <div className="gate">
        <h3>{divisionName} product range</h3>
        <p>Detailed product information is meant for Registered Medical Practitioners and healthcare professionals only.</p>
        <button className="btn" onClick={() => { try { sessionStorage.setItem(KEY, '1'); } catch {} setOk(true); }}>
          I am a Registered Medical Practitioner
        </button>
        <small>By continuing you confirm you are a Registered Medical Practitioner or healthcare professional.</small>
      </div>
    );
  }
  if (!items) return <p style={{ color: 'var(--soft)' }}>Loading products…</p>;
  if (!items.length) {
    return (
      <div className="gate">
        <h3>Product list coming soon</h3>
        <p>The {divisionName} product list is being updated. Please contact Team CNX for details.</p>
        <a className="btn" href="/contact/">Contact Team CNX</a>
      </div>
    );
  }
  return (
    <div className="tbl-wrap">
      <table className="prod-tbl">
        <thead><tr><th>Brand</th><th>Composition</th><th>Area</th></tr></thead>
        <tbody>{items.map((p, i) => <tr key={p.brand + i}><td>{p.brand}</td><td>{p.generic}</td><td>{p.tag}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
