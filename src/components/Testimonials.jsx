import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/siteData";
import Reveal from "./Reveal";
import "./Testimonials.css";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const total = testimonials.length;

  const go = useCallback((i) => setIndex(((i % total) + total) % total), [total]);

  // Auto-advance every 6 seconds, unless the visitor is hovering or touching.
  useEffect(() => {
    if (paused || total < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, total]);

  function onTouchEnd(e) {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
  }

  if (total === 0) return null;

  return (
    <section className="section testimonials" id="reviews">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Customer reviews</span>
          <h2 className="section-title">What our customers say</h2>
        </Reveal>

        <Reveal direction="zoom">
          <div
            className="slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={(e) => {
              setPaused(true);
              touchStart.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              onTouchEnd(e);
              setPaused(false);
            }}
          >
            <div className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((t, i) => (
                <figure className="slide" key={t.text} aria-hidden={i !== index}>
                  <Quote className="quote-mark" size={56} />
                  <div className="stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Star key={n} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote>{t.text}</blockquote>
                  <figcaption>
                    <span className="avatar">{t.name.charAt(0)}</span>
                    <span>
                      <strong>{t.name}</strong>
                      <small>{t.role}</small>
                    </span>
                    {t.placeholder && <span className="sample-chip">Sample</span>}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="slider-controls">
              <button onClick={() => go(index - 1)} aria-label="Previous review">
                <ChevronLeft size={22} />
              </button>
              <div className="dots">
                {testimonials.map((t, i) => (
                  <button
                    key={t.text}
                    className={i === index ? "active" : ""}
                    onClick={() => go(i)}
                    aria-label={`Show review ${i + 1}`}
                  />
                ))}
              </div>
              <button onClick={() => go(index + 1)} aria-label="Next review">
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}