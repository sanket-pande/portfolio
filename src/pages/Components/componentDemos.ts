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
  /** Set when the demo needs to declare a function before rendering it - react-live
   * requires an explicit render(...) call in that mode instead of a trailing expression. */
  noInline?: boolean;
}

export const componentDemos: ComponentDemo[] = [
  {
    id: "button",
    name: "Button",
    summary:
      "The one interactive control on the site. Renders as a real <button> or, when given an href, an <a> styled identically - so a mailto link and a form submit look the same. The primary variant carries the hover motion: a small lift, the leading icon bobbing, and a trailing arrow driving forward.",
    usedIn: ['Hero - "Get in touch" / "View experience"', 'Contact - "Email me" / "Copy email address"', 'Header - "Résumé" download'],
    props: [
      { name: "variant", type: '"primary" | "ghost"', note: "defaults to primary" },
      { name: "href", type: "string", note: "renders an <a> instead of a <button>" },
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
      "The one technology pill used across the site: a dot in the technology's own colour and its name. Static in a list (each role's tech in Experience); give a chip onSelect and it becomes a button with hover motion, a pressed state and an optional tooltip - that's how the Skills section uses it.",
    usedIn: ["Experience - each role's tech", "Skills - the interactive stack"],
    props: [
      { name: "items", type: "string[]", note: "ChipList: the names to show" },
      { name: "ariaLabel", type: "string", note: "names the list for screen readers" },
      { name: "name", type: "string", note: "Chip: one pill; dot colour comes from the technology" },
      { name: "onSelect", type: "() => void", note: "Chip: makes it a button" },
    ],
    code: `<Chip items={["Python", "Django", "GCP", "BigQuery"]} />`,
  },
  {
    id: "stat",
    name: "Stat",
    summary:
      "One number-first stat: a big tabular-figure value, a mono label, and a line of context underneath explaining where the number came from.",
    usedIn: ["Hero - the three stats beside the pitch"],
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
      "The day/night switch - a sun on a sky-blue track in light mode, a crescent moon among twinkling stars in dark. It's deliberately stateless: it doesn't know how the theme is stored, it just renders a role=\"switch\" button (aria-checked = dark) and calls onToggle. The useTheme hook owns the real logic.",
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
    id: "icon",
    name: "Icon",
    summary:
      "Inline SVG on a 24×24 grid, no icon library. Every glyph inherits currentColor, so it takes the colour of whatever text it sits beside and needs no separate light/dark version. Decorative by default - each one sits next to a real label, so it's hidden from screen readers rather than announced twice.",
    usedIn: [
      "Header - Résumé download, Components",
      "Hero - the primary CTA arrow",
      "Contact - email, LinkedIn, GitHub rows, copy and external-link actions",
      "Footer - the three links",
    ],
    props: [
      { name: "name", type: '"mail" | "linkedin" | "github" | "download" | "arrowRight" | "sun" | "moon" | "layers" | "copy" | "check" | "external" | "clock" | "info"' },
      { name: "size", type: "number", note: "px square; defaults to 16" },
    ],
    code: `<div style={{ display: "flex", gap: 18, alignItems: "center", color: "var(--ink-2)" }}>
  <Icon name="mail" size={22} />
  <Icon name="linkedin" size={22} />
  <Icon name="github" size={22} />
  <Icon name="download" size={22} />
  <Icon name="arrowRight" size={22} />
  <Icon name="layers" size={22} />
  <Icon name="sun" size={22} />
  <Icon name="moon" size={22} />
  <Icon name="copy" size={22} />
  <Icon name="check" size={22} />
  <Icon name="external" size={22} />
  <Icon name="clock" size={22} />
  <Icon name="info" size={22} />
</div>`,
  },
  {
    id: "section",
    name: "Section",
    summary:
      "The chapter header that opens Experience, Skills and Contact: a pill with a pulsing dot, then the heading with its closing phrase in the accent colour. It exists so every section shares exact spacing and type scale without copies of the same CSS.",
    usedIn: ["Experience", "Skills", "Contact"],
    props: [
      { name: "id", type: "string" },
      { name: "eyebrow", type: "string" },
      { name: "title", type: "string", note: "the heading's lead-in" },
      { name: "accent", type: "string", note: "closing phrase, set in the accent colour" },
      { name: "children", type: "ReactNode" },
    ],
    code: `<Section id="demo-section" eyebrow="00 · Example" title="A reusable section header" accent="with an accent">
  <p style={{ color: "var(--ink-2)", maxWidth: "48ch" }}>
    Section renders the eyebrow and heading pattern shared by Experience, Skills and Contact.
  </p>
</Section>`,
  },
];
