import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription, CardSkeletonContainer } from "@/components/ui/cards-demo-3";
import { ClaudeLogo, OpenAILogo, GeminiLogo, MetaIconOutline } from "@/components/ui/cards-demo-3";
import { GoCopilot } from "react-icons/go";
import pythonLogo from "@/assets/logos/python.svg";
import djangoLogo from "@/assets/logos/django.svg";
import reactLogo from "@/assets/logos/react.svg";
import nodejsLogo from "@/assets/logos/nodejs.svg";
import flutterLogo from "@/assets/logos/flutter.svg";

const TechnologyCards = () => {
  const techCategories = [
    {
      title: "Web Development",
      description: "Modern web technologies for scalable applications",
      technologies: [
        { name: "React", icon: <img src={reactLogo} alt="React" className="w-6 h-6" /> },
        { name: "Node.js", icon: <img src={nodejsLogo} alt="NodeJS" className="w-6 h-6" /> },
      ]
    },
    {
      title: "Mobile Development", 
      description: "Cross-platform mobile app development",
      technologies: [
        { name: "Flutter", icon: <img src={flutterLogo} alt="Flutter" className="w-6 h-6" /> },
        { name: "React Native", icon: <img src={reactLogo} alt="React Native" className="w-6 h-6" /> },
      ]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and APIs",
      technologies: [
        { name: "Python", icon: <img src={pythonLogo} alt="Python" className="w-6 h-6" /> },
        { name: "Django", icon: <img src={djangoLogo} alt="Django" className="w-6 h-6 filter brightness-0 invert" /> },
      ]
    },
    {
      title: "AI Development",
      description: "Cutting-edge artificial intelligence solutions",
      technologies: [
        { name: "OpenAI", icon: <OpenAILogo className="w-6 h-6" /> },
        { name: "Copilot", icon: <GoCopilot className="w-6 h-6" /> },
      ]
    },
    {
      title: "Core AI",
      description: "Advanced model building and fine-tuning",
      technologies: [
        { name: "Claude", icon: <ClaudeLogo className="w-6 h-6" /> },
        { name: "Gemini", icon: <GeminiLogo className="w-6 h-6" /> },
        { name: "Meta AI", icon: <MetaIconOutline className="w-6 h-6" /> },
      ]
    }
  ];

  const TechSkeleton = ({ technologies }: { technologies: any[] }) => {
    return (
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row shrink-0 justify-center items-center gap-3 flex-wrap">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-12 w-12 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] hover:scale-110 transition-transform"
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {techCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="w-full"
        >
          <Card className="h-full">
            <CardSkeletonContainer className="h-[12rem]">
              <TechSkeleton technologies={category.technologies} />
            </CardSkeletonContainer>
            <CardTitle>{category.title}</CardTitle>
            <CardDescription>{category.description}</CardDescription>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default TechnologyCards;