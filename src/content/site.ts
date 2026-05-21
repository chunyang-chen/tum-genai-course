export type NavItem = {
  href: string;
  label: string;
};

export type SemesterSummary = {
  id: string;
  label: string;
  term: string;
  year: string;
  visible: boolean;
  featuredProjectId?: string;
  featuredLectureId?: string;
  highlight?: string;
};

export type SemesterGuestLecture = {
  id: string;
  semesterId: string;
  speaker: string;
  affiliation: string;
  topic: string;
  summary: string;
  whyItMatters: string;
  initials: string;
  imageSrc?: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
  mediaVariant?: "portrait" | "abstract" | "initials";
};

export type SemesterTutor = {
  id: string;
  semesterId: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  imageSrc?: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
  mediaVariant?: "portrait" | "abstract" | "initials";
  isAdminTutor?: boolean;
};

export type SemesterProject = {
  id: string;
  semesterId: string;
  title: string;
  domain: string;
  technique: string;
  summary: string;
  themes: string[];
  initials: string;
  imageSrc?: string;
  videoSrc?: string;
  isPlaceholder?: boolean;
  placeholderLabel?: string;
  mediaVariant?: "portrait" | "abstract" | "initials";
};

export type RoadmapEntry = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  notes: string[];
  accent?: "blue" | "plain";
};

export type ResourceLink = {
  title: string;
  description: string;
  href: string;
  emphasis?: "primary" | "default";
  icon?: string;
  actionIcon?: string;
};

export type ShowcaseTemplateId =
  | "home"
  | "curriculum"
  | "lectures"
  | "projects"
  | "team"
  | "resources";

export type ShowcaseScreenSpec = {
  id: ShowcaseTemplateId;
  route: string;
  referenceImagePath: string;
  viewportWidth: number;
  viewportHeight: number;
};

export type ShowcaseCardData = {
  eyebrow?: string;
  title: string;
  body: string;
  tags?: string[];
};

export type ShowcaseTabSpec = {
  id: string;
  label: string;
};

export type HomeFeedbackQuote = {
  text: string;
  semesterId: string;
  semesterLabel: string;
  language?: "en" | "de";
};

export const siteMeta = {
  title: "Foundations and Application of Generative AI",
  shortTitle: "GenAI Foundations",
  code: "CITHN2014",
  semester: "Summer Semester 2026",
  lecturer: "Prof. Dr. Chunyang Chen",
  language: "English",
  format: "Lecture",
  sws: "3 SWS",
  institution: "Technical University of Munich",
  campus: "TUM Campus Heilbronn",
  siteName: "TUM Generative AI Course",
  description:
    "Public course showcase for Foundations and Application of Generative AI (CITHN2014) at the Technical University of Munich.",
  officialUrl:
    "https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/courses/950882292?$scrollTo=toc_overview",
  registrationUrl:
    "https://campus.tum.de/tumonline/ee/ui/ca2/app/desktop/#/slc.tm.cp/student/registrationProcedures/77720?$ctx=&courseId=950882292",
  moodleUrl: "https://www.moodle.tum.de/course/view.php?id=119703",
  organizationUrl: "https://www.tum.de/en/",
  departmentUrl: "https://www.cit.tum.de/en/cit/home/",
  campusUrl: "https://nav.tum.de/en/campus/heilbronn",
  githubPagesNote:
    "Static Astro site prepared for GitHub Pages deployment with environment-driven site URL and base path."
} as const;

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/insights", label: "Insights" },
  { href: "/projects", label: "Projects" },
  { href: "/team", label: "Team" },
  { href: "/resources", label: "Resources" }
];

export const showcaseScreenSpecs: ShowcaseScreenSpec[] = [
  {
    id: "home",
    route: "/",
    referenceImagePath:
      "D:/TUM/idea/coding/courseWebsite/genAI/stitch_tum_genai_course_showcase/home_genai_foundations_updated/screen.png",
    viewportWidth: 435,
    viewportHeight: 1600
  },
  {
    id: "curriculum",
    route: "/curriculum",
    referenceImagePath:
      "D:/TUM/idea/coding/courseWebsite/genAI/stitch_tum_genai_course_showcase/curriculum_genai_foundations_updated/screen.png",
    viewportWidth: 580,
    viewportHeight: 1600
  },
  {
    id: "lectures",
    route: "/insights",
    referenceImagePath:
      "D:/TUM/idea/coding/courseWebsite/genAI/stitch_tum_genai_course_showcase/guest_lectures_genai_foundations/screen.png",
    viewportWidth: 1254,
    viewportHeight: 1600
  },
  {
    id: "projects",
    route: "/projects",
    referenceImagePath:
      "D:/TUM/idea/coding/courseWebsite/genAI/stitch_tum_genai_course_showcase/projects_genai_foundations/screen.png",
    viewportWidth: 983,
    viewportHeight: 1600
  },
  {
    id: "team",
    route: "/team",
    referenceImagePath:
      "D:/TUM/idea/coding/courseWebsite/genAI/stitch_tum_genai_course_showcase/teaching_team_genai_foundations/screen.png",
    viewportWidth: 1095,
    viewportHeight: 1600
  },
  {
    id: "resources",
    route: "/resources",
    referenceImagePath:
      "D:/TUM/idea/coding/courseWebsite/genAI/stitch_tum_genai_course_showcase/resources_genai_foundations/screen.png",
    viewportWidth: 957,
    viewportHeight: 1600
  }
];

