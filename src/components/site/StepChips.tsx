import Link from "next/link";
import type { ReactNode } from "react";

export function StepChips({
  steps,
  hrefs,
  tone = "light",
}: {
  steps: string[];
  hrefs?: string[];
  tone?: "light" | "dark";
}) {
  const chip =
    tone === "dark"
      ? "inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-bold text-white"
      : "inline-flex items-center gap-2 rounded-full bg-white border border-border-warm px-3 py-1.5 text-xs font-bold text-primary shadow-sm";

  return (
    <ol className="flex flex-wrap items-center gap-2 mt-4">
      {steps.map((s, i) => {
        const href = hrefs?.[i];
        const inner = (
          <>
            <span className="h-5 w-5 rounded-full bg-secondary text-white flex items-center justify-center text-[10px]">
              {i + 1}
            </span>
            {s}
          </>
        );
        return (
          <li key={s}>
            {href ? (
              <a href={href} className={`${chip} hover:border-secondary/50 hover:shadow-md transition-shadow`}>
                {inner}
              </a>
            ) : (
              <span className={chip}>{inner}</span>
            )}
          </li>
        );
      })}
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
