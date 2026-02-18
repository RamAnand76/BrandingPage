
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, FolderGit2 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import placeholderImages from "@/app/lib/placeholder-images.json";
import { MagicCard } from "@/components/magicui/magic-card";
import { StripedPattern } from "@/components/ui/striped-pattern";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const WorksSection = () => {
  const works = [
    {
      title: "V0 Style Sandpack Component",
      description: "A React code editor replicating v0.dev's aesthetic, built on Sandpack for a professional, dark-themed coding experience with live preview.",
      images: [
        "/lovable-uploads/Code-editor compoennet-2.png",
        "/lovable-uploads/code-editor-component.png",
      ],
      alt: "V0 Style Sandpack Component",
      technologies: ["React", "Sandpack", "TypeScript", "Tailwind CSS"],
      isOpenSource: true,
      dataAiHint: "code editor",
      link: "https://v0-primitive-react-sandpack-compone.vercel.app/",
    },
    {
      title: "ScriptForge",
      description: "An intelligent, culturally adaptive screenplay creation ecosystem. ScriptForge uses AI to extract key events, manage scripts, and offers worldbuilding tools.",
      images: ["/lovable-uploads/script-forge.png"],
      dataAiHint: "screenwriting application",
      alt: "ScriptForge Application Interface",
      technologies: ["Next.JS", "Supabase", "GenAI kit"],
      link: "https://script-forge-two.vercel.app/",
    },
    {
      title: "Laundry Management Platform",
      description: "A sophisticated multi-tenant backend system for laundry services, featuring role-based access control and a complete ecosystem for operations.",
      images: [placeholderImages.works[2].src],
      dataAiHint: "backend dashboard",
      alt: "Laundry Management Platform Backend",
      technologies: ["Django", "Firebase", "Python", "PostgreSQL"],
      link: "#contact",
    },
    {
      title: "Mobile First Billing Software",
      description: "GoBright-Billing — Mobile-first billing & invoicing for SMBs with secure phone-OTP auth, live bill preview, and automated WhatsApp delivery.",
      images: ["/lovable-uploads/billin-software.png"],
      alt: "Mobile First Billing Software",
      technologies: ["Go", "React", "Flutter", "PostgreSQL"],
      isOpenSource: false,
      dataAiHint: "mobile billing application",
      link: "#contact",
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          {/* Section pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Selected <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A snapshot of what we build. From complex backends to stunning user interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {works.map((work, idx) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex"
            >
              <MagicCard className="h-full w-full cursor-pointer group" gradientColor="hsl(var(--primary))">
                <div className="relative rounded-2xl p-6 flex flex-col bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 h-full overflow-hidden hover:bg-[#0A0A0A]/60 transition-colors duration-500">

                  <StripedPattern className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.03] stroke-white/20" />

                  {work.isOpenSource && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge variant="default" className="text-[10px] uppercase tracking-wider bg-primary/20 text-primary border-primary/20 backdrop-blur-sm hover:bg-primary/30">
                        Open Source
                      </Badge>
                    </div>
                  )}

                  <div className="relative z-10 flex-grow flex flex-col">
                    <div className="relative">
                      <div className="rounded-xl overflow-hidden mb-6 border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                        {work.images.length > 1 ? (
                          <Carousel className="w-full">
                            <CarouselContent>
                              {work.images.map((imgSrc, imgIdx) => (
                                <CarouselItem key={imgIdx}>
                                  <Image
                                    src={imgSrc}
                                    alt={`${work.alt} - ${imgIdx + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover aspect-video"
                                    data-ai-hint={work.dataAiHint}
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-black/50 border-white/10 hover:bg-black/80" />
                            <CarouselNext className="right-2 bg-black/50 border-white/10 hover:bg-black/80" />
                          </Carousel>
                        ) : (
                          <Image
                            src={Array.isArray(work.images) ? work.images[0] : work.images}
                            alt={work.alt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover aspect-video transform"
                            data-ai-hint={work.dataAiHint}
                          />
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary transition-colors">{work.title}</h3>
                      </div>
                      <p className="text-gray-400 flex-1 mb-6 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">{work.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {work.technologies.slice(0, 4).map((tech) => (
                          <div key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400">
                            {tech}
                          </div>
                        ))}
                        {work.technologies.length > 4 && (
                          <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-400">
                            +{work.technologies.length - 4}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {work.link !== "#contact" ? (
                    <Link href={work.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-auto text-sm font-medium text-gray-300 hover:text-white transition-colors relative z-10 group/link">
                      View Project <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 mt-auto text-sm font-medium text-gray-500 cursor-not-allowed">
                      Internal Project
                    </span>
                  )}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
