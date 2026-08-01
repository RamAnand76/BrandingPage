export interface Position {
  id: string;
  slug: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const openPositions: Position[] = [
  {
    id: "senior-ai-engineer",
    slug: "senior-ai-ml-engineer",
    title: "Senior AI / ML Engineer",
    department: "AI Engineering Services",
    type: "Full-Time",
    location: "Remote / Hybrid",
    description: "We are looking for an AI Engineer to design, build, and deploy custom agentic intelligence systems, LLM orchestration layers, and custom fine-tuned models for our clients.",
    responsibilities: [
      "Design and implement robust LLM pipelines and autonomous agentic workflows.",
      "Integrate vector databases and build highly optimized RAG/hybrid search architectures.",
      "Collaborate with product managers and designers to translate business requirements into intelligent features.",
      "Optimize model inference times and compute costs in production settings."
    ],
    requirements: [
      "4+ years of professional experience in software engineering and Machine Learning.",
      "Deep understanding of modern LLMs, Transformers, and frameworks (LangChain, LlamaIndex, LangGraph).",
      "Proficiency with Python, TypeScript, and cloud deployment engines.",
      "Strong product mindset and experience working in fast-paced startup teams."
    ]
  },
  {
    id: "full-stack-engineer",
    slug: "full-stack-product-engineer",
    title: "Full Stack Product Engineer",
    department: "Product Engineering",
    type: "Full-Time",
    location: "Remote",
    description: "Join us to build high-performance web applications and responsive client dashboards utilizing Next.js, Framer Motion, and robust serverless backends.",
    responsibilities: [
      "Develop clean, modular, and reusable UI components in React, TypeScript, and TailwindCSS.",
      "Build scalable server-side systems, APIs, and real-time synchronization layers.",
      "Ensure all user interfaces are visually premium, highly interactive, and optimized for mobile devices.",
      "Optimize frontend performance, layout shift metrics (CLS), and Lighthouse scores."
    ],
    requirements: [
      "3+ years of experience with React, Next.js (App Router), and TypeScript.",
      "Strong eye for design, animations (Framer Motion, GSAP), and detail-oriented styling.",
      "Experience with PostgreSQL, Prisma/Drizzle ORM, and serverless architectures.",
      "High agency, self-directed, and passion for crafting world-class products."
    ]
  },
  {
    id: "brand-designer",
    slug: "senior-brand-identity-designer",
    title: "Senior Brand Identity Designer",
    department: "Branding & Creative",
    type: "Part-Time / Contract",
    location: "Remote",
    description: "We are seeking a visionary Brand Designer to shape the visual narratives, identity systems, and digital aesthetics of next-generation startups and enterprises.",
    responsibilities: [
      "Create cohesive brand books, design guidelines, typography packages, and custom logo systems.",
      "Design digital brand assets, web graphics, and interactive design prototypes.",
      "Collaborate with frontend developers to ensure accurate translation of creative concepts into code.",
      "Establish unique, high-end artistic directions for global brand launches."
    ],
    requirements: [
      "Portfolio demonstrating exceptional craft in modern typography, layout, and visual systems.",
      "Expertise in Figma, Illustrator, Photoshop, and 3D modeling tools (Spline/Blender is a big plus).",
      "Ability to articulate design rationale and present directly to enterprise stakeholders.",
      "Strong understanding of modern web trends, minimalism, and luxury aesthetics."
    ]
  }
];

export function getJobBySlug(slug: string): Position | undefined {
  return openPositions.find((pos) => pos.slug === slug);
}

export function getJobById(id: string): Position | undefined {
  return openPositions.find((pos) => pos.id === id);
}
