"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { DamigosLogo } from "./DamigosLogo";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/", label: "The flow", match: "/" },
  { href: "/agent", label: "WA agent", match: "/agent" },
  { href: "/crm", label: "Guest CRM", match: "/crm" },
  { href: "/architecture", label: "Architecture", match: "/architecture" },
  { href: "/economics", label: "Economics", match: "/economics" },
  { href: "/contact", label: "Validate", match: "/contact" },
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
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-primary-container text-on-primary py-1.5 px-4 text-center">
        <Link href="/contact" className="text-[11px] sm:text-xs font-headline font-semibold text-secondary-container hover:text-white">
          WhatsApp order rail · 0% commission · Founding cohort 2026 →
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
        <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 flex items-center justify-between gap-3">
          <DamigosLogo size="sm" className="sm:hidden" />
          <DamigosLogo size="md" className="hidden sm:inline-flex" />
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold whitespace-nowrap",
                  pathname === l.match
                    ? "bg-badge-peach-bg text-badge-peach-text"
                    : "text-on-surface-variant hover:text-on-surface",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex rounded-full bg-secondary text-white px-4 py-2 text-sm font-headline font-semibold hover:bg-[#8E3E2A] transition-colors"
            >
              Book a validation
            </Link>
            <button
              type="button"
              className="lg:hidden h-10 w-10 rounded-full border border-border-warm bg-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </div>
        {open ? (
          <div className="lg:hidden border-t border-border-warm px-4 py-3 space-y-1 bg-surface-ivory">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="block py-2.5 font-semibold text-primary">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="block py-3 text-center rounded-full bg-secondary text-white font-semibold">
              Book a validation
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
