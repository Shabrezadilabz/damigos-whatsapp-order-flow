import Image from "next/image";
import { cn } from "@/lib/cn";

export function StoryImage({
  src,
  alt,
  caption,
  className,
  priority,
  ratio = "landscape",
  object = "center",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  ratio?: "landscape" | "portrait" | "square" | "card";
  object?: "center" | "top";
}) {
  const sizes =
    ratio === "portrait"
          ? "aspect-[4/5] md:aspect-[3/4]"
      : ratio === "square"
        ? "aspect-square"
        : ratio === "card"
          ? "aspect-[4/5] sm:h-80 sm:aspect-auto"
          : "aspect-[16/10] sm:aspect-[16/9]";

  return (
    <figure className={cn("group", className)}>
      <div className={cn("relative overflow-hidden rounded-2xl border border-border-warm bg-surface-card-tint shadow-[0_8px_28px_-8px_rgba(29,42,74,0.12)]", sizes)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-[1.03]",
            object === "top" && "object-top",
          )}
          sizes="(max-width: 768px) 100vw, 56vw"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm text-text-muted leading-snug">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
