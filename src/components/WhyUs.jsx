import { ShieldCheck } from "lucide-react";
import { whyUs, guarantee } from "../data/siteData";
import { Icon } from "./Icons";
import Reveal from "./Reveal";
import "./WhyUs.css";

export default function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Why choose us</span>
          <h2 className="section-title">Security built for how we live in Nigeria</h2>
          <p className="section-sub">
            Smart technology, installed properly, by a team you can actually reach.
          </p>
        </Reveal>

        <div className="why-grid">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <article className="why-card">
                <div className="why-icon">
                  <Icon name={item.icon} size={30} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal direction="zoom">
          <div className="guarantee">
            <div className="guarantee-icon">
              <ShieldCheck size={44} />
            </div>
            <div className="guarantee-text">
              <h3>Guaranteed good, or we make it right</h3>
              <p>{guarantee}</p>
            </div>
            <a href="#contact" className="btn btn-light">
              Book a free survey
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}