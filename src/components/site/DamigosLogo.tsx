import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "navy" | "cream";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  tagline?: boolean;
};

const heightPx = { sm: 28, md: 36, lg: 48, xl: 64 } as const;

/**
 * Official cursive D'aMigo's logo from Stitch
 * (script wordmark + terracotta underline + BE A BRAND).
 */
export function DamigosLogo({
  variant = "navy",
  size = "md",
  className,
  href = "/",
}: Props) {
  const h = heightPx[size];
  const w = Math.round(h * 3.55);

  const mark = (
    <Image
      src="/brand/damigos-logo.png"
      alt="D'aMigo's — Be a Brand"
      width={w}
      height={h}
      className={cn(
        "object-contain object-left",
        variant === "cream" && "brightness-0 invert",
      )}
      style={{ width: w, height: h, maxWidth: "min(42vw, 180px)" }}
      priority
    />
  );

  if (!href) {
    return <span className={cn("inline-flex items-center", className)}>{mark}</span>;
  }

  return (
    <Link
      href={href}
      className={cn("inline-flex items-center group", className)}
      aria-label="D'amigo's home"
    >
      {mark}
    </Link>
  );
}
