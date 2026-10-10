import React from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { TECH_DATA, Technology } from "@/constants";

type Logo = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  icon?: React.ReactNode;
  color?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  items?: Technology[];
};

export function LogoCloud({ className, items, ...props }: LogoCloudProps) {
  // Use passed items or extract from TECH_DATA
  const technologies: Technology[] =
    items || TECH_DATA.flatMap((category) => category.technologies);

  // Group into cards
  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-white/10 md:grid-cols-4",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-white/10" />

      {technologies.map((tech, index) => {
        const isLastRowMd = index >= Math.floor(technologies.length / 4) * 4;
        const isRightColMd = (index + 1) % 4 === 0;
        const isRightColMobile = (index + 1) % 2 === 0;

        return (
          <LogoCard
            key={tech.name}
            className={cn(
              "relative border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.03]",
              !isRightColMobile && "border-r",
              !isRightColMd ? "md:border-r" : "md:border-r-0",
              index % 2 === 0 ? "bg-[#0b0f19]/60" : "bg-black/50"
            )}
            logo={{
              alt: tech.name,
              icon: tech.icon,
              color: tech.color,
            }}
          >
            {/* Corner plus icons on selective intersections */}
            {(index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-white/20 pointer-events-none"
                strokeWidth={1}
              />
            )}
          </LogoCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-white/10" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-8 md:py-9",
        className
      )}
      {...props}
    >
      {logo.icon ? (
        <div
          className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ color: logo.color }}
        >
          {logo.icon}
        </div>
      ) : logo.src ? (
        <img
          alt={logo.alt}
          className="pointer-events-none h-4 select-none md:h-5 dark:brightness-0 dark:invert"
          height={logo.height || "auto"}
          src={logo.src}
          width={logo.width || "auto"}
        />
      ) : null}
      <span className="text-[14px] md:text-[15px] font-medium tracking-wide text-white/90">
        {logo.alt}
      </span>
      {children}
    </div>
  );
}
