'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { nav } from '@/lib/site';

/** Same look & behaviour as the homepage nav: dark glass over the hero, light after scrolling. */
export default function Header() {
  const path = usePathname() || '';
  const isCur = (h: string) => path === h || path.startsWith(h);
  return (
    <header className="hd" id="hd">
      <a href="#main" className="skip">Skip to content</a>
      <div className="hd-in">
        <a href="/" aria-label="CNX Healthcare — Home"><span className="logo" /></a>
        <nav aria-label="Main">
          <ul className="hd-nav">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={isCur(n.href) ? 'page' : undefined}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hd-right">
          <Link href="/careers/" className="hd-cta" aria-current={isCur('/careers/') ? 'page' : undefined}>Careers</Link>
          <details className="hd-menu">
            <summary aria-label="Open menu"><span /></summary>
            <div className="hd-drop">
              <a href="/">Home</a>
              {nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
              <Link href="/careers/">Careers</Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