export const semesters: SemesterSummary[] = [
  {
    id: "ss-2026",
    label: "2026 Summer",
    term: "Summer",
    year: "2026",
    visible: false,
    highlight: "Incoming guest lecture archive for the next summer offering."
  },
  {
    id: "ss-2025",
    label: "2025 Summer",
    term: "Summer",
    year: "2025",
    visible: true,
    highlight: "Archive of student-led projects, industry guest insights, and foundation modules for the summer term."
  },
  {
    id: "ws-2025-26",
    label: "2025 Winter",
    term: "Winter",
    year: "2025/26",
    visible: true,
    featuredProjectId: "career-prep-ai",
    featuredLectureId: "pawan-kumar-goyal",
    highlight:
      "Project-led teaching with guest lectures, practical assignments, and a final presentation sequence."
  },
  {
    id: "ws-2024-25",
    label: "2024 Winter",
    term: "Winter",
    year: "2024/25",
    visible: true,
    highlight:
      "Public Moodle course info lists Chunyang Chen, Ludwig Felder, Shen Hu, and Yuetian Mao, and SEAI news documents the Google guest lecture."
  },
  {
    id: "ss-2024",
    label: "2024 Summer",
    term: "Summer",
    year: "2024",
    visible: true,
    highlight:
      "First public TUM teaching-page offering of the course as CITHN4004, covering foundations, prompting, applications, open models, and project-based assessment."
  },
  {
    id: "ws-2023-24",
    label: "2023 Winter",
    term: "Winter",
    year: "2023/24",
    visible: true,
    highlight: "Archived course syllabus and outline framing the core foundations of large language models."
  }
];

export const teamAndInsightsSemesterIds = [
  "ss-2026",
  "ws-2025-26",
  "ss-2025",
  "ws-2024-25",
  "ss-2024"
] as const;

export const latestInsightsSemesterId = "ss-2026";

function getOrderedSemesters(ids: readonly string[]) {
  return ids
    .map((id) => semesters.find((semester) => semester.id === id))
    .filter((semester): semester is SemesterSummary => Boolean(semester));
}

export const currentSemester =
  semesters.find((semester) => semester.id === "ws-2025-26") ??
  semesters.find((semester) => semester.visible) ??
  semesters[0];

export const quickFacts = [
  ["Course", `${siteMeta.title} (${siteMeta.code})`],
  ["Lecturer", siteMeta.lecturer],
  ["Language", siteMeta.language],
  ["Format", "Lecture + exercise"],
  ["Semester", siteMeta.semester],
  ["Campus", siteMeta.campus]
] as const;

export const homeSummary: ShowcaseCardData[] = [
  {
    title: "Course framing",
    body:
      "Generative AI is taught as both a technical system and a design problem shaped by users, workflows, and deployment constraints."
  },
  {
    title: "Learning model",
    body:
      "Lectures, assignments, guest sessions, and a group project move students from theory to implementation."
  },
  {
    title: "Public-safe scope",
    body:
      "The site shows the academic structure and selected showcases while leaving slides, submissions, and operational course files inside Moodle."
  }
];

export const modulePreview: ShowcaseCardData[] = [
  {
    title: "Foundations",
    body: "Language-model basics, transformer architecture, diffusion model, toeknzization, and non-deterministic."
  },
  {
    title: "Prompting",
    body: "Prompt design, context engineering, evaluation patterns, and quality control."
  },
  {
    title: "Reasoning & Open",
    body: "Reasoning models, open-source, license, and deployment"
  },
  {
    title: "Multimodal",
    body: "Vision-language systems, and cross-modal workflows."
  },
  {
    title: "AI Agents",
    body: "Tool use, MCP, orchestration, GUI/coding agents, memory and multi-agent system."
  },
  {
    title: "Security & Privacy",
    body: "Attack, privacy compliance, mitigation patterns."
  }
];

export const roadmapEntries: RoadmapEntry[] = [
  {
    id: "intro",
    eyebrow: "Topic 01",
    title: "Introduction to GenAI and course structure",
    summary:
      "An editorial opening that frames generative AI, the semester arc, and the project-centered teaching method.",
    notes: [
      "Introduces the course logic and public-safe boundaries of the site.",
      "Connects the GenAI landscape to the semester project format."
    ]
  },
  {
    id: "transformers",
    eyebrow: "Topic 02",
    title: "Large Language Models",
    summary:
      "Students move from language-model basics to the transformer era and study what is the attention, MOE, tokenization, RLHF for training the model.",
    notes: [
      "Language-model fundamentals and token prediction.",
      "Transformer evolution and user-facing chat systems."
    ]
  },
  {
    id: "agents",
    eyebrow: "Industrial insight",
    title: "Guest lecture: AI agents",
    summary:
      "The course pivots toward tool use, coding, computer use agents, and multi-agent systems alongside an external industry perspective.",
    notes: [
      "Prompt engineering and interaction patterns.",
      "Agent design, tool orchestration, and human oversight."
    ],
    accent: "blue"
  },
  {
    id: "multimodal",
    eyebrow: "Topic 04",
    title: "Prompt & Context engineering",
    summary:
      "The essential guideline for crafting the input for LLM to share the intent.",
    notes: [
      "Instruction following by the model",
      "Reasoning workflows for structured technical work."
    ]
  },
  {
    id: "diffusion",
    eyebrow: "Topic 05",
    title: "Diffusion models and vision",
    summary:
      "Students examine multimodal systems, generative imaging, and the shift from text-only interfaces to richer model interaction.",
    notes: [
      "Multimodal model design and applications.",
      "Vision-language interaction and generation."
    ]
  },
  {
    id: "open-models",
    eyebrow: "Topic 06",
    title: "Practical deployment",
    summary:
      "The closing phase covers production-minded agentic systems, governance, open models, and the security & privacy.",
    notes: [
      "Attack and defence for responsible AI",
      "Open-source local AI model with license"
    ]
  }
];

