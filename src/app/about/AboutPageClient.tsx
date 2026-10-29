"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import { AboutHero } from "@/components/sections/AboutHero";
import TeamSection from "@/components/sections/TeamSection";

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-black text-foreground pt-32">
      <Navigation />
      <AboutHero />
      <AboutSection />
      <TeamSection />
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
