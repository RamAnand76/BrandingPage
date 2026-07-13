
"use client";

import { motion } from "framer-motion";
import { Users, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#0066FF]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
            Board Of Directors
          </h2>
        </div>

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
                <div className="h-full py-6 select-none relative px-2">
                  <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-2xl group bg-[#0A0A0A] border border-white/5">
                    
                    {/* Left vertical banner with curved top-left corner */}
                    <div className="absolute left-0 top-8 w-[38%] h-[82%] bg-[#0066FF] rounded-tl-[30px] z-0 overflow-hidden flex items-center justify-center">
                      {/* Vertical rotated text */}
                      <span 
                        className="text-3xl font-extrabold uppercase tracking-widest text-transparent select-none whitespace-nowrap opacity-25"
                        style={{ 
                          transform: 'rotate(-90deg)', 
                          WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.6)' 
                        }}
                      >
                        FOUNDERS
                      </span>
                    </div>

                    {/* Team Member Image */}
                    <div className="absolute top-2 right-0 w-[78%] h-[75%] z-10 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover object-top filter grayscale contrast-[1.15] group-hover:grayscale-0 transition-all duration-500" 
                      />
                    </div>
                    
                    {/* Bottom horizontal bar for Name & Role */}
                    <div className="absolute bottom-0 left-0 w-full h-[25%] bg-[#0066FF] z-20 px-5 py-4 flex flex-col justify-center text-left">
                      <h3 className="text-base font-bold text-white leading-tight mb-1">{member.name}</h3>
                      <p className="text-xs text-white/80 font-medium">Designation</p>
                      <p className="text-[10px] text-white/60 font-medium mt-0.5">{member.role}</p>
                      
                      {/* LinkedIn Link */}
                      {member.linkedin && member.linkedin !== "#" && (
                        <Link 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="absolute right-4 bottom-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>

                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 lg:-left-12 bg-black/50 border-white/10 hover:bg-black/80 text-white" />
          <CarouselNext className="-right-4 lg:-right-12 bg-black/50 border-white/10 hover:bg-black/80 text-white" />
        </Carousel>

        <div className="mt-16 text-center max-w-4xl mx-auto px-4">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Our board of directors brings together a diverse group of visionary leaders, tech pioneers, and strategic advisors. Committed to driving innovation and fostering sustainable growth, they guide Rhevez&apos;s mission to shape the future of digital solutions and empower businesses worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
