import type { Metadata } from 'next';
import { SITE_URL, company } from './site';

export function pageMeta({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', url, title, description, siteName: company.shortName, locale: 'en_IN', images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: company.shortName }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.jpg'] },
  };
}
