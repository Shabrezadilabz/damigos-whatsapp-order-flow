"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PARTNERS = [
  {
    name: "Shadowfax",
    role: "Hyperlocal & city last-mile",
    img: "/images/partner-city-scooter.jpg",
    alt: "City last-mile scooter rider with kraft takeout bag",
  },
  {
    name: "Dunzo",
    role: "Quick commerce–style local drops",
    img: "/images/partner-quick-drop.jpg",
    alt: "Quick local drop rider with insulated food bag",
  },
  {
    name: "Porter",
    role: "Larger orders & multi-drop runs",
    img: "/images/partner-cargo-run.jpg",
    alt: "Cargo three-wheeler loaded with restaurant takeout",
  },
  {
    name: "Your riders",
    role: "In-house fleet on the same status rail",
    img: "/images/partner-inhouse-fleet.jpg",
    alt: "In-house restaurant delivery riders by scooters",
  },
  {
    name: "Regional partners",
    role: "City-specific couriers where you already pay",
    img: "/images/partner-regional-van.jpg",
    alt: "Regional courier van collecting kraft meal bags",
  },
];

const FILM = [
  { src: "/images/partner-city-scooter.jpg", cap: "City last-mile" },
  { src: "/images/delivery-partners.jpg", cap: "Doorstep handoff" },
  { src: "/images/partner-quick-drop.jpg", cap: "Quick drop" },
  { src: "/images/rider-handoff.jpg", cap: "Status in chat" },
  { src: "/images/partner-cargo-run.jpg", cap: "Multi-drop" },
  { src: "/images/kitchen-pack-sticker.jpg", cap: "Kitchen pack" },
  { src: "/images/partner-inhouse-fleet.jpg", cap: "Your fleet" },
  { src: "/images/partner-regional-van.jpg", cap: "Regional van" },
];

export function MovingPartners() {
  const reduce = useReducedMotion();
  const stripRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["8%", "-18%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "10%"]);

  return (
    <div>
      <div ref={stripRef} className="relative -mx-4 sm:-mx-6 xl:-mx-8 overflow-hidden py-2">
        <motion.div style={{ x: x1 }} className="flex w-max gap-4 will-change-transform">
          {[...FILM, ...FILM].map((f, i) => (
            <figure
              key={`a-${i}`}
              className="relative w-[220px] sm:w-[280px] h-36 sm:h-44 shrink-0 rounded-2xl overflow-hidden border border-border-warm bg-surface-card-tint"
            >
              <Image src={f.src} alt={f.cap} fill className="object-cover" sizes="280px" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-3 py-2 text-xs font-semibold text-white">
                {f.cap}
              </figcaption>
            </figure>
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className="mt-4 flex w-max gap-4 will-change-transform">
          {[...FILM].reverse().concat([...FILM].reverse()).map((f, i) => (
            <figure
              key={`b-${i}`}
              className="relative w-[200px] sm:w-[250px] h-28 sm:h-36 shrink-0 rounded-2xl overflow-hidden border border-border-warm bg-surface-card-tint"
            >
              <Image src={f.src} alt={f.cap} fill className="object-cover" sizes="250px" />
            </figure>
          ))}
        </motion.div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#fff8f3] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#fff8f3] to-transparent"
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {PARTNERS.map((p, i) => (
          <motion.article
            key={p.name}
            className="rounded-2xl border border-border-warm bg-white overflow-hidden shadow-[0_8px_28px_-8px_rgba(29,42,74,0.10)]"
            initial={reduce ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-40 sm:h-44 w-full bg-[#efe8dc]">
              <Image src={p.img} alt={p.alt} fill className="object-cover object-center" sizes="(max-width: 640px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="font-headline font-bold text-primary">{p.name}</p>
              <p className="text-sm text-text-muted mt-1">{p.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
