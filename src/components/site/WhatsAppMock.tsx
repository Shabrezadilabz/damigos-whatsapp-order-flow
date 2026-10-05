import Image from "next/image";
import { cn } from "@/lib/cn";

export type AgentScreen = "hi" | "offer" | "site" | "offers";

export function WhatsAppMock({ screen = "hi" }: { screen?: AgentScreen }) {
  return (
    <div className="h-full w-full flex flex-col bg-[#EFE7DD] text-[11px] leading-tight text-[#111b21] select-none">
      <Header />
      {screen === "hi" ? <HiBody /> : null}
      {screen === "offer" ? <OfferBody /> : null}
      {screen === "site" ? <SiteBody /> : null}
      {screen === "offers" ? <OffersBody /> : null}
      <Composer />
    </div>
  );
}

function Header() {
  return (
    <div className="shrink-0 bg-[#075E54] text-white pt-6 pb-2 px-2 flex items-center gap-2">
      <span className="text-white/80 text-[13px] px-0.5">‹</span>
      <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#FAF6EE] ring-1 ring-white/30">
        <Image src="/brand/damigos-logo.png" alt="" fill className="object-contain p-[2px]" sizes="32px" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-[12px] leading-none truncate">D&apos;aMigo&apos;s</p>
        <p className="text-[9px] text-white/80 mt-0.5 leading-none">Business Account</p>
      </div>
      <VideoIcon />
      <CallIcon />
    </div>
  );
}

function HiBody() {
  return (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
      <ChatTop />
      <MenuRows
        rows={[
          { icon: "scooter", label: "Order Delivery" },
          { icon: "cloche", label: "Dine-in Menu" },
          { icon: "gift", label: "Claim Rewards" },
          { icon: "cal", label: "Book Table" },
        ]}
      />
    </div>
  );
}

