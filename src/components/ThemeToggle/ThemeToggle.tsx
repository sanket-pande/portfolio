import type { Theme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? "☾" : "☀"}
      </span>
      <span className={styles.label}>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
