import Section from "../Section/Section";
import { experience } from "../../data/resume";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Three companies, one thread — make the backend disappear"
    >
      <ol className={styles.timeline}>
        {experience.map((role) => (
          <li className={styles.role} key={`${role.company}-${role.period}`}>
            <div className={styles.marker} aria-hidden="true">
              <span className={styles.dot} />
            </div>
            <div className={styles.body}>
              <div className={styles.head}>
                <div>
                  <h3 className={styles.title}>{role.title}</h3>
                  <p className={styles.company}>{role.company}</p>
                </div>
                <p className={styles.period}>{role.period}</p>
              </div>
              <ul className={styles.bullets}>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