function OfferBody() {
  return (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col">
      <div className="px-2.5 pt-3 flex flex-col gap-2">
        <DayChip />
        <div className="self-end max-w-[78%]">
          <div className="rounded-lg rounded-tr-sm bg-[#D9FDD3] px-2 py-1.5 shadow-sm">
            <p className="font-medium">I want this weekend offer</p>
            <p className="text-[8px] text-[#667781] text-right mt-0.5">6:48 PM ✓✓</p>
          </div>
        </div>
        <div className="self-start max-w-[88%] rounded-lg rounded-tl-sm bg-white shadow-sm overflow-hidden">
          <div className="h-16 bg-gradient-to-br from-[#9A452F] to-[#061534] px-3 py-2 text-white">
            <p className="text-[8px] uppercase tracking-wide text-[#D99B38] font-bold">Gourmet Table</p>
            <p className="font-bold text-[12px] mt-0.5">Weekend Thali 20% off</p>
          </div>
          <div className="px-2.5 py-2">
            <p className="text-[#667781] text-[10px]">Tap to open the restaurant site in this chat.</p>
            <p className="mt-1.5 text-center text-[#027EB5] font-semibold text-[11px]">Open offer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteBody() {
  return (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col bg-[#FFF8F3]">
      <div className="shrink-0 flex items-center gap-2 px-2 py-1.5 bg-white border-b border-[#E4D9C8] text-[10px]">
        <span className="text-[#667781]">✕</span>
        <span className="truncate flex-1 font-semibold text-primary">gourmettable.in</span>
        <span className="text-[#075E54] font-bold">Cart 2</span>
      </div>
      <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-2">
        <p className="text-[8px] font-bold uppercase tracking-wide text-[#9A452F]">Your kitchen · live site</p>
        <p className="font-headline font-bold text-[13px] text-[#061534] leading-snug">Weekend offers on the menu</p>
        {[
          { t: "Hyderabadi biryani", d: "20% off · till Sunday" },
          { t: "Payday check combo", d: "Free dessert over ₹499" },
        ].map((o) => (
          <div key={o.t} className="rounded-xl bg-white border border-[#E4D9C8] p-2.5 flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-[#FAEEDA] shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-bold text-[#061534]">{o.t}</p>
              <p className="text-[9px] text-[#667781]">{o.d}</p>
            </div>
            <span className="rounded-full bg-[#075E54] text-white text-[9px] font-bold px-2 py-1">Order</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function OffersBody() {
  return (
    <div className="flex-1 min-h-0 overflow-hidden flex flex-col bg-[#FFF8F3]">
      <div className="shrink-0 flex items-center gap-2 px-2 py-1.5 bg-white border-b border-[#E4D9C8] text-[10px]">
        <span className="text-[#667781]">✕</span>
        <span className="truncate flex-1 font-semibold text-primary">All offers</span>
      </div>
      <div className="px-2.5 pt-2 flex gap-1.5">
        {["Today", "Weekend", "Nearby"].map((t, i) => (
          <span
            key={t}
            className={cn(
              "rounded-full px-2 py-0.5 text-[9px] font-bold border",
              i === 0 ? "bg-[#075E54] text-white border-[#075E54]" : "bg-white text-[#061534] border-[#E4D9C8]",
            )}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex-1 overflow-hidden px-2.5 py-2 space-y-2">
        {[
          { t: "Festival thali", d: "Valid till 10 PM" },
          { t: "Payday combo", d: "Extra 10% with card" },
          { t: "Lunch near you", d: "1.2 km · 25 min" },
        ].map((o) => (
          <div key={o.t} className="rounded-xl bg-white border border-[#E4D9C8] p-2.5">
            <p className="font-bold text-[#061534]">{o.t}</p>
            <p className="text-[9px] text-[#667781] mt-0.5">{o.d}</p>
            <p className="mt-1.5 text-[#027EB5] font-semibold text-[10px]">Order this deal ›</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatTop() {
  return (
    <div className="px-2.5 pt-3 pb-2 flex flex-col gap-2">
      <DayChip />
      <div className="self-end max-w-[70%]">
        <div className="rounded-lg rounded-tr-sm bg-[#D9FDD3] px-2.5 py-1.5 shadow-sm">
          <p className="font-medium">HI</p>
          <p className="text-[8px] text-[#667781] text-right mt-0.5">6:48 PM ✓✓</p>
        </div>
      </div>
      <div className="self-start max-w-[88%]">
        <div className="rounded-lg rounded-tl-sm bg-white px-2.5 py-2 shadow-sm">
          <p className="font-medium leading-snug">Welcome to D&apos;aMigo&apos;s!</p>
          <p className="mt-1 leading-snug">How can we help you today?</p>
          <p className="text-[8px] text-[#667781] text-right mt-1">6:48 PM</p>
        </div>
      </div>
    </div>
  );
}

function DayChip() {
  return (
    <div className="flex justify-center">
      <span className="rounded-md bg-[#E1F2FB] text-[#54656F] text-[9px] font-semibold px-2 py-0.5">Today</span>
    </div>
  );
}

function MenuRows({ rows }: { rows: { icon: IconName; label: string }[] }) {
  return (
    <div className="mt-auto bg-white">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-3 px-3 py-3 border-t border-[#F0EBE3]">
          <MenuIcon name={r.icon} />
          <span className="flex-1 font-semibold text-[12px] text-[#111b21]">{r.label}</span>
          <span className="text-[#C5C5C5] text-[14px]">›</span>
        </div>
      ))}
    </div>
  );
}

function Composer() {
  return (
    <div className="shrink-0 bg-[#F0F2F5] px-1.5 py-1.5 flex items-center gap-1.5">
      <div className="flex-1 h-8 rounded-full bg-white border border-[#E4E4E4] px-2.5 flex items-center text-[#8696A0] text-[10px]">
        Message
      </div>
      <div className="h-8 w-8 rounded-full bg-[#075E54] flex items-center justify-center">
        <MicIcon />
      </div>
    </div>
  );
}

type IconName = "scooter" | "cloche" | "gift" | "cal";

function MenuIcon({ name }: { name: IconName }) {
  const common = "h-[18px] w-[18px] text-[#075E54]";
  if (name === "scooter") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="6" cy="18" r="2.2" />
        <circle cx="18" cy="18" r="2.2" />
        <path d="M4 18h2M8.5 18h5L16 10h3M9 10h5.5" />
        <path d="M10 10V7h4" />
      </svg>
    );
  }
  if (name === "cloche") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 17h16M5 17c0-5 3-9 7-9s7 4 7 9" />
        <path d="M12 8V5M10 5h4" />
      </svg>
    );
  }
  if (name === "gift") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="10" width="16" height="10" rx="1" />
        <path d="M4 14h16M12 10v10" />
        <path d="M12 10c-2-3-5-3-5 0 0 2 3 3 5 3 2 0 5-1 5-3 0-3-3-3-5 0z" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg className="h-4 w-4 text-white/90" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h7A2.5 2.5 0 0 1 16 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 15.5v-7Z" />
      <path d="M17 10.2 21 8v8l-4-2.2v-3.6Z" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg className="h-4 w-4 text-white/90 mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 3.8c.5-.5 1.3-.5 1.8 0l1.7 1.7c.5.5.5 1.2.1 1.7L9 9.4a12.4 12.4 0 0 0 5.6 5.6l2.2-1.2c.5-.3 1.2-.3 1.7.1l1.7 1.7c.5.5.5 1.3 0 1.8l-1.3 1.3c-.6.6-1.5.8-2.3.5C11.4 17.8 6.2 12.6 4.8 7.4c-.3-.8-.1-1.7.5-2.3L6.6 3.8Z" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm7-3a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.9V20H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.1A7 7 0 0 0 19 11Z" />
    </svg>
  );
}
