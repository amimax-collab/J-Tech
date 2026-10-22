import { Check } from "lucide-react";
import { packages } from "../data/siteData";
import { formatNaira } from "../utils/contact";
import Reveal from "./Reveal";
import "./Packages.css";

export default function Packages({ onQuote }) {
  return (
    <section id="packages" className="section packages">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Packages</span>
          <h2 className="section-title">Choose a starting point. We tailor the rest.</h2>
          <p className="section-sub">
            Prices are a guide. Your final quote depends on your property, which we assess
            during the free site survey.
          </p>
        </Reveal>

        <div className="pkg-grid">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 120}>
              <article className={`pkg-card ${pkg.featured ? "featured" : ""}`}>
                {pkg.featured && <span className="pkg-badge">Most popular</span>}
                <h3>{pkg.name}</h3>
                <p className="pkg-tagline">{pkg.tagline}</p>

                <div className="pkg-price">
                  <small>{pkg.prefix}</small>
                  <strong>{formatNaira(pkg.price)}</strong>
                </div>

                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <span className="pkg-check">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn btn-block ${pkg.featured ? "btn-primary" : "btn-ghost"}`}
                  onClick={() => onQuote({ plan: pkg.name })}
                >
                  Choose {pkg.name}
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="pkg-note">Not sure which one fits? Request a free survey and we will advise you.</p>
      </div>
    </section>
  );
}