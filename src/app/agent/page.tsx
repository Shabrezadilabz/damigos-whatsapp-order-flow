import type { Metadata } from "next";
import Link from "next/link";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips } from "@/components/site/StepChips";
import { WaitlistButton } from "@/components/site/WaitlistButton";
import { WhatsAppMock, type AgentScreen } from "@/components/site/WhatsAppMock";

export const metadata: Metadata = { title: "Hero Agent" };

const STEPS: {
  n: string;
  id: string;
  title: string;
  text: string;
  screen: AgentScreen;
  options: string[];
}[] = [
  {
    n: "01",
    id: "say-hi",
    title: "Guest sends HI",
    text: "WhatsApp opens as D'aMigo's. The Hero agent greets them with clear paths — no hunting for a website.",
    screen: "hi",
    options: ["Order Delivery", "Dine-in Menu", "Claim Rewards", "Book a Table"],
  },
  {
    n: "02",
    id: "offer-link",
    title: "Offer link opens the agent",
    text: "Restaurant posts a weekend / payday offer. Guest taps Order on WhatsApp — the link lands in the live Hero agent, on that restaurant's number.",
    screen: "offer",
    options: ["Story / poster link", "WhatsApp deep link", "Same guest, same chat"],
  },
  {
    n: "03",
    id: "in-chat-site",
    title: "Restaurant website inside chat",
    text: "We build each restaurant their own live site — menu, offers, cart — and open it as a webview inside the agent. The storefront is the conversation.",
    screen: "site",
    options: ["Own branded mini-site", "Opens in WhatsApp", "Order without leaving chat"],
  },
  {
    n: "04",
    id: "all-offers",
    title: "See all offers — guest browses",
    text: "They can also open All Offers themselves: festival, payday, weekend, geo. Tap any card, cart updates, pay with rewards + UPI.",
    screen: "offers",
    options: ["All Offers", "Sort by today / nearby", "Order this deal"],
  },
];

export default function AgentPage() {
  return (
    <main>
      <section className="bg-hero-navy-surface text-surface-ivory">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold mb-3">Hero agent</p>
            <h1 className="font-headline text-[1.85rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Offer link in. Restaurant site in chat. Order on WhatsApp.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl">
              Each kitchen gets its own live website inside the Hero agent. A poster link opens it.
              Guests can also browse every offer themselves — then pay without leaving WhatsApp.
            </p>
            <div className="mt-5">
              <StepChips
                steps={["Offer link", "In-chat site", "All offers", "Pay"]}
                hrefs={["#offer-link", "#in-chat-site", "#all-offers", "#pay"]}
                tone="dark"
              />
            </div>
            <div className="mt-8">
              <WaitlistButton />
            </div>
          </div>
          <PhoneFrame caption="Hero agent — D'aMigo's. Guest says HI." className="[&_figcaption]:text-white/70 animate-float">
            <WhatsAppMock screen="hi" />
          </PhoneFrame>
        </div>
      </section>

      <section className="bg-canvas-cream border-b border-border-warm py-10 sm:py-14">
        <div className="page-wrap">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">How an offer becomes an order</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary max-w-2xl">
            Restaurant publishes a deal. Guest taps. Hero agent opens their site.
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "1", t: "Kitchen drops an offer", d: "Weekend thali, payday combo, festival poster — AI or your menu." },
              { n: "2", t: "Link is the agent", d: "Story, SMS, QR, Google: one WhatsApp link to this restaurant’s Hero agent." },
              { n: "3", t: "Live site in the thread", d: "Their branded website opens inside WhatsApp — not a separate app." },
              { n: "4", t: "Or browse all offers", d: "Guest taps All Offers anytime and orders the deal themselves." },
            ].map((s) => (
              <article key={s.n} className="rounded-2xl border border-border-warm bg-white p-5">
                <p className="font-headline text-sm font-bold text-accent-gold">{s.n.padStart(2, "0")}</p>
                <h3 className="font-headline font-bold text-primary mt-1">{s.t}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 md:py-20 space-y-14 md:space-y-20">
        {STEPS.map((s, i) => (
          <div key={s.n} id={s.id} className="scroll-mt-28 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className={i % 2 === 1 ? "md:order-2 min-w-0" : "min-w-0"}>
              <PhoneFrame caption={s.title}>
                <WhatsAppMock screen={s.screen} />
              </PhoneFrame>
            </div>
            <div className={i % 2 === 1 ? "md:order-1 min-w-0" : "min-w-0"}>
              <span className="font-headline text-sm font-bold text-accent-gold">{s.n}</span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary mt-2">{s.title}</h2>
              <p className="mt-4 text-lg text-text-muted leading-relaxed">{s.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.options.map((o) => (
                  <span
                    key={o}
                    className="px-3 py-1.5 rounded-full bg-badge-peach-bg text-badge-peach-text text-xs font-bold border border-[#F5E6CC]"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="pay" className="scroll-mt-28 bg-canvas-cream border-y border-border-warm py-14">
        <div className="page-wrap grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">One guest. Delivery redeem + dine-in claim.</h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Points earned on a WhatsApp delivery order sit on the digital card. Next visit, they redeem
              at the table. Offers they tapped from a poster use the same cart.
            </p>
            <Link href="/crm" className="inline-flex mt-6 rounded-full border border-border-warm bg-white px-5 py-2.5 text-sm font-semibold text-primary">
              Guest CRM and loyalty calculator
            </Link>
          </div>
          <StoryImage
            src="/images/host-guest-tablet.jpg"
            alt="Host stand tablet showing guest profile captured from QR"
            caption="Same wallet: earn on delivery, claim at the table."
            ratio="portrait"
            object="top"
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-14 text-center">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
          Want this agent live on your number?
        </h2>
        <WaitlistButton className="mt-6 mx-auto" />
      </section>
    </main>
  );
}
