import Image from "next/image";
import Link from "next/link";
import { StoryImage } from "@/components/site/StoryImage";
import { StepChips, TextLink } from "@/components/site/StepChips";
import { WaitlistForm } from "@/components/site/WaitlistForm";
import { WaitlistButton } from "@/components/site/WaitlistButton";

const STEPS = [
  {
    n: "01",
    title: "Guest scans the parcel",
    text: "QR on the kraft bag, box lid, or tissue. Camera opens WhatsApp — no app download.",
    img: "/images/hand-scanning-qr.jpg",
    cap: "Scan once. The next order lives in chat.",
  },
  {
    n: "02",
    title: "Menu, cart, pay in WhatsApp",
    text: "Catalog in the thread. Address. UPI / WhatsApp Pay. Confirmation bubble in the same chat.",
    img: "/images/whatsapp-chat-flow.jpg",
    cap: "The storefront is the conversation they already use.",
  },
  {
    n: "03",
    title: "Kitchen packs + QR sticker",
    text: "Ticket prints. Box is packed. A unique reorder QR goes on the lid before it leaves.",
    img: "/images/kitchen-pack-sticker.jpg",
    cap: "Every box is a billboard you own.",
  },
  {
    n: "04",
    title: "Handoff + status in-thread",
    text: "Rider delivers. Guest gets updates in WhatsApp. You keep the number, address, and history.",
    img: "/images/rider-handoff.jpg",
    cap: "No masked numbers. No competitor ads on your order.",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero-navy-surface text-surface-ivory overflow-hidden">
        <div className="page-wrap py-10 sm:py-14 md:py-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="reveal-target min-w-0">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-accent-gold text-[11px] font-bold uppercase tracking-wider mb-5">
              Pehle rishta. Phir reach. Phir 3x.
            </p>
            <h1 className="font-headline text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.12]">
              Cloud kitchen chala rahe ho?
              <br />
              <span className="text-secondary-container">Takeaway sambhal rahe ho?</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
              Jo order nikal raha hai — us customer ka data tumhara hai? Aggregator number chhupa deta hai.
              Hum data tumhe dete hain. Pehle wale orders se personalized rewards. Campaigns unke liye, auto.
              Online appearance + orders — <span className="text-accent-gold font-bold">3x</span> ki taraf.
            </p>
            <div className="mt-8">
              <WaitlistButton />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-white/15">
              {[
                ["3x", "Orders + presence"],
                ["0%", "Commission"],
                ["100%", "Guest data yours"],
              ].map(([k, v]) => (
                <div key={v} className="min-w-0">
                  <p className="font-headline text-lg sm:text-2xl font-bold text-white">{k}</p>
                  <p className="text-[11px] sm:text-xs text-white/60 leading-snug">{v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-target min-w-0">
            <StoryImage
              src="/images/hero-whatsapp-order.jpg"
              alt="WhatsApp food order on a phone next to a kraft takeout bag"
              caption="WhatsApp pe order. Data kitchen ka. Rewards automatic."
              priority
            />
          </div>
        </div>
      </section>

      {/* Hindi-English punch questions */}
      <section className="bg-canvas-cream border-b border-border-warm">
        <div className="page-wrap py-10 sm:py-14 grid sm:grid-cols-2 gap-4">
          {[
            {
              q: "Cloud kitchen chala rahe ho?",
              a: "Are you running a cloud kitchen? Menu nikalta hai, guest ka number nahi milta.",
            },
            {
              q: "Restaurant se takeaway?",
              a: "Handling takeaway from your restaurant? Parcel jaata hai — next order kisi aur app pe.",
            },
            {
              q: "Customer data kiska hai?",
              a: "Do you own the people who are ordering? Hum dete hain phone, history, address — tumhara CRM.",
            },
            {
              q: "Rewards + campaigns auto?",
              a: "Pehle orders se personalized rewards. Festival, payday, geo posters — koi intern nahi.",
            },
          ].map((d) => (
            <article
              key={d.q}
              className="reveal-target rounded-2xl border border-border-warm bg-white p-5 sm:p-6 shadow-[0_8px_28px_-8px_rgba(29,42,74,0.08)]"
            >
              <p className="font-headline text-lg sm:text-xl font-bold text-primary">{d.q}</p>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{d.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" className="page-wrap py-10 sm:py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <div className="min-w-0 reveal-target">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Join a waitlist</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
            Order details do. Hum rewards + campaigns on karenge.
          </h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Kitne orders, ticket size, cloud kitchen ya takeaway, data hai ya nahi — form mein likho.
            Waitlist pe lage. Hum guest data, personalized rewards (pehle wale orders se) aur campaigns automate karte hain.
          </p>
        </div>
        <div className="reveal-target min-w-0">
          <WaitlistForm />
        </div>
      </section>

      {/* Problem */}
      <section className="page-wrap py-10 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="reveal-target order-2 md:order-1 min-w-0">
            <StoryImage
              src="/images/economics-receipts.jpg"
              alt="Aggregator commission receipt versus direct WhatsApp 0% commission"
              caption="Same meal. Different owner of the guest."
            />
          </div>
          <div className="reveal-target order-1 md:order-2 min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">The leak</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">You cook. They keep the diner.</h2>
            <ul className="mt-6 space-y-3 text-text-muted">
              {[
                "28–34% commission on every delivery ticket.",
                "Phone numbers masked. You cannot remarket the guest.",
                "The app cross-promotes the dark kitchen next door.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">cancel</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <TextLink href="/economics">See the economics</TextLink>
          </div>
        </div>
      </section>

      {/* Packaging gallery */}
      <section className="bg-surface-ivory border-y border-border-warm py-14 sm:py-20">
        <div className="page-wrap">
          <div className="max-w-2xl mb-10 reveal-target">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Packaging is the store</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">QR on the bag, the box, the tissue.</h2>
            <p className="mt-3 text-text-muted">
              If they can see it, they can reorder. Every surface that leaves your kitchen is a WhatsApp doorway.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="reveal-target">
              <StoryImage
                src="/images/parcel-qr-closeup.jpg"
                alt="Large QR sticker on kraft takeout parcel"
                caption="Bag: scan on the way in."
                ratio="square"
              />
            </div>
            <div className="reveal-target">
              <StoryImage
                src="/images/box-lid-qr.jpg"
                alt="QR code sticker on meal box lid"
                caption="Lid: scan while they eat."
                ratio="square"
              />
            </div>
            <div className="reveal-target">
              <StoryImage
                src="/images/tissue-qr-insert.jpg"
                alt="Tissue napkin with reorder QR next to open meal box"
                caption="Tissue: last thing they touch."
                ratio="square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4-step flow */}
      <section id="flow" className="page-wrap py-10 sm:py-16 md:py-20 space-y-12 md:space-y-16">
        <div className="reveal-target max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">The flow</p>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">Four pictures. The whole architecture.</h2>
        </div>
        {STEPS.map((s, i) => (
          <div
            key={s.n}
            className={cnGrid(i)}
          >
            <div className={`reveal-target min-w-0 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <StoryImage src={s.img} alt={s.title} caption={s.cap} ratio={s.n === "02" ? "portrait" : "landscape"} />
            </div>
            <div className={`reveal-target flex flex-col justify-center min-w-0 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <span className="font-headline text-sm font-bold text-accent-gold">{s.n}</span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mt-2">{s.title}</h3>
              <p className="mt-4 text-text-muted leading-relaxed text-lg">{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Architecture teaser */}
      <section className="bg-hero-navy-surface text-surface-ivory py-14 sm:py-20">
        <div className="page-wrap grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="reveal-target min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-gold mb-3">Under the hood</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold">WhatsApp in. Kitchen out. You own the middle.</h2>
            <ol className="mt-6 space-y-3 text-white/80">
              {[
                "Channels: parcel QR, Instagram bio, Google Maps, WhatsApp blast",
                "Chat: Cloud API catalog + cart + address",
                "Pay: UPI / WhatsApp Pay, instant settlement",
                "Ops: KDS / printer, rider dispatch, status bubbles",
                "CRM: phone, address, orders stay on your rail",
              ].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="text-accent-gold font-bold">{i + 1}.</span>
                  {t}
                </li>
              ))}
            </ol>
            <Link
              href="/packaging"
              className="inline-flex mt-8 rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold"
            >
              Packaging QR alignment
            </Link>
          </div>
          <div className="reveal-target min-w-0">
            <StoryImage
              src="/images/kitchen-pack-sticker.jpg"
              alt="Kitchen packing with WhatsApp order ticket"
              caption="Ops you already run — minus the aggregator."
            />
          </div>
        </div>
      </section>

      {/* Agent + CRM teaser */}
      <section className="bg-canvas-cream border-y border-border-warm py-14 sm:py-20">
        <div className="page-wrap">
          <div className="reveal-target max-w-2xl mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Inside the chat</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
              From HI in chat to paid order
            </h2>
            <StepChips steps={["Say HI", "Pick cuisine", "Redeem rewards", "Pay in chat"]} />
            <p className="mt-4 text-text-muted">
              Guided WhatsApp agent, in-chat webview, digital loyalty card, and a CRM that counts orders,
              claims, re-orders, and dine-in redemptions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
            {[
              {
                src: "/images/whatsapp-hi-agent.jpg",
                alt: "WhatsApp HI agent with option buttons",
                step: "01",
                title: "Guest says HI",
                cap: "Order, dine-in, rewards, or a table",
              },
              {
                src: "/images/whatsapp-cuisines.jpg",
                alt: "WhatsApp cuisine category cards",
                step: "02",
                title: "Cuisines in chat",
                cap: "North Indian, Chinese, biryani, and more",
              },
              {
                src: "/images/crm-dashboard.jpg",
                alt: "Guest CRM dashboard metrics",
                step: "03",
                title: "Owner sees the CRM",
                cap: "Orders, claims, and re-orders",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="reveal-target flex h-full flex-col rounded-2xl border border-border-warm bg-white overflow-hidden shadow-[0_8px_28px_-8px_rgba(29,42,74,0.10)]"
              >
                <div className="relative h-64 sm:h-72 lg:h-80 w-full bg-[#efe8dc] shrink-0">
                  <Image src={c.src} alt={c.alt} fill className="object-cover object-top" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                </div>
                <div className="p-4 flex-1">
                  <p className="text-[11px] font-bold text-accent-gold">{c.step}</p>
                  <h3 className="font-headline font-bold text-primary mt-0.5">{c.title}</h3>
                  <p className="text-sm text-text-muted mt-1">{c.cap}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 reveal-target">
            <Link href="/agent" className="cta-full inline-flex justify-center rounded-full bg-secondary text-white px-6 py-3 text-sm font-bold">
              Full WhatsApp agent flow
            </Link>
            <Link href="/crm" className="cta-full inline-flex justify-center rounded-full border border-border-warm bg-white text-primary px-6 py-3 text-sm font-semibold">
              Guest CRM & loyalty calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Automation rail */}
      <section className="bg-surface-ivory border-b border-border-warm py-14 sm:py-20">
        <div className="page-wrap">
          <div className="reveal-target max-w-2xl mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-3">Fully automated</p>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
              Packaging, campaigns, loyalty, delivery — no manual busywork.
            </h2>
            <p className="mt-3 text-text-muted">
              QR alignment on bag / box / tissue, AI festival posters, geo offers for nearby people,
              per-guest digital cards with online + dine-in redeem, and partners like Shadowfax, Dunzo, Porter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              {
                href: "/packaging",
                src: "/images/qr-alignment-packaging.jpg",
                title: "Packaging QR",
                cap: "Bag, lid, tissue — same alignment every order",
              },
              {
                href: "/campaigns",
                src: "/images/ai-campaign-posters.jpg",
                title: "AI campaigns",
                cap: "Festival, payday, weekend posters — auto",
              },
              {
                href: "/campaigns",
                src: "/images/geo-local-offers.jpg",
                title: "Geo offers",
                cap: "Nearby phones get the same poster",
              },
              {
                href: "/delivery",
                src: "/images/delivery-partners.jpg",
                title: "Delivery partners",
                cap: "Shadowfax, Dunzo, Porter, or your riders",
              },
            ].map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className="reveal-target group flex h-full flex-col rounded-2xl border border-border-warm bg-white overflow-hidden shadow-[0_8px_28px_-8px_rgba(29,42,74,0.10)]"
              >
                <div className="relative h-48 sm:h-52 w-full bg-[#efe8dc] shrink-0">
                  <Image src={c.src} alt={c.title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 640px) 100vw, 25vw" />
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-headline font-bold text-primary">{c.title}</h3>
                  <p className="text-sm text-text-muted mt-1">{c.cap}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Owner CTA */}
      <section className="page-wrap py-10 sm:py-16 md:py-20 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="reveal-target min-w-0">
          <StoryImage
            src="/images/owner-phone-success.jpg"
            alt="Restaurant owner with WhatsApp order confirmations"
            caption="Direct orders. Your number. Your brand."
          />
        </div>
        <div className="reveal-target min-w-0">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-primary">Waitlist pe aao. Data + rewards automatic.</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            Hum guest data dete hain. Pehle orders se personal rewards. Campaigns unke naam pe.
            Online dikhna aur orders — 3x. Cloud kitchen ya takeaway, form mein order details bharo.
          </p>
          <div className="mt-6">
            <WaitlistButton />
          </div>
        </div>
      </section>
    </main>
  );
}

function cnGrid(i: number) {
  return `grid md:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center`;
}
