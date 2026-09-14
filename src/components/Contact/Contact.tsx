import sectionStyles from "../Section/Section.module.css";
import { profile } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./Contact.module.css";

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className={sectionStyles.section}>
      <div ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.panel}>
        <div className={sectionStyles.head}>
          <p className={sectionStyles.eyebrow}>04 · Contact</p>
          <h2>Building something in healthcare data infra? Let's talk.</h2>
        </div>

        <ul className={styles.links}>
          <li>
            <span className={styles.key}>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span className={styles.key}>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/sanket-pande
            </a>
          </li>
          <li>
            <span className={styles.key}>GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/sanket-pande
            </a>
          </li>
          <li>
            <span className={styles.key}>Based in</span>
            <span>{profile.location}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
