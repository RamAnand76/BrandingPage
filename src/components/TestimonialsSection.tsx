
"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { MessageSquareHeart } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Rhevez's AI development expertise helped us transform our business processes. Their custom solutions delivered exactly what we needed with excellent performance."
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The web application Rhevez built for us exceeded expectations. Their React.js expertise and attention to detail made our project a huge success."
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Outstanding mobile app development with Flutter. The team's professionalism and timely delivery made working with Rhevez a pleasure."
  },
  {
    name: "Emily Foster",
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Rhevez's UI/UX design transformed our user experience completely. The designs are beautiful, intuitive, and conversion rates have improved significantly."
  },
  {
    name: "David Kim",
    role: "Engineering Lead",
    image: "https://avatars.githubusercontent.com/u/5678901?v=4",
    content: "Their backend development using Django REST framework is top-notch. Scalable, secure, and well-documented - exactly what our enterprise needed."
  },
  {
    name: "Jessica Wright",
    role: "Innovation Director",
    image: "https://avatars.githubusercontent.com/u/6789012?v=4",
    content: "Working with Rhevez on our AI integration project was fantastic. They delivered sophisticated GenAI solutions that revolutionized our workflow."
  }
];

const TestimonialsSection = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Header 3D rotation entrance
    gsap.from(".testimonial-header", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      rotationX: -45,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Cards staggered 3D skew
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 80%",
      },
      y: 100,
      rotationZ: 5,
      rotationX: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-black overflow-x-hidden relative" style={{ perspective: 1000 }}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <div className="testimonial-header text-center mb-16 md:mb-20 flex flex-col items-center" style={{ transformStyle: "preserve-3d" }}>
          {/* Section pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <MessageSquareHeart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Client Love</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join forward-thinking companies who trust Rhevez for digital transformation.
          </p>
        </div>

        <div className="testimonial-grid relative flex flex-col antialiased">
          <div className="relative flex flex-col md:flex-row md:overflow-hidden py-4 gap-6 md:gap-0" style={{ transformStyle: "preserve-3d" }}>

            <div className="flex flex-col md:flex-row md:animate-marquee md:min-w-full shrink-0 items-stretch gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={`${index}-1`} className="testimonial-card">
                  <Card className="w-full md:w-[400px] md:max-w-sm shrink-0 bg-[#0A0A0A]/60 backdrop-blur-xl border-white/5 hover:border-white/10 hover:bg-[#0A0A0A]/80 transition-all duration-300 p-8 rounded-2xl group h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Avatar className="h-12 w-12 border border-white/10 relative z-10">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="font-bold text-white/90 group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-sm text-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed italic relative">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </Card>
                </div>
              ))}
            </div>

            {/* Duplicate set for infinite marquee (Desktop only) */}
            <div className="hidden md:flex flex-row md:animate-marquee min-w-full shrink-0 items-stretch gap-6 md:ml-6">
              {testimonials.map((testimonial, index) => (
                <div key={`${index}-2`} className="testimonial-card">
                  <Card className="w-full md:w-[400px] md:max-w-sm shrink-0 bg-[#0A0A0A]/60 backdrop-blur-xl border-white/5 hover:border-white/10 hover:bg-[#0A0A0A]/80 transition-all duration-300 p-8 rounded-2xl group h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Avatar className="h-12 w-12 border border-white/10 relative z-10">
                          <AvatarImage src={testimonial.image} />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="font-bold text-white/90 group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
                        <p className="text-sm text-white/60">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed italic relative">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </Card>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
