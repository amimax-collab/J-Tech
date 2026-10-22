import { stats } from "../data/siteData";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import "./Stats.css";

function Stat({ value, suffix, label, active }) {
  const count = useCountUp(value, active);
  return (
    <div className="stat">
      <strong>
        {count}
        <em>{suffix}</em>
      </strong>
      <span>{label}</span>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({ threshold: 0.35 });

  return (
    <section className="stats" ref={ref}>
      <div className="container stats-grid">
        {stats.map((s) => (
          <Stat key={s.label} {...s} active={inView} />
        ))}
      </div>
    </section>
  );
}