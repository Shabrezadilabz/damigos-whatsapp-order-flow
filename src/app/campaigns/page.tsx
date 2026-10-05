import type { Metadata } from "next";
import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips } from "@/components/site/StepChips";

export const metadata: Metadata = { title: "Campaigns, AI Posters & Geo Offers" };

const TRIGGERS = [
  { t: "Festivals", d: "Diwali, Eid, Christmas, Holi — templates fire on the calendar. Menu + brand locked in." },
  { t: "Payday check", d: "1st / last week of the month: wallet-friendly bundles push to guests who ordered before." },
  { t: "Weekend", d: "Friday–Sunday brunch / family packs auto-schedule. No staff designing Thursday night." },
  { t: "Offers & BOGO", d: "Percentage off, free dessert, second item — rules apply in chat cart and loyalty redeem." },
];

const AUTO = [
  "Pick trigger (festival / payday / weekend / geo / custom)",
  "AI builds poster + WhatsApp copy from your menu & brand",
  "Geo radius targets nearby phones (or blast your CRM list)",
  "Guest taps → Hero agent → order / redeem — tracked in CRM",
];

export default function CampaignsPage() {
  return (
    <main>
      <section className="bg-hero-navy-surface text-surface-ivory">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold mb-3">Automated campaigns</p>
            <h1 className="font-logo text-[2.4rem] sm:text-5xl lg:text-6xl tracking-tight">
              Offers, festivals, payday, weekend —
              <span className="text-secondary-container"> posters write themselves.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl">
              Loyalty points, rewards, and campaigns run on one rail. AI generates offer posters.
              Geo sends them to people near the restaurant. No Canva. No intern. No manual blast list.
            </p>
            <StepChips steps={["Trigger", "AI poster", "Geo / CRM", "Order in chat"]} tone="dark" />
          </div>
          <StoryImage
            src="/images/ai-campaign-posters.jpg"
            alt="AI-generated festival offer poster on phone and campaign dashboard"
            caption="Festival / weekend / payday posters — generated from your brand."
            priority
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 md:py-20">
        <div className="max-w-2xl mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Campaign types</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">What runs without a marketing team.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {TRIGGERS.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border-warm bg-white p-5 sm:p-6">
              <h3 className="font-headline font-bold text-primary">{c.t}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-canvas-cream border-y border-border-warm py-10 sm:py-16">
        <div className="page-wrap grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">AI poster generation</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
              Offer posters from your menu — not from a designer.
            </h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Pick the dish, discount, and tone. The system builds a WhatsApp-ready poster and caption
              in your brand colors. Schedule it, or let payday / weekend / festival rules fire alone.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-text-muted">
              {[
                "Brand logo + colors locked",
                "Dish photos from your catalog",
                "Offer line + CTA into Hero agent",
                "A/B variants optional — still automatic",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <StoryImage
            src="/images/ai-campaign-posters.jpg"
            alt="AI campaign poster generation for restaurant offers"
            caption="Poster + copy generated. You approve once — or fully automate."
            object="top"
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <StoryImage
          src="/images/geo-local-offers.jpg"
          alt="Geo location offers to nearby people around the restaurant"
          caption="Radius around your kitchen — nearby phones get the offer."
          priority
        />
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">GEO location offers</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
            Nearby people get the poster too.
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Draw a radius around the restaurant. Guests and walk-ins in that zone can receive the same
            AI poster via WhatsApp / local reach — lunch specials when the office block is full,
            rainy-day soup when the pin is wet. CRM guests still get personal loyalty offers.
          </p>
          <p className="mt-4 text-sm font-semibold text-primary">
            Everything is automated. No manual poster design. No manual blast lists.
          </p>
        </div>
      </section>

      <section className="bg-surface-ivory border-y border-border-warm py-10 sm:py-16">
        <div className="page-wrap">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-6">The automated loop</h2>
          <ol className="grid sm:grid-cols-2 gap-4">
            {AUTO.map((step, i) => (
              <li key={step} className="flex gap-3 rounded-2xl border border-border-warm bg-white p-4">
                <span className="h-8 w-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-text-muted pt-1">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link href="/crm" className="cta-full inline-flex justify-center rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold">
              Digital card, points & redeem
            </Link>
            <Link href="/delivery" className="cta-full inline-flex justify-center rounded-full border border-border-warm bg-white text-primary px-6 py-3 text-sm font-semibold">
              Delivery partners
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
