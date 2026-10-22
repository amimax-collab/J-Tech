// Smooth, self-correcting scrolling helpers.
//
// Why not rely on the browser's own #anchor jump?
//  - an open mobile menu or pop-up locks page scrolling (body.no-scroll), which can
//    cancel a scroll that is already in progress
//  - fonts loading and animations starting can move the target while we scroll,
//    so the page lands in the wrong place
//  - some stylesheets make <body> the scrolling element instead of the window,
//    and then window.scrollTo() silently does nothing
// These helpers unlock scrolling, scroll the right element, wait until the scroll
// stops, then nudge the page onto the exact spot if it landed off target.

const HEADER_OFFSET = 72; // height of the fixed navbar once the page is scrolled
let latest = 0; // a newer navigation cancels the older one's correction

// The element that actually scrolls: normally the window, but <body> when a
// stylesheet gives it its own scrollbar.
function getScroller() {
  const root = document.scrollingElement || document.documentElement;
  const body = document.body;
  if (root.scrollTop === 0 && body.scrollHeight > body.clientHeight + 1) {
    const overflowY = getComputedStyle(body).overflowY;
    if (overflowY === "auto" || overflowY === "scroll") return body;
  }
  return root;
}

function positionOf(scroller) {
  return scroller === document.body ? scroller.scrollTop : window.scrollY;
}

function moveTo(scroller, top, behavior) {
  if (scroller === document.body) scroller.scrollTo({ top, behavior });
  else window.scrollTo({ top, behavior });
}

function offsetOf(scroller, el) {
  const elTop = el.getBoundingClientRect().top;
  const base = scroller === document.body ? scroller.getBoundingClientRect().top : 0;
  return elTop - base + positionOf(scroller);
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function settle(scroller, mine, correct) {
  const startedAt = performance.now();
  let last = positionOf(scroller);
  let moved = false;
  let stableSince = startedAt;

  const watch = (now) => {
    if (mine !== latest) return;
    const y = positionOf(scroller);
    if (Math.abs(y - last) > 0.5) {
      moved = true;
      last = y;
      stableSince = now;
    }
    const done = moved ? now - stableSince > 150 : now - startedAt > 300;
    if (done || now - startedAt > 4000) {
      correct();
      setTimeout(correct, 600); // catch late layout shifts such as web fonts arriving
    } else {
      requestAnimationFrame(watch);
    }
  };
  requestAnimationFrame(watch);
}

export function scrollToSection(id, { updateHash = true } = {}) {
  const el = document.getElementById(id);
  if (!el) return false;

  document.body.classList.remove("no-scroll");

  const scroller = getScroller();
  const targetY = () => Math.max(0, Math.round(offsetOf(scroller, el) - HEADER_OFFSET));
  const mine = ++latest;

  moveTo(scroller, targetY(), prefersReducedMotion() ? "instant" : "smooth");

  if (updateHash) {
    try {
      history.replaceState(null, "", `#${id}`);
    } catch {
      /* some embedded views block this; scrolling still works */
    }
  }

  settle(scroller, mine, () => {
    if (mine !== latest) return;
    if (Math.abs(targetY() - positionOf(scroller)) > 6) {
      moveTo(scroller, targetY(), "instant");
    }
  });

  return true;
}

export function scrollToTop() {
  document.body.classList.remove("no-scroll");
  latest++;
  moveTo(getScroller(), 0, prefersReducedMotion() ? "instant" : "smooth");
}