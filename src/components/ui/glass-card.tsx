import React from "react";
import { cn } from "@/lib/utils";
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}
export function GlassCard({ className, children, hoverable = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6",
        hoverable && "hover:bg-white/10 hover:border-primary/40 hover:shadow-primary/20",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}