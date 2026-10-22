import { ArrowRight } from "lucide-react";
import { services } from "../data/siteData";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import "./Services.css";

export default function Services({ onQuote }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What we install</span>
          <h2 className="section-title">Everything you need to stay protected</h2>
          <p className="section-sub">
            Pick one service or combine them into a complete, connected system.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 100}>
              <article className="service-card">
                <div className="service-icon">
                  <Icon name={service.icon} size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <button
                  className="link-btn"
                  onClick={() => onQuote({ service: service.title })}
                >
                  Get a quote <ArrowRight size={18} />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}