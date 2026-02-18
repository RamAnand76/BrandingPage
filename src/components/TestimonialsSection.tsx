
"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";
import { MessageSquareHeart } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "RE:INVENT's AI development expertise helped us transform our business processes. Their custom solutions delivered exactly what we needed with excellent performance."
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The web application RE:INVENT built for us exceeded expectations. Their React.js expertise and attention to detail made our project a huge success."
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Outstanding mobile app development with Flutter. The team's professionalism and timely delivery made working with RE:INVENT a pleasure."
  },
  {
    name: "Emily Foster",
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "RE:INVENT's UI/UX design transformed our user experience completely. The designs are beautiful, intuitive, and conversion rates have improved significantly."
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
    content: "Working with RE:INVENT on our AI integration project was fantastic. They delivered sophisticated GenAI solutions that revolutionized our workflow."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-black overflow-x-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
            <MessageSquareHeart className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">Client Love</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join forward-thinking companies who trust RE:INVENT for digital transformation.
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[80vw] max-w-sm shrink-0 bg-[#0A0A0A]/60 backdrop-blur-xl border-white/5 hover:border-white/10 hover:bg-[#0A0A0A]/80 transition-all duration-300 p-8 md:w-[400px] rounded-2xl group">
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
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-6 ml-6">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[80vw] max-w-sm shrink-0 bg-[#0A0A0A]/60 backdrop-blur-xl border-white/5 hover:border-white/10 hover:bg-[#0A0A0A]/80 transition-all duration-300 p-8 md:w-[400px] rounded-2xl group">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
