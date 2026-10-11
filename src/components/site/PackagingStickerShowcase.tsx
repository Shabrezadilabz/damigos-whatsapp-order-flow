import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StickerShape = "circle" | "scallop" | "rounded" | "oval" | "ticket" | "arch" | "hex";

type StickerDef = {
  name: string;
  line: string;
  footer: string;
  bg: string;
  accent?: string;
  shape: StickerShape;
  powered?: boolean;
  sub?: string;
  cursive?: boolean;
  tilt?: number;
  foil?: boolean;
};

const STICKERS: StickerDef[] = [
  {
    name: "Mughal Treat",
    line: "Scan to reorder",
    footer: "WhatsApp · direct",
    bg: "from-[#145a47] via-[#1a4d3f] to-[#0a2f26]",
    accent: "#d4a853",
    shape: "scallop",
    tilt: -2,
  },
  {
    name: "Golden China",
    line: "Scan for rewards",
    footer: "Points on next visit",
    bg: "from-[#4a3228] via-[#3d2c24] to-[#1a100c]",
    accent: "#e8c4a0",
    shape: "rounded",
    foil: true,
    tilt: 1,
  },
  {
    name: "Banner Food",
    line: "Reorder on WhatsApp",
    footer: "Powered by D'aMigo's",
    bg: "from-[#1e3a5f] via-[#2a3f5c] to-[#0d1828]",
    accent: "#7eb8ff",
    shape: "arch",
    powered: true,
    tilt: -1,
  },
  {
    name: "The Third Place",
    line: "Scan · order · done",
    footer: "Your kitchen · your guest",
    bg: "from-[#5c3858] via-[#4a3050] to-[#2a1a2e]",
    accent: "#f0a8c8",
    shape: "oval",
    tilt: 2,
  },
  {
    name: "Spice Route",
    line: "Be your brand",
    footer: "Hero agent in chat",
    bg: "from-[#1f6b5c] via-[#1a5c52] to-[#0a3530]",
    accent: "#a8e6cf",
    shape: "ticket",
    tilt: 0,
  },
  {
    name: "Malayali Makbani",
    line: "Scan to reorder",
    footer: "D'aMigo's partner rail",
    bg: "from-[#a85a22] via-[#8b4519] to-[#4a2508]",
    accent: "#ffd89a",
    shape: "circle",
    powered: true,
    tilt: -3,
  },
  {
    name: "D'aMigo's",
    line: "Cloud kitchen kit",
    footer: "Co-brand optional",
    bg: "from-[#c45a3a] via-[#9a452f] to-[#5c2818]",
    accent: "#fff5e1",
    shape: "hex",
    powered: true,
    sub: "White-label stickers",
    cursive: true,
    foil: true,
    tilt: 1,
  },
  {
    name: "Meghana Foods",
    line: "Scan for offers",
    footer: "Weekend combo ready",
    bg: "from-[#2a6368] via-[#234e52] to-[#0f282b]",
    accent: "#7fffd4",
    shape: "oval",
    tilt: -2,
  },
  {
    name: "Kebab Boy HSR",
    line: "Late night reorder",
    footer: "Same chat thread",
    bg: "from-[#2d2d44] via-[#1e1e32] to-[#0a0a14]",
    accent: "#c9b8ff",
    shape: "rounded",
    tilt: 2,
  },
  {
    name: "Ripple Cafe",
    line: "Loyalty inside",
    footer: "Scan · earn · repeat",
    bg: "from-[#3d5a40] via-[#2f4a32] to-[#1a2e1c]",
    accent: "#ffe566",
    shape: "scallop",
    tilt: 0,
  },
];

function QrBlock({ className, dark = true }: { className?: string; dark?: boolean }) {
  const cells = [
    1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1,
  ];
  const fg = dark ? "bg-[#061534]" : "bg-white";
  return (
    <div
      className={cn(
        "relative grid grid-cols-8 gap-[1.5px] bg-white p-2 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.25)] ring-2 ring-white/90",
        className,
      )}
      aria-hidden
    >
      <div className={cn("absolute top-1.5 left-1.5 w-3 h-3 border-2 rounded-sm", fg, "border-[#061534]")} />
      <div className={cn("absolute top-1.5 right-1.5 w-3 h-3 border-2 rounded-sm", fg, "border-[#061534]")} />
      <div className={cn("absolute bottom-1.5 left-1.5 w-3 h-3 border-2 rounded-sm", fg, "border-[#061534]")} />
      {cells.slice(0, 64).map((on, i) => (
        <div key={i} className={cn("aspect-square rounded-[1px]", on ? fg : "bg-white")} />
      ))}
    </div>
  );
}

