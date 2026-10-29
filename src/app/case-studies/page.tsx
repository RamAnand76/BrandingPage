import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CaseStudiesList } from "@/components/case-studies/CaseStudiesList";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected Rhevez projects, explained: what each one is, what we delivered and how it was built. Web, AI, branding, mobile and SaaS.",
  alternates: { canonical: "https://rhevez.com/case-studies" },
  openGraph: {
    title: "Case Studies | Rhevez",
    description: "Selected Rhevez projects, explained: what each one is, what we delivered and how it was built.",
    url: "https://rhevez.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 w-full relative">
        <CaseStudiesList />
      </main>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
