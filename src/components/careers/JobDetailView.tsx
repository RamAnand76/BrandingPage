"use client";

import React, { useState } from "react";
import { Position } from "@/lib/careersData";
import { Clock, MapPin, Paperclip, ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

interface JobDetailViewProps {
  job: Position;
}

export const JobDetailView = ({ job }: JobDetailViewProps) => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Validation Error",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate API upload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Application Submitted",
        description: `Thank you for applying, ${name}! We will review your resume shortly.`,
      });
    }, 1500);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-20 text-white relative z-10 font-sans">
      
      {/* ── JOB HEADER ── */}
      <div className="border-b border-white/10 pb-8 mb-12">
        <Link 
          href="/careers" 
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Careers
        </Link>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-white leading-tight">
          {job.title}
        </h1>
        <div className="flex flex-wrap items-center gap-6 text-neutral-400 text-sm md:text-base font-normal">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#3275F8]" />
            <span>{job.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#00FF66]" />
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      {/* ── TWO-COLUMN GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Details */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Job description</h3>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-light">
              {job.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Responsibilities</h3>
            <ul className="space-y-3 pl-5 list-disc text-neutral-400 text-sm md:text-base font-light">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="leading-relaxed">{resp}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Requirements</h3>
            <ul className="space-y-3 pl-5 list-disc text-neutral-400 text-sm md:text-base font-light">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="leading-relaxed">{req}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Application Form Box */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white">Apply to position</h3>
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Your name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none hover:border-white/20 focus:border-[#3275F8] transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none hover:border-white/20 focus:border-[#3275F8] transition-colors"
                    />
                  </div>

                  {/* Resume Upload Input */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-400 mb-2 font-medium">Resume</label>
                    <div className="relative w-full">
                      <input
                        required
                        id="resume-file"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume-file"
                        className="w-full flex items-center justify-between bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-400 hover:text-white cursor-pointer hover:border-white/20 transition-all"
                      >
                        <span className="truncate max-w-[200px]">
                          {fileName ? fileName : "Upload Resume (PDF, DOCX)"}
                        </span>
                        <Paperclip className="w-4 h-4 text-neutral-400 hover:text-[#3275F8] shrink-0" />
                      </label>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative flex items-center justify-center gap-2 py-4 rounded-xl text-black font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-[1.01] bg-gradient-to-r from-[#3275F8] to-[#00FF66] text-white hover:shadow-[0_0_20px_rgba(50,117,248,0.4)] disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Apply"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <CheckCircle2 className="w-16 h-16 text-[#00FF66] mb-4" />
                  <h4 className="text-xl font-bold mb-2">Application Submitted!</h4>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                    We have successfully received your resume. Our recruitment team will review it and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setName("");
                      setEmail("");
                      setFileName(null);
                    }}
                    className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Apply Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

    </div>
  );
};
