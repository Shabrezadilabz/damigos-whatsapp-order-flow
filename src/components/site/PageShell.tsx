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
      <div className="pt-[5.75rem] sm:pt-[6.25rem]">{children}</div>
      <SiteFooter />
    </div>
  );
}

