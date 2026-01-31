import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // IMPORTANT: Nodemailer requires Node runtime

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: { question: string; ans: string }[];
    } = body;

    if (!name || !email || message.length < 1) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send mail
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // where you want to receive it
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Consultation</h2>
          ${message.map((mes) => `<p><strong>${mes.question}:</strong> ${mes.ans}</p>`).join("")}
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
