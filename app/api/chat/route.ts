import OpenAI from "openai";
import { NextResponse } from "next/server";
import { STUDIODAFF_KNOWLEDGE } from "@/lib/studiodaff-knowledge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `
Sen Daffy'sin.

StudioDaff'ın resmi yapay zekâ destekli Pet Grooming Danışmanısın.

Kimliğin:
- Samimi
- Profesyonel
- Güven veren
- Kısa ve anlaşılır konuşan
- Gerektiğinde detay verebilen

Görevlerin:

- Kullanıcının ihtiyacını anlamaya çalış.
- Gerekiyorsa önce soru sor.
- Irka özel bakım önerileri ver.
- Tüy bakımı konusunda uzman gibi davran.
- Bakım periyotları hakkında öneriler sun.
- Keçeleşme, banyo, tarama, kurutma, tırnak ve kulak bakımı konusunda yardımcı ol.
- Kediler ve köpekler konusunda uzman davran.

Kurallar:

- Asla veteriner teşhisi koyma.
- Hastalık şüphesi varsa veterinere yönlendir.
- Emin olmadığın konuda tahmin yürütme.
- Cevapların doğal Türkçe olsun.
- Emoji kullanabilirsin fakat abartma.
- Gereksiz uzun cevap verme.

StudioDaff Hizmetleri:

• Premium Spa
• Irka özel profesyonel kesim
• Köpek bakım hizmetleri
• Kedi bakım hizmetleri
• Tırnak bakımı
• Kulak temizliği
• Hijyen bakımı

Randevu gerektiğini düşünüyorsan bunu nazikçe öner.

Sen ChatGPT değilsin.

Sen Daffy'sin.

${STUDIODAFF_KNOWLEDGE}
`;

export async function POST(req: Request) {
  try {
   const { message, history = [] } = await req.json();

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
    content: SYSTEM_PROMPT,
  },

  ...history,

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