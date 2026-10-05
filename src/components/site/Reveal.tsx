"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal-target"));
    if (!els.length) return;

    const show = (el: Element) => el.classList.add("reveal-in");

    // Always paint content — never leave the page blank if IO misses.
    const fallback = window.setTimeout(() => els.forEach(show), 80);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "80px 0px" },
    );

    els.forEach((el) => io.observe(el));

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
