import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Installation from "./components/Installation";
import Packages from "./components/Packages";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { scrollToSection } from "./utils/scroll";

export default function App() {
  // "Lifting state up": the quote form lives far from the buttons that fill it in,
  // so the shared value is kept here in their common parent.
  const [prefill, setPrefill] = useState(null);

  const requestQuote = useCallback((choice) => {
    setPrefill(choice); // e.g. { service: "Smart Locks" } or { plan: "Starter" }
    scrollToSection("contact");
  }, []);

  // One click listener for every in-page link (navbar, footer, buttons, mobile menu):
  // instead of the browser's jump, scroll smoothly to the section.
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest?.('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute("href").slice(1);
      if (!id || !document.getElementById(id)) return;

      e.preventDefault();
      scrollToSection(id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services onQuote={requestQuote} />
        <Stats />
        <Installation />
        <Packages onQuote={requestQuote} />
        <Projects onQuote={requestQuote} />
        <Testimonials />
        <Faq />
        <QuoteForm prefill={prefill} />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}