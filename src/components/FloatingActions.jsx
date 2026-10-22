import { ArrowUp } from "lucide-react";
import { defaultWhatsAppMessage } from "../data/siteData";
import { whatsappLink } from "../utils/contact";
import { useScrolled } from "../hooks/useScrolled";
import { scrollToTop } from "../utils/scroll";
import { WhatsAppIcon } from "./Icons";
import "./FloatingActions.css";

export default function FloatingActions() {
  const showTop = useScrolled(600);

  return (
    <div className="floating">
      <button
        className={`to-top ${showTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp size={20} />
      </button>

      <a
        className="wa-float"
        href={whatsappLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={30} />
        <span className="wa-tip">Chat with us</span>
      </a>
    </div>
  );
}