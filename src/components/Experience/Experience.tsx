import Section from "../Section/Section";
import ChipList from "../Chip/Chip";
import { experience, type Role } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./Experience.module.css";

// The quantified claims are the point of these bullets, but they sit
// mid-sentence at body weight. Lift just the percentages so a 20-second
// skim still retrieves them.
const PERCENT = /(\d+(?:\.\d+)?%)/g;

function withMetrics(text: string) {
  return text.split(PERCENT).map((part, i) =>
    /^\d+(?:\.\d+)?%$/.test(part) ? (
      <strong className={styles.metric} key={i}>
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function RoleCard({ role, index }: { role: Role; index: number }) {
  const { ref, inView } = useInView<HTMLLIElement>();

  return (
    <li
      ref={ref}
      data-reveal={inView ? "visible" : "hidden"}
      style={{ transitionDelay: `${Math.min(index, 3) * 80}ms` }}
      className={`${styles.role} ${role.period.includes("Present") ? styles.current : ""}`}
    >
      <p className={styles.period}>{role.period}</p>

      <div className={styles.marker} aria-hidden="true">
        <span className={styles.dot} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{role.title}</h3>
        <p className={styles.company}>{role.company}</p>
        <ChipList
          items={role.tech}
          tone="muted"
          ariaLabel={`Technologies used at ${role.company}`}
        />
        <ul className={styles.bullets} role="list">
          {role.bullets.map((bullet) => (
            <li key={bullet}>{withMetrics(bullet)}</li>
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
      <ol className={styles.timeline} role="list">
        {experience.map((role, index) => (
          <RoleCard role={role} index={index} key={`${role.company}-${role.period}`} />
        ))}
      </ol>
    </Section>
  );
}
