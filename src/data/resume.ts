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
  /** What it's used for — shown in the telemetry bar when the pill is picked. */
  detail: string;
}

export interface SkillGroup {
  /** Stable key for the filter bar. */
  id: string;
  title: string;
  /** Small mono line under the title. */
  subtitle: string;
  items: Skill[];
  /** Where this group actually shows up in the work below — so the
   * section proves its own claim instead of asserting it. */
  note: string;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  /** Technologies named in this role's own work — scannable, so the
   * prose underneath doesn't have to carry the tooling too. */
  tech: string[];
  bullets: string[];
}

export const profile = {
  greeting: "Hi, I am",
  name: "Sanket Pande",
  /** One positioning string — used by the <title>, the header and the footer. */
  title: "Full Stack Software Engineer",
  location: "Mumbai, India",
  currentEmployer: "HealthCompiler",
  /** Shown as the live status badge in Contact. */
  availability: "Open for high-scale challenges",
  /** The reassurance line under the Contact buttons. */
  responseNote: "Typically responds within 24 hours · Available for remote contracts & full-time roles.",
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
    "7+ years building reliable, user-focused applications across Python/Django, FastAPI and React, with depth in cloud infrastructure and security hardening. Currently at HealthCompiler, working on data-heavy systems for the US and Canada — third-party integrations, analytics pipelines, and the GCP infrastructure underneath them.",
  email: "sanketpande99001@gmail.com",
  linkedin: "https://linkedin.com/in/sanket-pande",
  github: "https://github.com/sanket-pande",
};

export const coreStack = [
  "Python",
  "Django",
  "FastAPI",
  "React",
  "TypeScript",
  "GCP",
  "BigQuery",
  "Terraform",
  "Docker",
  "Kubernetes",
];

export const stats: Stat[] = [
  { value: "60%", label: "Faster queries", context: "Indexing & batch-processing work on patient-record systems at HealthCompiler" },
  { value: "90%", label: "Faster infra setup", context: "Containerizing Axonator's on-prem deployment for Windows & Linux" },
  { value: "10+", label: "Engineers mentored", context: "Leading developers and QA engineers across delivery cycles" },
];

export const highlights = [
  "Leading and mentoring 10+ developers and QA engineers across delivery cycles.",
  "Turning what stakeholders actually need into specs a team can build from.",
];

/* Trimmed to what's actually reached for day to day. The long tail that
   used to live here (PHP, Drupal, Bootstrap, Angular, Solr, …) still shows
   up where it belongs — against the role that used it, in Experience. */
