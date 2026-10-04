import Section from "../../../../components/Section/Section";
import { highlights } from "../../../../data/resume";
import { useInView } from "../../../../hooks/useInView";
import styles from "./About.module.css";

export default function About() {
  const { ref, inView } = useInView<HTMLOListElement>();

  return (
    <Section
      id="about"
      eyebrow="03 · About"
      title="Take the messy thing and make it obviously correct."
      aside={
        <p className={styles.lede}>
          Seven years in, what I still enjoy most is simplifying things: taking a messy integration
          or a slow query and making it obviously correct. Most of that has been on backend systems
          where correctness matters, such as patient records, healthcare integrations and analytics
          pipelines.
        </p>
      }
    >
      <ol ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.points} role="list">
        {highlights.map((point, index) => (
          <li key={point.title}>
            <span className={styles.num} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.pointTitle}>{point.title}</h3>
            <p className={styles.pointBody}>{point.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
