import { useId, type CSSProperties, type ReactNode, type SyntheticEvent } from "react";
import { techColor } from "../../data/resume";
import styles from "./Chip.module.css";

/**
 * Keeps a tooltip inside the viewport. It's centred over its chip by default;
 * a chip near an edge would push it past the screen, so shift it back by
 * exactly the overshoot. Runs on hover/focus, when the tooltip is laid out.
 */
function keepTipOnScreen(event: SyntheticEvent<HTMLElement>) {
  const tip = event.currentTarget.querySelector<HTMLElement>('[role="tooltip"]');
  if (!tip) return;
  tip.style.setProperty("--dx", "0px");
  const { left, right } = tip.getBoundingClientRect();
  const margin = 12;
  const view = document.documentElement.clientWidth;
  let dx = 0;
  if (left < margin) dx = margin - left;
  else if (right > view - margin) dx = view - margin - right;
  tip.style.setProperty("--dx", `${Math.round(dx)}px`);
}

interface ChipProps {
  name: string;
  /** Dot colour. Defaults to the technology's own colour, then the accent. */
  color?: string;
  /** Position in its row - staggers the entrance. */
  index?: number;
  /** Makes the chip a button (hover motion, pressed state, optional tooltip). */
  onSelect?: () => void;
  selected?: boolean;
  /** One short line shown on hover or keyboard focus. Needs onSelect. */
  tip?: string;
}

/** One technology chip. The same pill everywhere; interactive when given onSelect. */
export function Chip({ name, color, index = 0, onSelect, selected = false, tip }: ChipProps) {
  const tipId = useId();
  const style = { "--c": color ?? techColor(name) ?? "var(--accent)", "--i": index } as CSSProperties;

  if (!onSelect) {
    return (
      <li className={styles.item} style={style}>
        <span className={styles.chip}>
          <span className={styles.dot} aria-hidden="true" />
          {name}
        </span>
      </li>
    );
  }

  return (
    <li className={styles.item} style={style} onMouseEnter={keepTipOnScreen} onFocus={keepTipOnScreen}>
      <button
        type="button"
        className={`${styles.chip} ${styles.interactive}`}
        aria-pressed={selected}
        aria-describedby={tip ? tipId : undefined}
        onClick={onSelect}
      >
        <span className={styles.dot} aria-hidden="true" />
        {name}
      </button>
      {/* shown on hover and on keyboard focus; touch gets whatever the page shows on select */}
      {tip ? (
        <span id={tipId} role="tooltip" className={styles.tip}>
          {tip}
        </span>
      ) : null}
    </li>
  );
}

/** The wrapping row chips sit in. */
export function ChipRow({ ariaLabel, children }: { ariaLabel?: string; children: ReactNode }) {
  return (
    <ul className={styles.row} role="list" aria-label={ariaLabel}>
      {children}
    </ul>
  );
}

interface ChipListProps {
  items: string[];
  ariaLabel?: string;
}

/** A static list of chips - the core stack, a role's tech. */
export default function ChipList({ items, ariaLabel }: ChipListProps) {
  return (
    <ChipRow ariaLabel={ariaLabel}>
      {items.map((name, index) => (
        <Chip key={name} name={name} index={index} />
      ))}
    </ChipRow>
  );
}
