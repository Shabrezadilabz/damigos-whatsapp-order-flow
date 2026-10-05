import type { Metadata } from "next";
import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";
import { LoyaltyCalculator } from "@/components/site/LoyaltyCalculator";

export const metadata: Metadata = { title: "Guest CRM & Loyalty" };

const METRICS = [
  { k: "12,480", l: "Total orders", sub: "Delivery + dine-in + takeaway" },
  { k: "3,214", l: "Active guests", sub: "With phone + WhatsApp ID" },
  { k: "891", l: "Rewards claimed", sub: "This month across channels" },
  { k: "2,106", l: "Re-orders", sub: "Guests who came back" },
  { k: "340", l: "Dine-in redemptions", sub: "Table QR / digital card" },
  { k: "64%", l: "Repeat rate", sub: "Of WhatsApp-acquired guests" },
];

export default function CrmPage() {
  return (
    <main>
      <section className="bg-canvas-cream border-b border-border-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Guest CRM</p>
            <h1 className="font-headline text-4xl sm:text-5xl font-extrabold text-primary tracking-tight">
              See every order.
              <br />
              <span className="text-secondary">Every claim. Every return.</span>
            </h1>
            <p className="mt-5 text-lg text-text-muted max-w-xl">
              One dashboard for the guests you own on WhatsApp: how many ordered, who claimed rewards,
              who re-ordered, and who redeemed at the table.
            </p>
            <Link href="/agent" className="inline-flex mt-7 rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold">
              See the WhatsApp agent flow →
            </Link>
          </div>
          <StoryImage
            src="/images/crm-dashboard.jpg"
            alt="Guest CRM dashboard with orders, rewards claimed, and re-orders"
            caption="Orders · Rewards claimed · Re-orders · Dine-in redemptions — one screen."
            priority
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="font-headline text-2xl font-bold text-primary mb-6">What the dashboard shows</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {METRICS.map((m) => (
            <div key={m.l} className="rounded-2xl border border-border-warm bg-white p-5">
              <p className="font-headline text-3xl font-extrabold text-primary">{m.k}</p>
              <p className="font-semibold text-on-surface mt-1">{m.l}</p>
              <p className="text-sm text-text-muted mt-1">{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-ivory border-y border-border-warm py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Digital loyalty card</p>
            <h2 className="font-headline text-3xl font-bold text-primary">A wallet in WhatsApp — not another app.</h2>
            <ul className="mt-5 space-y-3 text-text-muted">
              {[
                "Bean Coins / points balance live on the guest’s phone",
                "Earn on delivery, takeaway, and dine-in",
                "Redeem dessert / discount at the table by scanning QR",
                "Same identity across packaging QR and tabletop QR",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <StoryImage
            src="/images/loyalty-digital-card.jpg"
            alt="Digital loyalty card on phone with points and dine-in QR"
            caption="Points, progress to reward, dine-in redeem QR — one card."
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 items-center">
        <StoryImage
          src="/images/dinein-scan-redeem.jpg"
          alt="Guest redeeming loyalty points at dine-in table"
          caption="Dine-in: scan table QR → claim reward → bill updates."
        />
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Dine-in redeem</p>
          <h2 className="font-headline text-3xl font-bold text-primary">Rewards earned on delivery work at the table.</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Guests who first ordered via WhatsApp delivery can walk in, open their digital card, and redeem —
            dessert, discount, or a free item — without a plastic punch card.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <LoyaltyCalculator />
      </section>
    </main>
  );
}
