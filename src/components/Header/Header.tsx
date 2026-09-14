import { Link } from "react-router-dom";
import type { Theme } from "../../hooks/useTheme";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import styles from "./Header.module.css";

const NAV_LINKS: { label: string; href?: string; to?: string }[] = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { to: "/components", label: "Components" },
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
        <a href="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            <span className={styles.brandMarkDot} />
          </span>
          <span className={styles.brandText}>
            Sanket Pande
            <span className={styles.brandTag}>Full Stack Engineer</span>
          </span>
        </a>

        <nav className={styles.navLinks} aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" href="/Sanket-Pande-Resume.pdf" download>
            Résumé
          </Button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
