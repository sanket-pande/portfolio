import Section from "../Section/Section";
import { experience, type Role } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./Experience.module.css";

function RoleCard({ role, index }: { role: Role; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      data-reveal={inView ? "visible" : "hidden"}
      style={{ transitionDelay: `${Math.min(index, 3) * 80}ms` }}
      className={styles.role}
    >
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
  );
}

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="02 · Experience"
      title="Three companies, one thread — make the backend disappear"
    >
      <ol className={styles.timeline}>
        {experience.map((role, index) => (
          <RoleCard role={role} index={index} key={`${role.company}-${role.period}`} />
        ))}
      </ol>
    </Section>
  );
}
