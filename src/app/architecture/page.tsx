import type { Metadata } from "next";
import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";

export const metadata: Metadata = { title: "Architecture" };

const NODES = [
  { title: "Capture", items: ["Parcel / lid / tissue QR", "Instagram bio & Stories", "Google Business link", "WhatsApp blast"] },
  { title: "Chat OS", items: ["WhatsApp Cloud API", "Catalog + cart", "Address capture", "1-tap reorder"] },
  { title: "Money", items: ["UPI / WhatsApp Pay", "Instant settlement", "No aggregator hold"] },
  { title: "Kitchen", items: ["KDS / printer ticket", "QR sticker on lid", "Prep status in chat"] },
  { title: "Last mile", items: ["Your rider or partner", "Live status bubbles", "Handoff photo optional"] },
  { title: "Ownership", items: ["Phone + address yours", "Order history CRM", "Loyalty on next scan"] },
];

export default function ArchitecturePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">Validating the rail</p>
      <h1 className="font-headline text-4xl font-extrabold text-primary mt-3 max-w-3xl">
        WhatsApp in. Kitchen out. You own the middle.
      </h1>
      <p className="mt-4 text-lg text-text-muted max-w-2xl">
        Same operations you already run. Different owner of the guest. This is the architecture restaurants can evaluate by looking — not a 40-slide deck.
      </p>

      <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
        <StoryImage
          src="/images/whatsapp-chat-flow.jpg"
          alt="WhatsApp chat placing a food order"
          caption="Guest never leaves the thread."
          ratio="portrait"
        />
        <StoryImage
          src="/images/kitchen-pack-sticker.jpg"
          alt="Kitchen packing with order ticket"
          caption="Kitchen never leaves the ticket."
        />
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {NODES.map((n) => (
          <div key={n.title} className="rounded-2xl border border-border-warm bg-white p-5">
            <h2 className="font-headline font-bold text-primary">{n.title}</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-text-muted">
              {n.items.map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-secondary">•</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <StoryImage src="/images/hand-scanning-qr.jpg" alt="Scanning parcel QR" caption="Entry: camera → WhatsApp." />
        <StoryImage src="/images/rider-handoff.jpg" alt="Rider handoff" caption="Exit: bag + status in chat." />
      </div>

      <Link href="/contact" className="inline-flex mt-10 rounded-full bg-secondary text-white px-7 py-3.5 font-bold text-sm">
        Book a 15-minute architecture walkthrough
      </Link>
    </main>
  );
}
