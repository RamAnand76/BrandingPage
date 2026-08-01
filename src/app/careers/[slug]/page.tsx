import { openPositions, getJobBySlug } from "@/lib/careersData";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { JobDetailView } from "@/components/careers/JobDetailView";
import { Metadata } from "next";

export function generateStaticParams() {
  return openPositions.map((pos) => ({
    slug: pos.slug,
  }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const job = getJobBySlug(params.slug);
  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} | Careers at Rhevez`,
    description: job.description,
    openGraph: {
      title: `${job.title} | Careers at Rhevez`,
      description: job.description,
    },
  };
}

export default function JobDetailPage({ params }: PageProps) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Navigation />
      <div className="pt-24 md:pt-32">
        <JobDetailView job={job} />
      </div>
      <Footer />
    </div>
  );
}
