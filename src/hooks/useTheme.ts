import { useCallback, useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

/** How long `theme-switching` stays on <html> - long enough to cover the
 * render and effect that actually re-stamp data-theme. */
const SWITCH_MS = 150;

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
 * Dark is the default. That default lives in the stylesheet - the dark
 * palette applies whenever <html> is NOT stamped data-theme="light" - so a
 * first visit is dark before any script runs. This hook only has to mirror
 * it for the toggle's own label and icon.
 *
 * A choice someone has made (localStorage) is stamped onto <html> by a
 * blocking script in index.html before the stylesheet applies, so a
 * returning light-mode visitor never sees a dark flash either. The first
 * click on the toggle makes that choice and persists it.
 *
 * A flip is instant: it puts `theme-switching` on <html> for a moment,
 * which turns every transition off (see global.css), so the whole palette
 * changes in one frame. A cross-fade between opposite palettes always
 * passes a point where text matches its background, and elements with
 * their own hover transitions would fade out of step with the rest - both
 * read as a flicker. The toggle itself keeps its animation.
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [explicit, setExplicit] = useState<Theme | null>(() => readStoredTheme());
  const theme: Theme = explicit ?? DEFAULT_THEME;
  const switchTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const root = document.documentElement;
    if (explicit) {
      root.setAttribute("data-theme", explicit);
    } else {
      // unstamped = the stylesheet's default, which is dark
      root.removeAttribute("data-theme");
    }
  }, [explicit]);

  useEffect(() => () => window.clearTimeout(switchTimer.current), []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    root.classList.add("theme-switching");
    window.clearTimeout(switchTimer.current);
    switchTimer.current = window.setTimeout(() => root.classList.remove("theme-switching"), SWITCH_MS);

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
