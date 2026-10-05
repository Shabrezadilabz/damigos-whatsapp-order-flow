"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

const BEATS = [
  { t: 0, label: "01 · Delivery" },
  { t: 3.5, label: "02 · Doorstep" },
  { t: 7, label: "03 · Scan QR" },
  { t: 11, label: "04 · Loyalty" },
  { t: 14.5, label: "05 · WhatsApp order" },
];

export function HeroStoryVideo({
  className,
  caption = "Delivery → scan → loyalty → order in WhatsApp · silent loop",
}: {
  className?: string;
  caption?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [beat, setBeat] = useState(BEATS[0].label);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const sync = () => {
      const t = v.currentTime;
      let label = BEATS[0].label;
      for (const b of BEATS) {
        if (t >= b.t) label = b.label;
      }
      setBeat(label);
    };

    const onReady = () => {
      setReady(true);
      void v.play().catch(() => undefined);
    };

    v.addEventListener("timeupdate", sync);
    v.addEventListener("loadeddata", onReady);
    if (v.readyState >= 2) onReady();

    return () => {
      v.removeEventListener("timeupdate", sync);
      v.removeEventListener("loadeddata", onReady);
    };
  }, []);

  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-border-warm bg-surface-card-tint shadow-[0_8px_28px_-8px_rgba(29,42,74,0.12)] aspect-[16/10] sm:aspect-[16/9]">
        <Image
          src="/images/reel/01-delivery.jpg"
          alt=""
          fill
          priority
          className={cn("object-cover transition-opacity duration-500", ready ? "opacity-0" : "opacity-100")}
          sizes="(max-width: 768px) 100vw, 56vw"
        />
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            ready ? "opacity-100" : "opacity-0",
          )}
          src="/videos/hero-order-loop.mp4"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-label="Silent story: delivery bag with QR, scan for loyalty, order on WhatsApp"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent px-4 pb-3.5 pt-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold">{beat}</p>
        </div>
      </div>
      {caption ? <figcaption className="mt-3 text-sm text-text-muted leading-snug">{caption}</figcaption> : null}
    </figure>
  );
}
