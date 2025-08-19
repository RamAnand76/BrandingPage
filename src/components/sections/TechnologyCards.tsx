import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription, CardSkeletonContainer } from "@/components/ui/cards-demo-3";
import { ClaudeLogo, OpenAILogo, GeminiLogo, MetaIconOutline } from "@/components/ui/cards-demo-3";
import { GoCopilot } from "react-icons/go";
import pythonLogo from "@/assets/logos/python.svg";
import reactLogo from "@/assets/logos/react.svg";
import { FaGolang, FaNodeJs, FaFlutter } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { RiNextjsFill } from "react-icons/ri";
import Image from "next/image";


const TechnologyCards = () => {
  const techCategories = [
    {
      title: "Web Development",
      description: "Modern web technologies for scalable applications. Tools: React, Node.js, Next.js",
      technologies: [
        { name: "React", icon: <Image src={reactLogo} alt="React" width={24} height={24} /> },
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" /> },
        { name: "Next.js", icon: <RiNextjsFill className="w-6 h-6" /> },
      ]
    },
    {
      title: "Mobile Development", 
      description: "Cross-platform mobile app development. Tools: Flutter, React Native",
      technologies: [
        { name: "Flutter", icon: <FaFlutter className="w-6 h-6" /> },
        { name: "React Native", icon: <Image src={reactLogo} alt="React Native" width={24} height={24} /> },
      ]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and APIs. Tools: Python, Django, Go",
      technologies: [
        { name: "Python", icon: <Image src={pythonLogo} alt="Python" width={24} height={24} /> },
        { name: "Django", icon: <DiDjango className="w-6 h-6" /> },
        { name: "Go", icon: <FaGolang className="w-6 h-6" /> },
      ]
    },
    {
      title: "AI Development",
      description: "Cutting-edge artificial intelligence solutions. Tools: OpenAI, Copilot",
      technologies: [
        { name: "OpenAI", icon: <OpenAILogo className="w-6 h-6" /> },
        { name: "Copilot", icon: <GoCopilot className="w-6 h-6" /> },
      ]
    },
    {
      title: "Core AI",
      description: "Advanced model building and fine-tuning. Tools: Claude, Gemini, Meta AI",
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
          <Card className="h-full w-full">
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
