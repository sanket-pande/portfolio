import styles from "./Chip.module.css";

interface ChipListProps {
  items: string[];
  tone?: "accent" | "muted";
  ariaLabel?: string;
}

export default function ChipList({ items, tone = "accent", ariaLabel }: ChipListProps) {
  return (
    <ul className={styles.row} role="list" aria-label={ariaLabel}>
      {items.map((item) => (
        <li key={item} className={`${styles.chip} ${tone === "accent" ? styles.accent : styles.muted}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
