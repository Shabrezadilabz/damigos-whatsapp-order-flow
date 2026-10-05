"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DamigosLogo } from "./DamigosLogo";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/", label: "The flow", match: "/" },
  { href: "/packaging", label: "Packaging", match: "/packaging" },
  { href: "/agent", label: "WA agent", match: "/agent" },
  { href: "/crm", label: "Loyalty", match: "/crm" },
  { href: "/campaigns", label: "Campaigns", match: "/campaigns" },
  { href: "/delivery", label: "Delivery", match: "/delivery" },
  { href: "/economics", label: "Economics", match: "/economics" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="bg-primary-container text-on-primary py-1.5 px-3 sm:px-4 text-center">
        <Link href="/waitlist" className="text-[10px] sm:text-xs font-headline font-semibold text-secondary-container hover:text-white">
          <span className="sm:hidden">Waitlist · 0% commission · 3x orders</span>
          <span className="hidden sm:inline">Cloud kitchen + takeaway waitlist · guest data yours · 3x orders</span>
        </Link>
      </div>
      <div
        className={cn(
          "border-b transition-all",
          scrolled
            ? "bg-surface-ivory/95 backdrop-blur-xl border-border-warm shadow-[0_4px_24px_rgba(29,42,74,0.06)]"
            : "bg-surface-ivory/90 backdrop-blur-md border-transparent",
        )}
      >
        <div className="page-wrap h-14 sm:h-16 flex items-center justify-between gap-2 min-w-0">
          <DamigosLogo size="md" className="shrink-0" />
          <nav className="hidden 2xl:flex items-center gap-0.5 min-w-0">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-2 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap",
                  pathname === l.match
                    ? "bg-badge-peach-bg text-badge-peach-text"
                    : "text-on-surface-variant hover:text-on-surface",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/waitlist"
              className="inline-flex rounded-full border border-border-warm bg-white text-primary px-3 py-2 text-xs sm:text-sm font-headline font-semibold"
            >
              Waitlist
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-secondary text-white px-3 sm:px-4 py-2 text-xs sm:text-sm font-headline font-semibold hover:bg-[#8E3E2A] transition-colors"
            >
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book a validation</span>
            </Link>
            <button
              type="button"
              className="2xl:hidden h-10 w-10 rounded-full border border-border-warm bg-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <div className="2xl:hidden border-t border-border-warm page-wrap py-3 space-y-1 bg-surface-ivory max-h-[70vh] overflow-y-auto">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="block py-2.5 font-semibold text-primary">
                {l.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
