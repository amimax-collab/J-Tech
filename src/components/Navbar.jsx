import { useEffect, useState } from "react";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import { business, navLinks } from "../data/siteData";
import { telHref } from "../utils/contact";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Navbar.css";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(10);
  const active = useActiveSection(sectionIds);

  // Lock page scroll while the mobile menu is open, and close it with Escape.
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-areas">
            <MapPin size={14} /> Serving {business.areas.join(", ")}
          </span>
          <a href={telHref}>
            <Phone size={14} /> {business.phone}
          </a>
        </div>
      </div>

      <nav className="container nav-inner" aria-label="Main">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark">
            <ShieldCheck size={22} />
          </span>
          {business.name}
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary nav-cta">
            Get a Free Quote
          </a>
          <button
            className="burger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <div className="mobile-menu-inner">
          <div className="mobile-menu-pad">
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.href} style={{ "--i": i }}>
                  <a href={link.href} onClick={close}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary btn-block" onClick={close}>
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}