import styles from "./Icon.module.css";

export type IconName =
  | "mail"
  | "linkedin"
  | "github"
  | "download"
  | "arrowRight"
  | "sun"
  | "moon"
  | "layers";

interface IconProps {
  name: IconName;
  /** Pixel size of the square. Defaults to 16 — matches the mono label line. */
  size?: number;
  className?: string;
}

/**
 * Inline SVG, no icon dependency. Everything is drawn on a 24×24 grid and
 * inherits `currentColor`, so an icon always matches the text it sits with
 * and needs no separate light/dark treatment.
 *
 * Icons here are decorative: every one is next to a real text label, so
 * they are hidden from assistive tech rather than announced twice.
 */
export default function Icon({ name, size = 16, className = "" }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    focusable: "false" as const,
    className: `${styles.icon} ${className}`.trim(),
  };

  // brand marks are solid shapes; the rest are strokes on the same grid
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "mail":
      return (
        <svg {...common} {...stroke}>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
          <path d="m3 7 8.13 5.42a1.5 1.5 0 0 0 1.74 0L21 7" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.06c.53-.95 1.83-1.96 3.76-1.96C21.6 8.75 23 11 23 14.26V21h-4v-5.98c0-1.43-.03-3.27-2.06-3.27-2.06 0-2.38 1.56-2.38 3.17V21h-4V9Z" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      );
    case "download":
      return (
        <svg {...common} {...stroke}>
          <path d="M12 3v12" />
          <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
          <path d="M4 20h16" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...common} {...stroke}>
          <path d="M4 12h15" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common} {...stroke}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.5M12 19.5V22M4.2 4.2 6 6M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common} {...stroke}>
          <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common} {...stroke}>
          <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
          <path d="m4 12 8 4.3 8-4.3" />
          <path d="m4 16.5 8 4.3 8-4.3" />
        </svg>
      );
  }
}
