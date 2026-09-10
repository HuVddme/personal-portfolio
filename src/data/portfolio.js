export const profile = {
  name: "Valentine Ezikeoha",
  firstName: "Valentine",
  specialization: "AI/ML & Full-Stack Engineering",
  credential: "Howard University CS graduate",
  availability: "Open to software engineering opportunities",
  location: "Washington, D.C.",
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
    role: "Undergraduate Researcher",
    company: "Howard University Research",
    location: "Washington, D.C.",
    period: "Sept 2025 – May 2026",
    points: [
      "Improved Alzheimer's prediction models by training ML models on acoustic-linguistic features, reducing RMSE by 25%+ over baseline.",
      "Engineered multimodal machine learning pipelines integrating speech audio and natural language features for robust multilingual inference.",
    ],
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
    year: "2025",
    status: "Hackathon winner",
    tagline: "Winner — BisonBytes AI Track Hackathon",
    description:
      "An AI-powered educational assistant that retrieves answers 3x faster through semantic vector search and GPT-4o integration, wrapped in an accessible, responsive React interface.",
    tech: ["React", "FastAPI", "MongoDB"],
    href: "https://buddys-brain-alpha.vercel.app/",
    repo: "https://github.com/HuVddme/Buddys-Brain",
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
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
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
