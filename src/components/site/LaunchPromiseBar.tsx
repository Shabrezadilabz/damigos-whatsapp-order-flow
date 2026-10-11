import Link from "next/link";

const PROMISES = [
  {
    icon: "volunteer_activism",
    title: "No onboarding fees",
    sub: "Launch setup on us",
    accent: "text-accent-gold",
  },
  {
    icon: "calendar_month",
    title: "No subscriptions",
    sub: "No monthly lock-in",
    accent: "text-secondary-container",
  },
  {
    icon: "savings",
    title: "No commission",
    sub: "Keep your margin",
    accent: "text-accent-gold",
  },
] as const;

function PromiseChip({
  icon,
  title,
  sub,
  accent,
}: (typeof PROMISES)[number]) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 px-4 sm:px-0">
      <span
        className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 ${accent}`}
        aria-hidden
      >
        <span className="material-symbols-outlined text-[20px] sm:text-[22px]">{icon}</span>
      </span>
      <div className="text-left min-w-0">
        <p className="font-headline text-[13px] sm:text-sm font-bold text-white tracking-tight leading-tight">
          {title}
        </p>
        <p className="text-[10px] sm:text-[11px] text-white/55 font-medium mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

export function LaunchPromiseBar() {
  const marqueeItems = [...PROMISES, ...PROMISES];

  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(105deg,#061534_0%,#1d2a4a_42%,#2a3f6e_100%)]"
      aria-label="Launch pricing promise"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(217,155,56,0.35),transparent)]"
        aria-hidden
      />
      <div className="page-wrap relative py-3 sm:py-3.5">
        <div className="hidden sm:flex flex-wrap items-center justify-between gap-4">
          <div className="grid grid-cols-3 gap-6 lg:gap-10 flex-1 min-w-0">
            {PROMISES.map((p) => (
              <PromiseChip key={p.title} {...p} />
            ))}
          </div>
          <Link
            href="/waitlist"
            className="hidden lg:inline-flex items-center gap-1.5 shrink-0 rounded-full bg-secondary text-white px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] shadow-[0_4px_14px_-2px_rgba(154,69,47,0.55)] hover:bg-[#b8553a] transition-colors"
          >
            Launch offers
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>

        <div className="sm:hidden overflow-hidden">
          <div className="flex w-max marquee-left gap-8 pr-8">
            {marqueeItems.map((p, i) => (
              <PromiseChip key={`${p.title}-${i}`} {...p} />
            ))}
          </div>
        </div>

        <p className="mt-2 text-center text-[10px] text-white/45 leading-snug sm:hidden">
          Campaign credits optional ·{" "}
          <Link href="/campaigns" className="text-secondary-container/90 underline-offset-2 hover:underline">
            pay when you broadcast
          </Link>
        </p>
      </div>
    </section>
  );
}

/** Compact row for in-page sections (economics, waitlist, etc.) */
export function LaunchPromisePills({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap gap-2 justify-center sm:justify-start ${className}`}
      aria-label="No fees, no subscriptions, no commission"
    >
      {PROMISES.map((p) => (
        <li
          key={p.title}
          className="inline-flex items-center gap-1.5 rounded-full border border-border-warm bg-white/90 px-3 py-1.5 shadow-[0_2px_12px_-4px_rgba(29,42,74,0.12)]"
        >
          <span className="material-symbols-outlined text-secondary text-[16px]">{p.icon}</span>
          <span className="font-headline text-[11px] sm:text-xs font-bold text-primary">{p.title}</span>
        </li>
      ))}
    </ul>
  );
}
