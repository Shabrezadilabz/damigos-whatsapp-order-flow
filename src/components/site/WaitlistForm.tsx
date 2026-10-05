const field =
  "mt-1.5 w-full rounded-xl border border-border-warm px-4 py-3 text-base bg-canvas-cream";

export function WaitlistForm() {
  return (
    <form
      className="rounded-3xl border border-border-warm bg-white p-5 sm:p-8 space-y-4 shadow-[0_8px_28px_-8px_rgba(29,42,74,0.08)]"
      action="mailto:partner@damigos.in"
      method="post"
      encType="text/plain"
    >
      <input type="hidden" name="intent" value="waitlist" />
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm font-semibold text-primary">
          Brand / kitchen name
          <input required name="brand" className={field} placeholder="e.g. The Gourmet Table" />
        </label>
        <label className="block text-sm font-semibold text-primary">
          City
          <input required name="city" className={field} placeholder="Hyderabad" />
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm font-semibold text-primary">
          WhatsApp number
          <input required name="whatsapp" type="tel" className={field} placeholder="91…" />
        </label>
        <label className="block text-sm font-semibold text-primary">
          Email
          <input name="email" type="email" className={field} placeholder="owner@brand.in" />
        </label>
      </div>
      <label className="block text-sm font-semibold text-primary">
        What are you running?
        <select name="kitchen_type" className={field} defaultValue="Restaurant takeaway">
          <option>Cloud kitchen</option>
          <option>Restaurant takeaway</option>
          <option>Dine-in + takeaway</option>
          <option>Cloud kitchen + restaurant</option>
          <option>Multi-outlet</option>
        </select>
      </label>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm font-semibold text-primary">
          Monthly orders (approx)
          <select name="monthly_orders" className={field} defaultValue="500 – 2,000">
            <option>Under 500</option>
            <option>500 – 2,000</option>
            <option>2,000 – 8,000</option>
            <option>8,000+</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-primary">
          Average ticket
          <select name="avg_ticket" className={field} defaultValue="₹300 – ₹600">
            <option>Under ₹300</option>
            <option>₹300 – ₹600</option>
            <option>₹600 – ₹1,000</option>
            <option>₹1,000+</option>
          </select>
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm font-semibold text-primary">
          Orders today go through
          <select name="channels" className={field} defaultValue="Swiggy / Zomato mainly">
            <option>Swiggy / Zomato mainly</option>
            <option>Own WhatsApp / phone</option>
            <option>Mix of aggregator + own</option>
            <option>Walk-in / takeaway only</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-primary">
          Do you own guest phone numbers?
          <select name="own_customer_data" className={field} defaultValue="No — aggregator masks them">
            <option>No — aggregator masks them</option>
            <option>Some numbers, not all</option>
            <option>Yes — we have the list</option>
            <option>Not sure</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-semibold text-primary">
        Split of orders
        <select name="order_mix" className={field} defaultValue="Mostly delivery">
          <option>Mostly delivery</option>
          <option>Mostly takeaway</option>
          <option>Delivery + takeaway mix</option>
          <option>Dine-in heavy, some parcel</option>
        </select>
      </label>
      <label className="block text-sm font-semibold text-primary">
        Anything else (optional)
        <textarea name="notes" rows={3} className={field} placeholder="Outlets, peak hours, cuisine…" />
      </label>
      <button type="submit" className="btn-waitlist w-full rounded-full text-white py-3.5 text-[1.85rem] leading-none">
        Join waitlist
      </button>
      <p className="text-xs text-text-muted text-center">Opens email to partner@damigos.in — no spam list, founding waitlist only.</p>
    </form>
  );
}
