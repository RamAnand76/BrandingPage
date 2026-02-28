import React from 'react';
import Image from 'next/image';
import reactLogo from "@/assets/logos/react.svg";
import pythonLogo from "@/assets/logos/python.svg";
import { FaFlutter } from "react-icons/fa6";
import { GoCopilot } from "react-icons/go";
import { OpenAILogo } from "@/components/ui/cards-demo-3";

export interface TechItem {
    id: string;
    name: string;
    color: string;
    icon: React.ReactNode;
}

export const TECH_DATA: TechItem[] = [
    {
        id: "web",
        name: "Web Development",
        color: "#61DAFB",
        icon: <Image src={reactLogo} alt="React" width={48} height={48} className="w-full h-full object-contain" />
    },
    {
        id: "mobile",
        name: "Mobile Development",
        color: "#02569B",
        icon: <FaFlutter className="w-full h-full" />
    },
    {
        id: "backend",
        name: "Backend Development",
        color: "#3776AB",
        icon: <Image src={pythonLogo} alt="Python" width={48} height={48} className="w-full h-full object-contain" />
    },
    {
        id: "ai",
        name: "AI Development",
        color: "#412991",
        icon: <OpenAILogo className="w-full h-full" />
    },
    {
        id: "copilot",
        name: "AI Integrations",
        color: "#FFFFFF",
        icon: <GoCopilot className="w-full h-full" />
    }
];
