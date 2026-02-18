"use client";

import { motion } from "framer-motion";
import { Zap, Hourglass, Sparkles, ArrowRight, Check } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { StripedPattern } from "@/components/ui/striped-pattern";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const featureItems = [
  "AI-Powered Automation",
  "Real-time Analytics",
  "Custom Workflows",
  "Smart Integrations",
];

const comingSoonItems = [
  "Innovative Features",
  "Cutting-Edge Technology",
  "User-Centric Design",
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Our Products</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
            Innovative Solutions
            <br />
            <span className="text-gradient">Built for Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cutting-edge products designed to solve real-world problems and
            transform how businesses operate.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {/* Featured Product — FLO.io */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="group relative rounded-2xl overflow-hidden h-full">
              {/* Border beam effect */}
              <BorderBeam
                size={300}
                duration={12}
                borderWidth={1.5}
                colorFrom="hsl(142, 75%, 45%)"
                colorTo="hsl(142, 75%, 25%)"
              />

              <div className="relative rounded-2xl p-8 md:p-10 text-white h-full flex flex-col bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/[0.08] overflow-hidden transition-all duration-500 group-hover:border-primary/20 group-hover:bg-[#0A0A0A]">
                <StripedPattern className="absolute inset-0 w-full h-full z-0 opacity-[0.03] stroke-white/30" />

                {/* Hover glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">FLO.io</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-sm text-primary font-medium">In Development</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-8 flex-grow relative z-10 text-base leading-relaxed max-w-md">
                  An intelligent workflow automation platform that streamlines operations with AI-driven insights and real-time collaboration tools.
                </p>

                {/* Features */}
                <div className="space-y-3 relative z-10 mb-8">
                  {featureItems.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom tag */}
                <div className="relative z-10 pt-6 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Flagship Product</span>
                    <div className="flex items-center gap-1.5 text-xs text-primary/70">
                      <span>Coming Q3 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <MagicCard className="h-full" gradientColor="hsl(142, 75%, 45%)">
              <div className="group/soon relative rounded-2xl p-8 md:p-10 text-white h-full flex flex-col bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/[0.12]">
                <StripedPattern className="absolute inset-0 w-full h-full z-0 opacity-[0.02] stroke-white/20" />

                {/* Header */}
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-gray-400 group-hover/soon:text-gray-300 transition-colors duration-300">
                    <Hourglass className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-200">More Coming</h3>
                    <span className="text-sm text-gray-500 font-medium">Stay Tuned</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-500 mb-8 flex-grow relative z-10 text-base leading-relaxed">
                  We&apos;re crafting new, exciting products. Keep an eye on this space for future announcements.
                </p>

                {/* Features */}
                <div className="space-y-3 relative z-10 mb-8">
                  {comingSoonItems.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-white/10" />
                      <span className="text-sm text-gray-500">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative bottom gradient */}
                <div className="relative z-10 pt-6 border-t border-white/[0.04]">
                  <span className="text-xs text-gray-600 uppercase tracking-widest font-medium">Coming Soon</span>
                </div>
              </div>
            </MagicCard>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glass-hover text-sm text-gray-300 hover:text-white transition-colors group"
          >
            Interested in collaborating?
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;