
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareHeart } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const visibleItems = [];
  // Get 3 previous items
  for (let i = 3; i > 0; i--) {
    let index = activeIndex - i;
    index = ((index % testimonials.length) + testimonials.length) % testimonials.length;
    visibleItems.push({ ...testimonials[index], originalIndex: index, type: "thumbnail" });
  }
  // Add active item
  visibleItems.push({ ...testimonials[activeIndex], originalIndex: activeIndex, type: "active" });

  return (
    <section className="py-24 md:py-32 bg-black overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 relative z-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="testimonial-header text-center mb-16 md:mb-24 flex flex-col items-center"
        >
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
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-end w-full max-w-7xl mx-auto mt-10">
          
          {/* Sidebar / Indicators */}
          <div className="hidden lg:flex flex-col justify-between items-center h-[500px] w-12 pb-4 shrink-0">
            <div className="text-sm font-medium text-muted-foreground tracking-widest whitespace-nowrap -rotate-90 origin-center mt-12 mb-16">
              0{activeIndex + 1} <span className="text-white/20 mx-1">/</span> 0{testimonials.length}
            </div>
            <div className="rotate-180 whitespace-nowrap mb-8" style={{ writingMode: 'vertical-rl' }}>
              <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase">
                — Reviews
              </span>
            </div>
          </div>

          {/* Slider Gallery */}
          <div className="flex-1 w-full flex items-end gap-3 md:gap-4 overflow-visible shrink-0 justify-start lg:justify-end h-[400px] lg:h-[500px]">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item) => {
                const isActive = item.type === "active";
                return (
                  <motion.div
                    layout
                    key={item.originalIndex}
                    initial={{ opacity: 0, x: -20, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.9 }}
                    transition={{ type: "spring", bounce: 0, duration: 0.8 }}
                    onClick={() => setActiveIndex(item.originalIndex)}
                    className={`relative overflow-hidden rounded-3xl cursor-pointer shadow-xl shrink-0 ${
                      isActive 
                        ? 'w-full lg:w-[340px] xl:w-[420px] h-[400px] lg:h-[500px] z-10' 
                        : 'hidden md:block w-20 lg:w-24 xl:w-28 h-28 lg:h-36 opacity-50 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300'
                    }`}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                         <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.name}</h4>
                         <p className="text-primary font-medium text-lg">{item.role}</p>
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Text Content & Controls */}
          <div className="w-full lg:w-[380px] xl:w-[450px] flex flex-col justify-center h-full min-h-[300px] lg:h-[500px] py-4 shrink-0">
            <div className="mb-8 flex-1 flex flex-col justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-primary mb-8" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7323 4.41406L9.67139 12.0127H11.8398V19.7852H4.66406V12.0127C4.66406 8.35938 6.4541 5.38086 10.3701 4.41406H11.7323ZM19.7323 4.41406L17.6714 12.0127H19.8398V19.7852H12.6641V12.0127C12.6641 8.35938 14.4541 5.38086 18.3701 4.41406H19.7323Z" fill="currentColor"/>
              </svg>
              
              <AnimatePresence mode="wait">
                <motion.p 
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-3xl lg:text-[2rem] font-medium leading-[1.3] text-white/90"
                >
                  "{testimonials[activeIndex].content}"
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/10">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors group"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:-translate-x-1 transition-transform transform rotate-180"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors group"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
