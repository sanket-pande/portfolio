/** A titled point - About's three numbered columns. */
export interface Point {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
  context: string;
}

export interface Skill {
  name: string;
  /** The dot colour on the pill, and the pill's border on hover. */
  color: string;
  /** One short line, shown in the tooltip on hover or keyboard focus. */
  tip: string;
  /** What it's used for - shown in the telemetry bar when the pill is picked. */
  detail: string;
}

export interface SkillGroup {
  /** Stable key for the filter bar. */
  id: string;
  title: string;
  /** Small mono line under the title. */
  subtitle: string;
  items: Skill[];
  /** Where this group actually shows up in the work below - so the
   * section proves its own claim instead of asserting it. */
  note: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  /** Technologies named in this role's own work - scannable, so the
   * prose underneath doesn't have to carry the tooling too. */
  tech: string[];
  bullets: string[];
}

export const profile = {
  name: "Sanket Pande",
  /** The mono line beside the name at the top of the Hero. */
  tagline: ["AI", "Backend", "Cloud infrastructure", "Frontend", "Security"],
  /** One positioning string - used by the <title>, the header and the footer. */
  title: "Full Stack Software Engineer",
  location: "Mumbai, India",
  currentEmployer: "HealthCompiler",
  /** Shown as the live status badge in Contact. */
  availability: "Open to senior backend & full-stack roles",
  /** The reassurance line under the Contact buttons. */
  responseNote: "I usually reply within a day · Remote or on-site, contract or full-time.",
  /** The timezone the Contact clock reads in. */
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",
  yearsExperience: "7+",
  /** The headline reads lead + accent + tail: "I build systems that have to be right." */
  headlineLead: "I build",
  /** The one word set in the accent colour. */
  headlineAccent: "systems",
  headlineTail: "that have to be right.",
  summary:
    "7+ years building reliable, user-focused applications across Python/Django, FastAPI and React, with depth in cloud infrastructure and security hardening. Currently at HealthCompiler, on data-heavy systems for the US and Canada.",
  email: "sanketpande99001@gmail.com",
  linkedin: "https://linkedin.com/in/sanket-pande",
  github: "https://github.com/sanket-pande",
};

export const stats: Stat[] = [
  { value: "60%", label: "Performance gain", context: "Optimizing data-heavy systems at HealthCompiler" },
  { value: "90%", label: "Faster infra setup", context: "Containerizing Axonator's on-prem deployment for Windows and Linux" },
  { value: "10+", label: "Engineers mentored", context: "Leading developers and QA engineers across delivery cycles" },
];

/** About's three numbered columns. */
export const highlights: Point[] = [
  {
    title: "Healthcare",
    body: "Patient records, lab and EHR integrations, and compliance findings - work where getting it wrong has a real cost.",
  },
  { title: "Requirements", body: "Turning what stakeholders actually need into specs a team can build from." },
  { title: "Mentoring", body: "Leading and mentoring 10+ developers and QA engineers across delivery cycles." },
];

/* Trimmed to what's actually reached for day to day. The long tail that
   used to live here (PHP, Drupal, Bootstrap, Angular, Solr, …) still shows
   up where it belongs - against the role that used it, in Experience. */
