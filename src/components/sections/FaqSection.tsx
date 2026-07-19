"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "react-serif"; // wait, the original used motion from "framer-motion"
import { motion as motionBase, AnimatePresence as AnimatePresenceBase } from "framer-motion";
import { Plus, Minus } from "lucide-react";

// Categorized FAQs Data
const faqCategories = [
  {
    id: "general",
    name: "General Report",
    items: [
      {
        question: "Who owns the intellectual property and code?",
        answer: "You own 100% of the intellectual property and code. Upon project completion and final payment, the complete git repository, custom designs, database schemas, and configuration credentials are fully handed over to your team with no recurring licensing fees."
      },
      {
        question: "What is your typical project timeline?",
        answer: "Depending on scope, custom MVP projects take between 4 to 8 weeks. Enterprise software or complex integrations typically span 8 to 16 weeks. We work in highly transparent 2-week agile sprints, providing live staging site updates so you can test features in real-time."
      },
      {
        question: "How do we get started with your team?",
        answer: "Getting started is simple. Contact us to schedule a discovery call, after which we will provide a detailed scope of work, technical architecture plan, and cost estimations. Once agreed, we immediately begin sprint kickoff."
      }
    ]
  },
  {
    id: "service",
    name: "our service",
    items: [
      {
        question: "How do you optimize LLM API costs for production apps?",
        answer: "We employ advanced engineering practices to keep model costs sustainable. This includes: (1) Semantic Caching to serve repeated queries without hit costs, (2) Intelligent Model Routing to direct simple requests to lighter models (e.g. GPT-4o-mini, Claude Haiku) and reserve advanced models for complex tasks, and (3) Prompt Compression to reduce token overhead."
      },
      {
        question: "What tech stacks do you specialize in?",
        answer: "We specialize in modern, highly scalable technologies. Our core stack includes Next.js, React, Node.js, Python (FastAPI/Django), PostgreSQL, Redis, Docker, and various vector databases like Pinecone, pgvector, or Qdrant for AI applications."
      },
      {
        question: "Do you provide custom design services as well?",
        answer: "Yes! Every project includes custom high-fidelity UI/UX design. We design custom layouts, modern typography systems, and responsive interfaces tailored exactly to your brand before writing any backend or frontend code."
      }
    ]
  },
  {
    id: "support",
    name: "Support",
    items: [
      {
        question: "Do you provide post-launch support and model updates?",
        answer: "Yes, we offer SLA-backed monthly retainers. Support packages cover server maintenance, security updates, feature additions, and prompt fine-tuning as LLM models upgrade, ensuring your system remains state-of-the-art."
      },
      {
        question: "How can we report bugs or request emergency fixes?",
        answer: "Clients on our support retainer gain access to a dedicated Slack channel and private ticketing dashboard. Critical production issues are addressed within a guaranteed SLA window, typically under 2 hours."
      }
    ]
  },
  {
    id: "privacy",
    name: "Privacy/Policy",
    items: [
      {
        question: "How do you handle sensitive user data in LLM integrations?",
        answer: "We strictly enforce privacy-safe data flows. This includes stripping personally identifiable information (PII) before model submission, utilizing zero-data-retention APIs where possible, and setting up secure VPC proxy layers for internal AI systems."
      },
      {
        question: "Is our source code and idea kept confidential?",
        answer: "Absolutely. We sign a mutual Non-Disclosure Agreement (NDA) before any project kickoff or sharing of sensitive intellectual designs. Your codebase remains private and is never used to train external models."
      }
    ]
  }
];

export const FaqSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const activeCategory = faqCategories.find((cat) => cat.id === activeTab) || faqCategories[0];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setOpenIdx(null); // Reset open accordion index when switching categories
  };

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden font-sans">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#3275F8]/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motionBase.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-sm tracking-wide mb-2 block font-normal"
          >
            Most people ask about
          </motionBase.span>
          <motionBase.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-white/95"
          >
            Frequently asked questions
          </motionBase.h2>
        </div>

        {/* Core Layout: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Category Sidebar */}
          <div className="md:col-span-4 flex flex-col w-full">
            {/* Mobile category scroller */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 gap-2 md:gap-0 border-b border-white/[0.04] md:border-b-0">
              {faqCategories.map((category) => {
                const isActive = activeTab === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleTabChange(category.id)}
                    className={`whitespace-nowrap px-6 py-4 rounded-xl text-left text-sm md:text-base transition-all duration-300 border ${
                      isActive
                        ? "bg-[#3275F8]/10 border-[#3275F8]/30 text-[#3275F8] font-medium shadow-[0_4px_20px_rgba(50,117,248,0.1)]"
                        : "bg-transparent border-transparent text-neutral-400 hover:text-white/80 hover:bg-white/[0.01]"
                    } md:mb-2`}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Accordions list */}
          <div className="md:col-span-8 w-full">
            <div className="flex flex-col gap-4">
              <AnimatePresenceBase mode="wait">
                <motionBase.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-4"
                >
                  {activeCategory.items.map((item, idx) => {
                    const isOpen = openIdx === idx;
                    return (
                      <div
                        key={idx}
                        className="bg-neutral-900/40 border border-white/[0.05] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/[0.1] hover:bg-neutral-900/60"
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex justify-between items-center text-left p-6 gap-6"
                        >
                          <span className={`text-base md:text-lg font-medium transition-colors ${
                            isOpen ? "text-[#3275F8]" : "text-white/90"
                          }`}>
                            {item.question}
                          </span>
                          <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen ? "bg-[#3275F8]/10 text-[#3275F8]" : "bg-white/[0.03] text-neutral-400"
                          }`}>
                            {isOpen ? (
                              <Minus className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </div>
                        </button>

                        <AnimatePresenceBase initial={false}>
                          {isOpen && (
                            <motionBase.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed font-light border-t border-white/[0.02] pt-4">
                                {item.answer}
                              </div>
                            </motionBase.div>
                          )}
                        </AnimatePresenceBase>
                      </div>
                    );
                  })}
                </motionBase.div>
              </AnimatePresenceBase>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
