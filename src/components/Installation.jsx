import { Check } from "lucide-react";
import { steps, includes } from "../data/siteData";
import { useInView } from "../hooks/useInView";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import "./Installation.css";

export default function Installation() {
  const [stepsRef, stepsIn] = useInView({ threshold: 0.2 });
  const [listRef, listIn] = useInView({ threshold: 0.2 });

  return (
    <section id="installation" className="section installation">
      <div className="container install-grid">
        <div>
          <Reveal direction="left">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">You don&apos;t lift a finger. We don&apos;t miss a detail.</h2>
            <p className="section-sub install-sub">
              From the first visit to the day we hand over the keys, here is exactly what to expect.
            </p>
          </Reveal>

          <ol ref={stepsRef} className={`timeline ${stepsIn ? "in" : ""}`}>
            {steps.map((step, i) => (
              <li key={step.title} style={{ "--i": i }}>
                <span className="step-num">
                  <Icon name={step.icon} size={22} />
                </span>
                <div>
                  <h3>
                    <small>Step {i + 1}</small>
                    {step.title}
                  </h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal direction="right">
          <aside className="includes">
            <h3>Every installation includes</h3>
            <p>Professional work that is ready to use from day one.</p>
            <ul ref={listRef} className={listIn ? "in" : ""}>
              {includes.map((item, i) => (
                <li key={item} style={{ "--i": i }}>
                  <span className="tick">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary btn-block">
              Start with a free survey
            </a>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}