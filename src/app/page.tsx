"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import TechStackSection from "@/components/sections/TechStackSection";
import WorksSection from "@/components/sections/WorksSection";
import { ExpertServices } from "@/components/sections/ExpertServices";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactModal } from "@/components/ContactModal";
import { TechScroll } from "@/components/TechScroll";
import { SparklesCore } from "@/components/ui/sparkles";
import { PricingSection } from "@/components/pricing/PricingSection";

const Index = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const showPricing = process.env.NEXT_PUBLIC_SHOW_PRICING === 'true';
  const showWorks = process.env.NEXT_PUBLIC_SHOW_WORKS === 'true';

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <ContactModal isOpen={isContactModalOpen} onOpenChange={setContactModalOpen} />

      {/* New Hero Section */}
      <HeroSection setContactModalOpen={setContactModalOpen} />

      {/* Services Section */}
      <div id="features" className="pt-20">
        <ExpertServices />
      </div>

      {/* About Section - Moved to /about */}
      {/* <AboutSection /> */}

      {/* Pricing Section */}
      {showPricing && (
        <div id="pricing" className="bg-black">
          <PricingSection />
        </div>
      )}

      {/* Tech Stack Section */}
      <div id="tech-stack" className="bg-[#0a0a14]">
        <TechScroll />
      </div>

      {/* Works Section */}
      {/* Works Section */}
      <div id="works" className="bg-black">
        <WorksSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section Removed - Moved to Footer */}


      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
