"use client";
import React from "react";
import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WorksSection from "@/components/sections/WorksSection";
import { ExpertServices } from "@/components/sections/ExpertServices";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechScroll } from "@/components/TechScroll";
import { PricingSection } from "@/components/pricing/PricingSection";

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

      {/* Tech Stack Section */}
      <div id="tech-stack" className="bg-black">
        <TechScroll />
      </div>

      {/* Works Section */}
      <div id="works" className="bg-black">
        <WorksSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
