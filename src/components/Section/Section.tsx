import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  noBorder?: boolean;
}

export default function Section({ id, eyebrow, title, children, noBorder }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${noBorder ? styles.noBorder : ""}`}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
