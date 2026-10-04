import { useEffect, useRef, useState } from "react";

/** How much of the element must be showing before it counts as "in view". */
const ENTER_RATIO = 0.15;

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  // 0 so we hear when it has fully left, ENTER_RATIO so we hear when enough is showing
  threshold: [0, ENTER_RATIO],
  rootMargin: "0px 0px -10% 0px",
};

/**
 * Tracks whether an element is on screen, and does it every time - it turns
 * true as the element scrolls in and false once it has fully scrolled out (off
 * the top or the bottom), so the site's reveal motion (see the [data-reveal]
 * rules in global.css) plays again on each return rather than once.
 *
 * The two thresholds are a deliberate gap: it only resets when the element is
 * completely gone, so one hovering at the edge of the screen can't flicker
 * between states. Falls back to "already visible" without IntersectionObserver.
 */
export function useInView<T extends HTMLElement>(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      // A fast scroll can deliver several entries in one batch (in, then out,
      // say). Only the newest one says where the element is now - acting on the
      // first would leave the state stuck on a position it has already left.
      const entry = entries[entries.length - 1];
      if (!entry.isIntersecting || entry.intersectionRatio === 0) setInView(false);
      else if (entry.intersectionRatio >= ENTER_RATIO) setInView(true);
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
