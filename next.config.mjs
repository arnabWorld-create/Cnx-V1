/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // Static HTML export -> /out folder. Upload /out to any host (Vercel, Netlify, cPanel...).
  output: isDev ? undefined : 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // The animated homepage lives in public/index.html (kept exactly as designed).
  // In dev we map "/" to it; in the static export it is served as out/index.html.
  ...(isDev
    ? { async rewrites() { return [{ source: '/', destination: '/index.html' }]; } }
    : {}),
};

export default nextConfig;
