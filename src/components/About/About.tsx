import Section from "../Section/Section";
import { highlights } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./About.module.css";

export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Section id="about" eyebrow="01 · About" title="Systems work, with people in the loop" compact>
      <div ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.grid}>
        <p className={styles.lede}>
          Seven years in, the part that hasn't changed is enjoying the simplification — taking a
          messy integration or a slow query and making it obviously correct. The part that has
          changed is how much of that now happens through other people.
        </p>
        <ul className={styles.list}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
