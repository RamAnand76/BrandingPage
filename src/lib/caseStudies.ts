import { works } from "@/lib/works";

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  images: string[];
  alt: string;
  tags: string[];
  /** Filter groups shown on the list page */
  categories: string[];
  /** What we did, taken from the project tags */
  services: string[];
  /** Technologies, taken from the project tags */
  stack: string[];
  /** Public link: a live site, an internal page, or null when the project is private */
  link: string | null;
  external: boolean;
  /** Optional real story. When all three are set the page tells Challenge, Approach, Outcome. */
  challenge?: string;
  approach?: string;
  outcome?: string;
  /** Optional real results, shown as chips on the card and page. Leave empty until they are real. */
  metrics?: { value: string; label: string }[];
}

const STACK = new Set(["Next.JS", "React", "TypeScript", "Supabase", "Python", "PostgreSQL", "Go", "Flutter", "PWA"]);

const CATEGORIES: Record<string, string[]> = {
  "Rhevez OS": ["SaaS", "Web"],
  "Haven | Munnar": ["Web"],
  "ScriptForge AI Platform": ["AI", "Web"],
  Sleazy: ["Branding", "Web"],
  "Interactive Code Editor Component": ["Web"],
  "Enterprise Laundry Backend": ["Backend"],
  "SMB Billing & Invoicing App": ["Mobile"],
};

// Strongest projects first; anything not listed follows in its original order.
const ORDER = ["Rhevez OS", "Haven | Munnar", "ScriptForge AI Platform", "Sleazy"];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const caseStudies: CaseStudy[] = works
  .map((w) => {
    const link = w.link.startsWith("#") ? null : w.link;
    return {
      slug: slugify(w.title),
      title: w.title,
      summary: w.description,
      images: Array.isArray(w.image) ? w.image : [w.image],
      alt: w.alt,
      tags: w.tags,
      categories: CATEGORIES[w.title] ?? ["Web"],
      services: w.tags.filter((t) => !STACK.has(t)),
      stack: w.tags.filter((t) => STACK.has(t)),
      link,
      external: !!link && link.startsWith("http"),
    } satisfies CaseStudy;
  })
  .sort((a, b) => {
    const ia = ORDER.indexOf(a.title);
    const ib = ORDER.indexOf(b.title);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });

export const caseStudyFilters = ["All", ...Array.from(new Set(caseStudies.flatMap((c) => c.categories)))];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

export const getNextCaseStudy = (slug: string) => {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return caseStudies[(i + 1) % caseStudies.length];
};
