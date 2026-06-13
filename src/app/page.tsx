"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WorksSection from "@/components/sections/WorksSection";
import { ExpertServices } from "@/components/sections/ExpertServices";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FaqSection } from "@/components/sections/FaqSection";

const Index = () => {
  const showPricing = process.env.NEXT_PUBLIC_SHOW_PRICING === 'true';

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      {/* New Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <div id="features" className="pt-20">
        <ExpertServices />
      </div>

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

      {/* Works Section */}
      <div id="works" className="bg-black">
        <WorksSection />
      </div>

      {/* Process Section */}
      <div id="process" className="bg-black">
        <ProcessSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

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
