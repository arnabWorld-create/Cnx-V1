import { divisions, specialities } from '@/lib/site';

export default function Marquee() {
  const items = [...divisions.map((d) => d.name), ...specialities.map((s) => s.name)];
  const row = items.map((n, i) => <div className="mqi" key={n + i}>{n}<span className="mqd" /></div>);
  return (
    <div className="mq" aria-hidden="true"><div className="mq-t">{row}{row}</div></div>
  );
}