export const curriculumPrerequisites = [
  "Programming fluency is expected for the project work.",
  "Quantitative comfort helps when reading model and evaluation concepts.",
  "The official TUM page remains the source of truth for enrollment details."
] as const;

export const curriculumCheckpoint = {
  eyebrow: "Checkpoint",
  title: "Mid-semester project review",
  body:
    "One week is reserved for prototyping, tutor feedback, and aligning project scope with the final delivery phase."
} as const;

export const curriculumPhilosophy = {
  title: "Core course philosophy",
  body:
    '"We do not only teach how to prompt; we teach how to design systems around models so students can reason about utility, safety, and deployment together."'
} as const;

export const curriculumCapstone = {
  eyebrow: "Capstone achievement",
  title: "Final presentation",
  bullets: [
    "Live demo or prototype walkthrough",
    "Technical architecture documentation",
    "Testing, safety, and reflection"
  ]
} as const;

export const guestLectureArchive: SemesterGuestLecture[] = [
  {
    id: "marcel-gauglitz",
    semesterId: "ss-2026",
    speaker: "Marcel Gauglitz",
    affiliation: "Audi",
    topic: "Transformer Architecture",
    summary:
      "Industry AI expert associated with Audi and transformer-based systems for engineering and automotive applications.",
    whyItMatters:
      "The session extends core model concepts into automotive and industrial deployment contexts.",
    initials: "MG",
    imageSrc: "/images/guest-speakers/marcel-gauglitz.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "junjie-tang",
    semesterId: "ss-2026",
    speaker: "Junjie Tang",
    affiliation: "AWS",
    topic: "Enterprise AI Agents",
    summary:
      "Principal consultant at AWS Professional Services focused on enterprise AI systems, generative AI, and agentic workflows.",
    whyItMatters:
      "The talk connects agentic AI patterns to enterprise delivery and large-scale infrastructure choices.",
    initials: "JT",
    imageSrc: "/images/guest-speakers/junjie-tang.jpeg",
    mediaVariant: "portrait"
  },
  {
    id: "pawan-kumar-goyal",
    semesterId: "ws-2025-26",
    speaker: "Pawan Kumar Goyal",
    affiliation: "appliedAI",
    topic: "GenAI for Engineering",
    summary:
      "AI engineer and researcher at appliedAI focused on generative AI for engineering and industrial use cases.",
    whyItMatters:
      "The lecture links generative AI methods to practical engineering and industrial design workflows.",
    initials: "PG",
    imageSrc: "/images/guest-speakers/pawan-kumar-goyal.png",
    mediaVariant: "portrait"
  },
  {
    id: "zhenchang-xing",
    semesterId: "ws-2025-26",
    speaker: "Zhenchang Xing",
    affiliation: "CSIRO",
    topic: "AI Coding and Software Engineering",
    summary:
      "Senior research scientist at CSIRO Data61 working on AI coding, software engineering, and knowledge-intensive developer systems.",
    whyItMatters:
      "The session brings a software-engineering research perspective to AI coding and developer tooling.",
    initials: "ZX",
    imageSrc: "/images/guest-speakers/zhenchang-xing.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "kevin-jilg",
    semesterId: "ws-2024-25",
    speaker: "Kevin Jilg",
    affiliation: "BLANC & FISCHER Corporate Services",
    topic: "GenAI in Industry",
    summary:
      "Applied AI practitioner with enterprise delivery experience across industrial IT, data-driven products, and AI implementation.",
    whyItMatters:
      "The talk shows how generative AI ideas are shaped by delivery realities in enterprise environments.",
    initials: "KJ",
    imageSrc: "/images/guest-speakers/kevin-jilg.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "alexander-froemmgen",
    semesterId: "ws-2024-25",
    speaker: "Alexander Frömmgen",
    affiliation: "Google",
    topic: "AI for Software Engineering",
    summary:
      "Software engineering practitioner associated with Google and AI-enabled developer tooling in large-scale product environments.",
    whyItMatters:
      "The lecture grounds AI-assisted software engineering in production tooling and developer workflows.",
    initials: "AF",
    imageSrc: "/images/guest-speakers/alexander-froemmgen.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "silas-eyrich",
    semesterId: "ws-2024-25",
    speaker: "Silas Eyrich",
    affiliation: "Würth",
    topic: "Applied AI at Würth",
    summary:
      "Head of Big Data at Würth working on applied AI, data platforms, and product-facing enterprise AI initiatives.",
    whyItMatters:
      "The session translates enterprise AI strategy into operational and product-facing use cases.",
    initials: "SE",
    imageSrc: "/images/guest-speakers/silas-eyrich.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "timon-hoefer-ss-2024",
    semesterId: "ss-2024",
    speaker: "Timon Höfer",
    affiliation: "Porsche Digital",
    topic: "Product-Facing AI Deployment",
    summary:
      "AI researcher and product-oriented practitioner at Porsche Digital working on LLM adoption and applied industrial AI workflows.",
    whyItMatters:
      "The session shows how industrial AI work is shaped by product constraints, users, and delivery realities.",
    initials: "TH",
    imageSrc: "/images/guest-speakers/timon-hoefer.webp",
    mediaVariant: "portrait"
  },
  {
    id: "alice-chan",
    semesterId: "ss-2024",
    speaker: "Alice Chan",
    affiliation: "Porsche Digital",
    topic: "AI Product Collaboration",
    summary:
      "Industry collaborator at Porsche Digital focused on AI product initiatives, partnerships, and applied innovation programs.",
    whyItMatters:
      "The lecture highlights how applied AI moves through partnership, experimentation, and product development.",
    initials: "AC",
    imageSrc: "/images/guest-speakers/alice-chan.jpeg",
    mediaVariant: "portrait"
  },
  {
    id: "ankit-gupta",
    semesterId: "ss-2024",
    speaker: "Ankit Gupta",
    affiliation: "Schwarz IT",
    topic: "Enterprise GenAI Workflows",
    summary:
      "Enterprise AI practitioner connected to Schwarz IT with experience in data science, NLP, and generative AI applications.",
    whyItMatters:
      "The session adds an enterprise operations perspective to the course's generative AI coverage.",
    initials: "AG",
    imageSrc: "/images/guest-speakers/ankit-gupta.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "johannes-hoffart",
    semesterId: "ss-2025",
    speaker: "Johannes Hoffart",
    affiliation: "SAP",
    topic: "Agents and Knowledge Graphs",
    summary:
      "AI leader at SAP working on enterprise foundation models, knowledge graphs, and intelligent business systems.",
    whyItMatters:
      "This lecture grounds the course in enterprise deployment reality and helps students connect models to business systems.",
    initials: "JH",
    imageSrc: "/images/guest-speakers/johannes-hoffart.jpg",
    mediaVariant: "portrait"
  },
  {
    id: "timon-hoefer",
    semesterId: "ss-2025",
    speaker: "Timon Höfer",
    affiliation: "Porsche Digital",
    topic: "Practical GenAI Adoption",
    summary:
      "AI researcher and product-oriented practitioner at Porsche Digital working on LLM adoption and applied industrial AI workflows.",
    whyItMatters:
      "The lecture extends the course beyond theory and exposes students to how AI work changes under industrial constraints.",
    initials: "TH",
    imageSrc: "/images/guest-speakers/timon-hoefer.webp",
    mediaVariant: "portrait"
  }
];

