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
      <div id="tech-stack" className="bg-black">
        <TechStackSection />
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

      {/* CTA Section */}
      <section id="contact" className="container px-4 py-10 md:py-20 relative bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10 overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full bg-transparent z-20 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={100}
            className="w-full h-full absolute inset-0"
            particleColor="#FFFFFF"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center relative z-20">
            Ready to transform your ideas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center relative z-20">
            Join hundreds of businesses who have already discovered the power of our digital solutions.
          </p>
          <div className="relative z-20">
            <Button size="lg" className="button-gradient" onClick={() => setContactModalOpen(true)}>
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
