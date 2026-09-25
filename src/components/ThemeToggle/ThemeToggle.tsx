import type { Theme } from "../../hooks/useTheme";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

/** [left %, top %, size px, twinkle delay s] — scattered on the night side. */
const STARS: ReadonlyArray<readonly [number, number, number, number]> = [
  [14, 24, 5, 0],
  [30, 64, 3, 0.6],
  [40, 26, 3, 1.2],
  [22, 46, 2, 0.3],
  [50, 58, 2, 0.9],
];

const STAR_PATH = "M12 1.5 14.6 9.4 22.5 12 14.6 14.6 12 22.5 9.4 14.6 1.5 12 9.4 9.4Z";

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";
  // A switch's name stays put and aria-checked carries the state, so a screen
  // reader says "Dark mode, switch, on" instead of a label that flips under it.
  // The title is the one place the *action* is spelled out, for hover.
  const action = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={action}
      className={styles.toggle}
      data-mode={theme}
      onClick={onToggle}
    >
      <span className={styles.track} aria-hidden="true">
        {/* night sky — fades in with the moon */}
        <span className={styles.stars}>
          {STARS.map(([left, top, size, delay]) => (
            <svg
              key={`${left}-${top}`}
              className={styles.star}
              viewBox="0 0 24 24"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: size,
                height: size,
                animationDelay: `${delay}s`,
              }}
            >
              <path d={STAR_PATH} />
            </svg>
          ))}
        </span>

        {/* daytime — two soft clouds on the side the sun has left */}
        <span className={styles.clouds}>
          <span className={styles.cloudA} />
          <span className={styles.cloudB} />
        </span>

        <span className={styles.knob}>
          <svg className={styles.sun} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <g>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <line key={deg} x1="12" y1="2.6" x2="12" y2="4.9" transform={`rotate(${deg} 12 12)`} />
              ))}
            </g>
          </svg>
          <svg className={styles.moon} viewBox="0 0 24 24">
            <path d="M12.2 2.6A9.4 9.4 0 1 0 21.4 14a7.6 7.6 0 0 1-9.2-11.4Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