export const tutorArchive: SemesterTutor[] = [
  {
    id: "ludwig-felder",
    semesterId: "ws-2024-25",
    name: "Ludwig Felder",
    role: "Doctoral Candidate & Research Associate",
    bio: "Human-LLM collaboration and development tools for LLM-powered applications",
    initials: "LF",
    imageSrc: "/images/team/ludwig-felder.webp",
    mediaVariant: "portrait"
  },
  {
    id: "shen-hu",
    semesterId: "ws-2024-25",
    name: "Shen Hu",
    role: "Doctoral Candidate & Research Associate",
    bio: "GUI agent and agent personalization",
    initials: "SH",
    imageSrc: "/images/team/shen-hu.webp",
    mediaVariant: "portrait",
    isAdminTutor: true
  },
  {
    id: "yuetian-mao",
    semesterId: "ws-2024-25",
    name: "Yuetian Mao",
    role: "Doctoral Candidate & Research Associate",
    bio: "Intelligent software engineering and query refinement",
    initials: "YM",
    imageSrc: "/images/team/yuetian-mao.webp",
    mediaVariant: "portrait"
  },
  {
    id: "yuetian-mao",
    semesterId: "ss-2025",
    name: "Yuetian Mao",
    role: "Doctoral Candidate & Research Associate",
    bio: "Intelligent software engineering and query refinement",
    initials: "YM",
    imageSrc: "/images/team/yuetian-mao.webp",
    mediaVariant: "portrait",
    isAdminTutor: true
  },
  {
    id: "zhen-tao",
    semesterId: "ss-2025",
    name: "Zhen Tao",
    role: "Doctoral Candidate & Research Associate",
    bio: "AI compliance and usable privacy",
    initials: "ZT",
    imageSrc: "/images/team/zhen-tao.webp",
    mediaVariant: "portrait"
  },
  {
    id: "shen-hu",
    semesterId: "ws-2025-26",
    name: "Shen Hu",
    role: "Doctoral Candidate & Research Associate",
    bio: "GUI agent and agent personalization",
    initials: "SH",
    imageSrc: "/images/team/shen-hu.webp",
    mediaVariant: "portrait",
    isAdminTutor: true
  },
  {
    id: "zhen-tao",
    semesterId: "ws-2025-26",
    name: "Zhen Tao",
    role: "Doctoral Candidate & Research Associate",
    bio: "AI compliance and usable privacy",
    initials: "ZT",
    imageSrc: "/images/team/zhen-tao.webp",
    mediaVariant: "portrait"
  },
  {
    id: "emilija-gjorgjevska",
    semesterId: "ss-2026",
    name: "Emilija Gjorgjevska",
    role: "Doctoral Candidate & Research Associate",
    bio: "Generative Engine Optimization (GEO)",
    initials: "EG",
    imageSrc: "/images/team/emilija-gjorgjevska.webp",
    mediaVariant: "portrait"
  },
  {
    id: "christoph-timmermann",
    semesterId: "ss-2026",
    name: "Christoph Timmermann",
    role: "Doctoral Candidate & Research Associate",
    bio: "Multimodal learning",
    initials: "CT",
    imageSrc: "/images/team/christoph-timmermann.webp",
    mediaVariant: "portrait",
    isAdminTutor: true
  },
  {
    id: "zixu-wang",
    semesterId: "ss-2026",
    name: "Zixu Wang",
    role: "External Doctoral Candidate",
    bio: "AI for automotive software development",
    initials: "ZW",
    imageSrc: "/images/team/zixu-wang.webp",
    mediaVariant: "portrait"
  },
  {
    id: "shen-hu",
    semesterId: "ss-2024",
    name: "Shen Hu",
    role: "Doctoral Candidate & Research Associate",
    bio: "GUI agent and agent personalization",
    initials: "SH",
    imageSrc: "/images/team/shen-hu.webp",
    mediaVariant: "portrait",
    isAdminTutor: true
  },
  {
    id: "han-wang",
    semesterId: "ss-2024",
    name: "Han Wang",
    role: "Visiting Researcher",
    bio: "Unit Testing for Software Engineering and AI",
    initials: "HW",
    imageSrc: "/images/team/han-wang.webp",
    mediaVariant: "portrait"
  }
];

