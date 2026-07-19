import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const completion = await client.responses.create({
      model: "gpt-5.5",
      input: [
        {
          role: "system",
          content:
            "You are Daffy, a friendly and professional pet grooming assistant. Give short, helpful and accurate answers.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.output_text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "OpenAI request failed." },
      { status: 500 }
    );
  }
}