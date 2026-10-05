"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

const field =
  "mt-2 w-full rounded-2xl border border-border-warm bg-white px-4 py-3 text-[15px] text-on-surface outline-none transition-shadow placeholder:text-[#b5aea4] focus:border-secondary focus:shadow-[0_0_0_4px_rgba(154,69,47,0.12)]";

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block min-w-0">
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">{label}</span>
      {children}
    </label>
  );
}

function Chips({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      <input type="hidden" name={name} value={value} />
      {options.map((o) => {
        const on = o === value;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm font-semibold border transition-colors",
              on
                ? "bg-secondary text-white border-secondary shadow-[0_4px_14px_-4px_rgba(154,69,47,0.45)]"
                : "bg-white text-primary border-border-warm hover:border-secondary/40",
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function WaitlistForm() {
  const [kitchen, setKitchen] = useState("Restaurant takeaway");
  const [orders, setOrders] = useState("500 – 2,000");
  const [ticket, setTicket] = useState("₹300 – ₹600");
  const [channels, setChannels] = useState("Swiggy / Zomato");
  const [data, setData] = useState("No — numbers masked");
  const [mix, setMix] = useState("Mostly delivery");

  return (
    <form
      className="overflow-hidden rounded-[1.75rem] border border-border-warm bg-[#fdfbf7] shadow-[0_20px_50px_-24px_rgba(6,21,52,0.28)]"
      action="mailto:partner@damigos.in"
      method="post"
      encType="text/plain"
    >
      <div className="bg-hero-navy-surface px-5 sm:px-7 py-5">
        <p className="font-headline text-[1.65rem] sm:text-3xl text-accent-gold leading-none">Join waitlist</p>
        <p className="mt-2 text-sm text-white/70">Cloud kitchen · takeaway · apna guest data</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["0% commission", "Guest data yours", "3x orders"].map((t) => (
            <span key={t} className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-semibold text-[#FFD89A]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-7 space-y-7">
        <input type="hidden" name="intent" value="waitlist" />

        <section>
          <p className="font-headline text-lg text-primary mb-4">Aap kaun ho</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Brand / kitchen">
              <input required name="brand" className={field} placeholder="The Gourmet Table" />
            </Field>
            <Field label="City">
              <input required name="city" className={field} placeholder="Hyderabad" />
            </Field>
            <Field label="WhatsApp">
              <input required name="whatsapp" type="tel" className={field} placeholder="91…" />
            </Field>
            <Field label="Email">
              <input name="email" type="email" className={field} placeholder="owner@brand.in" />
            </Field>
          </div>
        </section>

        <section>
          <p className="font-headline text-lg text-primary">Kya chala rahe ho</p>
          <Chips
            name="kitchen_type"
            value={kitchen}
            onChange={setKitchen}
            options={["Cloud kitchen", "Restaurant takeaway", "Dine-in + takeaway", "Both", "Multi-outlet"]}
          />
        </section>

        <section>
          <p className="font-headline text-lg text-primary">Orders</p>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mt-3">Monthly volume</p>
          <Chips name="monthly_orders" value={orders} onChange={setOrders} options={["Under 500", "500 – 2,000", "2,000 – 8,000", "8,000+"]} />
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mt-4">Average ticket</p>
          <Chips name="avg_ticket" value={ticket} onChange={setTicket} options={["Under ₹300", "₹300 – ₹600", "₹600 – ₹1,000", "₹1,000+"]} />
        </section>

        <section>
          <p className="font-headline text-lg text-primary">Aaj orders kahan se</p>
          <Chips
            name="channels"
            value={channels}
            onChange={setChannels}
            options={["Swiggy / Zomato", "Own WhatsApp", "Mix", "Walk-in / takeaway"]}
          />
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mt-4">Guest numbers tumhare hain?</p>
          <Chips
            name="own_customer_data"
            value={data}
            onChange={setData}
            options={["No — numbers masked", "Some numbers", "Yes, we have the list", "Not sure"]}
          />
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mt-4">Split</p>
          <Chips
            name="order_mix"
            value={mix}
            onChange={setMix}
            options={["Mostly delivery", "Mostly takeaway", "Delivery + takeaway", "Dine-in heavy"]}
          />
        </section>

        <Field label="Aur kuch (optional)">
          <textarea name="notes" rows={3} className={`${field} resize-none`} placeholder="Outlets, peak hours, cuisine…" />
        </Field>

        <div>
          <button type="submit" className="btn-waitlist w-full rounded-full text-white py-3.5 text-[1.85rem] leading-none">
            Join waitlist
          </button>
          <p className="mt-3 text-xs text-text-muted text-center">Founding waitlist · partner@damigos.in · no spam</p>
        </div>
      </div>
    </form>
  );
}
