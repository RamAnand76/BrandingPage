import React from 'react';
import Image from 'next/image';
import reactLogo from "@/assets/logos/react.svg";
import pythonLogo from "@/assets/logos/python.svg";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs, FaGolang, FaFlutter } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { GoCopilot } from "react-icons/go";
import { ClaudeLogo, OpenAILogo, GeminiLogo } from "@/components/ui/cards-demo-3";

export interface TechItem {
    id: string;
    name: string;
    color: string;
    icon: React.ReactNode;
}

export const TECH_DATA: TechItem[] = [
    {
        id: "react",
        name: "React",
        color: "#61DAFB",
        icon: <Image src={reactLogo} alt="React" width={48} height={48} className="w-full h-full object-contain" />
    },
    {
        id: "nextjs",
        name: "Next.js",
        color: "#ffffff",
        icon: <RiNextjsFill className="w-full h-full" />
    },
    {
        id: "nodejs",
        name: "Node.js",
        color: "#339933",
        icon: <FaNodeJs className="w-full h-full" />
    },
    {
        id: "python",
        name: "Python",
        color: "#3776AB",
        icon: <Image src={pythonLogo} alt="Python" width={48} height={48} className="w-full h-full object-contain" />
    },
    {
        id: "django",
        name: "Django",
        color: "#092E20",
        icon: <DiDjango className="w-full h-full" />
    },
    {
        id: "go",
        name: "Go",
        color: "#00ADD8",
        icon: <FaGolang className="w-full h-full" />
    },
    {
        id: "flutter",
        name: "Flutter",
        color: "#02569B",
        icon: <FaFlutter className="w-full h-full" />
    },
    {
        id: "openai",
        name: "OpenAI",
        color: "#412991",
        icon: <OpenAILogo className="w-full h-full" />
    },
    {
        id: "claude",
        name: "Claude",
        color: "#D97757",
        icon: <ClaudeLogo className="w-full h-full" />
    },
    {
        id: "copilot",
        name: "Copilot",
        color: "#FFFFFF",
        icon: <GoCopilot className="w-full h-full" />
    }
];
