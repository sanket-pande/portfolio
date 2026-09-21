import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

/** What a first-time visitor sees, regardless of their OS setting. */
const DEFAULT_THEME: Theme = "dark";

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Tracks the active theme and exposes a toggle.
 *
 * Dark is the default. That default lives in the stylesheet — the dark
 * palette applies whenever <html> is NOT stamped data-theme="light" — so a
 * first visit is dark before any script runs. This hook only has to mirror
 * it for the toggle's own label and icon.
 *
 * A choice someone has made (localStorage) is stamped onto <html> by a
 * blocking script in index.html before the stylesheet applies, so a
 * returning light-mode visitor never sees a dark flash either. The first
 * click on the toggle makes that choice and persists it.
 *
 * It also adds `theme-ready` to <html> two frames after mount. The body's
 * colour transition is scoped to that class, so the palette never animates
 * on load — only when someone actually flips the switch.
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [explicit, setExplicit] = useState<Theme | null>(() => readStoredTheme());
  const theme: Theme = explicit ?? DEFAULT_THEME;

  useEffect(() => {
    // Two frames: the first commit has painted by the time the second
    // fires, so enabling transitions here can never catch the load paint.
    let frame = requestAnimationFrame(() => {
      frame = requestAnimationFrame(() => {
        document.documentElement.classList.add("theme-ready");
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (explicit) {
      root.setAttribute("data-theme", explicit);
    } else {
      // unstamped = the stylesheet's default, which is dark
      root.removeAttribute("data-theme");
    }
  }, [explicit]);

  const toggleTheme = useCallback(() => {
    setExplicit((current) => {
      const next: Theme = (current ?? DEFAULT_THEME) === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* best-effort persistence only */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
