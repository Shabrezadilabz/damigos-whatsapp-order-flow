import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Allura } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/site/PageShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});
const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-allura",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "WhatsApp Order Flow | D'amigo's",
    template: "%s | D'amigo's",
  },
  description:
    "See how D'amigo's WhatsApp food-delivery architecture works: scan the parcel QR, order in chat, pay UPI, kitchen packs, you own the guest. 0% commission.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${allura.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-sans text-on-surface antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
