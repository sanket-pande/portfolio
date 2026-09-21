import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { profile } from "../../data/resume";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {profile.name} · {profile.location}
      </p>

      <nav className={styles.links} aria-label="Footer">
        <Link to="/components">
          <Icon name="layers" size={14} />
          Components
        </Link>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Icon name="github" size={14} />
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Icon name="linkedin" size={14} />
          LinkedIn
        </a>
      </nav>

      <p>Built with React, TypeScript &amp; Vite</p>
    </footer>
  );
}
