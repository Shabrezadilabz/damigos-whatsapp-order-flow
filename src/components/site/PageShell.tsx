"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Reveal } from "./Reveal";

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Reveal />
      <SiteHeader />
      <div className="pt-[calc(5.75rem+env(safe-area-inset-top))] sm:pt-[calc(6.25rem+env(safe-area-inset-top))]">
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}