export const skillGroups: SkillGroup[] = [
  {
    id: "frameworks",
    title: "Languages & Frameworks",
    subtitle: "Core Engineering",
    items: [
      {
        name: "Python",
        color: "#f59e0b",
        tip: "Default for backend and data work",
        detail: "My default for backend services, data processing, and the glue code that holds integrations together.",
      },
      {
        name: "Django",
        color: "#10b981",
        tip: "Most of my backend work",
        detail: "The HealthCompiler insights backend and the Sankey automotive portal - models, ORM query tuning, and the APIs the frontend calls.",
      },
      {
        name: "FastAPI",
        color: "#2dd4bf",
        tip: "Async Python services",
        detail: "Async REST endpoints with Pydantic models validating every request and response.",
      },
      {
        name: "TypeScript",
        color: "#3b82f6",
        tip: "Typed frontend code",
        detail: "Typed API responses and component props, so a contract change shows up as a type error instead of a runtime bug.",
      },
      {
        name: "React",
        color: "#38bdf8",
        tip: "Production web UIs",
        detail: "The React UI that replaced Django templates at HealthCompiler, including onboarding forms built on JSONForms and AJV validation.",
      },
      {
        name: "Celery",
        color: "#a3e635",
        tip: "Background jobs",
        detail: "Background jobs, scheduled reports, and retries for work that shouldn't block a request.",
      },
    ],
    note: "The insights backend, and the React UI that replaced its Django templates.",
  },
  {
    id: "ai",
    title: "AI & Generative AI",
    subtitle: "Intelligent Systems",
    items: [
      {
        name: "LLM Integration",
        color: "#c084fc",
        tip: "LLMs inside real workflows",
        detail: "Wiring model calls into internal tools, with structured JSON outputs the rest of the code can rely on.",
      },
      {
        name: "RAG Pipelines",
        color: "#ec4899",
        tip: "Answers grounded in your own docs",
        detail: "Chunking and embedding documents, then retrieving the relevant pieces before the model answers.",
      },
      {
        name: "Anthropic Claude API",
        color: "#fb923c",
        tip: "Long documents and code",
        detail: "Long-context work on code and documents inside internal tooling.",
      },
      {
        name: "OpenAI API",
        color: "#34d399",
        tip: "Embeddings and tool calls",
        detail: "Embeddings, function calling, and streamed responses.",
      },
      {
        name: "LangChain",
        color: "#fbbf24",
        tip: "Chaining model calls",
        detail: "Combining model calls with tools and retrieval when a single prompt isn't enough.",
      },
      {
        name: "Prompt Engineering",
        color: "#38bdf8",
        tip: "Prompts that hold up",
        detail: "Structured outputs and few-shot examples, tested against real inputs until the results are consistent.",
      },
    ],
    note: "LLM tooling shipped into internal workflows to speed up delivery.",
  },
  {
    id: "cloud",
    title: "Data & Infrastructure",
    subtitle: "Scale & Reliability",
    items: [
      {
        name: "GCP",
        color: "#4285f4",
        tip: "Where HealthCompiler runs",
        detail: "Compute Engine with managed instance groups and autoscaling, Cloud SQL, IAP tunnels, and IAM cleanup.",
      },
      {
        name: "BigQuery",
        color: "#60a5fa",
        tip: "Healthcare analytics",
        detail: "The pipelines behind the care-gap and Health Risk Assessment dashboards.",
      },
      {
        name: "PostgreSQL",
        color: "#818cf8",
        tip: "Relational data, tuned",
        detail: "Schema design, indexing, query tuning, and JSONB for semi-structured data.",
      },
      {
        name: "Terraform",
        color: "#8b5cf6",
        tip: "Infrastructure as code",
        detail: "Repeatable environments defined in code instead of clicked together in a console.",
      },
      {
        name: "Docker",
        color: "#22d3ee",
        tip: "Containers, dev to prod",
        detail: "Containerized Axonator's on-prem install for Windows and Linux, cutting setup time by 90%.",
      },
      {
        name: "Kubernetes",
        color: "#2563eb",
        tip: "Container orchestration",
        detail: "Ran the microservices behind an automotive customer portal at Sankey Solutions.",
      },
    ],
    note: "Care-gap and Health Risk Assessment pipelines, and the GCP underneath them.",
  },
];

/** Dot colours for technologies that only appear in a role's tech list. */
const extraTechColors: Record<string, string> = {
  AngularJS: "#dd0031",
  "Angular 13": "#c3002f",
  Containerization: "#22d3ee",
  "CI/CD": "#f97316",
  Windows: "#38bdf8",
  Linux: "#fbbf24",
  "Ruby on Rails": "#e0115f",
  AWS: "#ff9900",
  Nginx: "#009639",
};

const techColors: Record<string, string> = {
  ...Object.fromEntries(skillGroups.flatMap((group) => group.items.map((skill) => [skill.name, skill.color]))),
  ...extraTechColors,
};

/** The dot colour for a technology, wherever its chip appears. */
export function techColor(name: string): string | undefined {
  return techColors[name];
}

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "Taliun Solutions / HealthCompiler",
    period: "Jul 2023 - Present",
    tech: ["Django", "React", "BigQuery", "GCP", "Anthropic Claude API", "OpenAI API"],
    bullets: [
      "Improved query and processing performance by 60% for systems storing millions of patient records through targeted indexing, query optimization, and batch-processing improvements.",
      "Led the move from Django templates to React for a major US/Canadian healthcare client, making the UI faster and easier to use.",
      "Built internal tools on the Anthropic Claude and OpenAI APIs and shipped AI-assisted features into the product.",
      "Built lab/EHR integrations (Elation, Hint Clinical) for patient and employer onboarding, and the BigQuery analytics pipelines behind care-gap and Health Risk Assessment dashboards.",
      "Hardened GCP security after compliance-scanner findings - tightened over-privileged IAM roles and service accounts, enforced Public Access Prevention and bucket versioning, rolled out org-wide 2FA, and wrote the remediation reports for stakeholders.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Axonator",
    period: "Apr 2021 - May 2023",
    tech: ["AngularJS", "Angular 13", "Containerization", "CI/CD", "Windows", "Linux"],
    bullets: [
      "Containerized Axonator's complete infrastructure for on-premise Windows and Linux deployment, cutting initial setup time by 90%.",
      "Reworked how app structure and forms sync from server to mobile devices, cutting transfer time by 70%.",
      "Optimized Excel-workbook generation for thousands of records containing JSON data, reducing processing time by 50%.",
      "Automated a CI/CD pipeline for web and mobile apps with analysis reporting, cutting failed builds by 40%.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Sankey Solutions",
    period: "Jul 2019 - Mar 2021",
    tech: ["Django", "Docker", "Kubernetes", "Ruby on Rails", "AWS", "Nginx"],
    bullets: [
      "Built a customer web portal for one of India's top automobile manufacturers using Django, Docker, and Kubernetes in a microservices architecture.",
      "Built the UI for an AI-driven, text-to-movie project - real-time rendering and a timeline editor for previewing and editing scenes before export.",
      "Moved an online gaming platform to new infrastructure; built Ruby on Rails backend services with a GitLab CI/CD pipeline and an nginx reverse proxy.",
      "Owned AWS infrastructure and production support for one of India's top 10 news organizations.",
    ],
  },
];
