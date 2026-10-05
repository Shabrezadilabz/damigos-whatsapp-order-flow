import type { Metadata } from "next";
import Link from "next/link";
import { PhoneFrame } from "@/components/site/PhoneFrame";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips } from "@/components/site/StepChips";
import { WaitlistButton } from "@/components/site/WaitlistButton";

export const metadata: Metadata = { title: "Hero Agent" };

const STEPS = [
  {
    n: "01",
    title: "Guest sends HI",
    text: "WhatsApp opens. The agent greets them and shows clear buttons — no hunting for a website.",
    img: "/images/whatsapp-hi-agent.jpg",
    options: ["Order Delivery", "Dine-in Menu", "Claim Rewards", "Book a Table"],
  },
  {
    n: "02",
    title: "Pick cuisine in chat",
    text: "On Order Delivery, cuisine cards appear inside chat: North Indian, South Indian, Chinese, Biryani, Desserts…",
    img: "/images/whatsapp-cuisines.jpg",
    options: ["North Indian", "South Indian", "Chinese", "Biryani", "Desserts", "Beverages"],
  },
  {
    n: "03",
    title: "In-chat webview cart",
    text: "Items open in a WhatsApp webview menu. Add to cart, apply Bean Coins, see the discount line live.",
    img: "/images/whatsapp-redeem-pay.jpg",
    options: ["Apply rewards", "Edit cart", "Confirm address"],
  },
  {
    n: "04",
    title: "Pay with rewards + UPI",
    text: "Redeem points, pay the balance on UPI / WhatsApp Pay. Order ticket hits the kitchen. Loyalty updates on the digital card.",
    img: "/images/whatsapp-redeem-pay.jpg",
    options: ["UPI Pay", "Wallet", "Order confirmed"],
  },
];

export default function AgentPage() {
  return (
    <main>
      <section className="bg-hero-navy-surface text-surface-ivory">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <p className="font-headline text-xl text-accent-gold mb-3">Hero agent</p>
            <h1 className="font-headline text-[2.15rem] sm:text-5xl tracking-tight leading-[1.15]">
              D&apos;aMigo&apos;s on WhatsApp.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl">
              The Hero agent greets as D&apos;aMigo&apos;s — HI, cuisine cards, in-chat webview, redeem-before-pay.
              Delivery and dine-in claims. Guest never leaves the thread.
            </p>
            <div className="mt-5">
              <StepChips steps={["Say HI", "Pick cuisine", "Redeem", "Pay"]} tone="dark" />
            </div>
            <div className="mt-8">
              <WaitlistButton />
            </div>
          </div>
          <PhoneFrame
            src="/images/whatsapp-hi-agent.jpg"
            alt="Hero agent greeting as D'aMigo's with HI and option buttons"
            caption="Hero agent — D'aMigo's greets. Guest says HI."
            className="[&_figcaption]:text-white/70"
          />
        </div>
      </section>

      <section className="page-wrap py-10 sm:py-16 md:py-20 space-y-14 md:space-y-20">
        {STEPS.map((s, i) => (
          <div key={s.n} className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            <div className={i % 2 === 1 ? "md:order-2 min-w-0" : "min-w-0"}>
              <PhoneFrame src={s.img} alt={s.title} caption={s.title} />
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

      <section className="bg-canvas-cream border-y border-border-warm py-14">
        <div className="page-wrap grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="min-w-0">
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">Delivery redeem + dine-in claim = one guest.</h2>
            <p className="mt-4 text-text-muted leading-relaxed">
              Points earned on a WhatsApp delivery order show on the digital card. Next visit, they redeem
              at the table. CRM counts both as rewards claimed — and tracks the re-order.
            </p>
            <Link href="/crm" className="inline-flex mt-6 rounded-full border border-border-warm bg-white px-5 py-2.5 text-sm font-semibold text-primary">
              Guest CRM and loyalty calculator
            </Link>
          </div>
          <StoryImage
            src="/images/dinein-scan-redeem.jpg"
            alt="Dine-in loyalty redeem with digital card"
            caption="Same wallet: earn on delivery, claim at the table."
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
