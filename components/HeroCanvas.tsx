'use client';
import { useEffect, useRef } from 'react';

/** Port of the homepage hero canvas: drifting aurora orbs, light bands and a connected star field. */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const c = cv.getContext('2d'); if (!c) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, H = 0, t = 0, raf = 0, visible = true;
    type P = { x: number; y: number; vx: number; vy: number; r: number; o: number };
    let pts: P[] = [];
    let orbs: { ox: number; oy: number; r: number; sx: number; sy: number; hue: number; opa: number }[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      W = cv.offsetWidth; H = cv.offsetHeight; if (!W || !H) return;
      cv.width = W * dpr; cv.height = H * dpr; c.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.max(36, Math.floor((W * H) / 9000)));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .18, vy: (Math.random() - .5) * .18, r: Math.random() * 1.6 + .4, o: Math.random() * .5 + .25 }));
      orbs = [
        { ox: W * .2, oy: H * .4, r: W * .35, sx: .0003, sy: .0002, hue: 210, opa: .14 },
        { ox: W * .8, oy: H * .3, r: W * .3, sx: .00015, sy: .00025, hue: 230, opa: .12 },
        { ox: W * .5, oy: H * .9, r: W * .4, sx: .0002, sy: .00015, hue: 200, opa: .09 },
      ];
    };
    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!visible || !W) return;
      t += .008; c.clearRect(0, 0, W, H);
      orbs.forEach((o, i) => {
        const x = o.ox + Math.sin(t * o.sx * 100 + i) * W * .08, y = o.oy + Math.cos(t * o.sy * 100 + i) * H * .06;
        const g = c.createRadialGradient(x, y, 0, x, y, o.r);
        g.addColorStop(0, `hsla(${o.hue},100%,62%,${o.opa})`); g.addColorStop(.5, `hsla(${o.hue + 15},100%,52%,${o.opa * .35})`); g.addColorStop(1, `hsla(${o.hue + 30},100%,42%,0)`);
        c.fillStyle = g; c.fillRect(0, 0, W, H);
      });
      for (let i = 0; i < 2; i++) {
        const sy = H * (.3 + i * .35) + Math.sin(t * .55 + i * 2.1) * 24;
        const g = c.createLinearGradient(0, sy - 40, 0, sy + 40);
        g.addColorStop(0, 'transparent'); g.addColorStop(.5, `rgba(80,150,255,${.035 + Math.sin(t * .8 + i) * .015})`); g.addColorStop(1, 'transparent');
        c.fillStyle = g; c.fillRect(0, sy - 40, W, 80);
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], dx = b.x - a.x, dy = b.y - a.y, d = dx * dx + dy * dy;
          if (d < 12100) { c.beginPath(); c.moveTo(a.x, a.y); c.lineTo(b.x, b.y); c.strokeStyle = `rgba(96,160,255,${(1 - Math.sqrt(d) / 110) * .16 * a.o})`; c.lineWidth = .55; c.stroke(); }
        }
        c.beginPath(); c.arc(a.x, a.y, a.r, 0, 6.283); c.fillStyle = `rgba(170,205,255,${a.o})`; c.fill();
        if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
      }
    };
    resize(); draw();
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(cv);
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="ph-cv" aria-hidden="true" />;
}
