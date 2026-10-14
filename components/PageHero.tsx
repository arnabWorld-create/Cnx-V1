import JsonLd from './JsonLd';
import HeroCanvas from './HeroCanvas';
import Marquee from './Marquee';
import { breadcrumbSchema } from '@/lib/schema';

type Crumb = { name: string; path: string };

/** Cinematic dark hero — same language as the homepage (aurora canvas, grid, shimmer gradient). */
export default function PageHero({
  crumbs, eyebrow, badge, title, lead, children,
}: { crumbs: Crumb[]; eyebrow?: string; badge?: string; title: React.ReactNode; lead?: React.ReactNode; dark?: boolean; children?: React.ReactNode }) {
  return (
    <>
      <section className="ph dark">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        <HeroCanvas />
        <div className="ph-grid" aria-hidden="true" />
        <div className="wrap ph-in">
          <nav aria-label="Breadcrumb">
            <ol className="bc">
              <li><a href="/">Home</a></li>
              {crumbs.map((c, i) => (
                <li key={c.path}>{i === crumbs.length - 1 ? <span aria-current="page">{c.name}</span> : <a href={c.path}>{c.name}</a>}</li>
              ))}
            </ol>
          </nav>
          {badge && <div className="badge">{badge}</div>}
          {eyebrow && <div className="eyebrow">{eyebrow}</div>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </section>
      <Marquee />
    </>
  );
}
