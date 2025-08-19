"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

const testimonials = [
  {
    name: "Alex Chen",
    role: "CTO",
    image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    content: "Aethene's AI development expertise helped us transform our business processes. Their custom solutions delivered exactly what we needed with excellent performance."
  },
  {
    name: "Sarah Mitchell",
    role: "Product Manager",
    image: "https://avatars.githubusercontent.com/u/2345678?v=4",
    content: "The web application Aethene built for us exceeded expectations. Their React.js expertise and attention to detail made our project a huge success."
  },
  {
    name: "Marcus Rodriguez",
    role: "Startup Founder",
    image: "https://avatars.githubusercontent.com/u/3456789?v=4",
    content: "Outstanding mobile app development with Flutter. The team's professionalism and timely delivery made working with Aethene a pleasure."
  },
  {
    name: "Emily Foster",
    role: "Marketing Director",
    image: "https://avatars.githubusercontent.com/u/4567890?v=4",
    content: "Aethene's UI/UX design transformed our user experience completely. The designs are beautiful, intuitive, and conversion rates have improved significantly."
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
    content: "Working with Aethene on our AI integration project was fantastic. They delivered sophisticated GenAI solutions that revolutionized our workflow."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">Trusted by Businesses</h2>
          <p className="text-lg text-muted-foreground">
            Join businesses who trust Aethene for digital solutions
          </p>
        </motion.div>

        <div className="relative flex flex-col antialiased">
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-1`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
                  </p>
                </Card>
              ))}
            </div>
            <div className="animate-marquee flex min-w-full shrink-0 items-stretch gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={`${index}-2`} className="w-[400px] shrink-0 bg-black/40 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-white/90">{testimonial.name}</h4>
                      <p className="text-sm text-white/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {testimonial.content}
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
