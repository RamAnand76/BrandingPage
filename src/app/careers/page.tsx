"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { openPositions } from "@/lib/careersData";

export default function CareersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navigation />

      {/* ── HERO BANNER SECTION ── */}
      <div className="relative w-full h-[60vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/careers-hero-bg.png"
            alt="Swirling energy light paths in blue and green representing team creativity"
            fill
            priority
            className="object-cover object-center opacity-85 scale-[1.02]"
            sizes="100vw"
          />
          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
          <div className="absolute inset-0 bg-radial-gradient" />
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 md:mt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white select-none leading-none"
          >
            Join Our Team
          </motion.h1>
        </div>
      </div>

      {/* ── BODY SECTIONS ── */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16 pb-4 relative z-10"
      >
        {/* What We Do */}
        <motion.section variants={itemVariants} className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">What we do</h2>
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
            We build state-of-the-art software systems, agentic AI engines, and premium brand identities.
            We make scaling simple. Our team builds customized frameworks and interfaces that enable
            enterprises to communicate seamlessly, optimize operations, and unlock scalable growth.
          </p>
        </motion.section>

        {/* Why We Do It */}
        <motion.section variants={itemVariants} className="text-center mb-28 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 tracking-tight">Why we do it</h2>
          <p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed">
            We want to see businesses expand their limits and scale to millions of users.
            Monolithic software doesn&apos;t keep pace with shifting markets. We craft design-driven,
            luxurious digital solutions that are easy to maintain, highly performant, and delightful to experience.
          </p>
        </motion.section>

        <hr className="border-white/10 mb-24" />

        {/* Open Positions Accordion */}
        <motion.section variants={itemVariants} className="mb-24">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-10">Open Positions</h2>
          
          <div className="flex flex-col border-t border-white/10">
            {openPositions.map((pos) => (
              <div key={pos.id} className="border-b border-white/10">
                <Link
                  href={`/careers/${pos.slug}`}
                  className="w-full py-8 flex justify-between items-center text-left hover:text-neutral-300 transition-colors group focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <span className="text-lg md:text-xl font-medium text-white group-hover:text-neutral-300 transition-colors">
                      {pos.title}
                    </span>
                    <span className="text-xs md:text-xs text-neutral-500 font-normal tracking-wider uppercase px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">
                      {pos.location}
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section variants={itemVariants} className="text-center mb-8 max-w-lg mx-auto">
          <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-4">
            If you&apos;re interested, please reach out at{" "}
            <a href="mailto:career@rhevez.com" className="text-blue-400 hover:underline">
              career@rhevez.com
            </a>.
          </p>
          <p className="text-neutral-500 font-light text-xs md:text-sm">
            We are well funded, value high autonomy, and compensate more than competitively.
          </p>
        </motion.section>

      </motion.div>

      {/* Standard Footer - Full Width */}
      <Footer />
    </div>
  );
}
