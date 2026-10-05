import type { Metadata } from "next";
import { StoryImage } from "@/components/site/StoryImage";
import { WaitlistForm } from "@/components/site/WaitlistForm";

export const metadata: Metadata = { title: "Join the waitlist" };

export default function WaitlistPage() {
  return (
    <main className="page-wrap py-10 sm:py-14 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">Waitlist · founding cohort</p>
          <h1 className="font-headline text-[1.85rem] sm:text-4xl font-extrabold text-primary mt-3">
            Join the waitlist. Hum data + rewards automate karenge.
          </h1>
          <p className="mt-4 text-text-muted leading-relaxed">
            Cloud kitchen ho ya restaurant takeaway — batao kitne orders nikalte hain, data kiska hai,
            ticket kitna hai. Waitlist pe lagao. Hum WhatsApp rail, guest data, personalized rewards
            aur campaigns on karte hain. Online appearance aur orders — 3x ki taraf.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-text-muted">
            {[
              "Customer phone + order history tumhara",
              "Pehle wale orders se personal rewards",
              "Festival / payday / geo campaigns auto",
              "0% commission on the ticket",
            ].map((t) => (
              <li key={t} className="flex gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <StoryImage
              src="/images/owner-phone-success.jpg"
              alt="Restaurant owner with WhatsApp order confirmations"
              caption="Pehle rishta. Phir reach. Phir 3x."
            />
          </div>
        </div>
        <WaitlistForm />
      </div>
    </main>
  );
}
