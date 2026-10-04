import { useEffect, useState, type CSSProperties } from "react";
import Section from "../../../../components/Section/Section";
import Button from "../../../../components/Button/Button";
import Icon from "../../../../components/Icon/Icon";
import { profile } from "../../../../data/resume";
import { useInView } from "../../../../hooks/useInView";
import styles from "./Contact.module.css";

const CLOCK = new Intl.DateTimeFormat("en-US", {
  timeZone: profile.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

/** The local time in the profile's timezone, ticking once a second. */
function useLocalClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(CLOCK.format(new Date()).toUpperCase());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

/**
 * Writes to the clipboard. Uses the async API where it's allowed, and falls
 * back to a hidden textarea where it isn't (insecure origins, some embedded
 * browsers). Returns false only if both fail - the mailto link still works.
 */
async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

/** Copies text, then reports "copied" for a moment so the button can confirm. */
function useCopy(text: string) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    if (await writeClipboard(text)) setCopied(true);
  };

  return { copied, copy };
}

/** Staggers each item's entrance: item n starts n × 90ms after the row. */
const stagger = (n: number) => ({ "--i": n }) as CSSProperties;

export default function Contact() {
  const { ref, inView } = useInView<HTMLUListElement>();
  const clock = useLocalClock();
  const { copied, copy } = useCopy(profile.email);

  return (
    <Section
      id="contact"
      eyebrow="04 · Contact"
      title="Building something that has to be right?"
      accent="Let's talk."
      aside={
        <div className={styles.intro}>
          <p className={styles.status}>
            <span className={styles.statusItem}>
              <span className={styles.liveDot} aria-hidden="true" />
              {profile.availability}
            </span>
            <span className={styles.statusItem}>
              <Icon name="clock" size={14} />
              <span className={styles.clockText}>
                {profile.timeZoneLabel} · {clock ?? "--:--:--"}
              </span>
            </span>
          </p>

          <p className={styles.lede}>{profile.responseNote}</p>

          <div className={styles.actions}>
            <Button variant="primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={15} />
              Email me
              <Icon name="arrowRight" size={15} />
            </Button>

            <Button variant="ghost" onClick={copy} className={styles.copyBtn} data-copied={copied}>
              <Icon
                name={copied ? "check" : "copy"}
                size={15}
                className={copied ? styles.pop : undefined}
              />
              {copied ? "Copied" : "Copy email address"}
            </Button>
            {/* announces the copy to screen readers without moving focus */}
            <span role="status" className={styles.srOnly}>
              {copied ? "Email address copied" : ""}
            </span>
          </div>
        </div>
      }
    >
      <ul ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.links} role="list">
        <li style={stagger(0)}>
          {/* the whole item copies the address; "Email me" is the one that
              opens the mail app */}
          <button
            type="button"
            className={`${styles.item} ${styles.itemButton}`}
            onClick={copy}
            data-copied={copied}
            aria-label={copied ? "Email address copied" : `Copy email address, ${profile.email}`}
          >
            <span className={styles.itemHead}>
              <Icon name="mail" size={18} className={styles.icon} />
              <span className={styles.key}>{copied ? "Copied to clipboard" : "Email"}</span>
              <Icon
                name={copied ? "check" : "copy"}
                size={16}
                className={`${styles.trail} ${copied ? styles.pop : ""}`.trim()}
              />
            </span>
            <span className={styles.value}>{profile.email}</span>
          </button>
        </li>

        <li style={stagger(1)}>
          <a className={styles.item} href={profile.linkedin} target="_blank" rel="noreferrer">
            <span className={styles.itemHead}>
              <Icon name="linkedin" size={18} className={styles.icon} />
              <span className={styles.key}>LinkedIn</span>
              <Icon name="external" size={16} className={styles.trail} />
            </span>
            <span className={styles.value}>linkedin.com/in/sanket-pande</span>
            <span className={styles.srOnly}>(opens in a new tab)</span>
          </a>
        </li>

        <li style={stagger(2)}>
          <a className={styles.item} href={profile.github} target="_blank" rel="noreferrer">
            <span className={styles.itemHead}>
              <Icon name="github" size={18} className={styles.icon} />
              <span className={styles.key}>GitHub</span>
              <Icon name="external" size={16} className={styles.trail} />
            </span>
            <span className={styles.value}>github.com/sanket-pande</span>
            <span className={styles.srOnly}>(opens in a new tab)</span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
