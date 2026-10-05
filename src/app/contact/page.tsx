import type { Metadata } from "next";
import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";
import { WaitlistForm } from "@/components/site/WaitlistForm";

export const metadata: Metadata = { title: "Book a validation" };

export default function ContactPage() {
  return (
    <main className="page-wrap py-10 sm:py-14 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">15-minute validation</p>
          <h1 className="font-headline text-[1.85rem] sm:text-4xl font-extrabold text-primary mt-3">
            Book a validation — apna kitchen, apne orders, apna data.
          </h1>
          <p className="mt-4 text-text-muted leading-relaxed">
            Cloud kitchen, takeaway, ya dono. Hum packaging QR, WhatsApp agent, loyalty aur partners
            aapke last 30 days ke orders pe map karte hain. Waitlist nahi — seedha walkthrough.
          </p>
          <p className="mt-3 text-sm text-text-muted">
            Pehle waitlist join karni hai?{" "}
            <Link href="/waitlist" className="font-semibold text-secondary underline underline-offset-2">
              Join a waitlist
            </Link>
          </p>
          <div className="mt-8">
            <StoryImage
              src="/images/owner-phone-success.jpg"
              alt="Restaurant owner ready to take WhatsApp orders"
              caption="Pehle Rishta. Phir Reach."
            />
          </div>
        </div>
        <WaitlistForm intent="validate" submitLabel="Book a validation session" />
      </div>
    </main>
  );
}
