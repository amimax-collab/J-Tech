import { business } from "../data/siteData";

export function whatsappLink(text) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const telHref = `tel:${business.phone.replace(/\s/g, "")}`;
export const mailHref = `mailto:${business.email}`;

export function formatNaira(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}