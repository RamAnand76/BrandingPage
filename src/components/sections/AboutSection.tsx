"use client";

import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";

// The top of the About page (hero, statement, why us, stats) now lives in AboutHero.
// This section keeps the Vision and Mission cards unchanged.
const AboutSection = () => {
  return (
    <section id="about" className="relative pb-20 bg-black overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto max-w-[1240px]">
        {/* Vision & Mission Cards */}
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
