import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, phone, message, consent } = await req.json();

  if (!name || !email || !message || !consent) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields or consent not given.",
      }),
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_EMAIL,
      pass: process.env.ZOHO_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL, // use seu e-mail Zoho
      to: process.env.ZOHO_EMAIL,
      replyTo: email, // o e-mail do usuário fica aqui
      subject: `New Contact Form Submission from ${name}`,
      text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone || "Not provided"}
    Message: ${message}
  `,
    });

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Failed to send message. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
