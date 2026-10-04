import { useId, useState, type CSSProperties, type SyntheticEvent } from "react";
import Section from "../Section/Section";
import Icon from "../Icon/Icon";
import { skillGroups, type Skill, type SkillGroup } from "../../data/resume";
import { useInView } from "../../hooks/useInView";
import styles from "./Skills.module.css";

/**
 * Keeps a tooltip inside the viewport. It's centred over its pill by default;
 * a pill near an edge would push it past the screen, so shift it back by
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

interface PillProps {
  skill: Skill;
  index: number;
  selected: boolean;
  onSelect: () => void;
}

function Pill({ skill, index, selected, onSelect }: PillProps) {
  const tipId = useId();

  return (
    <li
      className={styles.pillItem}
      style={{ "--c": skill.color, "--i": index } as CSSProperties}
      onMouseEnter={keepTipOnScreen}
      onFocus={keepTipOnScreen}
    >
      <button
        type="button"
        className={styles.pill}
        aria-pressed={selected}
        aria-describedby={tipId}
        onClick={onSelect}
      >
        <span className={styles.dot} aria-hidden="true" />
        {skill.name}
      </button>
      {/* shown on hover and on keyboard focus; touch gets the telemetry bar */}
      <span id={tipId} role="tooltip" className={styles.tip}>
        {skill.tip}
      </span>
    </li>
  );
}

interface GroupBlockProps {
  group: SkillGroup;
  index: number;
  selectedName: string | null;
  onSelect: (skill: Skill) => void;
}

function GroupBlock({ group, index, selectedName, onSelect }: GroupBlockProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-reveal={inView ? "visible" : "hidden"}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={styles.group}
    >
      <div className={styles.heading}>
        <h3 className={styles.groupTitle}>{group.title}</h3>
        <p className={styles.subtitle}>{group.subtitle}</p>
      </div>
      <ul className={styles.pills} role="list" aria-label={group.title}>
        {group.items.map((skill, i) => (
          <Pill
            key={skill.name}
            skill={skill}
            index={i}
            selected={selectedName === skill.name}
            onSelect={() => onSelect(skill)}
          />
        ))}
      </ul>
      <p className={styles.note}>{group.note}</p>
    </div>
  );
}

export default function Skills() {
  const [selected, setSelected] = useState<Skill | null>(null);

  const togglePick = (skill: Skill) => {
    setSelected((current) => (current?.name === skill.name ? null : skill));
  };

  return (
    <Section
      id="skills"
      eyebrow="03 · Skills"
      title="The stack, grouped"
      accent="the way I actually reach for it"
    >
      <div className={styles.telemetry} data-active={selected ? "true" : "false"}>
        {/* re-keyed per pick so the ring below replays on every change */}
        {selected ? <span key={selected.name} className={styles.ring} aria-hidden="true" /> : null}
        <span className={styles.telemetryIcon} aria-hidden="true">
          <Icon name="info" size={16} />
        </span>
        <div className={styles.telemetryBody} aria-live="polite">
          <span className={styles.telemetryLabel}>Stack telemetry</span>
          {selected ? (
            <p key={selected.name} className={styles.telemetryText}>
              <strong style={{ "--c": selected.color } as CSSProperties}>{selected.name}:</strong>{" "}
              {selected.detail}
            </p>
          ) : (
            <p className={styles.telemetryText}>
              Hover over or click any technology pill to inspect real-world context and architecture roles.
            </p>
          )}
        </div>
        <span className={styles.telemetryBadge}>
          {selected ? `Inspecting · ${selected.name}` : "Interactive mode · Ready"}
        </span>
      </div>

      <div className={styles.groups}>
        {skillGroups.map((group, index) => (
          <GroupBlock
            key={group.id}
            group={group}
            index={index}
            selectedName={selected?.name ?? null}
            onSelect={togglePick}
          />
        ))}
      </div>

    </Section>
  );
}
