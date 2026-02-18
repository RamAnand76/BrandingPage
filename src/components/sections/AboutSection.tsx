"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import CardSpotlightDemo from "@/components/card-spotlight-demo";
import TechnologyCards from "@/components/sections/TechnologyCards";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col items-center gap-20 md:gap-28"
        >
          {/* About Re-Invent Block */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center w-full max-w-4xl">
            {/* Section pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-gray-300">Who We Are</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
              About <span className="text-gradient">Re-Invent</span>
            </h2>
            <p className="text-gray-400 text-center text-lg max-w-2xl leading-relaxed">
              A hybrid of innovation — combining expert service delivery with product-driven solutions.
            </p>

            {/* CardSpotlight with enhanced wrapper */}
            <motion.div
              variants={itemVariants}
              className="w-full mt-4 relative group"
            >
              {/* Hover glow behind card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <CardSpotlightDemo />
              </div>
            </motion.div>
          </motion.div>

          {/* Technologies Block */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6 items-center w-full">
            {/* Section pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass"
            >
              <span className="text-sm font-medium text-gray-300">⚡ Our Stack</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
              Our <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-gray-400 text-center text-lg max-w-2xl leading-relaxed mb-4">
              We leverage the most powerful tools and frameworks to deliver exceptional results.
            </p>

            <TechnologyCards />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
