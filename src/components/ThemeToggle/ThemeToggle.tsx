import type { Theme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";
  // The visible label names the *action*, not the current state, so the
  // accessible name below contains it (WCAG 2.5.3 Label in Name) — "Dark
  // mode" is inside "Switch to dark mode", and voice control can say it.
  const target = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${target} mode`}
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
      <span className={styles.label}>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
