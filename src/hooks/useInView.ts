import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: "0px 0px -10% 0px",
};

/**
 * Tracks whether an element has scrolled into view, once. Used to drive the
 * site's scroll-reveal motion (see the [data-reveal] rules in global.css).
 * Falls back to "already visible" if IntersectionObserver isn't available.
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

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
