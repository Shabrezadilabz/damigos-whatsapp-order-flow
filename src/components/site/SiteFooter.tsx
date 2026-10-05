import Link from "next/link";
import { DamigosLogo } from "./DamigosLogo";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-surface-ivory pt-12 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="page-wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-3">
          <DamigosLogo variant="cream" size="md" />
          <p className="text-sm text-white/70 max-w-xs">
            WhatsApp is the storefront. Delivery is yours. 0% commission, 100% guest ownership.
          </p>
        </div>
        <div>
          <p className="text-accent-gold font-headline text-sm font-bold mb-3">This explainer</p>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link href="/">The order flow</Link></li>
            <li><Link href="/packaging">Packaging QR</Link></li>
            <li><Link href="/agent">WhatsApp agent</Link></li>
            <li><Link href="/crm">Loyalty & digital card</Link></li>
            <li><Link href="/campaigns">Campaigns & AI posters</Link></li>
            <li><Link href="/delivery">Delivery partners</Link></li>
            <li><Link href="/architecture">Architecture</Link></li>
            <li><Link href="/economics">Economics</Link></li>
            <li><Link href="/contact">Founding cohort</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-accent-gold font-headline text-sm font-bold mb-3">Talk</p>
          <p className="text-sm text-white/75">partner@damigos.in</p>
        </div>
      </div>
      <p className="page-wrap mt-10 pt-6 border-t border-white/10 text-xs text-white/50">
        © {new Date().getFullYear()} D&apos;amigo&apos;s. WhatsApp order-flow validation draft.
      </p>
    </footer>
  );
}