export const projectArchive: SemesterProject[] = [
  {
    id: "cognideck",
    semesterId: "ws-2025-26",
    title: "CogniDeck",
    domain: "Education Assistant",
    technique: "AI-generated flashcards, smart study sessions",
    summary:
      "Leverage your studies through an AI-powered flashcard experience. CogniDeck automates deck generation, creates personalized active recall questions, and serves as a real-time study companion.",
    themes: ["Active Recall", "Study Companion"],
    initials: "CD",
    videoSrc: "/videos/projects/cognideck.mp4",
    mediaVariant: "abstract"
  },
  {
    id: "chatsql",
    semesterId: "ws-2025-26",
    title: "ChatSQL",
    domain: "Database Utility",
    technique: "Natural language queries, schema-aware generation",
    summary:
      "A Generative-AI utility that translates natural language questions into schema-aware SQL queries, helping developers and business users interact with databases effortlessly.",
    themes: ["SQL Generation", "Natural Language Query"],
    initials: "CS",
    videoSrc: "/videos/projects/chatsql.mp4",
    mediaVariant: "abstract"
  },
  // {
  //   id: "smart-lifestyle-assistant",
  //   semesterId: "ws-2025-26",
  //   title: "Smart Lifestyle Assistant",
  //   domain: "Personal wellness",
  //   technique: "Planning assistant, personalized recommendations",
  //   summary:
  //     "A personal assistant concept that helps students coordinate meals, commuting, scheduling, fitness, and day-to-day decision making through conversational support.",
  //   themes: ["Behavior modeling", "Lifestyle planning"],
  //   initials: "SL",
  //   imageSrc:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuAfTzDVialyYDwYco9cn2wguBT_ILhgNABNmgT6iUd7tU-AeqLBwhx02zEovMHzvz8LUAE2l136OKMyMh8yvbpbwrwAmPJ0MqvNXR9MgZcDjOzVMf8fmPR6OWJIrU7IOCkwpUK-pdA-beMMWT2BP_i_aqd3VWwTBNxSycDFq-2goh83JtTXbZ1Q3yCzJts6pXkpKRuTJuMXTjTUOJFkv-fYMB2JGkJKxF4anFX62n5yAbB0x-jr42eBKauNDGbKYBxoeAahDx86L2c",
  //   mediaVariant: "abstract"
  // },
  {
    id: "roesberg-vision-ai",
    semesterId: "ws-2025-26",
    title: "Rösberg Vision AI",
    domain: "Industrial engineering",
    technique: "Multimodal interaction, vision-language assistance",
    summary:
      "A multimodal support concept for industrial use for Rösberg Engineering GmbH, combining chat, voice, and visual signals to guide inspections and improve information access in operational settings.",
    themes: ["Voice & Vision Copilot"],
    initials: "RV",
    videoSrc: "/videos/projects/roesberg-vision-ai.mp4",
    mediaVariant: "abstract"
  },
  {
    id: "kako-ai",
    semesterId: "ws-2025-26",
    title: "KakoAI",
    domain: "Industrial engineering",
    technique: "LLM-powered agent",
    summary:
      "An intelligent assistant developed for KAKO Elektro GmbH that automates critical workflows in cable confection manufacturing.",
    themes: ["LLM-powered Agent"],
    initials: "KK",
    videoSrc: "/videos/projects/kako-ai.mp4",
    mediaVariant: "abstract"
  },
  {
    id: "nutri-ai",
    semesterId: "ws-2025-26",
    title: "Nutri-AI",
    domain: "Lifestyle Assistant",
    technique: "Image understanding",
    summary:
      "Your smart companion for a healthier lifestyle. Whether you are looking to lose weight, build muscle, or simply maintain a balanced diet, Nutri-AI makes tracking your nutrition effortless and accurate",
    themes: ["Image Understanding"],
    initials: "NU",
    videoSrc: "/videos/projects/nutri-ai.mp4",
    mediaVariant: "abstract"
  },
  {
    id: "fashion-ai",
    semesterId: "ws-2025-26",
    title: "AI Fashion Stylist",
    domain: "Fashion",
    technique: "Multimodal classification",
    summary:
      "A web-based application that helps you create personalized outfit suggestions using artificial intelligence. You can build a digital version of your wardrobe, chat with an AI stylist and visualize complete outfits on yourself.",
    themes: ["Personalized Outfit Suggestions"],
    initials: "FA",
    videoSrc: "/videos/projects/fashion-ai.mp4",
    mediaVariant: "abstract"
  }
  // {
  //   id: "arip",
  //   semesterId: "ws-2025-26",
  //   title: "ARIP",
  //   domain: "Academic research",
  //   technique: "Retrieval and matching support",
  //   summary:
  //     "An academic recognition portal concept that uses AI support to compare courses, streamline transfer-credit analysis, and improve access to recognition guidance.",
  //   themes: ["Graph DB", "Insight mapping"],
  //   initials: "AR",
  //   imageSrc:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuChgilB5uh9DBC02TRGwU0yvdIjFn7rYLvGUkDqvqPLQmpBpnTtyDn0jWUX2I4I_gW6wOBVn_Nb5dJuBeEX5eYM4lpx87o1NXZ_6JagAtflimITz5QhmSIdTTlxEannDFHniiN3igMpfTW4rDlTMXzoxLUAHpQiLFYrh6yrmb0CJlr4DDZHz8kWjj0GhrWODzfcR_rfj4KYpL-7EmMi0aJKIj0rHE3SEXX8cvG-n_nJmQP9sIe2Xgul4Yhj4jnPTlHSyfUmCgE4RoU",
  //   mediaVariant: "abstract"
  // },
  // {
  //   id: "teduco",
  //   semesterId: "ws-2025-26",
  //   title: "Teduco",
  //   domain: "EdTech",
  //   technique: "Conversational guidance system",
  //   summary:
  //     "A generative AI assistant for international education consultancy, designed to help prospective students navigate program options, processes, and common questions.",
  //   themes: ["Prompt engineering", "STEM education"],
  //   initials: "TE",
  //   imageSrc:
  //     "https://lh3.googleusercontent.com/aida-public/AB6AXuBVo4Z7YSVeG80KYW7IYFezUFlW-SFFyDqNkqRZoiQFcTGBf3vhhxO1Clj0qD6SppiPFxb2_sCzPbj3KiCBkZqUwF45i32Jg6ehrtGLeojNdig1Kb4fvSl7GEY8GG1q83u2mFfPiiCTsvXDJnjI4O4S0ZycR4bl-TX8AHbI_AxDT21CBxjVIy2bqV4g4eZb6rm6I3r83FzGv9GoV3MXvP2VLCY8mrb5-32Chsy3-LJ4jpt0tvFgS1fN_jaowxCb_-UvYeiCXnAwbFk",
  //   mediaVariant: "abstract"
  // },
  // {
  //   id: "placeholder-next-cycle",
  //   semesterId: "ws-2025-26",
  //   title: "Next cycle commencing",
  //   domain: "Upcoming project phase",
  //   technique: "Applications open soon",
  //   summary:
  //     "Additional project showcases can be added here in future semesters. This placeholder mirrors the stitched gallery composition without inventing a new project.",
  //   themes: ["Placeholder", "Future update"],
  //   initials: "+",
  //   isPlaceholder: true,
  //   placeholderLabel: "Placeholder",
  //   mediaVariant: "initials"
  // }
];

