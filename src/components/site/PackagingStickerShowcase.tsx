import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StickerShape = "circle" | "scallop" | "rounded" | "oval" | "ticket" | "arch" | "hex";

type LangTag = "hi" | "kn" | "te";

const LANG_LABEL: Record<LangTag, string> = {
  hi: "हिं",
  kn: "ಕ",
  te: "తె",
};

type StickerDef = {
  name: string;
  lang: LangTag;
  lineLocal: string;
  lineEn: string;
  footerLocal: string;
  footerEn: string;
  bg: string;
  accent?: string;
  shape: StickerShape;
  powered?: boolean;
  sub?: string;
  cursive?: boolean;
  tilt?: number;
  foil?: boolean;
};

/** Same layout on every sticker: local line → QR → local footer + English hint. */
const STICKERS: StickerDef[] = [
  {
    name: "Mughal Treat",
    lang: "hi",
    lineLocal: "फिर ऑर्डर — स्कैन करें",
    lineEn: "Scan to reorder",
    footerLocal: "WhatsApp · सीधा",
    footerEn: "Direct chat order",
    bg: "from-[#145a47] via-[#1a4d3f] to-[#0a2f26]",
    accent: "#d4a853",
    shape: "scallop",
    tilt: -2,
  },
  {
    name: "Golden China",
    lang: "kn",
    lineLocal: "ರಿವಾರ್ಡ್‌ಗಾಗಿ ಸ್ಕ್ಯಾನ್",
    lineEn: "Scan for rewards",
    footerLocal: "ಮುಂದಿನ ಬಾರಿ ಪಾಯಿಂಟ್",
    footerEn: "Points next visit",
    bg: "from-[#4a3228] via-[#3d2c24] to-[#1a100c]",
    accent: "#e8c4a0",
    shape: "rounded",
    foil: true,
    tilt: 1,
  },
  {
    name: "Banner Food",
    lang: "te",
    lineLocal: "WhatsAppలో మళ్ళీ ఆర్డర్",
    lineEn: "Reorder on WhatsApp",
    footerLocal: "D'aMigo's · partner rail",
    footerEn: "Powered rail",
    bg: "from-[#1e3a5f] via-[#2a3f5c] to-[#0d1828]",
    accent: "#7eb8ff",
    shape: "arch",
    powered: true,
    tilt: -1,
  },
  {
    name: "The Third Place",
    lang: "hi",
    lineLocal: "स्कैन · ऑर्डर · हो गया",
    lineEn: "Scan · order · done",
    footerLocal: "आपकी रसोई · आपका guest",
    footerEn: "Your kitchen · your guest",
    bg: "from-[#5c3858] via-[#4a3050] to-[#2a1a2e]",
    accent: "#f0a8c8",
    shape: "oval",
    tilt: 2,
  },
  {
    name: "Spice Route",
    lang: "kn",
    lineLocal: "ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್",
    lineEn: "Be your brand",
    footerLocal: "Hero agent · chat",
    footerEn: "Order in WhatsApp",
    bg: "from-[#1f6b5c] via-[#1a5c52] to-[#0a3530]",
    accent: "#a8e6cf",
    shape: "ticket",
    tilt: 0,
  },
  {
    name: "Malayali Makbani",
    lang: "te",
    lineLocal: "స్కాన్ చేసి reorder",
    lineEn: "Scan to reorder",
    footerLocal: "D'aMigo's partner rail",
    footerEn: "Same guest thread",
    bg: "from-[#a85a22] via-[#8b4519] to-[#4a2508]",
    accent: "#ffd89a",
    shape: "circle",
    powered: true,
    tilt: -3,
  },
  {
    name: "D'aMigo's",
    lang: "hi",
    lineLocal: "मुफ्त ऑनबोर्डिंग",
    lineEn: "Free onboarding kit",
    footerLocal: "ಕ · తె · हिं stickers",
    footerEn: "Kannada · Telugu · Hindi",
    bg: "from-[#c45a3a] via-[#9a452f] to-[#5c2818]",
    accent: "#fff5e1",
    shape: "hex",
    powered: true,
    sub: "White-label · co-brand",
    cursive: true,
    foil: true,
    tilt: 1,
  },
  {
    name: "Meghana Foods",
    lang: "kn",
    lineLocal: "ಆಫರ್‌ಗಾಗಿ ಸ್ಕ್ಯಾನ್",
    lineEn: "Scan for offers",
    footerLocal: "ವೀಕೆಂಡ್ combo ready",
    footerEn: "Weekend combo",
    bg: "from-[#2a6368] via-[#234e52] to-[#0f282b]",
    accent: "#7fffd4",
    shape: "oval",
    tilt: -2,
  },
  {
    name: "Kebab Boy HSR",
    lang: "hi",
    lineLocal: "रात में dubara order",
    lineEn: "Late night reorder",
    footerLocal: "वही WhatsApp chat",
    footerEn: "Same chat thread",
    bg: "from-[#2d2d44] via-[#1e1e32] to-[#0a0a14]",
    accent: "#c9b8ff",
    shape: "rounded",
    tilt: 2,
  },
  {
    name: "Ripple Cafe",
    lang: "te",
    lineLocal: "loyalty లో scan",
    lineEn: "Loyalty inside",
    footerLocal: "scan · earn · repeat",
    footerEn: "Points in chat",
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

function shapeShell(shape: StickerShape, compact?: boolean, stripAlign?: boolean) {
  if (stripAlign) {
    return "w-[92px] h-[128px] sm:w-[100px] sm:h-[136px] max-w-none rounded-2xl shrink-0";
  }
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

function StickerCard({
  sticker,
  compact,
  stripAlign,
}: {
  sticker: StickerDef;
  compact?: boolean;
  stripAlign?: boolean;
}) {
  const {
    name,
    lang,
    lineLocal,
    lineEn,
    footerLocal,
    footerEn,
    bg,
    accent,
    shape,
    powered,
    sub,
    cursive,
    tilt = 0,
    foil,
  } = sticker;

  const displayShape = stripAlign ? "rounded" : shape;
  const cardTilt = stripAlign ? 0 : tilt;

  return (
    <div
      className={cn("group flex justify-center", stripAlign && "w-full")}
      style={{ transform: cardTilt ? `rotate(${cardTilt}deg)` : undefined }}
    >
      <div
        className={cn(
          "relative flex flex-col items-center justify-between text-center text-white overflow-hidden",
          !stripAlign && "transition-transform duration-300 group-hover:scale-[1.03] group-hover:-translate-y-0.5",
          "shadow-[0_12px_32px_-8px_rgba(6,21,52,0.45)] ring-1 ring-white/15",
          stripAlign ? "p-2 text-[8px]" : compact ? "p-2.5 text-[9px]" : "p-3.5 sm:p-4 text-[10px] sm:text-[11px]",
          shapeShell(displayShape, compact, stripAlign),
          !stripAlign && shape === "scallop" && "sticker-scallop",
          !stripAlign && shape === "hex" && "sticker-hex",
          !stripAlign && shape === "ticket" && "sticker-ticket",
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
          <div className="flex items-center justify-center gap-1 mb-0.5 flex-wrap min-h-[14px]">
            {powered && !stripAlign ? (
              <span className="rounded-full border border-white/25 bg-white/10 px-1.5 py-0.5 text-[6px] font-bold uppercase tracking-[0.16em] text-white/80">
                Partner
              </span>
            ) : powered && stripAlign ? (
              <span className="text-[5px] font-bold uppercase tracking-widest text-white/70">P</span>
            ) : null}
            <span
              className="rounded-full bg-black/25 px-1 py-0.5 text-[7px] font-bold text-white/90 leading-none"
              title={lang === "hi" ? "Hindi" : lang === "kn" ? "Kannada" : "Telugu"}
            >
              {LANG_LABEL[lang]}
            </span>
          </div>
          <p
            className={cn(
              "font-headline font-extrabold leading-tight tracking-tight drop-shadow-sm line-clamp-2",
              cursive ? "font-cursive text-lg font-normal tracking-normal" : stripAlign ? "text-[9px]" : "text-xs sm:text-sm",
            )}
          >
            {name}
          </p>
          {sub && !stripAlign ? <p className="text-[7px] sm:text-[8px] text-white/75 mt-0.5 italic">{sub}</p> : null}
          <p
            className={cn(
              "mt-1 font-bold leading-snug text-white px-0.5 line-clamp-2",
              stripAlign ? "text-[7px]" : compact ? "text-[8px]" : "text-[9px] sm:text-[10px]",
            )}
            style={accent ? { color: accent } : undefined}
            lang={lang === "hi" ? "hi" : lang === "kn" ? "kn" : "te"}
          >
            {lineLocal}
          </p>
          {!stripAlign ? (
            <p className="text-[6px] sm:text-[7px] uppercase tracking-[0.12em] text-white/55 mt-0.5">{lineEn}</p>
          ) : null}
        </div>

        <QrBlock
          className={cn(
            "relative z-10 my-1 w-[54%]",
            stripAlign ? "max-w-[52px]" : compact ? "max-w-[58px]" : "max-w-[80px]",
          )}
        />

        <div className="relative z-10 px-1 pb-0.5 w-full">
          <p
            className={cn(
              "text-white/85 leading-snug line-clamp-2",
              stripAlign ? "text-[6px]" : "text-[7px] sm:text-[8px]",
            )}
            lang={lang === "hi" ? "hi" : lang === "kn" ? "kn" : "te"}
          >
            {footerLocal}
          </p>
          {!stripAlign ? <p className="text-[6px] text-white/50 mt-0.5">{footerEn}</p> : null}
        </div>

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
      <ShowcaseFrame title="Your name · Hindi · Kannada · Telugu — same layout" className={className}>
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
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-3 sm:gap-x-3 items-end",
          className,
        )}
      >
        {items.map((s) => (
          <figure key={s.name} className="flex flex-col items-center min-w-0 w-full">
            <div className="flex w-full justify-center items-end min-h-[128px] sm:min-h-[136px]">
              <StickerCard sticker={s} compact stripAlign />
            </div>
            <figcaption className="mt-2 w-full min-h-[2.5rem] flex items-start justify-center text-center text-[10px] sm:text-[11px] font-semibold text-primary leading-snug line-clamp-2 px-0.5">
              {s.name}
            </figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <ShowcaseFrame title="Local line · QR · footer — हिं · ಕ · తె on every pack" className={className}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
        {items.map((s) => (
          <StickerCard key={s.name} sticker={s} />
        ))}
      </div>
    </ShowcaseFrame>
  );
}
