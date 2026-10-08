import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Body = {
  brand?: string;
  city?: string;
  whatsapp?: string;
  email?: string;
  kitchen_type?: string;
  monthly_orders?: string;
  avg_order?: string;
  channels?: string;
  own_customer_data?: string;
  order_mix?: string;
  notes?: string;
};

function requiredEnv(name: string): string {
  const v = process.env[name]?.trim();
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Body;
    const brand = String(data.brand ?? "").trim();
    const city = String(data.city ?? "").trim();
    const whatsapp = String(data.whatsapp ?? "").trim();

    if (!brand || !city || !whatsapp) {
      return NextResponse.json({ ok: false, error: "Brand, city, and WhatsApp are required." }, { status: 400 });
    }

    const to = process.env.WAITLIST_TO?.trim() || "partners@damigos.in";
    const host = process.env.SMTP_HOST?.trim() || "smtp.zoho.in";
    const port = Number(process.env.SMTP_PORT || "465");
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");

    const rows: [string, string][] = [
      ["Brand / kitchen", brand],
      ["City", city],
      ["WhatsApp", whatsapp],
      ["Email", String(data.email ?? "").trim() || "(not given)"],
      ["Kitchen type", String(data.kitchen_type ?? "")],
      ["Monthly orders", String(data.monthly_orders ?? "")],
      ["Average order", String(data.avg_order ?? "")],
      ["Channels", String(data.channels ?? "")],
      ["Own customer data", String(data.own_customer_data ?? "")],
      ["Order mix", String(data.order_mix ?? "")],
      ["Notes", String(data.notes ?? "").trim() || "(none)"],
      ["Submitted", new Date().toISOString()],
    ];

    const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
    const html = `
      <h2 style="font-family:sans-serif;color:#061534">D'aMigo's waitlist</h2>
      <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:8px 12px;border:1px solid #eae4d9;font-weight:700;color:#9a452f">${k}</td><td style="padding:8px 12px;border:1px solid #eae4d9;color:#1e1b17">${escapeHtml(v)}</td></tr>`,
          )
          .join("")}
      </table>
    `;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"D'aMigo's Waitlist" <${user}>`,
      to,
      replyTo: String(data.email ?? "").trim() || undefined,
      subject: `Waitlist: ${brand} · ${city}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Send failed";
    console.error("[waitlist]", message);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
