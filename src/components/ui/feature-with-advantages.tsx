import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface FeatureProps {
  badge: string;
  title: string;
  description?: string;
  advantages: { title: string; description?: string }[];
  className?: string;
}

// Adapted from the shared "feature with advantages" block: props instead of hard-coded copy,
// no section padding (the parent panel owns spacing), dark-theme colours.
function Feature({ badge, title, description, advantages, className = "" }: FeatureProps) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <Badge variant="outline" className="border-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-white/60">
        {badge}
      </Badge>
      <div className="flex flex-col gap-3">
        <h2 className="max-w-xl text-[clamp(24px,2.6vw,36px)] font-semibold leading-[1.18] tracking-[-0.025em] text-white">{title}</h2>
        {description && <p className="max-w-md leading-relaxed text-white/55">{description}</p>}
      </div>
      <ul className="grid w-full grid-cols-1 gap-x-8 gap-y-5 pt-6">
        {advantages.map((a) => (
          <li key={a.title} className="flex items-start gap-4">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[#3b82f6]" />
            <div className="flex flex-col gap-1">
              <p className="text-white">{a.title}</p>
              {a.description && <p className="text-sm text-white/55">{a.description}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Feature };
