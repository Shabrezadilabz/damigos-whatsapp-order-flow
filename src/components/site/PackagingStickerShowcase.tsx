import { cn } from "@/lib/cn";

/** Restaurant-first labels — D'aMigo's appears on some as powered-by, not every sticker. */
const STICKERS = [
  {
    name: "Mughal Treat",
    line: "Scan to reorder",
    footer: "WhatsApp · direct",
    bg: "from-[#1a4d3f] to-[#0f3329]",
    shape: "circle" as const,
    powered: false,
  },
  {
    name: "Golden China",
    line: "Scan for rewards",
    footer: "Points on next visit",
    bg: "from-[#3d2c24] to-[#251912]",
    shape: "rounded" as const,
    powered: false,
  },
  {
    name: "Banner Food",
    line: "Reorder on WhatsApp",
    footer: "Powered by D'aMigo's",
    bg: "from-[#2a3f5c] to-[#152238]",
    shape: "rounded" as const,
    powered: true,
  },
  {
    name: "The Third Place",
    line: "Scan · order · done",
    footer: "Your kitchen · your guest",
    bg: "from-[#4a3050] to-[#2d1c33]",
    shape: "oval" as const,
    powered: false,
  },
  {
    name: "Spice Route",
    line: "BE YOUR BRAND",
    footer: "Hero agent in chat",
    bg: "from-[#1a5c52] to-[#0d3d36]",
    shape: "ticket" as const,
    powered: false,
  },
  {
    name: "Malayali Makbani",
    line: "Scan to reorder",
    footer: "D'aMigo's partner rail",
    bg: "from-[#8b4519] to-[#5c2e0e]",
    shape: "circle" as const,
    powered: true,
  },
  {
    name: "D'aMigo's",
    line: "Kit for cloud kitchens",
    footer: "Co-brand optional",
    bg: "from-[#9a452f] to-[#6d2a18]",
    shape: "rounded" as const,
    powered: true,
    sub: "White-label stickers",
  },
  {
    name: "Meghana Foods",
    line: "Scan for offers",
    footer: "Weekend combo ready",
    bg: "from-[#234e52] to-[#143033]",
    shape: "oval" as const,
    powered: false,
  },
];

function QrBlock({ className }: { className?: string }) {
  const cells = [
    1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1,
    0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1,
  ];
  return (
    <div
      className={cn("grid grid-cols-8 gap-[2px] bg-white p-1.5 rounded-sm shadow-inner", className)}
      aria-hidden
    >
      {cells.slice(0, 64).map((on, i) => (
        <div key={i} className={cn("aspect-square rounded-[1px]", on ? "bg-primary" : "bg-white")} />
      ))}
    </div>
  );
}

function StickerCard({
  name,
  line,
  footer,
  bg,
  shape,
  powered,
  sub,
  compact,
}: (typeof STICKERS)[number] & { compact?: boolean }) {
  const shapeClass = {
    circle: "rounded-full aspect-square max-w-[140px] mx-auto",
    rounded: "rounded-2xl aspect-[4/5]",
    oval: "rounded-[999px] aspect-[3/4] max-w-[130px] mx-auto",
    ticket: "rounded-lg aspect-[5/2] max-w-[200px] mx-auto border-x-4 border-dashed border-white/25",
  }[shape];

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-between text-center text-white p-3 sm:p-4 shadow-lg ring-1 ring-black/10 bg-gradient-to-br",
        bg,
        shapeClass,
        compact ? "text-[9px] p-2" : "text-[10px] sm:text-[11px]",
      )}
    >
      <div className="w-full min-h-0 shrink-0">
        {powered && !compact ? (
          <p className="text-[8px] uppercase tracking-widest text-white/55 mb-0.5">Partner sticker</p>
        ) : null}
        <p
          className={cn(
            "font-headline font-bold leading-tight tracking-tight",
            name === "D'aMigo's" ? "font-cursive text-lg sm:text-xl" : "text-xs sm:text-sm",
          )}
        >
          {name}
        </p>
        {sub ? <p className="text-[8px] text-white/70 mt-0.5">{sub}</p> : null}
        <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-wide text-white/85 mt-1">{line}</p>
      </div>
      <QrBlock className={cn("my-2 w-[52%] max-w-[72px]", compact && "max-w-[56px]")} />
      <p className="text-[7px] sm:text-[8px] text-white/65 leading-snug px-1">{footer}</p>
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
      <div
        className={cn(
          "relative rounded-3xl border border-border-warm bg-[#f3ebe0] p-4 sm:p-6 bg-grid-pattern overflow-hidden",
          className,
        )}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-secondary mb-3 text-center">
          Your name on pack · our QR rail
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {items.map((s) => (
            <StickerCard key={s.name} {...s} compact />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "strip") {
    return (
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-3", className)}>
        {items.map((s) => (
          <figure key={s.name} className="min-w-0">
            <StickerCard {...s} compact />
            <figcaption className="mt-2 text-[11px] font-semibold text-primary text-center">{s.name}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-3xl border border-border-warm bg-[#f3ebe0] p-4 sm:p-8 bg-grid-pattern",
        className,
      )}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {items.map((s) => (
          <StickerCard key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
}
