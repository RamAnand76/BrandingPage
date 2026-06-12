import { 
    SiFlutter, 
    SiReact, 
    SiDjango, 
    SiFastapi, 
    SiExpress, 
    SiNextdotjs, 
    SiPytorch, 
    SiTensorflow, 
    SiLangchain,
    SiOpenai, 
    SiGooglegemini,
    SiAnthropic
} from "react-icons/si";

export interface Technology {
    name: string;
    icon: React.ReactNode;
    color: string;
}

export interface TechItem {
    id: string;
    name: string;
    description?: string;
    technologies: Technology[];
}

export const TECH_DATA: TechItem[] = [
    {
        id: "web",
        name: "Web Development",
        description: "Build robust, scalable, and globally appealing web applications tailored to your business needs.",
        technologies: [
            { name: "NextJS", icon: <SiNextdotjs className="w-full h-full" />, color: "#FFFFFF" },
            { name: "ReactJS", icon: <SiReact className="w-full h-full" />, color: "#61DAFB" }
        ]
    },
    {
        id: "mobile",
        name: "Mobile Development",
        description: "Turn your ideas into powerful iOS and Android apps with beautiful, native-feeling experiences.",
        technologies: [
            { name: "Flutter", icon: <SiFlutter className="w-full h-full" />, color: "#02569B" },
            { name: "React Native", icon: <SiReact className="w-full h-full" />, color: "#61DAFB" }
        ]
    },
    {
        id: "backend",
        name: "Backend Development",
        description: "Secure, highly scalable backend architectures that ensure your applications run flawlessly.",
        technologies: [
            { name: "Django", icon: <SiDjango className="w-full h-full" />, color: "#092E20" },
            { name: "FastAPI", icon: <SiFastapi className="w-full h-full" />, color: "#009688" },
            { name: "ExpressJS", icon: <SiExpress className="w-full h-full" />, color: "#FFFFFF" }
        ]
    },
    {
        id: "ai",
        name: "AI Development",
        description: "Leverage artificial intelligence and machine learning to optimize operations and drive growth.",
        technologies: [
            { name: "PyTorch", icon: <SiPytorch className="w-full h-full" />, color: "#EE4C2C" },
            { name: "TensorFlow", icon: <SiTensorflow className="w-full h-full" />, color: "#FF6F00" },
            { name: "Langchain", icon: <SiLangchain className="w-full h-full" />, color: "#1C3C3C" }
        ]
    },
    {
        id: "copilot",
        name: "AI Integrations",
        description: "Seamlessly integrate generative AI and smart copilots into your existing workflows and tools.",
        technologies: [
            { name: "OpenAI", icon: <SiOpenai className="w-full h-full" />, color: "#10A37F" },
            { name: "Gemini", icon: <SiGooglegemini className="w-full h-full" />, color: "#8E75B2" },
            { name: "Claude API", icon: <SiAnthropic className="w-full h-full" />, color: "#D97757" }
        ]
    }
];
