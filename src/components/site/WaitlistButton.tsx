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
        size === "sm" ? "px-4 py-2 text-xs sm:text-sm" : "cta-full px-7 py-3.5 text-sm",
        className,
      )}
    >
      Join waitlist
    </Link>
  );
}
