import type { Metadata } from "next";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips } from "@/components/site/StepChips";
import { WaitlistButton } from "@/components/site/WaitlistButton";
import { MovingPartners } from "@/components/site/MovingPartners";

export const metadata: Metadata = { title: "Delivery Partners" };

const FLOW = [
  { n: "01", t: "Order paid in WhatsApp", d: "UPI / rewards settle. Ticket hits the kitchen." },
  { n: "02", t: "Pack + QR sticker", d: "Lid / bag gets the reorder code before handoff." },
  { n: "03", t: "Partner assigned", d: "Shadowfax, Dunzo, Porter, or your rider — rules you set." },
  { n: "04", t: "Status in the same chat", d: "Picked up · on the way · delivered — guest never leaves WhatsApp." },
];

export default function DeliveryPage() {
  return (
    <main>
      <section className="bg-canvas-cream border-b border-border-warm">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Last mile</p>
            <h1 className="font-logo text-[2.4rem] sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
              Delivery partners on your rail.
              <br />
              <span className="text-secondary">Not on their marketplace.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-muted max-w-xl">
              Order, pay, and loyalty stay in WhatsApp. Last mile can ride Shadowfax, Dunzo, Porter,
              or your own riders — guest still sees status in your chat, and you keep the phone number.
            </p>
            <StepChips steps={["Pay in chat", "Kitchen packs", "Partner rides", "Status bubble"]} />
          </div>
          <StoryImage
            src="/images/delivery-partners.jpg"
            alt="Delivery rider handing kraft takeout bag with QR to customer"
            caption="Partner delivers the bag. You own the guest."
            priority
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 overflow-hidden">
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

      <section className="bg-hero-navy-surface text-surface-ivory py-10 sm:py-16">
        <div className="page-wrap">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-8">From paid chat to doorstep</h2>
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
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <StoryImage
              src="/images/kitchen-pack-sticker.jpg"
              alt="Kitchen packing with QR sticker"
              caption="Kitchen packs — partner picks up."
            />
            <StoryImage
              src="/images/rider-handoff.jpg"
              alt="Rider handoff of takeout order"
              caption="Handoff — status already in WhatsApp."
            />
          </div>
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
