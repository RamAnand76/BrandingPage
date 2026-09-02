import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Rhevez — AI & Software Development Company",
  description: "Rhevez is the brand operated by Rhevez LLP. We build AI-powered software, digital products, and technology solutions for businesses. Founded in 2025, based in India.",
  alternates: {
    canonical: "https://rhevez.com/about",
  },
  openGraph: {
    title: "About Rhevez — AI & Software Development Company",
    description: "Rhevez is the brand operated by Rhevez LLP — building AI-powered software, digital products, and technology solutions for businesses.",
    url: "https://rhevez.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
