import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  /** The heading's lead-in. */
  title: string;
  /** Closing phrase of the heading, set in the accent colour. */
  accent?: string;
  children: ReactNode;
}

/** The chapter marker - a pill with a pulsing dot. Exported for About,
 * which lays out its own heading but keeps the same marker. */
export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    // decorative chapter number - the heading is the accessible name
    <p className={styles.pill} aria-hidden="true">
      <span className={styles.pillDot} />
      {children}
    </p>
  );
}

export default function Section({ id, eyebrow, title, accent, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={styles.section}
    >
      <div className={styles.head}>
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h2 id={titleId}>
          {title}
          {accent ? (
            <>
              {" "}
              <span className={styles.accent}>{accent}</span>
            </>
          ) : null}
        </h2>
      </div>
      {children}
    </section>
  );
}
