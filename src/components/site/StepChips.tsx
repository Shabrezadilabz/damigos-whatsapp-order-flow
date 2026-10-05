import Link from "next/link";
import type { ReactNode } from "react";

export function StepChips({
  steps,
  tone = "light",
}: {
  steps: string[];
  tone?: "light" | "dark";
}) {
  return (
    <ol className="flex flex-wrap items-center gap-2 mt-4">
      {steps.map((s, i) => (
        <li key={s}>
          <span
            className={
              tone === "dark"
                ? "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-bold text-white"
                : "inline-flex items-center gap-2 rounded-full bg-white border border-border-warm px-3 py-1.5 text-xs font-bold text-primary shadow-sm"
            }
          >
            <span className="h-5 w-5 rounded-full bg-secondary text-white flex items-center justify-center text-[10px]">
              {i + 1}
            </span>
            {s}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center mt-6 rounded-full border border-border-warm bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:border-secondary/40 hover:text-secondary transition-colors"
    >
      {children}
    </Link>
  );
}
