
"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MagicCard } from "@/components/magicui/magic-card";
import { StripedPattern } from "@/components/ui/striped-pattern";

const TeamSection = () => {
  const team = [
    { name: "Ram", role: "Co-Founder", image: "/lovable-uploads/Ramanand.jpg", linkedin: "https://www.linkedin.com/in/ramanand-r-53919821b/" },
    { name: "Thejas", role: "Co-Founder", image: "/lovable-uploads/Thejas.jpg", linkedin: "https://www.linkedin.com/in/thejas-somarajan/" },
    { name: "Jithu Francis", role: "Co-Founder", image: "/lovable-uploads/Jithu.png", linkedin: "https://www.linkedin.com/in/jithu-francis-958aa81a0/" },
    { name: "Kesavadas", role: "Co-Founder", image: "/lovable-uploads/Kesavadas.jpeg", linkedin: "https://www.linkedin.com/in/kesavadas3/" },
    { name: "Kiran Rajeev", role: "Co-Founder", image: "/lovable-uploads/Kiran.jpg", linkedin: "#" },
    { name: "B. VishnuNarayanan", role: "Co-Founder", image: "/lovable-uploads/Vishnu.jpg", linkedin: "https://www.linkedin.com/in/vishnu-narayanan-b-643aa7202/" },
    { name: "Arjun Kumar VS", role: "Co-Founder", image: "/lovable-uploads/Arjun.jpg", linkedin: "https://www.linkedin.com/in/arjun-kumar-v-s/" },
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

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
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Our Squad</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Meet the <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The innovative minds behind RE:INVENT&apos;s digital solutions.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {team.map((member, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="h-full py-4 select-none">
                  {/* Card Container - mimic the reference image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-[#050505] border border-white/5 group transition-all duration-300 hover:border-primary/20">

                    {/* Background Gradient - Green glow from bottom left */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-60" />

                    {/* Content Container */}
                    <div className="relative h-full w-full p-6 flex flex-col items-center justify-center">

                      {/* Avatar Layer */}
                      <div className="relative mb-8">
                        {/* Glow behind avatar */}
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110 opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

                        <Avatar className="w-28 h-28 md:w-32 md:h-32 rounded-full border border-white/5 shadow-2xl grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500">
                          <AvatarImage src={member.image} className="object-cover" />
                          <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>

                    </div>

                    {/* Bottom Info Bar */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-white leading-tight mb-1">{member.name}</h3>
                        <p className="text-sm text-gray-500 font-medium">{member.role}</p>
                      </div>

                      {/* LinkedIn Icon */}
                      <Link href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                        <div className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition-colors backdrop-blur-sm border border-white/5 cursor-pointer">
                          <Linkedin className="w-4 h-4" />
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 lg:-left-12 bg-black/50 border-white/10 hover:bg-black/80" />
          <CarouselNext className="-right-4 lg:-right-12 bg-black/50 border-white/10 hover:bg-black/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
