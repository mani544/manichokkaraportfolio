import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, date, time, message } = req.body;

    if (!name || !email || !date || !time || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 📩 Email to YOU
    await resend.emails.send({
      from: "Schedule Call <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL,
      subject: "📅 New Call Scheduled",
      html: `
        <h2>New Call Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 📩 Confirmation to USER
    await resend.emails.send({
      from: "Mani Chokkara <onboarding@resend.dev>",
      to: email,
      subject: "✅ Call Scheduled Successfully",
      html: `
        <h2>Hi ${name},</h2>
        <p>Your call has been scheduled successfully.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <br/>
        <p>Looking forward to speaking with you.</p>
        <p>— Mani</p>
      `,
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
