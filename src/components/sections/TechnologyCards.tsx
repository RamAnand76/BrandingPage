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
        { name: "React", icon: <Image src={reactLogo} alt="React" width={36} height={36} /> },
        { name: "Node.js", icon: <FaNodeJs className="w-9 h-9" /> },
        { name: "Next.js", icon: <RiNextjsFill className="w-9 h-9" /> },
      ]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile app development. Tools: Flutter, React Native",
      technologies: [
        { name: "Flutter", icon: <FaFlutter className="w-9 h-9" /> },
        { name: "React Native", icon: <Image src={reactLogo} alt="React Native" width={36} height={36} /> },
      ]
    },
    {
      title: "Backend Development",
      description: "Robust server-side solutions and APIs. Tools: Python, Django, Go",
      technologies: [
        { name: "Python", icon: <Image src={pythonLogo} alt="Python" width={36} height={36} /> },
        { name: "Django", icon: <DiDjango className="w-10 h-10" /> },
        { name: "Go", icon: <FaGolang className="w-9 h-9" /> },
      ]
    },
    {
      title: "AI Development",
      description: "Cutting-edge artificial intelligence solutions. Tools: OpenAI, Copilot",
      technologies: [
        { name: "OpenAI", icon: <OpenAILogo className="w-9 h-9" /> },
        { name: "Copilot", icon: <GoCopilot className="w-9 h-9" /> },
      ]
    },
    {
      title: "Core AI",
      description: "Advanced model building and fine-tuning. Tools: Claude, Gemini, Meta AI",
      technologies: [
        { name: "Claude", icon: <ClaudeLogo className="w-9 h-9" /> },
        { name: "Gemini", icon: <GeminiLogo className="w-9 h-9" /> },
        { name: "Meta AI", icon: <MetaIconOutline className="w-9 h-9" /> },
      ]
    }
  ];

  const TechSkeleton = ({ technologies }: { technologies: any[] }) => {
    return (
      <div className="p-4 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row shrink-0 justify-center items-center gap-3 flex-wrap">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] hover:scale-110 transition-transform"
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1240px] mx-auto px-6 md:px-12 pb-8 md:pb-0">
      {techCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="w-full sticky md:static"
          style={{
            top: `calc(15vh + ${index * 16}px)`,
            zIndex: index
          }}
        >
          <Card className="h-full w-full p-5 sm:p-6 shadow-2xl">
            <CardSkeletonContainer className="h-[7rem]">
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
