import React from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";

// Everything below the hero is split into its own chunk (still server-rendered, so the HTML keeps the content),
// which keeps the first JavaScript the browser must run down to the nav and hero.
const SelectedWork = dynamic(() => import("@/components/sections/SelectedWork").then((m) => m.SelectedWork));
const ExpertServices = dynamic(() => import("@/components/sections/ExpertServices").then((m) => m.ExpertServices));
const HowWeWork = dynamic(() => import("@/components/sections/HowWeWork").then((m) => m.HowWeWork));
const WhatWeDoSection = dynamic(() => import("@/components/sections/WhatWeDoSection").then((m) => m.WhatWeDoSection));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection").then((m) => m.ProcessSection));
const FeaturedCaseStudies = dynamic(() => import("@/components/sections/FeaturedCaseStudies").then((m) => m.FeaturedCaseStudies));
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then((m) => m.FaqSection));
const PricingSection = dynamic(() => import("@/components/pricing/PricingSection").then((m) => m.PricingSection));
const Footer = dynamic(() => import("@/components/Footer"));

const Index = () => {
  const showPricing = process.env.NEXT_PUBLIC_SHOW_PRICING === 'true';

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      {/* New Hero Section */}
      <HeroSection />

      {/* Selected Work */}
      <SelectedWork />

      {/* Services Section */}
      <div id="features" className="pt-20">
        <ExpertServices />
      </div>

      {/* How We Work */}
      <HowWeWork />

      {/* Pricing Section */}
      {showPricing && (
        <div id="pricing" className="bg-black">
          <PricingSection />
        </div>
      )}

      {/* What We Do Section */}
      <div id="what-we-do">
        <WhatWeDoSection />
      </div>

      {/* Process Section */}
      <div id="process" className="bg-black">
        <ProcessSection />
      </div>

      <FeaturedCaseStudies />

      {/* Faq Section */}
      <div id="faq" className="bg-black">
        <FaqSection />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