function shapeShell(shape: StickerShape, compact?: boolean) {
  const base = compact ? "max-w-[118px]" : "max-w-[168px]";
  switch (shape) {
    case "circle":
      return cn("rounded-full aspect-square mx-auto", base);
    case "scallop":
      return cn("aspect-square mx-auto", base);
    case "oval":
      return cn("rounded-[999px] aspect-[3/4] mx-auto", compact ? "max-w-[108px]" : "max-w-[140px]");
    case "arch":
      return cn("rounded-t-[999px] rounded-b-2xl aspect-[4/5]", base);
    case "hex":
      return cn("aspect-[4/5] mx-auto", base);
    case "ticket":
      return cn("aspect-[5/2] mx-auto", compact ? "max-w-[180px]" : "max-w-[220px]");
    default:
      return cn("rounded-2xl aspect-[4/5]", base);
  }
}

function StickerCard({ sticker, compact }: { sticker: StickerDef; compact?: boolean }) {
  const { name, line, footer, bg, accent, shape, powered, sub, cursive, tilt = 0, foil } = sticker;

  return (
    <div
      className="group flex justify-center"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div
        className={cn(
          "relative flex flex-col items-center justify-between text-center text-white overflow-hidden",
          "transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-0.5",
          "shadow-[0_12px_32px_-8px_rgba(6,21,52,0.45)] ring-1 ring-white/15",
          compact ? "p-2.5 text-[9px]" : "p-3.5 sm:p-4 text-[10px] sm:text-[11px]",
          shapeShell(shape, compact),
          shape === "scallop" && "sticker-scallop",
          shape === "hex" && "sticker-hex",
          shape === "ticket" && "sticker-ticket",
        )}
      >
        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-100", bg)} aria-hidden />
        <div
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none sticker-grain"
          aria-hidden
        />
        {foil ? (
          <div
            className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/20 blur-2xl pointer-events-none"
            aria-hidden
          />
        ) : null}
        {accent ? (
          <div
            className="absolute top-0 inset-x-0 h-0.5 opacity-80"
            style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
            aria-hidden
          />
        ) : null}

        <div className="relative z-10 w-full min-h-0 shrink-0 pt-0.5">
          {powered ? (
            <span className="inline-block mb-1 rounded-full border border-white/25 bg-white/10 px-2 py-0.5 text-[7px] font-bold uppercase tracking-[0.2em] text-white/80">
              Partner
            </span>
          ) : null}
          <p
            className={cn(
              "font-headline font-extrabold leading-tight tracking-tight drop-shadow-sm",
              cursive ? "font-cursive text-xl sm:text-2xl font-normal tracking-normal" : "text-xs sm:text-sm",
            )}
          >
            {name}
          </p>
          {sub ? <p className="text-[7px] sm:text-[8px] text-white/75 mt-0.5 italic">{sub}</p> : null}
          <p
            className="mt-1.5 text-[7px] sm:text-[8px] font-bold uppercase tracking-[0.18em] text-white/90"
            style={accent ? { color: accent } : undefined}
          >
            {line}
          </p>
        </div>

        <QrBlock className={cn("relative z-10 my-2 w-[54%]", compact ? "max-w-[58px]" : "max-w-[80px]")} />

        <p className="relative z-10 text-[7px] sm:text-[8px] text-white/70 leading-snug px-1 pb-0.5">{footer}</p>

        {shape === "rounded" || shape === "arch" ? (
          <div
            className="absolute bottom-2 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
            aria-hidden
          />
        ) : null}
      </div>
    </div>
  );
}

function ShowcaseFrame({
  children,
  title,
  className,
}: {
  children: ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-border-warm overflow-hidden",
        "bg-[linear-gradient(165deg,#faf6ee_0%,#f0e6d8_45%,#e8dcc8_100%)]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_20px_50px_-24px_rgba(29,42,74,0.2)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-secondary/8 blur-3xl pointer-events-none"
        aria-hidden
      />
      {title ? (
        <p className="relative text-[10px] font-bold uppercase tracking-[0.16em] text-secondary text-center pt-4 sm:pt-5 px-4">
          {title}
        </p>
      ) : null}
      <div className="relative p-4 sm:p-6 md:p-8">{children}</div>
    </div>
  );
}

export function PackagingStickerShowcase({
  variant = "grid",
  className,
}: {
  variant?: "hero" | "grid" | "strip";
  className?: string;
}) {
  const items =
    variant === "hero"
      ? STICKERS.slice(0, 4)
      : variant === "strip"
        ? STICKERS.slice(0, 4)
        : STICKERS;

  if (variant === "hero") {
    return (
      <ShowcaseFrame title="Your name on pack · our QR rail" className={className}>
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {items.map((s) => (
            <StickerCard key={s.name} sticker={s} compact />
          ))}
        </div>
      </ShowcaseFrame>
    );
  }

  if (variant === "strip") {
    return (
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5", className)}>
        {items.map((s) => (
          <figure key={s.name} className="min-w-0">
            <StickerCard sticker={s} compact />
            <figcaption className="mt-2.5 text-[11px] font-semibold text-primary text-center">{s.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <ShowcaseFrame title="Seal · arch · hex · ticket — same WhatsApp rail" className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
        {items.map((s) => (
          <StickerCard key={s.name} sticker={s} />
        ))}
      </div>
    </ShowcaseFrame>
  );
}
