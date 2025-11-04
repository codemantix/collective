// app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { name, email, message } = body;

    // Send email with Resend
    const data = await resend.emails.send({
      from: "Codemantix <onboarding@resend.dev>",
      to: "codemantixcollective@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
