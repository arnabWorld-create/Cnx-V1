import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteFX from '@/components/SiteFX';
import { SITE_URL, company } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${company.shortName} — ${company.tagline}`, template: `%s | ${company.shortName}` },
  description: company.summary,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: '#0066CC' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteFX />
      </body>
    </html>
  );
}
