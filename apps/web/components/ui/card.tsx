import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

export function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
