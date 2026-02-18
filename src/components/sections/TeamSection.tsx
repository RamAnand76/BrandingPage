
"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Twitter } from "lucide-react";
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
    { name: "Ram", role: "Co-Founder", image: "/lovable-uploads/Ramanand.jpg" },
    { name: "Thejas", role: "Co-Founder", image: "/lovable-uploads/Thejas.jpg" },
    { name: "Jithu Francis", role: "Co-Founder", image: "/lovable-uploads/Jithu.png" },
    { name: "Kesavadas", role: "Co-Founder", image: "https://avatars.githubusercontent.com/u/11832316?v=4" },
    { name: "Kiran Rajeev", role: "Co-Founder", image: "/lovable-uploads/Kiran.jpg" },
    { name: "B. VishnuNarayanan", role: "Co-Founder", image: "/lovable-uploads/Vishnu.jpg" },
    { name: "Arjun Kumar VS", role: "Co-Founder", image: "/lovable-uploads/Arjun.jpg" },
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
                <div className="h-full py-4">
                  <MagicCard className="h-full w-full cursor-pointer group overflow-visible" gradientColor="hsl(var(--primary))">
                    <div className="relative rounded-2xl p-6 flex flex-col items-center text-center bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 h-full overflow-hidden hover:bg-[#0A0A0A]/60 transition-all duration-500 group-hover:translate-y-[-5px]">
                      <StripedPattern className="absolute inset-0 w-full h-full object-cover z-0 opacity-[0.03] stroke-white/20" />

                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Avatar className="w-28 h-28 border-2 border-white/10 relative z-10 group-hover:border-primary/50 transition-colors duration-300">
                          <AvatarImage src={member.image} className="object-cover" />
                          <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">{member.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                        <p className="text-sm text-gray-400 font-medium mb-4">{member.role}</p>

                        <div className="flex gap-3 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors cursor-pointer">
                            <Linkedin className="w-4 h-4" />
                          </div>
                          <div className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-colors cursor-pointer">
                            <Twitter className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </MagicCard>
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