export const projectLifecycle = [
  {
    title: "Proposal",
    body: "Defining domains and identifying high-impact generative-AI opportunities."
  },
  {
    title: "Implementation",
    body: "Engineering prompts, orchestration logic, evaluation loops, and prototype systems."
  },
  {
    title: "Presentation",
    body: "Demonstrating utility through refined interfaces, technical choices, and reflection."
  }
] as const;

export const assessmentSummary = {
  headline: "Project-led assessment",
  body:
    "The verified public grading structure centers on the final project: 85% project work and 15% assignment or tutorial-track work inferred from the Moodle gradebook.",
  highlights: [
    "Final presentation: 25%",
    "Document submission: 60%",
    "Peer-based personal factor: 0.2 to 1.2"
  ],
  detail:
    "The written submission emphasizes process quality, user guidance, testing, safety reflection, and overall submission coherence."
} as const;

export const faqSummary = [
  {
    question: "Where are slides and weekly files?",
    answer:
      "Slides, assignments, and week-to-week operational updates remain in Moodle for enrolled students. This public site does not mirror those files."
  },
  {
    question: "How do projects work?",
    answer:
      "Students work through a project-centered course format with lectures, exercises, and a final project workflow across the semester."
  },
  {
    question: "How is the course assessed?",
    answer:
      "Assessment is project-led. The public grading structure centers on the final project, with a smaller assignment or tutorial-track component."
  },
  {
    question: "Where should current logistics be checked?",
    answer:
      "Lectures are held physically in Heilbronn and live-streamed to Garching, while exercises take place physically in both Heilbronn and Garching. The course is intended for BIE, MIE, and MMDT students in Heilbronn, and for Master of Informatics and Information Systems students in Garching. Current semester logistics and internal teaching operations should still be checked via the official TUM course page and Moodle."
  }
] as const;

export const metricsHighlights = [
  { label: "2024 Summer", value: 59, note: "students" },
  { label: "2024 Winter", value: 80, note: "students" },
  { label: "2025 Summer", value: 89, note: "students" },
  { label: "2025 Winter", value: 427, note: "students" },
  { label: "2026 Summer", value: 210, note: "students", waiting: 241 }
] as const;

