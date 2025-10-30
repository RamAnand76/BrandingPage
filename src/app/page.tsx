
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { FeaturesSection } from "@/components/features/FeaturesSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import WorksSection from "@/components/sections/WorksSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import placeholderImages from "@/app/lib/placeholder-images.json";
import GradientBlinds from "@/components/ui/GradientBlinds";

const Index = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      <ContactModal isOpen={isContactModalOpen} onOpenChange={setContactModalOpen} />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 flex items-center justify-center text-center min-h-screen overflow-hidden"
      >
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GradientBlinds
            gradientColors={['#FF9FFC', '#5227FF']}
            mixBlendMode="lighten"
          />
        </div>
        
        {/* Content Layer */}
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight text-center">
            <span className="text-gray-200">
              <TextGenerateEffect words="Expert Services, Delivered" />
            </span>
            <br />
            <span className="text-white font-medium">
              <AuroraText><TextGenerateEffect words="Transforming ideas into reality" /></AuroraText>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-center"
          >
            From stunning UI/UX to powerful AI and flawless apps, we build the digital solutions of tomorrow.{" "}
            <span className="text-white">Let&apos;s create something amazing together.</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link href="#features" className="w-full sm:w-auto">
                <RainbowButton variant="outline" className="w-full">Explore Our Services</RainbowButton>
            </Link>
            <Link href="/products" className="w-full sm:w-auto">
                <ShinyButton className="w-full text-white">
                  Discover Our Products
                  <ArrowRight className="w-4 h-4" />
                </ShinyButton>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl -mt-20 md:-mt-32 px-4"
        >
          <div className="glass rounded-xl overflow-hidden">
            <Image
              src={placeholderImages.hero.src}
              alt={placeholderImages.hero.alt}
              width={1200}
              height={675}
              className="w-full h-auto"
              data-ai-hint={placeholderImages.hero["data-ai-hint"]}
              priority
            />
          </div>
        </motion.div>

      {/* Logo Carousel */}
      {/* <LogoCarousel /> */}

      {/* Services Section */}
      <div id="features" className="bg-black pt-20">
        <FeaturesSection />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Team Section */}
      <div id="team" className="bg-black">
        <TeamSection />
      </div>

      {/* Works Section */}
      <div id="works" className="bg-black">
        <WorksSection />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-black">
        <PricingSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-black">
        <TestimonialsSection />
      </div>

      {/* CTA Section */}
      <section id="contact" className="container px-4 py-10 md:py-20 relative bg-black">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${placeholderImages.cta.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-ai-hint={placeholderImages.cta["data-ai-hint"]}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Ready to transform your ideas?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
            Join hundreds of businesses who have already discovered the power of our digital solutions.
          </p>
          <Button size="lg" className="button-gradient" onClick={() => setContactModalOpen(true)}>
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
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
