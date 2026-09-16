import { useEffect, useState } from "react";

/**
 * Reports which section the visitor is currently reading, so the nav can
 * say where they are.
 *
 * Picks the last section whose top has crossed the header line rather
 * than the "most visible" one — with rooms this tall, a visibility test
 * flickers between two sections for the whole length of a boundary.
 */
export function useScrollSpy(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // one source of truth for the header's height — Header publishes it
    const line = () => {
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--header-offset");
      const n = Number.parseFloat(raw);
      return (Number.isFinite(n) ? n : 88) + 32;
    };

    const read = () => {
      const offset = line();
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      // the last room can be too short to ever cross the line — if we've
      // hit the bottom of the page, we're in it
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && ids.length) current = ids[ids.length - 1];
      setActive(current);
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read);
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [ids]);

  return active;
}