export const skillGroups: SkillGroup[] = [
  {
    id: "frameworks",
    title: "Languages & Frameworks",
    subtitle: "Core Engineering",
    items: [
      {
        name: "Python",
        color: "#f59e0b",
        tip: "Primary weapon of choice",
        detail: "Primary weapon of choice for backend services, data wrangling, and ML pipeline orchestration.",
      },
      {
        name: "Django",
        color: "#10b981",
        tip: "Scalable application backbone",
        detail: "Battle-tested ORM and modular monolith architecture powering large-scale backend systems.",
      },
      {
        name: "FastAPI",
        color: "#2dd4bf",
        tip: "Blazing async microservices",
        detail: "High-throughput async REST endpoints, Pydantic type safety, and streaming responses.",
      },
      {
        name: "TypeScript",
        color: "#3b82f6",
        tip: "Type-safe frontend stability",
        detail: "End-to-end typed contracts bridging API responses smoothly to frontend component state.",
      },
      {
        name: "React",
        color: "#38bdf8",
        tip: "Reactive component systems",
        detail: "Modern reactive user interfaces, atomic state management, and real-time interactive dashboards.",
      },
      {
        name: "Celery",
        color: "#a3e635",
        tip: "Asynchronous task master",
        detail: "Distributed worker task queues managing async jobs, scheduled reporting, and retry logic.",
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
        tip: "Embedded model pipelines",
        detail: "Structured JSON schema outputs, function calling, and deterministic evaluation.",
      },
      {
        name: "RAG Pipelines",
        color: "#ec4899",
        tip: "Context-grounded retrieval",
        detail: "Chunking strategies, semantic dense retrieval, vector embeddings, and re-ranking.",
      },
      {
        name: "Anthropic Claude API",
        color: "#fb923c",
        tip: "High-context reasoning engine",
        detail: "Long-context complex code generation, document synthesis, and safety guardrails.",
      },
      {
        name: "OpenAI API",
        color: "#34d399",
        tip: "Rapid inference & tooling",
        detail: "Streaming function calls, embeddings generation, and prompt optimization.",
      },
      {
        name: "LangChain",
        color: "#fbbf24",
        tip: "Agent chaining & tools",
        detail: "Agentic chains, tool orchestration, and memory management.",
      },
      {
        name: "Prompt Engineering",
        color: "#38bdf8",
        tip: "Rigorous context steering",
        detail: "Few-shot exemplar crafting, self-consistency loops, and system constraint calibration.",
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
        tip: "Cloud native foundation",
        detail: "Cloud Run, GKE, Cloud Functions, and secure VPC multi-region architecture.",
      },
      {
        name: "BigQuery",
        color: "#60a5fa",
        tip: "Multi-terabyte data warehouse",
        detail: "Massive analytics SQL queries, partitioned tables, and real-time streaming inserts.",
      },
      {
        name: "PostgreSQL",
        color: "#818cf8",
        tip: "Rock-solid relational backbone",
        detail: "ACID compliance, pgvector similarity search, indexing strategies, and JSONB storage.",
      },
      {
        name: "Terraform",
        color: "#8b5cf6",
        tip: "Declarative Infrastructure as Code",
        detail: "Declarative Infrastructure as Code (IaC) guaranteeing reproducible staging and prod environments.",
      },
      {
        name: "Docker",
        color: "#22d3ee",
        tip: "'Works on my machine' & prod",
        detail: "Multi-stage slim container builds for fast CI/CD compilation and deterministic runtimes.",
      },
      {
        name: "Kubernetes",
        color: "#2563eb",
        tip: "Wrangling cluster pods",
        detail: "Ingress controllers, horizontal pod autoscaling, rolling deployments, and zero-downtime upgrades.",
      },
    ],
    note: "Care-gap and Health Risk Assessment pipelines, and the GCP underneath them.",
  },
];

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "Taliun Solutions / HealthCompiler",
    period: "Jul 2023 — Present",
    tech: ["Django", "React", "BigQuery", "GCP", "Anthropic Claude API", "OpenAI API"],
    bullets: [
      "Improved query and processing performance by 60% for systems storing millions of patient records through targeted indexing, query optimization, and batch-processing improvements.",
      "Led migration of a top healthcare company's (US/Canada) UI from Django templates to React, improving performance and user experience.",
      "Built and shipped LLM/generative AI tooling — including the Anthropic Claude and OpenAI APIs — into internal workflows to accelerate development.",
      "Built lab/EHR integrations (Elation, Hint Clinical) for patient and employer onboarding, and the BigQuery analytics pipelines behind care-gap and Health Risk Assessment dashboards.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Axonator",
    period: "Apr 2021 — May 2023",
    tech: ["AngularJS", "Angular 13", "Containerization", "CI/CD", "Windows", "Linux"],
    bullets: [
      "Containerized Axonator's complete infrastructure for on-premise Windows and Linux deployment, cutting initial setup time by 90%.",
      "Optimized how app structure and forms sync from server to mobile devices, cutting transfer time by 70%.",
      "Optimized Excel-workbook generation for thousands of records containing JSON data, reducing processing time by 50%.",
      "Automated a CI/CD pipeline for web and mobile apps with analysis reporting, reducing build issues by 40%.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Sankey Solutions",
    period: "Jul 2019 — Mar 2021",
    tech: ["Django", "Docker", "Kubernetes", "Ruby on Rails", "AWS", "Nginx"],
    bullets: [
      "Built a customer web portal for one of India's top automobile manufacturers using Django, Docker, and Kubernetes in a microservices architecture.",
      "Built the UI for an AI-driven, text-to-movie project — real-time rendering and a timeline editor for previewing and editing scenes before export.",
      "Migrated a luck-based game project to new infrastructure; built Ruby on Rails backend services with a GitLab CI/CD pipeline and an nginx reverse proxy.",
      "Managed AWS infrastructure and led technical support for one of India's top 10 news organizations.",
    ],
  },
];
