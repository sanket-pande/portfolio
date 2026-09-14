import type { Theme } from "../../hooks/useTheme";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            <span className={styles.brandMarkDot} />
          </span>
          <span className={styles.brandText}>
            Sanket Pande
            <span className={styles.brandTag}>/ backend &amp; infra</span>
          </span>
        </a>

        <nav className={styles.navLinks} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.btn} href="/Sanket-Pande-Resume.pdf" download>
            Résumé
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
