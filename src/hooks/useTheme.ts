import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

function systemPrefersDark(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches
  );
}

function readStoredTheme(): Theme | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

/**
 * Tracks the resolved theme (light/dark) and exposes a toggle.
 *
 * On first load, an earlier explicit choice (localStorage) wins and is
 * stamped onto <html data-theme>. Otherwise nothing is stamped — the
 * stylesheet's prefers-color-scheme media query drives the page, and this
 * hook just mirrors system preference for the toggle button's own icon,
 * live-updating if the OS theme changes. The first click always makes an
 * explicit, persisted choice.
 */
export function useTheme(): { theme: Theme; toggleTheme: () => void } {
  const [explicit, setExplicit] = useState<Theme | null>(() => readStoredTheme());
  const [systemDark, setSystemDark] = useState<boolean>(() => systemPrefersDark());

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const theme: Theme = explicit ?? (systemDark ? "dark" : "light");

  useEffect(() => {
    const root = document.documentElement;
    if (explicit) {
      root.setAttribute("data-theme", explicit);
    } else {
      root.removeAttribute("data-theme");
    }
  }, [explicit]);

  const toggleTheme = useCallback(() => {
    setExplicit((current) => {
      const next: Theme = (current ?? (systemDark ? "dark" : "light")) === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* best-effort persistence only */
      }
      return next;
    });
  }, [systemDark]);

  return { theme, toggleTheme };
}
