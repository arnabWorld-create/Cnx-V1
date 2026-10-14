import Link from 'next/link';
export default function NotFound() {
  return (
    <section className="sec"><div className="wrap" style={{ textAlign: 'center' }}>
      <div className="eyebrow">404</div><h1 style={{ margin: '0 auto' }}>Page not found.</h1>
      <p className="lead" style={{ margin: '20px auto' }}>The page you are looking for does not exist.</p>
      <div className="ph-ctas" style={{ justifyContent: 'center' }}><a className="btn" href="/">Go home</a><Link className="btn ghost" href="/contact/">Contact us</Link></div>
    </div></section>
  );
}
