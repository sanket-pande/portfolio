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

/** Staggers each row's entrance: row n starts n × 90ms after the panel. */
const stagger = (n: number) => ({ "--i": n }) as CSSProperties;

export default function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const clock = useLocalClock();
  const { copied, copy } = useCopy(profile.email);

  return (
    <Section
      id="contact"
      eyebrow="04 · Contact"
      title="Building something that has to be right?"
      accent="Let's talk."
    >
      <div ref={ref} data-reveal={inView ? "visible" : "hidden"} className={styles.panel}>
        <div className={styles.intro}>
          <div className={styles.status}>
            <span className={styles.badge}>
              <span className={styles.liveDot} aria-hidden="true" />
              {profile.availability}
            </span>
            <span className={styles.badge}>
              <Icon name="clock" size={14} />
              <span className={styles.clockText}>
                {profile.timeZoneLabel} · {clock ?? "--:--:--"}
              </span>
            </span>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" size="lg" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={17} />
              Email me
              <Icon name="arrowRight" size={17} />
            </Button>

            <Button variant="ghost" size="lg" onClick={copy} className={styles.copyBtn} data-copied={copied}>
              <Icon
                name={copied ? "check" : "copy"}
                size={17}
                className={copied ? styles.pop : undefined}
              />
              {copied ? "Copied" : "Copy email address"}
            </Button>
            {/* announces the copy to screen readers without moving focus */}
            <span role="status" className={styles.srOnly}>
              {copied ? "Email address copied" : ""}
            </span>
          </div>

          <p className={styles.response}>
            <span className={styles.responseDot} aria-hidden="true" />
            {profile.responseNote}
          </p>
        </div>

        <ul className={styles.links}>
          <li style={stagger(0)}>
            {/* the whole row copies the address; "Email me" is the one that
                opens the mail app */}
            <button
              type="button"
              className={`${styles.row} ${styles.rowButton}`}
              onClick={copy}
              data-copied={copied}
              aria-label={copied ? "Email address copied" : `Copy email address, ${profile.email}`}
            >
              <span className={styles.tile}>
                <Icon name="mail" size={18} />
              </span>
              <span className={styles.rowText}>
                <span className={styles.key}>{copied ? "Copied to clipboard" : "Email"}</span>
                <span className={styles.value}>{profile.email}</span>
              </span>
              <Icon
                name={copied ? "check" : "copy"}
                size={16}
                className={`${styles.trail} ${copied ? styles.pop : ""}`.trim()}
              />
            </button>
          </li>

          <li style={stagger(1)}>
            <a className={styles.row} href={profile.linkedin} target="_blank" rel="noreferrer">
              <span className={styles.tile}>
                <Icon name="linkedin" size={18} />
              </span>
              <span className={styles.rowText}>
                <span className={styles.key}>LinkedIn</span>
                <span className={styles.value}>linkedin.com/in/sanket-pande</span>
              </span>
              <Icon name="external" size={16} className={styles.trail} />
              <span className={styles.srOnly}>(opens in a new tab)</span>
            </a>
          </li>

          <li style={stagger(2)}>
            <a className={styles.row} href={profile.github} target="_blank" rel="noreferrer">
              <span className={styles.tile}>
                <Icon name="github" size={18} />
              </span>
              <span className={styles.rowText}>
                <span className={styles.key}>GitHub</span>
                <span className={styles.value}>github.com/sanket-pande</span>
              </span>
              <Icon name="external" size={16} className={styles.trail} />
              <span className={styles.srOnly}>(opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