export const resourceLinks: ResourceLink[] = [
  {
    title: "TUM Course Page",
    description: "Official module description and academic credits information.",
    href: siteMeta.officialUrl,
    icon: "school",
    actionIcon: "arrow_outward"
  },
  {
    title: "TUM Registration",
    description: "TUMOnline official registration procedure portal for class participation and exams.",
    href: siteMeta.registrationUrl,
    icon: "how_to_reg",
    actionIcon: "arrow_outward"
  },
  {
    title: "Moodle Login",
    description: "Central gateway for enrolled students to access assignments.",
    href: siteMeta.moodleUrl,
    emphasis: "primary",
    icon: "login",
    actionIcon: "login"
  },
  {
    title: "TUM Informatics",
    description: "Explore the department and surrounding research labs.",
    href: siteMeta.departmentUrl,
    icon: "account_balance",
    actionIcon: "corporate_fare"
  }
];

export const resourcesAccessLogic = {
  publicSafe:
    "Our curriculum is designed with transparency in mind. We provide the syllabus and high-level lecture themes to the public to foster a broader understanding of Generative AI in the academic world.",
  privateOnly: [
    "Full Lecture Slides & Recordings",
    "Programming Assignments & Jupyter Notebooks",
    "Weekly Quiz Submissions",
    "Private Discussion Forums & Mentorship"
  ],
  note:
    "Access requires a valid TUM-ID and active course enrollment via TUMOnline."
} as const;

export const resourceBanner = {
  title: "Building the future of intelligence",
  body:
    "The Department of Informatics at TUM is at the forefront of AI research and ethical implementation.",
  imageSrc:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdL4N7V9-55qFjw5IrUO48TkwEDtbzvbtyJD1NBiqSryxHRUwWlyI0m1sUNEjsQvXUKkuVDWK1puZQbFg7f1wppCqjEpp1fw0BA4ktfcvuEYZrf43c7fBEG5t-zy8dKjeSwaFIea-IMzGAdyxVWUQ8rUGqE-TNqpkos0dhBQye7JlxR4ysCRC31WmmB6EHyQw-JTo4ebLWgApTdoZvrKo0CwB9aJ2X4lth1sZ7s7WA02wtNqzdnF3po1EVLJiy8lx_1HlGmFGQaZY"
} as const;

export const showcaseMedia = {
  homeSpotlight:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCijnf8rmQBmiwKQV2i2V96nJnk0WTGhroXbCi6DUxwUwKpw2wHFVH3zQimkGVGbjpT9zIaXBnmMQhwyeThpFHt3XW5641JxB3tROoujtTdSzay0OxGo-ErdSObzkrE_vwtsWCM_CjksxFuT7zT4TzDiKqZNZQj_TAOdee-opQyiHyp5p58oV27Rn-dGyWtIAAFz4HdXBeTnTb5cKB2Cp9fNrIsxxuxS_tKaGzd-E5Chq3Q1nbP4qfaHXJ2r9hZOij3mRnPUhBbTkg",
  projectHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBQSEAkArouphBZMKyG-20kFAuco1iyyLgB5DUPNz8Klyqyso3pAnfr5cLRY0b6yuwazQJOjMjogEpohdIw9qg-pC9yTcUlr0nFlWH4UZfCvY3ZoZCeM7ieqve34o427syJPimb2CEhiRWLk3eqliAYLwBM5wIYdWkZZiOBsED5HaEd-K930iYjnL6sYUwlo5JOeWEPu7e8I1jUovrnTb1wnmSAxEWGR38zHireAD0hq8AbqwAONlgEnT2GZX9jS6chxM-_HmSvmS0",
  leadPortrait: "/images/team/chunyang-chen.webp"
} as const;

export const homeFeedback = {
  status: "approved anonymous excerpts",
  intro:
    "Selected anonymous EvaSys comments from recent semesters highlight how students experienced the course across projects, tutorials, and invited sessions.",
  placeholderQuote: "Awaiting approved student feedback excerpts for publication.",
  themes: ["practical", "industry-relevant", "hands-on", "project-based", "clear structure", "useful examples"],
  rotationMs: 7000
} as const;

export const homeFeedbackQuotes: HomeFeedbackQuote[] = [
  {
    semesterId: "ws-2024-25",
    semesterLabel: "WS 2024/25",
    language: "en",
    text:
      "the concepts that we learnt in class are very interesting, as well as the encouragement of creativity in our project."
  },
  {
    semesterId: "ws-2024-25",
    semesterLabel: "WS 2024/25",
    language: "en",
    text:
      "I dont have like so much experience in AI and python before, but I think it is so great cause the tutorial is not so difficult for understanding. And this course is related to AI and now I think I have sort of knowledge for this area, so thanks so much!"
  },
  {
    semesterId: "ss-2025",
    semesterLabel: "SoSe 2025",
    language: "en",
    text:
      "There is a big project for the whole course, which is the best way to apply and retain knowledge gained during the lectures and personal research."
  },
  {
    semesterId: "ss-2025",
    semesterLabel: "SoSe 2025",
    language: "en",
    text:
      "The professor starts from the very basics and explained everything at a very appropriate level so that everyone can understand, including those that don't have an IT background."
  },
  {
    semesterId: "ws-2025-26",
    semesterLabel: "WS 2025/26",
    language: "en",
    text:
      "Invited lecturers to share about related topics, clear and logical teaching as well as patient tutors."
  },
  {
    semesterId: "ws-2025-26",
    semesterLabel: "WS 2025/26",
    language: "de",
    text:
      "Ich schätze den didaktischen Aufbau und die motivierende Art des Professors sehr. Dadurch fällt das Lernen deutlich leichter."
  }
];

