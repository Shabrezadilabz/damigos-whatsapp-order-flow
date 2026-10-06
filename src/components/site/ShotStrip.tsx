import Image from "next/image";
import { cn } from "@/lib/cn";

export function ShotStrip({
  shots,
  className,
}: {
  shots: { src: string; cap: string; alt?: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-3", className)}>
      {shots.map((s) => (
        <figure
          key={s.src}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-warm bg-surface-card-tint shadow-[0_8px_24px_-12px_rgba(29,42,74,0.18)]"
        >
          <Image src={s.src} alt={s.alt ?? s.cap} fill className="object-cover object-center" sizes="(max-width: 768px) 50vw, 25vw" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-3 py-2.5 text-[11px] sm:text-xs font-semibold text-white">
            {s.cap}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
