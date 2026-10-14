'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

const REVEAL = [
  '.sec-h', '.prose', '.split > *', '.card', '.chip', '.pp', '.fact', '.faq details',
  '.photo', '.cta', '.gate', '.tbl-wrap', '.founder > *', '.map', '.contact-grid > *', '.ticks li',
].join(',');

let lenis: Lenis | null = null;

/** Brings the homepage's motion language to every inner page. */
export default function SiteFX() {
  const path = usePathname();

  // Once: smooth scroll + custom cursor
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let raf = 0;
    if (!reduce && !lenis) {
      lenis = new Lenis({ duration: 1.15, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, anchors: true });
      const loop = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
      document.documentElement.style.scrollBehavior = 'auto';
    }
    let cw: HTMLDivElement | null = null;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY; if (dot) { dot.style.left = mx + 'px'; dot.style.top = my + 'px'; }
      const card = (e.target as Element)?.closest?.('a.card') as HTMLElement | null;
      if (card) { const r = card.getBoundingClientRect(); card.style.setProperty('--mx', `${e.clientX - r.left}px`); card.style.setProperty('--my', `${e.clientY - r.top}px`); }
    };
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element)?.closest?.('a,button,summary,.card,.chip,.pp');
      document.body.classList.toggle('ch', !!hit);
    };
    let mx = 0, my = 0, rx = 0, ry = 0, ring: HTMLDivElement | null = null, dot: HTMLDivElement | null = null, craf = 0;
    if (fine) window.addEventListener('mousemove', onMove, { passive: true });
    if (fine && !reduce) {
      cw = document.createElement('div'); cw.id = 'CW'; cw.innerHTML = '<div id="CO"></div><div id="CD"></div>';
      document.body.appendChild(cw); document.body.classList.add('has-cursor');
      ring = cw.querySelector('#CO'); dot = cw.querySelector('#CD');
      const follow = () => { rx += (mx - rx) * .12; ry += (my - ry) * .12; if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; } craf = requestAnimationFrame(follow); };
      craf = requestAnimationFrame(follow);
      document.addEventListener('mouseover', onOver, { passive: true });
    }
    return () => {
      cancelAnimationFrame(raf); cancelAnimationFrame(craf); lenis?.destroy(); lenis = null;
      window.removeEventListener('mousemove', onMove); document.removeEventListener('mouseover', onOver);
      cw?.remove(); document.body.classList.remove('has-cursor');
    };
  }, []);

  // Every page: reveal-on-scroll, header theme, count-up
  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hd = document.getElementById('hd');
    const hero = document.querySelector('.ph') as HTMLElement | null;
    const setNav = () => {
      const overHero = hero ? hero.getBoundingClientRect().bottom > 64 : false;
      hd?.classList.toggle('lt', !overHero);
    };
    setNav();
    window.addEventListener('scroll', setNav, { passive: true });

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter((el) => !el.closest('.ph'));
    let io: IntersectionObserver | null = null;
    if (!reduce && 'IntersectionObserver' in window) {
      els.forEach((el) => {
        if (el.classList.contains('rv')) return;
        const sibs = Array.from(el.parentElement?.children || []).filter((s) => s.matches(REVEAL));
        const i = Math.max(0, sibs.indexOf(el));
        el.style.transitionDelay = `${Math.min(i, 8) * 70}ms`;
        el.classList.add('rv');
      });
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io?.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      els.forEach((el) => io!.observe(el));
    }

    // Count-up for hero facts (e.g. "400+", "2016")
    document.querySelectorAll<HTMLElement>('.fact b').forEach((b) => {
      const m = (b.textContent || '').match(/^(\d+)(\D*)$/);
      if (!m || reduce) return;
      const end = +m[1], suf = m[2], start = end > 1000 ? end - 30 : 0, t0 = performance.now(), dur = 1400;
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        b.textContent = Math.round(start + (end - start) * e) + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      setTimeout(() => requestAnimationFrame(step), 500);
    });

    return () => { window.removeEventListener('scroll', setNav); io?.disconnect(); };
  }, [path]);

  return null;
}
