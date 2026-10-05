import type { Metadata } from "next";
import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips } from "@/components/site/StepChips";

export const metadata: Metadata = { title: "Packaging QR & Alignment" };

const SURFACES = [
  {
    title: "Kraft bag",
    text: "Large QR on the front panel, eye-level when the guest carries it home. Print zone clear of folds and handles.",
    img: "/images/parcel-qr-closeup.jpg",
    cap: "Bag front — scan on the walk in.",
  },
  {
    title: "Box lid",
    text: "Sticker sits dead-center in a print-safe square so every lid from the kitchen looks the same. No crooked placement.",
    img: "/images/box-lid-qr.jpg",
    cap: "Lid center — scan while they eat.",
  },
  {
    title: "Tissue / insert",
    text: "Last surface they touch. Small QR in the corner with quiet copy — reorder without opening an app store.",
    img: "/images/tissue-qr-insert.jpg",
    cap: "Tissue corner — last touch, next order.",
  },
];

const ALIGN = [
  { n: "01", t: "Safe zone", d: "Quiet margin around the code so cameras lock fast — even in dim dinner light." },
  { n: "02", t: "Same spot every box", d: "Kitchen packs to a template: center lid, front bag, tissue corner. Zero guesswork." },
  { n: "03", t: "Unique per order", d: "Each sticker can carry guest + order context so reorders open the right WhatsApp thread." },
  { n: "04", t: "Print → pack → out", d: "Ticket prints, sticker lands, bag leaves. No designer, no Canva night before service." },
];

export default function PackagingPage() {
  return (
    <main>
      <section className="bg-canvas-cream border-b border-border-warm">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Packaging products</p>
            <h1 className="font-headline text-[1.85rem] sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              QR on the bag, box, and tissue.
              <br />
              <span className="text-secondary">Aligned once. Repeated forever.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-muted max-w-xl">
              Every surface that leaves your kitchen is a WhatsApp doorway. We show exactly where the code sits —
              so kitchen staff place it the same way on every order, with no manual design work.
            </p>
            <StepChips steps={["Bag", "Box lid", "Tissue", "Scan → chat"]} />
          </div>
          <StoryImage
            src="/images/qr-alignment-packaging.jpg"
            alt="QR alignment on kraft bag, meal box lid, and tissue"
            caption="One placement system across bag, lid, and tissue."
            priority
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 md:py-20">
        <div className="max-w-2xl mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Surfaces</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">Three products. One reorder rail.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SURFACES.map((s) => (
            <div key={s.title} className="min-w-0">
              <StoryImage src={s.img} alt={s.title} caption={s.cap} ratio="square" />
              <h3 className="font-headline font-bold text-primary mt-4">{s.title}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-hero-navy-surface text-surface-ivory py-10 sm:py-16">
        <div className="page-wrap grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold mb-3">How alignment works</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold">Kitchen places it. Camera finds it.</h2>
            <ul className="mt-6 space-y-4">
              {ALIGN.map((a) => (
                <li key={a.n} className="flex gap-3">
                  <span className="font-headline text-accent-gold font-bold shrink-0">{a.n}</span>
                  <div>
                    <p className="font-semibold">{a.t}</p>
                    <p className="text-sm text-white/70 mt-0.5">{a.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <StoryImage
            src="/images/hand-scanning-qr.jpg"
            alt="Hand scanning parcel QR with phone"
            caption="Guest scans once — WhatsApp opens your agent."
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 text-center">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
          Packaging is automated with campaigns and loyalty.
        </h2>
        <p className="mt-3 text-text-muted max-w-xl mx-auto">
          Stickers, offers, and digital cards share the same guest identity — no separate apps, no manual poster nights.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
          <Link href="/campaigns" className="cta-full inline-flex justify-center rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold">
            Campaigns & AI posters
          </Link>
          <Link href="/crm" className="cta-full inline-flex justify-center rounded-full border border-border-warm bg-white text-primary px-6 py-3 text-sm font-semibold">
            Digital card & redeem
          </Link>
        </div>
      </section>
    </main>
  );
}
