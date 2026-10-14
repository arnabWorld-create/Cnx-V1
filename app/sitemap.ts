import type { MetadataRoute } from 'next';
import { SITE_URL, divisions, specialities } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const p = (path: string, priority: number) => ({ url: `${SITE_URL}${path}`, lastModified: now, priority });
  return [
    p('/', 1), p('/about/', 0.9), p('/divisions/', 0.9), p('/specialities/', 0.9),
    ...divisions.map((d) => p(`/divisions/${d.slug}/`, 0.8)),
    ...specialities.map((s) => p(`/specialities/${s.slug}/`, 0.8)),
    p('/leadership/', 0.7), p('/team/', 0.6), p('/careers/', 0.8), p('/contact/', 0.8),
  ];
}
