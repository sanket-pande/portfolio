import sectionStyles from "../Section/Section.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { profile } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./Contact.module.css";

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" aria-labelledby="contact-title" className={sectionStyles.section}>
      {/* the head sits outside the panel so this section's anchor lands at
          the same height as every other one, and the heading gets the same
          measure rather than a panel-width one */}
      <div className={sectionStyles.head}>
        <p className={sectionStyles.eyebrow} aria-hidden="true">
          04 · Contact
        </p>
        <h2 id="contact-title">Building something that has to be right? Let's talk.</h2>
      </div>

      <div ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.panel}>
        <div className={styles.intro}>
          <p className={styles.note}>
            {profile.yearsExperience} years on Python backends and GCP infrastructure — currently at{" "}
            {profile.currentEmployer}, based in {profile.location}.
          </p>
          <Button variant="primary" size="lg" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={17} />
            Email me
          </Button>
        </div>

        <ul className={styles.links} role="list">
          <li>
            <span className={styles.key}>Email</span>
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" />
              {profile.email}
            </a>
          </li>
          <li>
            <span className={styles.key}>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              linkedin.com/in/sanket-pande
            </a>
          </li>
          <li>
            <span className={styles.key}>GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" />
              github.com/sanket-pande
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
