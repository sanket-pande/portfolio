import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type LinkProps = { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;
type ButtonElProps = { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">;

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & (LinkProps | ButtonElProps);

export default function Button({ variant = "primary", size = "md", children, className = "", ...rest }: ButtonProps) {
  const cls = [
    styles.btn,
    variant === "primary" ? styles.primary : styles.ghost,
    size === "lg" ? styles.lg : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (rest.href) {
    const linkProps = rest as LinkProps;
    return (
      <a className={cls} {...linkProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonElProps;
  return (
    <button type={type} className={cls} {...buttonRest}>
      {children}
    </button>
  );
}
