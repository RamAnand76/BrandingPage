import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CaseStudyView } from "@/components/case-studies/CaseStudyView";
import { caseStudies, getCaseStudy, getNextCaseStudy } from "@/lib/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = getCaseStudy(params.slug);
  if (!study) return { title: "Case study not found" };
  const title = `${study.title} | Case Study`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: `https://rhevez.com/case-studies/${study.slug}` },
    openGraph: { title: `${title} | Rhevez`, description: study.summary, url: `https://rhevez.com/case-studies/${study.slug}` },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-clip">
      <Navigation />
      <CaseStudyView study={study} next={getNextCaseStudy(study.slug)} />
      <Footer />
    </div>
  );
}
