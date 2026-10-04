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
      </nav>
    </footer>
  );
}
