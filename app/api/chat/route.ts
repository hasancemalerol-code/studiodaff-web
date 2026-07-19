export const runtime = "nodejs";

import OpenAI from "openai";
import { NextResponse } from "next/server";

console.log("OPENAI_API_KEY =", process.env.OPENAI_API_KEY);

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Mesaj boş." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5.5",
      input: [
        {
          role: "system",
          content:
            "Sen StudioDaff'ın resmi yapay zekâ danışmanı Daffy'sin. Her zaman Türkçe konuş. Samimi, profesyonel ol. Pet grooming konusunda uzman gibi yardımcı ol. Veteriner teşhisi koyma. Gerekirse StudioDaff'tan randevu almasını öner.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: response.output_text,
    });

  } catch (error: any) {
    console.error("OPENAI ERROR:", error);

    return NextResponse.json(
      {
        message: error?.message,
        status: error?.status,
        code: error?.code,
        type: error?.type,
      },
      {
        status: 500,
      }
    );
  }
}