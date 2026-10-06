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
      <section className="bg-canvas-cream bg-grid-pattern border-b border-border-warm">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Guest CRM</p>
            <h1 className="font-headline text-[1.85rem] sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
              See every order.
              <br />
              <span className="text-secondary">Every claim. Every return.</span>
            </h1>
            <p className="mt-5 text-lg text-text-muted max-w-xl">
              One dashboard for the guests you own on WhatsApp: how many ordered, who claimed rewards,
              who re-ordered, and who redeemed at the table.
            </p>
            <Link href="/agent" className="inline-flex mt-7 rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold">
              Hero agent flow
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

      <section className="page-wrap py-10 sm:py-14 md:py-16">
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
        <div className="page-wrap grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Digital loyalty card</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
              One digital card per guest — separate balance, separate history.
            </h2>
            <ul className="mt-5 space-y-3 text-text-muted">
              {[
                "Each customer gets their own card tied to WhatsApp / phone",
                "Points & rewards update automatically after every paid order",
                "Earn on delivery, takeaway, and dine-in — same wallet",
                "No plastic punch card. No second app to download",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary">check_circle</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <StoryImage
            src="/images/ref-loyalty-cafe.jpg"
            alt="Loyalty program on phone: cashback wallet, WhatsApp reminders, repeat orders"
            caption="Cashback wallet, auto WhatsApp reminders, redeem in chat or at the table."
            ratio="portrait"
            object="top"
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-14 md:py-16">
        <div className="max-w-2xl mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Redeem both ways</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
            Online redeem in chat. Dine-in redeem at the table.
          </h2>
          <p className="mt-3 text-text-muted">
            Same points. Same guest. Apply rewards before UPI on a WhatsApp delivery — or walk in,
            open the card, scan the table QR, and claim dessert / discount on the bill.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          <div className="min-w-0">
            <StoryImage
              src="/images/whatsapp-redeem-pay.jpg"
              alt="Redeeming loyalty rewards inside WhatsApp before pay"
              caption="Online: apply Bean Coins in the WhatsApp cart, pay the rest on UPI."
            />
            <h3 className="font-headline font-bold text-primary mt-4">Online / delivery redeem</h3>
            <p className="text-sm text-text-muted mt-2">
              Guest taps Claim Rewards or applies points in the in-chat webview. Discount line updates live. Kitchen still gets a clean ticket.
            </p>
          </div>
          <div className="min-w-0">
            <StoryImage
              src="/images/dinein-scan-redeem.jpg"
              alt="Guest redeeming loyalty points at dine-in table"
              caption="Dine-in: open digital card → scan table QR → bill updates."
            />
            <h3 className="font-headline font-bold text-primary mt-4">Dine-in redeem</h3>
            <p className="text-sm text-text-muted mt-2">
              Points earned on delivery work at the table. Staff see the claim; CRM counts it as a dine-in redemption — automated, not handwritten.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
          <Link href="/campaigns" className="cta-full inline-flex justify-center rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold">
            Campaigns & AI posters
          </Link>
          <Link href="/packaging" className="cta-full inline-flex justify-center rounded-full border border-border-warm bg-white text-primary px-6 py-3 text-sm font-semibold">
            Packaging QR alignment
          </Link>
        </div>
      </section>

      <section className="page-wrap pb-16">
        <LoyaltyCalculator />
      </section>
    </main>
  );
}
