import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** Folds this section's height into whatever sits above it instead of
   * claiming its own 80–90vh — used by About, which shares a chapter (and
   * a background) with Hero rather than reading as a separate room. */
  compact?: boolean;
}

export default function Section({ id, eyebrow, title, children, compact }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`${styles.section} ${compact ? styles.compact : ""}`}
    >
      <div className={styles.head}>
        {/* decorative chapter number — the heading is the accessible name */}
        <p className={styles.eyebrow} aria-hidden="true">
          {eyebrow}
        </p>
        <h2 id={titleId}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
