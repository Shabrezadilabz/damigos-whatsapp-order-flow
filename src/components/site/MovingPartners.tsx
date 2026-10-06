"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BrandMark, RAIL_BRANDS } from "./BrandMark";

export function MovingPartners() {
  const reduce = useReducedMotion();

  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Pay · chat · last mile</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {RAIL_BRANDS.map((b, i) => (
          <motion.article
            key={b.label}
            className="rounded-2xl border border-border-warm bg-white px-4 py-5 shadow-[0_8px_28px_-8px_rgba(29,42,74,0.10)]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <BrandMark name={b.name} className="h-8" />
            <p className="text-sm text-text-muted mt-3 leading-snug">{b.role}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
