import { useEffect, useState } from "react";

function currentScroll() {
  return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

// True once the page has been scrolled further than `threshold` pixels.
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(currentScroll() > threshold);
    onScroll();
    // capture: true also catches scrolling if the page scrolls inside <body>
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => window.removeEventListener("scroll", onScroll, { capture: true });
  }, [threshold]);

  return scrolled;
}