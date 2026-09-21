import { useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import type { Theme } from "../../hooks/useTheme";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { profile } from "../../data/resume";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import styles from "./Header.module.css";

/** The four in-page jumps, in document order — kept as one group. */
const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

/** Section ids the spy tracks, in document order. */
const SPY_IDS = ["about", "experience", "skills", "contact"] as const;

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const activeId = useScrollSpy(SPY_IDS);
  const headerRef = useRef<HTMLElement>(null);

  // The header's height changes with viewport width (the nav drops to a
  // second row, the toggle label reflows) and with the user's own font
  // size. Anything that hardcodes it — scroll-padding, the scroll spy —
  // is wrong at some width, so publish the real measured value instead
  // and let both read it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const publish = () => {
      const h = Math.round(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--header-offset", `${h + 16}px`);
    };
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(el);
    window.addEventListener("resize", publish);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            <span className={styles.brandMarkDot} />
          </span>
          <span className={styles.brandText}>
            {profile.name}
            {/* the comma is what stops screen readers running the two spans
                together as "Sanket PandeFull Stack Engineer" */}
            <span className={styles.srOnly}>, </span>
            <span className={styles.brandTag}>{profile.title}</span>
          </span>
        </Link>

        <nav className={styles.navLinks} aria-label="Primary">
          {/* the in-page jumps stay together as one group */}
          <span className={styles.sectionLinks}>
            {SECTION_LINKS.map(({ href, label }) => {
              const current = onHome && activeId === href.slice(1);
              // On the home page a bare hash is the cheapest correct thing.
              // Anywhere else it would resolve against the current route and
              // hit nothing, so route back to "/" and carry the hash along.
              return onHome ? (
                <a key={href} href={href} aria-current={current ? "location" : undefined}>
                  {label}
                </a>
              ) : (
                <Link key={href} to={`/${href}`}>
                  {label}
                </Link>
              );
            })}
          </span>

          {/* a route change, not a jump — so it sits apart, over on the right */}
          <NavLink to="/components" className={styles.routeLink}>
            <Icon name="layers" size={15} />
            Components
          </NavLink>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" href="/Sanket-Pande-Resume.pdf" download>
            <Icon name="download" size={15} />
            Résumé
          </Button>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
