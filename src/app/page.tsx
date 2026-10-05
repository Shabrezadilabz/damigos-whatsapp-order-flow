import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";

const STEPS = [
  {
    n: "01",
    title: "Guest scans the parcel",
    text: "QR on the kraft bag, box lid, or tissue. Camera opens WhatsApp — no app download.",
    img: "/images/hand-scanning-qr.jpg",
    cap: "Scan once. The next order lives in chat.",
  },
  {
    n: "02",
    title: "Menu, cart, pay in WhatsApp",
    text: "Catalog in the thread. Address. UPI / WhatsApp Pay. Confirmation bubble in the same chat.",
    img: "/images/whatsapp-chat-flow.jpg",
    cap: "The storefront is the conversation they already use.",
  },
  {
    n: "03",
    title: "Kitchen packs + QR sticker",
    text: "Ticket prints. Box is packed. A unique reorder QR goes on the lid before it leaves.",
    img: "/images/kitchen-pack-sticker.jpg",
    cap: "Every box is a billboard you own.",
  },
  {
    n: "04",
    title: "Handoff + status in-thread",
    text: "Rider delivers. Guest gets updates in WhatsApp. You keep the number, address, and history.",
    img: "/images/rider-handoff.jpg",
    cap: "No masked numbers. No competitor ads on your order.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-canvas-cream border-b border-border-warm overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-target">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge-peach-bg text-badge-peach-text text-[11px] font-bold uppercase tracking-wider mb-5">
              WhatsApp food delivery architecture
            </p>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary tracking-tight leading-[1.12]">
              Order on WhatsApp.
              <br />
              <span className="text-secondary">Own the guest.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
              A direct order rail that lives inside chat: scan the parcel QR → menu → UPI → kitchen → rider.
              Aggregators take 28–34%. You keep the relationship — and 0% commission.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="cta-full inline-flex items-center justify-center rounded-full bg-secondary text-white px-7 py-3.5 font-headline text-sm font-bold shadow-[0_4px_16px_rgba(154,69,47,0.28)]"
              >
                Validate this with us
              </Link>
              <Link
                href="#flow"
                className="cta-full inline-flex items-center justify-center rounded-full border border-border-warm bg-white text-primary px-7 py-3.5 font-headline text-sm font-semibold"
              >
                See the 4-step flow
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border-warm">
              {[
                ["0%", "Commission"],
                ["1 scan", "To reorder"],
                ["100%", "Guest data yours"],
              ].map(([k, v]) => (
                <div key={v}>
                  <p className="font-headline text-xl sm:text-2xl font-bold text-primary">{k}</p>
                  <p className="text-xs text-text-muted">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-target">
            <StoryImage
              src="/images/hero-whatsapp-order.jpg"
              alt="WhatsApp food order on a phone next to a kraft takeout bag"
              caption="The order happens in WhatsApp. The bag is yours."
              priority
            />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-target order-2 lg:order-1">
            <StoryImage
              src="/images/economics-receipts.jpg"
              alt="Aggregator commission receipt versus direct WhatsApp 0% commission"
              caption="Same meal. Different owner of the guest."
            />
          </div>
          <div className="reveal-target order-1 lg:order-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">The leak</p>
            <h2 className="font-headline text-3xl font-bold text-primary">You cook. They keep the diner.</h2>
            <ul className="mt-6 space-y-3 text-text-muted">
              {[
                "28–34% commission on every delivery ticket.",
                "Phone numbers masked. You cannot remarket the guest.",
                "The app cross-promotes the dark kitchen next door.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">cancel</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link href="/economics" className="inline-flex mt-6 text-sm font-semibold text-secondary">
              See the economics →
            </Link>
          </div>
        </div>
      </section>

      {/* Packaging gallery */}
      <section className="bg-surface-ivory border-y border-border-warm py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-10 reveal-target">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Packaging is the store</p>
            <h2 className="font-headline text-3xl font-bold text-primary">QR on the bag, the box, the tissue.</h2>
            <p className="mt-3 text-text-muted">
              If they can see it, they can reorder. Every surface that leaves your kitchen is a WhatsApp doorway.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="reveal-target">
              <StoryImage
                src="/images/parcel-qr-closeup.jpg"
                alt="Large QR sticker on kraft takeout parcel"
                caption="Bag: scan on the way in."
                ratio="square"
              />
            </div>
            <div className="reveal-target">
              <StoryImage
                src="/images/box-lid-qr.jpg"
                alt="QR code sticker on meal box lid"
                caption="Lid: scan while they eat."
                ratio="square"
              />
            </div>
            <div className="reveal-target">
              <StoryImage
                src="/images/tissue-qr-insert.jpg"
                alt="Tissue napkin with reorder QR next to open meal box"
                caption="Tissue: last thing they touch."
                ratio="square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-step flow */}
      <section id="flow" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 space-y-16">
        <div className="reveal-target max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">The flow</p>
          <h2 className="font-headline text-3xl font-bold text-primary">Four pictures. The whole architecture.</h2>
        </div>
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className={cnGrid(i)}
          >
            <div className={`reveal-target ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <StoryImage src={s.img} alt={s.title} caption={s.cap} ratio={s.n === "02" ? "portrait" : "landscape"} />
            </div>
            <div className={`reveal-target flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="font-headline text-sm font-bold text-accent-gold">{s.n}</span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mt-2">{s.title}</h3>
              <p className="mt-4 text-text-muted leading-relaxed text-lg">{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Architecture teaser */}
      <section className="bg-hero-navy-surface text-surface-ivory py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-target">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold mb-3">Under the hood</p>
            <h2 className="font-headline text-3xl font-bold">WhatsApp in. Kitchen out. You own the middle.</h2>
            <ol className="mt-6 space-y-3 text-white/80">
              {[
                "Channels: parcel QR, Instagram bio, Google Maps, WhatsApp blast",
                "Chat: Cloud API catalog + cart + address",
                "Pay: UPI / WhatsApp Pay → instant settlement",
                "Ops: KDS / printer → rider dispatch → status bubbles",
                "CRM: phone, address, orders stay on your rail",
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent-gold font-bold">{i + 1}.</span>
                  {t}
                </li>
              ))}
            </ol>
            <Link
              href="/architecture"
              className="inline-flex mt-8 rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold"
            >
              Full architecture
            </Link>
          </div>
          <div className="reveal-target">
            <StoryImage
              src="/images/kitchen-pack-sticker.jpg"
              alt="Kitchen packing with WhatsApp order ticket"
              caption="Ops you already run — minus the aggregator."
            />
          </div>
        </div>
      </section>

      {/* Owner CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="reveal-target">
          <StoryImage
            src="/images/owner-phone-success.jpg"
            alt="Restaurant owner with WhatsApp order confirmations"
            caption="Direct orders. Your number. Your brand."
          />
        </div>
        <div className="reveal-target">
          <h2 className="font-headline text-3xl font-bold text-primary">Enter the market with a rail you can explain in 30 seconds.</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            This draft is the validation story for restaurants: packaging QR → WhatsApp order → 0% commission.
            Founding cohort: first 10 ambitious brands.
          </p>
          <Link
            href="/contact"
            className="inline-flex mt-6 rounded-full bg-secondary text-white px-7 py-3.5 font-headline text-sm font-bold"
          >
            Apply for founding cohort
          </Link>
        </div>
      </section>
    </main>
  );
}

function cnGrid(i: number) {
  return `grid lg:grid-cols-2 gap-8 lg:gap-12 items-center`;
}
