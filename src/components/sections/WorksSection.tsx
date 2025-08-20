
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const WorksSection = () => {
  const works = [
    {
      title: "Project Alpha",
      description: "A next-gen web platform for data analytics and visualization, providing real-time insights.",
      image: "https://placehold.co/600x400.png",
      technologies: ["React", "Next.js", "Tailwind CSS", "AI"],
      dataAiHint: "data analytics",
    },
    {
      title: "Project Beta",
      description: "An AI-powered mobile experience for personalized content delivery and user engagement.",
      image: "https://placehold.co/600x400.png",
      technologies: ["Flutter", "Firebase", "GenAI", "Node.js"],
      dataAiHint: "mobile interface",
    },
    {
      title: "Project Gamma",
      description: "A scalable, cloud-native backend solution for a high-traffic e-commerce application on AWS.",
      image: "https://placehold.co/600x400.png",
      technologies: ["AWS", "Django", "Python", "PostgreSQL"],
      dataAiHint: "cloud infrastructure",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A snapshot of what we build. Detailed case studies will be added soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {works.map((work, idx) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col hover:bg-white/5 transition-all duration-300"
            >
              <div className="rounded-lg overflow-hidden mb-6">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover aspect-video"
                  data-ai-hint={work.dataAiHint}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-muted-foreground flex-1 mb-4 text-sm">{work.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 mt-auto text-primary text-sm font-medium">
                Learn more <ExternalLink className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
