
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
      description: "A React code editor replicating v0.dev's aesthetic, built on Sandpack for a professional, dark-themed coding experience with live preview and custom styling.",
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
      title: "Project Beta",
      description: "An AI-powered mobile experience for personalized content delivery and user engagement.",
      images: [placeholderImages.works[1].src],
      dataAiHint: placeholderImages.works[1]["data-ai-hint"],
      alt: placeholderImages.works[1].alt,
      technologies: ["Flutter", "Firebase", "GenAI", "Node.js"],
      link: "#contact",
    },
    {
      title: "Project Gamma",
      description: "A scalable, cloud-native backend solution for a high-traffic e-commerce application on AWS.",
      images: [placeholderImages.works[2].src],
      dataAiHint: placeholderImages.works[2]["data-ai-hint"],
      alt: placeholderImages.works[2].alt,
      technologies: ["AWS", "Django", "Python", "PostgreSQL"],
      link: "#contact",
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
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <MagicCard className="h-full">
                <div className="relative rounded-2xl p-6 flex flex-col bg-card/80 backdrop-blur-sm border border-white/10 h-full overflow-hidden">
                  {work.isOpenSource && (
                    <Badge variant="default" className="absolute top-2 right-4 text-xs bg-primary/80 text-primary-foreground border-primary/50 backdrop-blur-sm z-20">
                      Opensource Contribution
                    </Badge>
                  )}
                  <StripedPattern className="absolute inset-0 w-full h-full object-cover z-0 opacity-5 stroke-white/20" />
                  <div className="relative z-10">
                    <div className="rounded-lg overflow-hidden mb-6 relative">
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
                          <CarouselPrevious className="left-2" />
                          <CarouselNext className="right-2" />
                        </Carousel>
                      ) : (
                        <Image
                          src={work.images[0]}
                          alt={work.alt}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover aspect-video"
                          data-ai-hint={work.dataAiHint}
                        />
                      )}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{work.title}</h3>
                    </div>
                    <p className="text-muted-foreground flex-1 mb-4 text-sm">{work.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link href={work.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 mt-auto text-primary text-sm font-medium relative z-10">
                    Learn more <ExternalLink className="w-4 h-4" />
                  </Link>
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
