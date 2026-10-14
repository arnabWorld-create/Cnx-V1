import Link from 'next/link';
import { company, divisions, specialities, fullAddress } from '@/lib/site';

export default function Footer() {
  const c = company.contact;
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-g">
          <div>
            <a href="/" aria-label="CNX Healthcare — Home"><span className="logo" /></a>
            <p>CNS specialists since {company.founded}. {company.experience}.</p>
            <p style={{ marginTop: 10 }}>{fullAddress()}</p>
          </div>
          <div>
            <h4>Divisions</h4>
            <ul>{divisions.map((d) => <li key={d.slug}><Link href={`/divisions/${d.slug}/`}>{d.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Specialities</h4>
            <ul>{specialities.map((s) => <li key={s.slug}><Link href={`/specialities/${s.slug}/`}>{s.name}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/leadership/">Leadership</Link></li>
              <li><Link href="/team/">Team CNX</Link></li>
              <li><Link href="/careers/">Careers</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              {c.phones.slice(0, 2).map((p) => <li key={p.tel}><a href={`tel:${p.tel}`}>{p.label}</a></li>)}
              <li><a href={`mailto:${c.email}`}>{c.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-b">
          <span>© {new Date().getFullYear()} {company.name} All rights reserved.</span>
          <span>Product information on this website is intended for Registered Medical Practitioners only.</span>
        </div>
      </div>
    </footer>
  );
}
