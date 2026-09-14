export interface Stat {
  value: string;
  label: string;
  context: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Role {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const profile = {
  name: "Sanket Pande",
  title: "Software Engineer",
  location: "Mumbai, India",
  currentEmployer: "HealthCompiler",
  yearsExperience: "7+",
  headline: "I build backend systems for healthcare data that has to be right.",
  summary:
    "7+ years building reliable, user-focused applications across Python/Django, FastAPI and React, with depth in cloud infrastructure and security hardening. Currently at HealthCompiler, working on healthcare data systems for the US and Canada — EHR integrations, analytics pipelines, and the GCP infrastructure underneath them.",
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
  { value: "60%", label: "Faster queries", context: "Indexing & batch-processing work on patient-record systems at Health Compiler" },
  { value: "90%", label: "Faster infra setup", context: "Containerizing Axonator's on-prem deployment for Windows & Linux" },
  { value: "10+", label: "Engineers mentored", context: "Leading developers and QA engineers across delivery cycles" },
];

export const highlights = [
  "Led and mentored a team of 10+ developers and QA engineers, delivering complex projects with high quality and adherence to best practices.",
  "Partnered with stakeholders to elicit requirements and translate them into clear technical specifications, delivering user-focused solutions on schedule.",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Frameworks",
    items: [
      "Python", "JavaScript", "TypeScript", "HTML", "CSS", "SCSS", "Java", "Kotlin",
      "PHP", "Django", "Flask", "FastAPI", "Celery", "Ruby on Rails", "React",
      "Angular", "Bootstrap", "Drupal",
    ],
  },
  {
    title: "AI & Generative AI",
    items: [
      "LLM Integration", "Prompt Engineering", "OpenAI API", "Anthropic Claude API",
      "LangChain", "RAG Pipelines", "AI-assisted Development",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: [
      "PostgreSQL", "MySQL", "MSSQL", "Solr", "Redis", "MongoDB", "BigQuery",
      "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Nginx",
      "Linux", "AWS", "GCP", "Azure", "Pytest", "Cypress",
    ],
  },
];

export const experience: Role[] = [
  {
    title: "Software Engineer",
    company: "Taliun Solutions / HealthCompiler",
    period: "Jul 2023 — Present",
    bullets: [
      "Improved query and processing performance by 60% for systems storing millions of patient records through targeted indexing, query optimization, and batch-processing improvements.",
      "Built and maintained lab/EHR integrations (Elation, Hint Clinical, and others) supporting patient and employer onboarding workflows.",
      "Led migration of a top healthcare company's (US/Canada) UI from Django templates to React, improving performance and user experience.",
      "Built and shipped LLM/generative AI tooling — including the Anthropic Claude and OpenAI APIs — into internal workflows to accelerate development.",
      "Hardened cloud security posture: remediated over-privileged IAM roles, enabled bucket versioning and deletion protection, enforced Public Access Prevention, and rolled out org-wide 2FA.",
      "Built analytics pipelines on BigQuery for healthcare dashboards covering care gaps and Health Risk Assessments.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Axonator",
    period: "Apr 2021 — May 2023",
    bullets: [
      "Containerized Axonator's complete infrastructure for on-premise Windows and Linux deployment, cutting initial setup time by 90%.",
      "Optimized Excel-workbook generation for thousands of records containing JSON data, reducing processing time by 50%.",
      "Optimized how app structure and forms sync from server to mobile devices, cutting transfer time by 70%.",
      "Automated a CI/CD pipeline for web and mobile apps with analysis reporting, reducing build issues by 40%.",
      "Built the form builder and workflow builder using AngularJS / Angular 13.",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Sankey Solutions",
    period: "Jul 2019 — Mar 2021",
    bullets: [
      "Migrated a luck-based game project to new infrastructure; built Ruby on Rails backend services with a GitLab CI/CD pipeline and an nginx reverse proxy.",
      "Built a customer web portal for one of India's top automobile manufacturers using Django, Docker, and Kubernetes in a microservices architecture.",
      "Built the UI for an AI-driven, text-to-movie project — real-time rendering and a timeline editor for previewing and editing scenes before export.",
      "Managed AWS infrastructure and led technical support for one of India's top 10 news organizations.",
      "Led development of an Android app connecting farmers with agricultural experts, on a Drupal backend with live video and chat.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering",
  school: "JSPM's Rajarshi Shahu College of Engineering, Pune",
  period: "2015 — 2019",
};
