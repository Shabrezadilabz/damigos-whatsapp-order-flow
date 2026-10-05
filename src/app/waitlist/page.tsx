import type { Metadata } from "next";
import { WaitlistForm } from "@/components/site/WaitlistForm";

export const metadata: Metadata = { title: "Join the waitlist" };

export default function WaitlistPage() {
  return (
    <main className="bg-canvas-cream border-b border-border-warm">
      <div className="page-wrap py-10 sm:py-14 md:py-16 grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 items-start">
        <div className="min-w-0 lg:sticky lg:top-28">
          <p className="font-logo text-3xl text-accent-gold">Founding waitlist</p>
          <h1 className="font-logo text-[2.6rem] sm:text-5xl text-primary mt-2">
            Order details do.
            <span className="text-secondary"> Rewards auto.</span>
          </h1>
          <p className="mt-4 text-text-muted leading-relaxed">
            Cloud kitchen ho ya takeaway — kitne orders, ticket kitna, data kiska. Form bharo.
            Hum guest data, personalized rewards aur campaigns on karte hain. Online + orders 3x.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Phone + order history tumhara",
              "Pehle orders se personal rewards",
              "Festival / payday / geo auto",
              "0% commission on the ticket",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start text-sm text-on-surface">
                <span className="mt-0.5 h-5 w-5 rounded-full bg-secondary text-white flex items-center justify-center text-[11px] font-bold shrink-0">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <WaitlistForm />
      </div>
    </main>
  );
}
