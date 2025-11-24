
"use client";
import { motion } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import WorksSection from "@/components/sections/WorksSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";
import { ContactModal } from "@/components/ContactModal";
import placeholderImages from "@/app/lib/placeholder-images.json";
import GradientBlinds from "@/components/ui/GradientBlinds";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { BarChart3, Bot, Smartphone, Globe, Palette, ArrowUpDown } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import { PricingSection } from "@/components/pricing/PricingSection";

const features = [
  {
    title: "Web Development",
    description: "Professional-grade web applications using React.js, Next.js with modern development practices.",
    icon: <Globe className="w-6 h-6" />,
    content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/lovable-uploads/Web-dev.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Web Development"
        />
      </div>
    )
  },
  {
    title: "Website Development",
    description: "Custom website design and development with responsive layouts and modern frameworks.",
    icon: <BarChart3 className="w-6 h-6" />,
     content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/lovable-uploads/website.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Website Development"
        />
      </div>
    ),
  },
  {
    title: "Branding",
    description: "Complete brand identity solutions including logo design, color schemes, and brand guidelines.",
    icon: <Palette className="w-6 h-6" />,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
      <Image
        src="/lovable-uploads/Branding.png"
        width={300}
        height={300}
        className="h-full w-full object-cover"
        alt="Website Development"
      />
    </div>
    ),
  },
  {
    title: "AI Agent Building",
    description: "Intelligent AI agents and chatbots powered by cutting-edge machine learning technologies.",
    icon: <Bot className="w-6 h-6" />,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
         <Image
          src="/lovable-uploads/AI.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="AI Agent Building"
        />
      </div>
    )
  },
  {
    title: "Mobile App Building",
    description: "Native and cross-platform mobile applications for iOS and Android using Flutter and React Native.",
    icon: <Smartphone className="w-6 h-6" />,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/lovable-uploads/MobileApp.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Mobile App Building"
        />
      </div>
    )
  },
];


const Index = () => {
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const showPricing = process.env.NEXT_PUBLIC_SHOW_PRICING === 'true';

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
              <TextGenerateEffect words="Re-Invent: Expert Services, Delivered" />
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
                <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10 hover:text-primary transition-all">Explore Our Services</Button>
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
      <div id="features" className="pt-20">
         <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">
            Expert Services
            <br />
            <span className="text-gradient font-medium">Features & Tools</span>
          </h2>
          <p className="text-lg text-gray-400">
            Experience professional-grade development services designed for businesses ready to transform digitally.
          </p>
        </div>
        <StickyScroll content={features} />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Pricing Section */}
      {showPricing && (
        <div id="pricing" className="bg-black">
          <PricingSection />
        </div>
      )}

      {/* Team Section */}
      <div id="team" className="bg-black">
        <TeamSection />
      </div>

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

    