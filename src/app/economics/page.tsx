import type { Metadata } from "next";
import { StoryImage } from "@/components/site/StoryImage";
import { WaitlistButton } from "@/components/site/WaitlistButton";

export const metadata: Metadata = { title: "Economics" };

export default function EconomicsPage() {
  return (
    <main className="page-wrap py-10 sm:py-14 md:py-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">0% commission</p>
      <h1 className="font-headline text-[1.85rem] sm:text-4xl font-extrabold text-primary mt-3 tracking-tight">Same plate. Different P&amp;L.</h1>
      <p className="mt-4 text-lg text-text-muted max-w-2xl">
        Aggregators charge 28–34% and withhold the diner. Direct WhatsApp keeps the ticket and the phone number.
      </p>

      <div className="mt-10">
        <StoryImage
          src="/images/economics-receipts.jpg"
          alt="Receipt comparison aggregator vs direct WhatsApp"
          caption="Look at the two receipts. That is the pitch."
        />
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { k: "₹3,00,000", l: "Monthly delivery GMV (example)" },
          { k: "₹90,000", l: "Aggregator cut at 30%" },
          { k: "₹0", l: "D'amigo's commission on the ticket" },
        ].map((c) => (
          <div key={c.l} className="rounded-2xl border border-border-warm bg-white p-6">
            <p className="font-headline text-2xl font-bold text-primary">{c.k}</p>
            <p className="text-sm text-text-muted mt-1">{c.l}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <StoryImage src="/images/partner-inhouse-fleet.jpg" alt="In-house delivery fleet" caption="Acquisition of the next order stays on your rail." />
        <StoryImage src="/images/partner-regional-van.jpg" alt="Regional delivery van" caption="Margin stays in the kitchen." />
      </div>

      <WaitlistButton className="mt-10" />
    </main>
  );
}
