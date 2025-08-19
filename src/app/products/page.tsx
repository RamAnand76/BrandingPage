
"use client";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/sections/ProductsSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AuroraText } from "@/components/magicui/aurora-text";
import LogoCarousel from "@/components/LogoCarousel";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 text-center"
      >
        {/* Background */}
        <div 
          className="absolute inset-0 -z-10 bg-[#0A0A0A]"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass"
        >
          <span className="text-sm font-medium">
            <Command className="w-4 h-4 inline-block mr-2" />
            Product Innovation
          </span>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight text-center">
            <span className="text-gray-200">
              <TextGenerateEffect words="Building the Future, Today" />
            </span>
            <br />
            <span className="text-white font-medium">
              <AuroraText><TextGenerateEffect words="Innovative Product Suite" /></AuroraText>
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto text-center"
          >
            We don&apos;t just build software, we engineer cutting-edge products designed to solve real-world problems and drive growth.
          </motion.p>
        </div>
      </motion.section>

      {/* Products Section */}
      <ProductsSection />
      
      <LogoCarousel />

      {/* Footer */}
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
