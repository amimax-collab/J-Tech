import { useEffect, useState } from "react";
import { Phone, Lock, Smartphone, BatteryCharging } from "lucide-react";
import { trustBadges } from "../data/siteData";
import { telHref } from "../utils/contact";
import { Icon } from "./Icons";
import "./Hero.css";

const headline = [
  { word: "Protect" },
  { word: "what" },
  { word: "matters" },
  { word: "most.", highlight: true },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return now;
}

export default function Hero() {
  const now = useClock();
  const time = now.toLocaleTimeString("en-GB", { hour12: false });

  return (
    <>
      <section id="top" className="hero">
        <div className="hero-bg" />
        <div className="glow glow-1" />
        <div className="glow glow-2" />

        <div className="container hero-grid">
          <div className="hero-text">
            <span className="hero-pill">
              <i className="pill-dot" /> Trusted installers for homes &amp; businesses
            </span>

            <h1>
              {headline.map((item, i) => (
                <span
                  key={item.word}
                  className={`word ${item.highlight ? "hl" : ""}`}
                  style={{ "--d": `${0.15 + i * 0.1}s` }}
                >
                  <span>{item.word}</span>
                </span>
              ))}
            </h1>

            <p className="hero-sub">
              CCTV cameras, smart locks, alarms and video doorbells, professionally
              installed and tailored to your home, office or estate.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get a Free Quote
              </a>
              <a href={telHref} className="btn btn-outline">
                <Phone size={18} /> Call Now
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="feed">
              <div className="feed-top">
                <span className="rec">
                  <i /> REC
                </span>
                <span>CAM 01 · Front Gate</span>
                <span className="mono">{time}</span>
              </div>
              <div className="feed-screen">
                <div className="grid-lines" />
                <div className="scan" />
                <div className="target">
                  <span>Motion detected</span>
                </div>
              </div>
              <div className="feed-bottom">
                <span>
                  <Lock size={14} /> Front door locked
                </span>
                <span>
                  <Smartphone size={14} /> Alert sent
                </span>
              </div>
            </div>

            <div className="float-chip chip-1">
              <BatteryCharging size={18} /> Power backup active
            </div>
            <div className="float-chip chip-2">
              <Lock size={18} /> Smart lock · Locked
            </div>
          </div>
        </div>
      </section>

      <div className="container badges">
        {trustBadges.map((badge) => (
          <div className="badge" key={badge.text}>
            <span className="badge-icon">
              <Icon name={badge.icon} size={24} />
            </span>
            {badge.text}
          </div>
        ))}
      </div>
    </>
  );
}