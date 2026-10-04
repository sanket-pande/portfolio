import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  /** The heading's lead-in. */
  title: string;
  /** Closing phrase of the heading, set in the accent colour. */
  accent?: string;
  /** Sits beside the heading instead of under it - the heading takes the
   * left column, this the right. About and Contact use it for their lede. */
  aside?: ReactNode;
  /** Only with an aside: sits under the heading in the left column, and
   * drops below the aside once the columns stack. Contact's call to action. */
  action?: ReactNode;
  children: ReactNode;
}

export default function Section({ id, eyebrow, title, accent, aside, action, children }: SectionProps) {
  const titleId = `${id}-title`;

  const heading = (
    <h2 id={titleId}>
      {title}
      {accent ? (
        <>
          {" "}
          <span className={styles.accent}>{accent}</span>
        </>
      ) : null}
    </h2>
  );

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={styles.section}
    >
      <div className={styles.head}>
        {/* decorative chapter number - the heading is the accessible name */}
        <p className={styles.pill} aria-hidden="true">
          <span className={styles.pillDot} />
          {eyebrow}
        </p>
        {aside ? (
          <div className={`${styles.split} ${action ? styles.withAction : ""}`}>
            {heading}
            <div className={styles.aside}>{aside}</div>
            {action ? <div className={styles.action}>{action}</div> : null}
          </div>
        ) : (
          heading
        )}
      </div>
      {children}
    </section>
  );
}
