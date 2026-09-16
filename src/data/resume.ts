export interface Stat {
  value: string;
  label: string;
  context: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
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
  name: "Sanket Pande",
  /** One positioning string — used by the <title>, the header and the footer. */
  title: "Full Stack Engineer",
  location: "Mumbai, India",
  currentEmployer: "HealthCompiler",
  yearsExperience: "7+",
  headline: "I build backend systems that have to be",
  /** Last clause of the headline, set in the accent colour. */
  headlineAccent: "right.",
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
    title: "Languages & Frameworks",
    items: ["Python", "Django", "FastAPI", "TypeScript", "React", "Celery"],
    note: "The insights backend, and the React UI that replaced its Django templates.",
  },
  {
    title: "AI & Generative AI",
    items: [
      "LLM Integration",
      "RAG Pipelines",
      "Anthropic Claude API",
      "OpenAI API",
      "LangChain",
      "Prompt Engineering",
    ],
    note: "LLM tooling shipped into internal workflows to speed up delivery.",
  },
  {
    title: "Data & Infrastructure",
    items: ["GCP", "BigQuery", "PostgreSQL", "Terraform", "Docker", "Kubernetes"],
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
