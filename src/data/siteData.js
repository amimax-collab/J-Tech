// =====================================================================
//  EDIT THIS FILE to customise the whole website.
//  Anything marked PLACEHOLDER must be replaced with the real details
//  from your friend before the site goes live.
// =====================================================================

export const business = {
  name: "J Tech", // PLACEHOLDER
  tagline: "Security & Smart Home Installations",
  phone: "+234 904 343 1632", // PLACEHOLDER
  whatsapp: "2349043431632", // PLACEHOLDER: international format, no + and no spaces
  email: "hello@jtech.ng", // PLACEHOLDER
  address: "Masaka Area Boy", // PLACEHOLDER
  hours: "Mon – Sat, 8am – 6pm", // PLACEHOLDER
  areas: ["Abuja", "Lagos", "Port Harcourt"], // PLACEHOLDER
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#installation" },
  { label: "Packages", href: "#packages" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const trustBadges = [
  { icon: "Wrench", text: "Free Site Survey" },
  { icon: "ShieldCheck", text: "Professional Installation" },
  { icon: "BadgeCheck", text: "Warranty on Every Job" },
];

// PLACEHOLDER numbers: replace with real figures (or delete the Stats section in App.jsx)
export const stats = [
  { value: 150, suffix: "+", label: "Installations completed" },
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: business.areas.length, suffix: "", label: "Cities served" },
  { value: 24, suffix: "hrs", label: "Typical quote response" },
];

export const whyUs = [
  {
    icon: "Eye",
    title: "See it from anywhere",
    text: "Watch your home, shop or office live from your phone, whether you are across town or across the world.",
  },
  {
    icon: "BatteryCharging",
    title: "Works when the light goes",
    text: "We plan every system around power backup, so your cameras and locks keep running during outages.",
  },
  {
    icon: "Headset",
    title: "Support you can reach",
    text: "A phone call or WhatsApp message away, with quick site visits when something needs attention.",
  },
];

// PLACEHOLDER: confirm the warranty terms with your friend
export const guarantee =
  "Every job we do comes with a workmanship warranty. If something we installed misbehaves, call us and we will come back and make it right.";

export const services = [
  {
    icon: "Cctv",
    title: "CCTV Cameras",
    text: "HD indoor and outdoor cameras with night vision and live viewing on your phone.",
  },
  {
    icon: "Lock",
    title: "Smart Locks",
    text: "Fingerprint, keypad and app-controlled locks for homes, offices and apartments.",
  },
  {
    icon: "BellRing",
    title: "Alarm Systems",
    text: "Motion, door and window sensors with a loud siren that scares intruders off.",
  },
  {
    icon: "Video",
    title: "Video Doorbells & Intercoms",
    text: "See and speak to whoever is at your gate or door, from anywhere.",
  },
  {
    icon: "Zap",
    title: "Electric Fencing",
    text: "Perimeter protection for compounds, estates, shops and warehouses.",
  },
  {
    icon: "Fingerprint",
    title: "Access Control",
    text: "Control who enters your office or site with cards, fingerprints or face recognition.",
  },
];

export const steps = [
  {
    icon: "ClipboardCheck",
    title: "Free site survey",
    text: "We visit your property, check entry points and cable routes, and listen to what worries you most.",
  },
  {
    icon: "FileText",
    title: "Clear, itemised quote",
    text: "You get a transparent price for equipment and installation, with no hidden charges.",
  },
  {
    icon: "Wrench",
    title: "Professional installation",
    text: "Neat cabling, correct camera angles, and every device tested before we leave.",
  },
  {
    icon: "GraduationCap",
    title: "Training & handover",
    text: "We set up the app on your phone and show you how everything works.",
  },
  {
    icon: "LifeBuoy",
    title: "Ongoing support",
    text: "If anything needs attention after the job, we are a call away.",
  },
];

export const includes = [
  "Hassle-free installation",
  "In-person system training",
  "Guaranteed device compatibility",
  "Expert setup and configuration",
  "Ongoing support and troubleshooting",
  "Customisation to your property",
];

// PLACEHOLDER prices in Naira: replace with your friend's real pricing
export const packages = [
  {
    name: "Starter",
    tagline: "For small homes and shops",
    price: 250000,
    prefix: "From",
    featured: false,
    features: [
      "2 HD cameras with night vision",
      "DVR with storage",
      "Live viewing on your phone",
      "Free site survey",
      "6 months workmanship warranty",
    ],
  },
  {
    name: "Home Secure",
    tagline: "Complete protection for your home",
    price: 650000,
    prefix: "From",
    featured: true,
    features: [
      "4 HD night-vision cameras",
      "Smart door lock (fingerprint + keypad)",
      "Video doorbell",
      "Alarm panel with sensors",
      "Inverter / UPS backup",
      "12 months workmanship warranty",
    ],
  },
  {
    name: "Estate & Business",
    tagline: "For large properties and offices",
    price: 1500000,
    prefix: "From",
    featured: false,
    features: [
      "8+ cameras with central recording",
      "Access control system",
      "Electric fence and intercom",
      "Scheduled maintenance visits",
      "Priority support line",
    ],
  },
];

// PLACEHOLDER projects: add a real photo path in `image` and the "Sample" tag disappears
export const projects = [
  {
    title: "Home CCTV system",
    category: "CCTV",
    service: "CCTV Cameras",
    icon: "Cctv",
    gradient: "linear-gradient(135deg, #0b5fff, #0a2a66)",
    image: "",
    desc: "Add a real photo and a short description of the job here.",
  },
  {
    title: "Estate gate cameras",
    category: "CCTV",
    service: "CCTV Cameras",
    icon: "Video",
    gradient: "linear-gradient(135deg, #1b3a6b, #0a1628)",
    image: "",
    desc: "Add a real photo and a short description of the job here.",
  },
  {
    title: "Fingerprint apartment lock",
    category: "Smart Locks",
    service: "Smart Locks",
    icon: "Fingerprint",
    gradient: "linear-gradient(135deg, #0aa5c0, #0a3a66)",
    image: "",
    desc: "Add a real photo and a short description of the job here.",
  },
  {
    title: "Office access control",
    category: "Smart Locks",
    service: "Access Control",
    icon: "Lock",
    gradient: "linear-gradient(135deg, #3b6fe0, #11233f)",
    image: "",
    desc: "Add a real photo and a short description of the job here.",
  },
  {
    title: "Alarm and sensor setup",
    category: "Alarms",
    service: "Alarm Systems",
    icon: "BellRing",
    gradient: "linear-gradient(135deg, #5b5bf0, #0a1628)",
    image: "",
    desc: "Add a real photo and a short description of the job here.",
  },
  {
    title: "Compound electric fence",
    category: "Electric Fencing",
    service: "Electric Fencing",
    icon: "Zap",
    gradient: "linear-gradient(135deg, #0b8f9c, #0a1628)",
    image: "",
    desc: "Add a real photo and a short description of the job here.",
  },
];

// PLACEHOLDER reviews: replace with real customer feedback (ask past clients on WhatsApp)
export const testimonials = [
  {
    text: "He came to my house and spoilt my door.",
    name: "Taiwo Abass",
    role: "Masaka Goog Boy",
    placeholder: true,
  },
  {
    text: "He is owing me 2k",
    name: "Fountain",
    role: "Maitama",
    placeholder: true,
  },
  {
    text: "He give my sister belle",
    name: "Trophy",
    role: "Masaka Chef",
    placeholder: true,
  },
];

export const faqs = [
  {
    q: "Will my cameras work without internet?",
    a: "Yes. Cameras record to the recorder on site even when the internet is down. You only need internet when you want to watch live or review footage from your phone.",
  },
  {
    q: "What happens when there is a power cut?",
    a: "We can add an inverter or UPS so your cameras, recorder and smart locks keep running during outages. We will recommend the right backup for your property during the site survey.",
  },
  {
    q: "How long does an installation take?",
    a: "Most home installations are completed within a day. Larger properties, estates and offices take longer, and we will give you a timeline in your quote.",
  },
  {
    q: "Is the site survey really free?",
    a: "Yes. We visit, assess your property and give you a clear quote with no obligation.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Every installation comes with a workmanship warranty. The exact length depends on the package, and it is written into your quote.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Ask us when you request your quote. We will tell you what payment options are available for your package.",
  },
];

export const defaultWhatsAppMessage =
  "Hello, I'd like to find out more about your security installation services.";