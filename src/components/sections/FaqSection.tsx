"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

// Flat list of FAQs with category tags
const allFaqs = [
  {
    num: "01",
    category: "General",
    question: "Who owns the intellectual property and code?",
    answer: "You own 100% of the intellectual property and code. Upon project completion and final payment, the complete git repository, custom designs, database schemas, and configuration credentials are fully handed over to your team with no recurring licensing fees."
  },
  {
    num: "02",
    category: "General",
    question: "What is your typical project timeline?",
    answer: "Depending on scope, custom MVP projects take between 4 to 8 weeks. Enterprise software or complex integrations typically span 8 to 16 weeks. We work in highly transparent 2-week agile sprints, providing live staging site updates so you can test features in real-time."
  },
  {
    num: "03",
    category: "General",
    question: "How do we get started with your team?",
    answer: "Getting started is simple. Contact us to schedule a discovery call, after which we will provide a detailed scope of work, technical architecture plan, and cost estimations. Once agreed, we immediately begin sprint kickoff."
  },
  {
    num: "04",
    category: "Pricing",
    question: "How do you optimize LLM API costs for production apps?",
    answer: "We employ advanced engineering practices to keep model costs sustainable. This includes: (1) Semantic Caching to serve repeated queries without hit costs, (2) Intelligent Model Routing to direct simple requests to lighter models (e.g. GPT-4o-mini, Claude Haiku) and reserve advanced models for complex tasks, and (3) Prompt Compression to reduce token overhead."
  },
  {
    num: "05",
    category: "Pricing",
    question: "Do you offer SLA-backed monthly retainers?",
    answer: "Yes, we offer flexible SLA-backed monthly retainers tailored to your operational needs. These retainers cover server maintenance, security updates, minor feature additions, and continuous model prompt fine-tuning."
  },
  {
    num: "06",
    category: "Integrations",
    question: "What tech stacks do you specialize in?",
    answer: "We specialize in modern, highly scalable technologies. Our core stack includes Next.js, React, Node.js, Python (FastAPI/Django), PostgreSQL, Redis, Docker, and various vector databases like Pinecone, pgvector, or Qdrant for AI applications."
  },
  {
    num: "07",
    category: "Integrations",
    question: "Can you integrate with our existing CRM or ERP?",
    answer: "Absolutely. We have extensive experience building secure API layers and webhooks to integrate seamlessly with existing enterprise systems like Salesforce, HubSpot, SAP, and custom legacy databases."
  },
  {
    num: "08",
    category: "Support",
    question: "How can we report bugs or request emergency fixes?",
    answer: "Clients on our support retainer gain access to a dedicated Slack channel and private ticketing dashboard. Critical production issues are addressed within a guaranteed SLA window, typically under 2 hours."
  },
  {
    num: "09",
    category: "Support",
    question: "Do you provide post-launch support and model updates?",
    answer: "Yes. Support packages cover server maintenance, security updates, feature additions, and prompt fine-tuning as LLM models upgrade, ensuring your AI systems remain state-of-the-art without hallucination regressions."
  }
];

const categories = ["All", "General", "Pricing", "Integrations", "Support"];

export const FaqSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<string | null>(null);

  const toggleFaq = (num: string) => {
    setOpenIdx(openIdx === num ? null : num);
  };

  // Filter logic
  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-24 md:py-32 bg-black relative overflow-hidden font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3275F8]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-10 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-[44px] font-medium tracking-tight text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-base md:text-lg font-light"
          >
            Everything you need to know.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
          <input 
            type="text" 
            placeholder="Search questions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-white/30 focus:bg-white/[0.04] transition-all duration-300"
          />
        </motion.div>

        {/* Category Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex overflow-x-auto gap-3 pb-2 mb-10 no-scrollbar"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button 
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(null); // Reset open accordion on category change
                }}
                className={`px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
                    : 'bg-transparent text-neutral-400 border border-white/10 hover:text-white hover:border-white/30 hover:bg-white/[0.02]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === faq.num;
                return (
                  <motion.div
                    key={faq.num}
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, layout: { duration: 0.3 } }}
                    className="border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] transition-colors duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.num)}
                      className="w-full flex items-center justify-between text-left p-5 md:p-6 gap-4"
                    >
                      <div className="flex items-center gap-5 md:gap-8 flex-1 pr-4">
                        <span className="text-neutral-600 text-sm md:text-base shrink-0 select-none">
                          {faq.num}
                        </span>
                        <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? "text-white" : "text-white/80"}`}>
                          {faq.question}
                        </span>
                      </div>
                      
                      <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen 
                          ? "border-white/20 bg-white/10 text-white" 
                          : "border-white/10 bg-transparent text-neutral-400"
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-5 md:px-6 pb-6 pt-2 pl-[4.5rem] md:pl-[5.5rem] text-sm md:text-base text-neutral-400 leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
              >
                <Search className="w-8 h-8 text-neutral-600 mb-3" />
                <p className="text-neutral-400 font-medium mb-1">No questions found</p>
                <p className="text-neutral-500 text-sm font-light">Try adjusting your search or category filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Support Banner Footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-[1.5rem] flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-white font-medium text-lg mb-1 tracking-tight">Still have questions?</h4>
            <p className="text-neutral-400 text-sm md:text-base font-light">We're here to help.</p>
          </div>
          <Link 
            href="#contact" 
            className="w-full sm:w-auto px-7 py-3 bg-white text-black rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all duration-300 hover:scale-105"
          >
            Contact Support <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
