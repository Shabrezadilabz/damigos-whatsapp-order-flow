import type { Metadata } from "next";
import { StoryImage } from "@/components/site/StoryImage";

export const metadata: Metadata = { title: "Validate" };

export default function ContactPage() {
  return (
    <main className="page-wrap py-10 sm:py-14 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">Founding cohort 2026</p>
          <h1 className="font-headline text-[1.85rem] sm:text-4xl font-extrabold text-primary mt-3">
            Validate WhatsApp delivery with 10 brands.
          </h1>
          <p className="mt-4 text-text-muted leading-relaxed">
            We walk your packaging, menu, and kitchen ticket into a live WhatsApp order rail. No hardware overhaul.
            You keep guest numbers.
          </p>
          <div className="mt-8">
            <StoryImage
              src="/images/owner-phone-success.jpg"
              alt="Restaurant owner ready to take WhatsApp orders"
              caption="Pehle Rishta. Phir Reach."
            />
          </div>
        </div>

        <form
          className="rounded-3xl border border-border-warm bg-white p-6 sm:p-8 space-y-4 shadow-[0_8px_28px_-8px_rgba(29,42,74,0.08)]"
          action="mailto:partner@damigos.in"
          method="post"
          encType="text/plain"
        >
          <label className="block text-sm font-semibold text-primary">
            Brand name
            <input required name="brand" className="mt-1.5 w-full rounded-xl border border-border-warm px-4 py-3 text-base bg-canvas-cream" />
          </label>
          <label className="block text-sm font-semibold text-primary">
            City
            <input required name="city" className="mt-1.5 w-full rounded-xl border border-border-warm px-4 py-3 text-base bg-canvas-cream" />
          </label>
          <label className="block text-sm font-semibold text-primary">
            WhatsApp number
            <input required name="phone" type="tel" className="mt-1.5 w-full rounded-xl border border-border-warm px-4 py-3 text-base bg-canvas-cream" />
          </label>
          <label className="block text-sm font-semibold text-primary">
            Monthly delivery GMV (approx)
            <select name="gmv" className="mt-1.5 w-full rounded-xl border border-border-warm px-4 py-3 text-base bg-canvas-cream">
              <option>Under ₹2L</option>
              <option>₹2L – ₹8L</option>
              <option>₹8L – ₹25L</option>
              <option>₹25L+</option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-secondary text-white py-3.5 font-headline font-bold text-sm"
          >
            Request validation session
          </button>
          <p className="text-xs text-text-muted text-center">Opens email to partner@damigos.in</p>
        </form>
      </div>
    </main>
  );
}
