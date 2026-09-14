import styles from "./Stat.module.css";

interface StatProps {
  value: string;
  label: string;
  context: string;
}

export default function Stat({ value, label, context }: StatProps) {
  return (
    <div className={styles.stat}>
      <p className={styles.value}>{value}</p>
      <p className={styles.label}>{label}</p>
      <p className={styles.context}>{context}</p>
    </div>
  );
}
