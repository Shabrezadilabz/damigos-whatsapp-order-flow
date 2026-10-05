import Link from "next/link";
import { cn } from "@/lib/cn";

export function WaitlistButton({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <Link
      href="/waitlist"
      className={cn(
        "btn-waitlist inline-flex items-center justify-center rounded-full text-white shrink-0",
        size === "sm" ? "px-4 py-2 text-[1.35rem] leading-none" : "cta-full px-8 py-3.5 text-[1.75rem] sm:text-[2rem] leading-none",
        className,
      )}
    >
      Join waitlist
    </Link>
  );
}
