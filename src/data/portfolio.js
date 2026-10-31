export const profile = {
  name: "Valentine Ezikeoha",
  firstName: "Valentine",
  roles: ["Software Engineer", "Problem Solver"],
  specialization: "AI/ML & Full-Stack Engineering",
  credential: "Howard University CS graduate",
  availability: "Open to software engineering opportunities",
  location: "New Jersey",
  headshot: "/headshot.jpg",
  // Drop your resume PDF into the `public/` folder and point this to it.
  resume: "/resume.pdf",
  resumeFileName: "Valentine-Ezikeoha-Resume.pdf",
  about: [
    "I'm a Howard University Computer Science graduate who builds AI-powered products and dependable full-stack systems. I enjoy turning ambiguous problems into useful, accessible software.",
    "My work spans production automation at Intuit, multilingual AI research, and products that connect modern interfaces with thoughtful backend systems.",
  ],
  facts: [
    { label: "Education", value: "Howard University, B.S. Computer Science '26" },
    { label: "Experience", value: "Intuit + AI/ML research" },
    { label: "Focus", value: "AI products, full-stack systems, developer tooling" },
  ],
};

export const experiences = [
  {
    role: "Machine Learning Researcher",
    company: "Howard University Research",
    location: "Washington, D.C.",
    period: "Sept 2025 – May 2026",
    focus: "Speech-based Alzheimer's detection and severity assessment",
    summary:
      "Developed and evaluated a multilingual audio-and-text pipeline to predict Mini-Mental State Examination (MMSE) scores, a 0–30 measure of cognitive function, from spoken responses. The research explores speech as a signal for cognitive screening and monitoring.",
    points: [
      "Combined five experimental cohorts from ADReSS, ADReSSo, ADReSS-M, and TAUKADIAL: approximately 659 labeled participants speaking English, Greek, and Mandarin, across different speaking tasks and recording conditions.",
      "In earlier experiments, evaluated XLM-RoBERTa, ModernBERT, and mmBERT on automatically generated transcripts alongside AST, SSAST, and WavLM audio representations. The strongest standalone text model, mmBERT, reached approximately 4.19 RMSE; the strongest audio-only models reached 5.47–5.56.",
      "Compared weighted late, MLP, gated, uncertainty-aware, and embedding-level fusion. Earlier uncertainty-aware fusion experiments achieved approximately 4.04 RMSE, improving on standalone text by combining linguistic patterns with complementary speech acoustics.",
      "Used 5-fold speaker-level GroupKFold cross-validation to keep each participant's recordings within a single fold and prevent speaker leakage. Tuned label standardization, Smooth L1 loss, learning rates, audio augmentation, and regularization to improve robustness.",
    ],
    tech: ["Python", "PyTorch", "Hugging Face Transformers", "Torchaudio", "scikit-learn"],
    poster: {
      title: "Speech-Based Detection and Severity Assessment of Alzheimer's Disease",
      authors: "Valentine Ezikeoha, Howard Prioleau, and Saurav K. Aryal, PhD",
      affiliation: "AI4PC Lab · Institute for Human Centered Artificial Intelligence",
      description:
        "A visual overview of the SSAST, WavLM, and mmBERT audio-text pipeline, model comparisons, and multilingual error analysis.",
      result:
        "Poster result: combined-cohort fusion RMSE decreased from 3.66 to 2.91 after hyperparameter optimization.",
      href: "/research/speech-based-alzheimers-detection-poster.pdf",
      preview: "/research/speech-based-alzheimers-detection-poster.jpg",
      downloadName: "Valentine-Ezikeoha-Speech-Based-Alzheimers-Detection-Poster.pdf",
      format: "1-page PDF · 395 KB",
    },
  },
  {
    role: "Software Engineer Intern",
    company: "Intuit",
    location: "Mountain View, CA",
    period: "May 2025 – Aug 2025",
    points: [
      "Developed scalable automation infrastructure for QuickBooks Online using TypeScript and Playwright, increasing test coverage across 40+ production user workflows.",
      "Engineered maintainable automation frameworks to validate complex role-based access control, reducing manual testing effort while improving software reliability.",
      "Collaborated with cross-functional engineering teams to translate customer feedback into production bug fixes and improved user experience.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    company: "Howard University Research",
    location: "Washington, D.C.",
    period: "Jun 2024 – Dec 2024",
    points: [
      "Optimized neural text-to-speech pipelines by improving multilingual audio preprocessing and text segmentation, reducing synthesis artifacts in long-form speech.",
      "Improved speech model accuracy by 20% by preprocessing audio data and extracting high-fidelity speaker embeddings for multilingual synthesis.",
    ],
  },
];

export const projects = [
  {
    name: "Seasoned Music",
    icon: "music",
    preview: "/projects/seasoned-music.jpg",
    year: "2026",
    status: "Active",
    tagline: "Your Spotify listening, in context",
    description:
      "Designed and built a privacy-first analyzer that maps Spotify listening across seasons and places, then turns those patterns into private playlists.",
    tech: ["Next.js", "TypeScript", "Spotify Web API"],
    href: "https://seasoned-music.vercel.app/",
  },
  {
    name: "Buddy's Brain",
    logo: "/buddy-bison-logo.png",
    preview: "/projects/buddys-brain.jpg",
    year: "2025–2026",
    status: "Actively developed",
    tagline: "Winner — BisonBytes AI Track Hackathon",
    description:
      "Expanded our hackathon-winning team project into an independently deployed AI study assistant. Students can add course materials, ask questions, and trace streamed answers to original passages—or explore sample lessons without an API key.",
    highlights: [
      "Built PostgreSQL-backed document processing with background workers, duplicate detection, safe retries, and visible upload status.",
      "Added passage-level retrieval, answer-specific citation panels, streamed responses, and readable source fallbacks when AI is unavailable.",
      "Migrated the React interface to TypeScript and Tailwind CSS, with guided uploads, saved demo progress, dark mode, and keyboard-accessible navigation.",
      "Secured administrative operations, validated inputs and external URLs, and added per-visitor usage limits, automated CI tests, and a reproducible 30-question AI evaluation suite.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "MongoDB", "PostgreSQL", "OpenAI"],
    href: "https://buddysbrain.vercel.app/",
    repo: "https://github.com/HuVddme/buddysBrain",
  },
  {
    name: "FinBuddy",
    icon: "finance",
    preview: "/projects/finbuddy.jpg",
    year: "2023",
    status: "Independent project",
    tagline: "Financial literacy, made personal",
    description:
      "An authenticated budgeting product for creating budgets, understanding spending patterns, and tracking progress toward financial goals.",
    tech: ["Next.js", "Clerk", "Tailwind CSS"],
    href: "https://finbuddy.vercel.app/",
  },
  {
    name: "RoboControl",
    icon: "robot",
    preview: "/projects/robocontrol.jpg",
    year: "2026",
    status: "Team project",
    tagline: "Real-time robot control interface",
    description:
      "A web interface for controlling and monitoring a robot in real time, focused on a clean, responsive control panel and a smooth operator experience.",
    tech: ["React", "TypeScript", "FastAPI"],
    href: "https://robocontrol-g20.vercel.app/",
    repo: "https://github.com/HuVddme/RobocontrolG20",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume", href: "/resume.pdf", external: true },
];

export const socials = [
  {
    id: "email",
    label: "Email",
    value: "valentineezikeoha@gmail.com",
    href: "mailto:valentineezikeoha@gmail.com",
    external: false,
    icon: "email",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "valentine-ezikeoha",
    href: "https://www.linkedin.com/in/valentine-ezikeoha-46280424a/",
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "HuVddme",
    href: "https://github.com/HuVddme",
    icon: "github",
  },
];
