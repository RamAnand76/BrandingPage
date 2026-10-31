"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
      fill="currentColor"
    />
  </svg>
);

export interface TeamMember {
  name: string;
  /** Line shown under the name */
  role: string;
  image: string;
  linkedin?: string;
}

// Adapted from team-01: data comes in as props, and the website icon is dropped because we have
// no personal sites to link to. Like the original, the shape and colour live inside each portrait PNG
// (public/team), so the component only has to place the image.
const Team = ({ badge, title, members }: { badge: string; title: string; members: TeamMember[] }) => (
  <section className="relative bg-black py-16 md:py-24 overflow-hidden">
    <div className="mx-auto max-w-[1240px] px-6 md:px-12 flex flex-col items-center gap-12 md:gap-16">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col items-center gap-5 text-center"
      >
        <Badge variant="outline" className="h-auto border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
          {badge}
        </Badge>
        <h2 className="text-[clamp(34px,6vw,76px)] leading-[1.02] tracking-[-0.035em] font-extrabold text-white">{title}</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 md:gap-x-6">
        {members.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group w-[calc(50%-8px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex flex-col items-center gap-6 text-center"
          >
            <Image
              src={m.image}
              alt={m.name}
              width={900}
              height={1125}
              unoptimized
              className="h-auto w-full transition-all duration-300 group-hover:grayscale"
            />
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-1.5">
                <h3 className="text-lg md:text-2xl font-bold tracking-tight text-white">{m.name}</h3>
                <p className="text-[13px] text-white/60">{m.role}</p>
              </div>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="rounded-full border border-white/15 p-2 text-white/80 hover:border-[#3b82f6]/60 hover:text-white transition-colors"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
