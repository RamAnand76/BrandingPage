
"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsSection from "@/components/sections/ProductsSection";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { AuroraText } from "@/components/magicui/aurora-text";
import LogoCarousel from "@/components/LogoCarousel";
import { SparklesCore } from "@/components/ui/sparkles";
import GradientBlinds from "@/components/ui/GradientBlinds";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {/* Background Layer — Gradient Blinds */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GradientBlinds
            gradientColors={["#22c55e", "#5227FF"]}
            mixBlendMode="lighten"
          />
        </div>

        {/* Background Layer — Sparkles */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <SparklesCore
            background="transparent"
            minSize={0.3}
            maxSize={1}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Radial vignette mask */}
        <div className="absolute inset-0 z-[2] pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black_80%)]" />

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass"
          >
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">
              Product Innovation
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-5 tracking-tight text-center">
            <span className="text-gray-200">
              <TextGenerateEffect words="Building the Future, Today" />
            </span>
            <br />
            <span className="text-white font-medium">
              <AuroraText>
                <TextGenerateEffect words="Innovative Product Suite" />
              </AuroraText>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto text-center leading-relaxed"
          >
            We don&apos;t just build software — we engineer{" "}
            <span className="text-white font-medium">cutting-edge products</span>{" "}
            designed to solve real-world problems and drive growth.
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 mx-auto rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </motion.div>
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
