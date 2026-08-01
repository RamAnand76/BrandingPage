"use client";

import { motion } from "framer-motion";
import { ArrowDown, Quote, Star, Award, Users, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { MagicCard } from "@/components/magicui/magic-card";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-6 md:px-12 mx-auto max-w-[1240px]">

        {/* 1. Header Area: Heading Left, Text Right */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
              The Standard is Broken. <br /> We <span className="text-gray-500">Rebuilt It.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xs md:text-right"
          >
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Most agencies sell hours; we deliver market dominance. Rhevez was founded on a simple truth: premium engineering and world-class design must live under one roof.
            </p>
          </motion.div>
        </div>

        {/* 2. Banner Image with Floating Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden mb-16 group"
        >
          <Image
            src="/lovable-uploads/About-us.png"
            alt="About Us"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Floating Arrow Button */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
            <div className="h-16 w-16 md:h-20 md:w-20 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 animate-bounce-slow">
              <ArrowDown className="text-black w-8 h-8" />
            </div>
          </div>
        </motion.div>

        {/* 3. Content Grid: Text Left, Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column: Quote + Text + Small Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <Quote className="w-10 h-10 text-gray-600 fill-gray-600/20" />

            <h3 className="text-2xl md:text-3xl font-light text-gray-200 leading-snug">
              In a world flooded with generic software and AI hype, execution is the only differentiator.
            </h3>

            <p className="text-gray-400 leading-relaxed">
              We eliminate communication layers, bloated timelines, and generic code. By partnering directly with founders and enterprise leaders, we construct high-speed, design-first digital products that command market attention.
            </p>

            {/* Small Image */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mt-4 grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src="/lovable-uploads/Web-dev.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right Column: Featured Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-full w-full bg-[#1A1A1A] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border border-white/5">
              {/* Background Gradient for Card */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex justify-end mb-12">

              </div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light mb-8">
                  We believe in the power of collaboration and creativity. By partnering closely with our clients, we gain a deep understanding of their unique needs and goals, allowing us to deliver customized solutions that truly make a difference.
                </p>
                <p className="text-sm text-gray-500">
                  By staying ahead of the curve and embracing the latest trends and technologies, we ensure that we provide cutting-edge solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-8 md:px-12 mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:divide-x md:divide-white/10">
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#22c55e] mb-2">10+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">Projects Completed</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#22c55e] mb-2">3+</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">Satisfied Clients</span>
            </div>
          </div>
        </motion.div>

        {/* 5. Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative h-full min-h-[300px] bg-gradient-to-br from-[#061F0E] via-[#020C05] to-black text-white border border-[#22c55e]/25 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden"
          >
            <div>
              <h3 className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#22c55e] mb-6">VISION</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                To define the gold standard of product execution—where advanced technology meets luxury brand design.
              </p>
            </div>
            {/* Icon Notch Top Right */}
            <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-md border-l border-b border-white/10 p-4 rounded-bl-[2rem]">
              <Star className="w-6 h-6 text-primary" />
            </div>
            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#22c55e]/5 rounded-tl-full group-hover:scale-110 transition-transform duration-500" />
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative h-full min-h-[300px] bg-gradient-to-br from-[#0D0B21] via-[#05040d] to-black border border-indigo-500/25 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden text-white"
          >
            <div>
              <h3 className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-[#6366f1] mb-6">MISSION</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                Equipping hyper-growth teams with premium digital systems, bespoke AI agents, and identity frameworks that accelerate valuation.
              </p>
            </div>
            {/* Icon Notch Top Right */}
            <div className="absolute top-0 right-0 bg-black/60 backdrop-blur-md border-l border-b border-white/10 p-4 rounded-bl-[2rem]">
              <Award className="w-6 h-6 text-indigo-400" />
            </div>
            {/* Decorative */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-tl-full group-hover:scale-110 transition-transform duration-500" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
