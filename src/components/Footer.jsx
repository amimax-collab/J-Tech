import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";
import { business, navLinks, services } from "../data/siteData";
import { telHref, mailHref, whatsappLink } from "../utils/contact";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal>
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#top" className="logo">
                <span className="logo-mark">
                  <ShieldCheck size={22} />
                </span>
                {business.name}
              </a>
              <p>{business.tagline}. Professional installation for homes, offices and estates.</p>
              <a
                className="btn btn-whatsapp"
                href={whatsappLink(`Hello ${business.name}, I'd like to find out more about your services.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} /> Chat on WhatsApp
              </a>
            </div>

            <div>
              <h4>Quick links</h4>
              <ul>
                {navLinks.map((link) => (
                  <li key={link.href}><a href={link.href}>{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.title}><a href="#services">{s.title}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul className="footer-contact">
                <li><Phone size={16} /><a href={telHref}>{business.phone}</a></li>
                <li><Mail size={16} /><a href={mailHref}>{business.email}</a></li>
                <li><MapPin size={16} />{business.address}</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
          <span>Serving {business.areas.join(" · ")}</span>
        </div>
      </div>
    </footer>
  );
}