import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, message, honeypot } = req.body;

    if (honeypot) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }

    await resend.emails.send({
      from: "Portfolio <contact@kevinjaulin.dev>",
      to: "kevin31072002@gmail.com",
      subject: `Contact portfolio - ${name}`,
      replyTo: email,
      text: `
Hi Kévin,
You've received a new message from your portfolio. Please check informations below:
  - Contact Name: ${name}
  - Contact Email: ${email}
  ${phone && "- Contact Phone: " + phone}

Attach message:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
