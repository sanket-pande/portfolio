import { SectionEyebrow } from "../../../../components/Section/Section";
import { highlights } from "../../../../data/resume";
import { useInView } from "../../../../hooks/useInView";
import styles from "./About.module.css";

/* About doesn't use Section: its heading shares a row with the lede, and it
   has no room of its own - it flows straight on from Hero in the same chapter. */
export default function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" aria-labelledby="about-title" className={styles.about}>
      <div ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.inner}>
        <SectionEyebrow>01 · About</SectionEyebrow>

        <div className={styles.intro}>
          <h2 id="about-title" className={styles.title}>
            Take the messy thing and make it obviously correct.
          </h2>
          <p className={styles.lede}>
            Seven years in, what I still enjoy most is simplifying things: taking a messy integration
            or a slow query and making it obviously correct. Most of that has been on backend systems
            where correctness matters, such as patient records, healthcare integrations and analytics
            pipelines.
          </p>
        </div>

        <ol className={styles.points} role="list">
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
      </div>
    </section>
  );
}
