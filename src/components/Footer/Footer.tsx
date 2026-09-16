import { Link } from "react-router-dom";
import { profile } from "../../data/resume";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {profile.name} · {profile.location}
      </p>

      <nav className={styles.links} aria-label="Footer">
        <Link to="/components">Components</Link>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </nav>

      <p>Built with React, TypeScript &amp; Vite</p>
    </footer>
  );
}
