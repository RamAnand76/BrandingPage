"use client";

import { Tweet } from "react-tweet";
import { cn } from "@/lib/utils";

interface TweetCardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export function ClientTweetCard({ id, className }: TweetCardProps) {
  return (
    <div
      className={cn(
        "not-prose flex w-full min-w-0 max-w-xl flex-col items-center justify-center overflow-hidden rounded-2xl border bg-background",
        className,
      )}
    >
      <Tweet id={id} />
    </div>
  );
}