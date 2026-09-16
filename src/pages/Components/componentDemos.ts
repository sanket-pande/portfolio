export interface PropSpec {
  name: string;
  type: string;
  note?: string;
}

export interface ComponentDemo {
  id: string;
  name: string;
  summary: string;
  usedIn: string[];
  props: PropSpec[];
  code: string;
  /** Set when the demo needs to declare a function before rendering it — react-live
   * requires an explicit render(...) call in that mode instead of a trailing expression. */
  noInline?: boolean;
}

export const componentDemos: ComponentDemo[] = [
  {
    id: "button",
    name: "Button",
    summary:
      "The one interactive control on the site. Renders as a real <button> or, when given an href, an <a> styled identically — so a mailto link and a form submit look the same.",
    usedIn: ['Hero — "Email me" / "View experience"', 'Header — "Résumé" download'],
    props: [
      { name: "variant", type: '"primary" | "ghost"', note: "defaults to primary" },
      { name: "href", type: "string", note: "renders an <a> instead of a <button>" },
      { name: "size", type: '"md" | "lg"', note: "lg is the hero and contact CTA" },
    ],
    code: `<div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
  <Button variant="primary" href="#">Primary</Button>
  <Button variant="ghost" href="#">Ghost</Button>
</div>`,
  },
  {
    id: "chip",
    name: "Chip",
    summary:
      "A flat list of tag pills. Two visual tones, so it can read as an accent (the core stack in the hero) or as neutral reference data (the full skills list).",
    usedIn: ["Hero — core stack row", "Skills — each grouped list"],
    props: [
      { name: "items", type: "string[]" },
      { name: "tone", type: '"accent" | "muted"', note: "defaults to accent" },
      { name: "ariaLabel", type: "string", note: "names the list for screen readers" },
    ],
    code: `<Chip items={["Python", "Django", "GCP", "BigQuery"]} tone="accent" />`,
  },
  {
    id: "stat",
    name: "Stat",
    summary:
      "One number-first tile: a big tabular-figure value, a mono label, and a line of context underneath explaining where the number came from.",
    usedIn: ["Hero — the three stat tiles under the headline"],
    props: [
      { name: "value", type: "string" },
      { name: "label", type: "string" },
      { name: "context", type: "string" },
    ],
    code: `<div style={{ maxWidth: 240 }}>
  <Stat
    value="60%"
    label="Faster queries"
    context="Indexing & batch-processing work on patient-record systems"
  />
</div>`,
  },
  {
    id: "theme-toggle",
    name: "ThemeToggle",
    summary:
      "The light/dark switch. It's deliberately stateless — it doesn't know what theme is active or how to persist it, it just renders a button and calls onToggle. The useTheme hook owns the real logic.",
    usedIn: ["Header"],
    props: [
      { name: "theme", type: '"light" | "dark"' },
      { name: "onToggle", type: "() => void" },
    ],
    code: `function Demo() {
  const [theme, setTheme] = React.useState("dark");
  return (
    <ThemeToggle
      theme={theme}
      onToggle={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
render(<Demo />);`,
    noInline: true,
  },
  {
    id: "section",
    name: "Section",
    summary:
      "The eyebrow + heading pattern that opens About, Experience and Skills. It exists so those three sections share exact spacing and type scale without three copies of the same CSS.",
    usedIn: ["About", "Experience", "Skills"],
    props: [
      { name: "id", type: "string" },
      { name: "eyebrow", type: "string" },
      { name: "title", type: "string" },
      { name: "children", type: "ReactNode" },
      { name: "compact", type: "boolean", note: "About uses this — no room of its own, it shares Hero's chapter" },
    ],
    code: `<Section id="demo-section" eyebrow="00 · Example" title="A reusable section header">
  <p style={{ color: "var(--ink-2)", maxWidth: "48ch" }}>
    Section renders the eyebrow and heading pattern shared by About, Experience and Skills.
  </p>
</Section>`,
  },
];
