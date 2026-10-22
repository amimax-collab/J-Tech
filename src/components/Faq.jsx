import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/siteData";
import Reveal from "./Reveal";
import "./Faq.css";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section faq">
      <div className="container faq-inner">
        <Reveal className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Questions we hear a lot</h2>
          <p className="section-sub">Can&apos;t find your answer? Message us on WhatsApp.</p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={i * 70}>
                <div className={`faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="faq-q"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <ChevronDown size={22} />
                  </button>
                  <div className="faq-a">
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}