"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who owns the intellectual property and code?",
    answer: "You own 100% of the intellectual property and code. Upon project completion and final payment, the complete git repository, custom designs, database schemas, and configuration credentials are fully handed over to your team with no recurring licensing fees."
  },
  {
    question: "How do you optimize LLM API costs for production apps?",
    answer: "We employ advanced engineering practices to keep model costs sustainable. This includes: (1) Semantic Caching to serve repeated queries without hit costs, (2) Intelligent Model Routing to direct simple requests to lighter models (e.g. GPT-4o-mini, Claude Haiku) and reserve advanced models for complex tasks, and (3) Prompt Compression to reduce token overhead."
  },
  {
    question: "Do you provide post-launch support and model updates?",
    answer: "Yes, we offer SLA-backed monthly retainers. Support packages cover server maintenance, security updates, feature additions, and prompt fine-tuning as LLM models upgrade, ensuring your system remains state-of-the-art."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Depending on scope, custom MVP projects take between 4 to 8 weeks. Enterprise software or complex integrations typically span 8 to 16 weeks. We work in highly transparent 2-week agile sprints, providing live staging site updates so you can test features in real-time."
  }
];

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-[11px] font-medium text-indigo-300">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white/95"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-xs sm:text-sm md:text-base max-w-lg mt-3 font-light leading-relaxed"
          >
            Addressing technical anxieties, IP rights, and operational workflow upfront.
          </motion.p>
        </div>

        {/* FAQs Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#090909] border border-white/[0.04] rounded-2xl overflow-hidden transition-colors hover:border-white/[0.08]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center text-left p-6 gap-4"
                >
                  <span className="text-base sm:text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="shrink-0 w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-neutral-400"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-light border-t border-white/[0.02] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
