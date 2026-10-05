"use client";

import { useMemo, useState } from "react";

export function LoyaltyCalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(800);
  const [avgTicket, setAvgTicket] = useState(450);
  const [pointsPerHundred, setPointsPerHundred] = useState(10);
  const [redeemRate, setRedeemRate] = useState(18);
  const [dineInShare, setDineInShare] = useState(40);

  const math = useMemo(() => {
    const gmv = monthlyOrders * avgTicket;
    const pointsIssued = Math.round((gmv / 100) * pointsPerHundred);
    const pointsRedeemed = Math.round(pointsIssued * (redeemRate / 100));
    // 1 point ≈ ₹1 for simple restaurant pitch
    const redeemValue = pointsRedeemed;
    const dineInRedeems = Math.round(pointsRedeemed * (dineInShare / 100));
    const deliveryRedeems = pointsRedeemed - dineInRedeems;
    const reorderLift = Math.round(monthlyOrders * 0.22);
    return { gmv, pointsIssued, pointsRedeemed, redeemValue, dineInRedeems, deliveryRedeems, reorderLift };
  }, [monthlyOrders, avgTicket, pointsPerHundred, redeemRate, dineInShare]);

  const Field = ({
    label,
    value,
    set,
    min,
    max,
    step,
    suffix,
  }: {
    label: string;
    value: number;
    set: (n: number) => void;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
  }) => (
    <label className="block">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-semibold text-primary">{label}</span>
        <span className="text-secondary font-bold">
          {value.toLocaleString("en-IN")}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step ?? 1}
        value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="w-full accent-[#9a452f]"
      />
    </label>
  );

  return (
    <div className="rounded-3xl border border-border-warm bg-white p-5 sm:p-8 shadow-[0_8px_28px_-8px_rgba(29,42,74,0.08)]">
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary mb-2">Loyalty calculator</p>
      <h3 className="font-headline text-xl font-bold text-primary mb-6">
        Model rewards for delivery + dine-in
      </h3>
      <div className="space-y-5">
        <Field label="Monthly orders (all channels)" value={monthlyOrders} set={setMonthlyOrders} min={100} max={5000} step={50} />
        <Field label="Average ticket" value={avgTicket} set={setAvgTicket} min={150} max={1200} step={10} suffix=" ₹" />
        <Field label="Points per ₹100 spent" value={pointsPerHundred} set={setPointsPerHundred} min={5} max={25} />
        <Field label="Guests who redeem" value={redeemRate} set={setRedeemRate} min={5} max={45} suffix="%" />
        <Field label="Of redemptions in dine-in" value={dineInShare} set={setDineInShare} min={10} max={80} suffix="%" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3">
        {[
          ["GMV modelled", `₹${math.gmv.toLocaleString("en-IN")}`],
          ["Points issued", math.pointsIssued.toLocaleString("en-IN")],
          ["Rewards claimed", `₹${math.redeemValue.toLocaleString("en-IN")}`],
          ["Est. re-orders lift", math.reorderLift.toLocaleString("en-IN")],
          ["Dine-in claims", math.dineInRedeems.toLocaleString("en-IN")],
          ["Delivery claims", math.deliveryRedeems.toLocaleString("en-IN")],
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl bg-canvas-cream border border-border-warm p-4">
            <p className="text-[11px] text-text-muted uppercase tracking-wide font-semibold">{k}</p>
            <p className="font-headline text-lg font-bold text-primary mt-1">{v}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-text-muted">
        Illustrative model for founder validation — 1 point ≈ ₹1 redeem value. Tune rates with your menu mix.
      </p>
    </div>
  );
}
