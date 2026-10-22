import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Check, RotateCcw } from "lucide-react";
import { business, services, packages } from "../data/siteData";
import { whatsappLink, telHref, mailHref } from "../utils/contact";
import { WhatsAppIcon } from "./Icons";
import Reveal from "./Reveal";
import "./QuoteForm.css";

const NOT_SURE = "Not sure yet";
const today = new Date().toISOString().split("T")[0];

const emptyForm = {
  name: "",
  phone: "",
  service: services[0].title,
  plan: NOT_SURE,
  location: "",
  date: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your name.";

  const phone = form.phone.replace(/[\s-]/g, "");
  if (!/^(\+?234|0)[789][01]\d{8}$/.test(phone)) {
    errors.phone = "Enter a valid Nigerian number, e.g. 0803 123 4567.";
  }
  return errors;
}

function buildMessage(form) {
  const lines = [
    `Hello ${business.name}, I'd like a free quote.`,
    "",
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    `Service: ${form.service}`,
    `Package: ${form.plan}`,
  ];
  if (form.location.trim()) lines.push(`Location: ${form.location.trim()}`);
  if (form.date) lines.push(`Preferred survey date: ${form.date}`);
  if (form.message.trim()) lines.push(`Details: ${form.message.trim()}`);
  return lines.join("\n");
}

function Field({ label, error, children }) {
  return (
    <label className={`field ${error ? "has-error" : ""}`}>
      <span>{label}</span>
      {children}
      {error && <small className="err">{error}</small>}
    </label>
  );
}

export default function QuoteForm({ prefill }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [link, setLink] = useState("");

  // When a service card or package button is clicked elsewhere on the page,
  // App passes the choice down as `prefill` and we fill in the form.
  useEffect(() => {
    if (!prefill) return;
    setForm((f) => ({
      ...f,
      service: prefill.service ?? f.service,
      plan: prefill.plan ?? f.plan,
    }));
    setSent(false);
  }, [prefill]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const url = whatsappLink(buildMessage(form));
    setLink(url);
    setSent(true);
    window.open(url, "_blank", "noopener");
  }

  function reset() {
    setForm(emptyForm);
    setErrors({});
    setSent(false);
  }

  return (
    <section id="contact" className="section quote">
      <div className="container quote-grid">
        <Reveal direction="left" className="quote-info">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">Get a free quote today</h2>
          <p className="section-sub">
            Tell us what you need protected. We will reply on WhatsApp, visit for a free site
            survey and send you a clear price with no hidden charges.
          </p>

          <ol className="next-steps">
            <li><span>1</span> You send your request</li>
            <li><span>2</span> We reply on WhatsApp</li>
            <li><span>3</span> Free site survey, then your quote</li>
          </ol>

          <ul className="contact-list">
            <li><Phone size={20} /><a href={telHref}>{business.phone}</a></li>
            <li><Mail size={20} /><a href={mailHref}>{business.email}</a></li>
            <li><MapPin size={20} />{business.address}</li>
            <li><Clock size={20} />{business.hours}</li>
          </ul>
        </Reveal>

        <Reveal direction="right">
          <div className="form-card">
            {sent ? (
              <div className="success">
                <svg className="check-draw" viewBox="0 0 52 52" aria-hidden="true">
                  <circle cx="26" cy="26" r="24" />
                  <path d="M15 27l8 8 15-17" />
                </svg>
                <h3>Request ready!</h3>
                <p>
                  WhatsApp should have opened with your message. If it did not, tap the button
                  below to send it.
                </p>
                <a className="btn btn-whatsapp btn-block" href={link} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={20} /> Open WhatsApp
                </a>
                <button className="btn btn-ghost btn-block" onClick={reset}>
                  <RotateCcw size={16} /> Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <Field label="Full name" error={errors.name}>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="e.g. Amaka Obi" autoComplete="name" />
                  </Field>
                  <Field label="Phone number" error={errors.phone}>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0803 123 4567" autoComplete="tel" />
                  </Field>
                </div>

                <div className="row">
                  <Field label="Service needed">
                    <select name="service" value={form.service} onChange={handleChange}>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Package">
                    <select name="plan" value={form.plan} onChange={handleChange}>
                      <option value={NOT_SURE}>{NOT_SURE}</option>
                      {packages.map((p) => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div className="row">
                  <Field label="Property location">
                    <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Wuse 2, Abuja" />
                  </Field>
                  <Field label="Preferred survey date">
                    <input name="date" type="date" min={today} value={form.date} onChange={handleChange} />
                  </Field>
                </div>

                <Field label="Anything else we should know? (optional)">
                  <textarea name="message" rows="3" value={form.message} onChange={handleChange} placeholder="Number of rooms, gates, existing cameras…" />
                </Field>

                <button type="submit" className="btn btn-whatsapp btn-block">
                  <WhatsAppIcon size={20} /> Request Quote on WhatsApp
                </button>
                <p className="form-note">
                  <Check size={14} /> No payment needed. Your request opens in WhatsApp so you can review it before sending.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}