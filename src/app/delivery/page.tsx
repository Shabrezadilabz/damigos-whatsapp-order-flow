import type { Metadata } from "next";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips } from "@/components/site/StepChips";
import { WaitlistButton } from "@/components/site/WaitlistButton";
import { MovingPartners } from "@/components/site/MovingPartners";
import { ShotStrip } from "@/components/site/ShotStrip";
import { BrandMark, RAIL_BRANDS } from "@/components/site/BrandMark";

export const metadata: Metadata = { title: "Delivery Partners" };

const FLOW = [
  {
    id: "pay-in-chat",
    n: "01",
    t: "Order paid in WhatsApp",
    d: "UPI / rewards settle. Ticket hits the kitchen.",
  },
  {
    id: "kitchen-packs",
    n: "02",
    t: "Pack + QR sticker",
    d: "Lid / bag gets the reorder code before handoff.",
  },
  {
    id: "partner-rides",
    n: "03",
    t: "Partner assigned",
    d: "Shadowfax, Dunzo, Porter, or your rider — rules you set.",
  },
  {
    id: "status-bubble",
    n: "04",
    t: "Status in the same chat",
    d: "Picked up · on the way · delivered — guest never leaves WhatsApp.",
  },
];

export default function DeliveryPage() {
  return (
    <main>
      <section className="bg-canvas-cream bg-grid-pattern border-b border-border-warm">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Last mile</p>
            <h1 className="font-headline text-[1.85rem] sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              Delivery partners on your rail.
              <br />
              <span className="text-secondary">Not on their marketplace.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-muted max-w-xl">
              Order, pay, and loyalty stay in WhatsApp. Last mile can ride Shadowfax, Dunzo, Porter,
              or your own riders — guest still sees status in your chat, and you keep the phone number.
            </p>
            <StepChips
              steps={["Pay in chat", "Kitchen packs", "Partner rides", "Status bubble"]}
              hrefs={["#pay-in-chat", "#kitchen-packs", "#partner-rides", "#status-bubble"]}
            />
          </div>
          <StoryImage
            src="/images/ref-menu-tracking.jpg"
            alt="Restaurant menu on one phone and live delivery tracking on the other"
            caption="Menu and cart in chat. Live ETA on the same order."
            ratio="portrait"
            object="top"
            priority
          />
        </div>
      </section>

      <section id="pay-in-chat" className="scroll-mt-28 bg-hero-navy-surface text-surface-ivory py-10 sm:py-16">
        <div className="page-wrap">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold mb-3">01 · Pay in chat</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6">From paid chat to doorstep</h2>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {RAIL_BRANDS.filter((b) => ["razorpay", "meta", "whatsapp", "upi"].includes(b.name)).map((b) => (
              <div key={b.label} className="rounded-xl bg-white px-3 py-2">
                <BrandMark name={b.name} className="h-7 w-auto" />
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {FLOW.map((f) => (
              <div key={f.n} className="flex gap-3">
                <span className="font-headline text-accent-gold font-bold shrink-0">{f.n}</span>
                <div>
                  <p className="font-semibold">{f.t}</p>
                  <p className="text-sm text-white/70 mt-1">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kitchen-packs" className="scroll-mt-28 page-wrap py-10 sm:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">02 · Kitchen packs</p>
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">Pack + QR, then the partner picks up.</h2>
        <ShotStrip
          shots={[
            { src: "/images/kitchen-pack-sticker.jpg", cap: "Ticket + QR sticker" },
            { src: "/images/box-lid-qr.jpg", cap: "Lid alignment" },
            { src: "/images/parcel-qr-closeup.jpg", cap: "Bag front QR" },
            { src: "/images/qr-alignment-packaging.jpg", cap: "Same spot every box" },
            { src: "/images/tissue-qr-insert.jpg", cap: "Tissue insert" },
            { src: "/images/partner-quick-drop.jpg", cap: "Partner pickup" },
            { src: "/images/partner-inhouse-fleet.jpg", cap: "Your riders ready" },
            { src: "/images/hero-whatsapp-order.jpg", cap: "Bag and box leave" },
          ]}
        />
      </section>

      <section id="partner-rides" className="scroll-mt-28 page-wrap py-10 sm:py-16 overflow-hidden">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">03 · Partner rides</p>
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-3">Who can carry the order</h2>
        <p className="text-text-muted mb-8 max-w-2xl">
          Scroll the page — the last-mile film moves with you. Then pick who carries the bag.
        </p>
        <MovingPartners />
        <p className="mt-6 text-sm text-text-muted max-w-2xl">
          Integration path is API / partner dispatch where available — you choose rules (zone, ticket size, peak hours).
          Aggregator marketplaces are optional; this rail does not need their 28–34% commission to move food.
        </p>
      </section>

      <section id="status-bubble" className="scroll-mt-28 bg-canvas-cream bg-grid-pattern border-y border-border-warm py-10 sm:py-16">
        <div className="page-wrap">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">04 · Status bubble</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">
            Delivered — rate, reorder, receipt in the same thread.
          </h2>
          <ShotStrip
            shots={[
              { src: "/images/ref-delivery-complete.jpg", cap: "Delivery complete" },
              { src: "/images/rider-handoff.jpg", cap: "Doorstep handoff" },
              { src: "/images/delivery-partners.jpg", cap: "Bag in hand" },
              { src: "/images/partner-city-scooter.jpg", cap: "On the way" },
              { src: "/images/partner-cargo-run.jpg", cap: "Multi-drop run" },
              { src: "/images/partner-regional-van.jpg", cap: "Regional van" },
              { src: "/images/reel/02-handoff.jpg", cap: "Status in chat" },
              { src: "/images/whatsapp-chat-flow.jpg", cap: "Rate · reorder · receipt" },
            ]}
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 text-center">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
          Want this wired to your city partners?
        </h2>
        <WaitlistButton className="mt-6 mx-auto" />
      </section>
    </main>
  );
}
