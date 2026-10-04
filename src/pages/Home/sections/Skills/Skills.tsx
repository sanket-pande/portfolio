import { useState, type CSSProperties } from "react";
import Section from "../../../../components/Section/Section";
import Icon from "../../../../components/Icon/Icon";
import { Chip, ChipRow } from "../../../../components/Chip/Chip";
import { skillGroups, type Skill, type SkillGroup } from "../../../../data/resume";
import { useInView } from "../../../../hooks/useInView";
import styles from "./Skills.module.css";

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
      <ChipRow ariaLabel={group.title}>
        {group.items.map((skill, i) => (
          <Chip
            key={skill.name}
            name={skill.name}
            color={skill.color}
            tip={skill.tip}
            index={i}
            selected={selectedName === skill.name}
            onSelect={() => onSelect(skill)}
          />
        ))}
      </ChipRow>
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
