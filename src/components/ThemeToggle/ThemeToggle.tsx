import type { Theme } from "../../hooks/useTheme";
import Icon from "../Icon/Icon";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";
  // The label spells out the whole action and is the button's only text, so
  // the accessible name and the visible label are the same string by
  // construction and can't drift apart (WCAG 2.5.3 Label in Name). On narrow
  // screens the CSS hides it visually but leaves it in the a11y tree.
  const label = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <button type="button" className={styles.toggle} onClick={onToggle} title={label}>
      <Icon name={isDark ? "sun" : "moon"} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
