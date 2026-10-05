import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function PhoneFrame({
  children,
  caption,
  className,
}: {
  children: ReactNode;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn("mx-auto w-full max-w-[240px] sm:max-w-[280px]", className)}>
      <div className="relative rounded-[2rem] border-[10px] border-primary bg-primary shadow-[0_20px_40px_-12px_rgba(6,21,52,0.35)] overflow-hidden aspect-[9/19]">
        <div className="absolute top-0 inset-x-0 h-6 z-20 pointer-events-none flex justify-center">
          <div className="w-20 h-4 bg-black/50 rounded-b-xl" />
        </div>
        <div className="absolute inset-0 overflow-hidden">{children}</div>
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-text-muted text-center">{caption}</figcaption> : null}
    </figure>
  );
}