export const showcasePlaceholders = {
  teamIntro:
    "Our teaching support roster is updated dynamically as assistant and mentor assignments are confirmed for each active semester.",
  lecturesIntro:
    "The guest lecture archive is updated regularly as industry experts and research presentations are scheduled across the timeline.",
  resourcesIntro:
    "A curated index of core tools and official links. Enrolled students should access Moodle for comprehensive lecture materials."
} as const;

export const lecturerProfile = {
  name: "Prof. Dr. Chunyang Chen",
  title: "Professor of Software Engineering & AI",
  role: "Chair of Software Engineering & AI, TUM Campus Heilbronn",
  quote:
    "\"The fear comes from unknown, so try to understand the foundations of GenAI. The only constant of life is change, so apply the emerging GenAI into your daily work and life.\"",
  focusArea: "software engineering, AI, human-computer collaboration",
  affiliation: "TUM School of Computation, Information and Technology",
  initials: "CC",
  imageSrc: showcaseMedia.leadPortrait
} as const;

export function getVisibleSemesters() {
  return semesters.filter((semester) => semester.visible);
}

export function getInsightsSemesters() {
  return getOrderedSemesters(teamAndInsightsSemesterIds).filter((semester) => getSemesterLectures(semester.id).length > 0);
}

export function getTeamSemesters() {
  return getOrderedSemesters(teamAndInsightsSemesterIds);
}

export function getLectureSemesters() {
  return semesters.filter((semester) => getSemesterLectures(semester.id).length > 0);
}

export function getSemesterLectures(semesterId: string) {
  return guestLectureArchive.filter((lecture) => lecture.semesterId === semesterId);
}

export function getSemesterTutors(semesterId: string) {
  const list = tutorArchive.filter((tutor) => tutor.semesterId === semesterId);
  return [...list].sort((a, b) => (b.isAdminTutor ? 1 : 0) - (a.isAdminTutor ? 1 : 0));
}

export function getSemesterProjects(semesterId: string) {
  return projectArchive.filter((project) => project.semesterId === semesterId);
}

export function getSemesterLectureSlots(semesterId: string) {
  return getSemesterLectures(semesterId).slice(0, 3);
}

export function getSemesterTutorSlots(semesterId: string) {
  const tutors = getSemesterTutors(semesterId).slice(0, 3);

  // Don't add placeholders if there are 2 or more tutors
  if (tutors.length >= 2) {
    return tutors;
  }

  const needed = 3 - tutors.length;

  if (needed <= 0) {
    return tutors;
  }

  const semester = semesters.find((entry) => entry.id === semesterId);
  return [
    ...tutors,
    ...Array.from({ length: needed }, (_, index) => ({
      id: `${semesterId}-tutor-placeholder-${index + 1}`,
      semesterId,
      name: "Staff slot reserved",
      role: "Details to be announced",
      bio: `Teaching support and tutoring allocations for the ${semester?.label ?? "active"} semester.`,
      initials: "TS",
      imageSrc: undefined,
      isPlaceholder: true,
      placeholderLabel: "Placeholder",
      mediaVariant: "initials" as const,
      isAdminTutor: false
    } as SemesterTutor))
  ];
}

export function getSemesterProjectSlots(semesterId: string) {
  const projects = getSemesterProjects(semesterId).slice(0, 6);
  const needed = 6 - projects.length;

  if (needed <= 0) {
    return projects;
  }

  return [
    ...projects,
    ...Array.from({ length: needed }, (_, index) => ({
      id: `${semesterId}-project-placeholder-${index + 1}`,
      semesterId,
      title: index === needed - 1 ? "Next cycle commencing" : "Future project slot",
      domain: "Upcoming project phase",
      technique: "Placeholder",
      summary:
        index === needed - 1
          ? "Applications for the next project cycle will appear here once the semester showcase is ready."
          : "Additional student project highlights and implementation details will be featured as teams complete their development cycles.",
      themes: index === needed - 1 ? ["Applications open", "Future update"] : ["Placeholder", "Future update"],
      initials: index === needed - 1 ? "+" : "FP",
      imageSrc: projectArchive[index % projectArchive.length]?.imageSrc ?? showcaseMedia.projectHero,
      isPlaceholder: true,
      placeholderLabel: "Placeholder",
      mediaVariant: index === needed - 1 ? ("initials" as const) : ("abstract" as const)
    }))
  ];
}

export function getAllProjectsForGallery() {
  const semesterOrder = new Map(
    ["ss-2026", "ws-2025-26", "ss-2025", "ws-2024-25", "ss-2024", "ws-2023-24"].map((id, index) => [id, index])
  );

  return [...projectArchive].sort((left, right) => {
    const leftOrder = semesterOrder.get(left.semesterId) ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = semesterOrder.get(right.semesterId) ?? Number.MAX_SAFE_INTEGER;
    return leftOrder - rightOrder;
  });
}

export function getFeaturedProject(semesterId: string) {
  const semester = semesters.find((entry) => entry.id === semesterId);
  return projectArchive.find((project) => project.id === semester?.featuredProjectId) ?? projectArchive[0];
}

export function getFeaturedLecture(semesterId: string) {
  const semester = semesters.find((entry) => entry.id === semesterId);
  return guestLectureArchive.find((lecture) => lecture.id === semester?.featuredLectureId) ?? guestLectureArchive[0];
}
