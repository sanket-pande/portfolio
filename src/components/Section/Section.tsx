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
  /** Folds this section's height into whatever sits above it instead of
   * claiming its own 80–90vh — used by About, which shares a chapter (and
   * a background) with Hero rather than reading as a separate room. */
  compact?: boolean;
}

export default function Section({ id, eyebrow, title, accent, children, compact }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${styles.section} ${compact ? styles.compact : ""}`}
    >
      <div className={styles.head}>
        {/* decorative chapter number — the heading is the accessible name */}
        <p className={styles.pill} aria-hidden="true">
          <span className={styles.pillDot} />
          {eyebrow}
        </p>
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
