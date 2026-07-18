"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./DaffyAI.css";

type Sender = "daffy" | "user";

interface Message {
  id: number;
  sender: Sender;
  text: string;
}

const BREEDS: Record<string, string> = {
  pomeranian:
    "✨ Pomeranian yoğun tarama gerektirir. Ortalama 3-4 haftada bir profesyonel bakım öneriyoruz.",
  golden:
    "🦮 Golden Retriever düzenli tarama ve Premium Spa bakımından büyük fayda görür.",
  maltese:
    "🤍 Maltese için göz çevresi temizliği ve düzenli kesim oldukça önemlidir.",
  poodle:
    "✂️ Poodle kıvırcık tüy yapısı nedeniyle düzenli profesyonel kesime ihtiyaç duyar.",
  chow:
    "🐻 Chow Chow çift katmanlı tüy yapısına sahiptir. Düzenli tarama şarttır.",
  british:
    "🐱 British Shorthair düzenli tarama ve tırnak bakımından fayda görür.",
  scottish:
    "🐱 Scottish Fold kulak temizliğinde ekstra özen ister.",
};

export default function DaffyAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "daffy",
      text: "🦡 Merhaba, ben Daffy!",
    },
    {
      id: 2,
      sender: "daffy",
      text: "StudioDaff'ın yapay zekâ destekli pet grooming danışmanıyım.",
    },
    {
      id: 3,
      sender: "daffy",
      text: "🐶 Dostunuz köpek mi yoksa 🐱 kedi mi?",
    },
  ]);

  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing]);

  const breedKeys = useMemo(() => Object.keys(BREEDS), []);

  const addMessage = (sender: Sender, text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        sender,
        text,
      },
    ]);
  };

  const createReply = (value: string) => {
    const text = value.toLowerCase().trim();

    if (!text)
      return "🦡 Size yardımcı olabilmem için bir mesaj yazabilirsiniz.";

    if (text.includes("köpek"))
      return "🐶 Harika! Köpeğinizin ırkı nedir?";

    if (text.includes("kedi"))
      return "🐱 Çok güzel! Kedinizin ırkı nedir?";

    if (
      text.includes("fiyat") ||
      text.includes("ücret") ||
      text.includes("kaç tl")
    ) {
      return "💛 Fiyatlarımız dostunuzun ırkına, boyutuna ve tüy durumuna göre değişmektedir.";
    }

    if (
      text.includes("randevu") ||
      text.includes("whatsapp")
    ) {
      return "📲 Randevu oluşturmak için aşağıdaki WhatsApp butonunu kullanabilirsiniz.";
    }

    for (const breed of breedKeys) {
      if (text.includes(breed)) {
        return BREEDS[breed];
      }
    }

    if (text.includes("teşekkür")) {
      return "😊 Rica ederim. Başka bir konuda yardımcı olmaktan mutluluk duyarım.";
    }

    return "🦡 Bana dostunuzun ırkını, yaşını veya bakım ihtiyacını yazabilirsiniz.";
  };

const handleSend = async () => {
  if (!input.trim()) return;

  const userText = input.trim();

  addMessage("user", userText);
  setInput("");
  setTyping(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userText,
      }),
    });

    const data = await res.json();

    setTyping(false);

    addMessage(
      "daffy",
      data.reply || "Şu anda cevap veremiyorum."
    );
  } catch (error) {
    setTyping(false);

    addMessage(
      "daffy",
      "⚠️ Şu anda AI servisine ulaşılamıyor."
    );

    console.error(error);
  }
};

  const quickAction = (type: string) => {
    switch (type) {
      case "dog":
        addMessage("daffy", "🐶 Köpeğinizin ırkı nedir?");
        break;

      case "cat":
        addMessage("daffy", "🐱 Kedinizin ırkı nedir?");
        break;

      case "services":
        addMessage(
          "daffy",
          "✂️ Premium Spa • Irka Özel Kesim • Banyo • Tırnak • Kulak • Hijyen Bakımı"
        );
        break;

      case "booking":
        addMessage(
          "daffy",
          "📅 Randevu almak için WhatsApp üzerinden bize ulaşabilirsiniz."
        );
        break;
    }
  };

  return (
    <div className="daffy-ai">

      <div className="daffy-glow" />

      <motion.img
        src="/daffy.png"
        alt="Daffy"
        className="daffy-avatar"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="ai-card"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        <span className="ai-badge">
          🟢 ONLINE
        </span>

        <h2>Merhaba 👋</h2>

        <div
          className="chat-area"
          ref={chatRef}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}

          {typing && (
  <div className="message daffy typing">
    <span></span>
    <span></span>
    <span></span>
  </div>
)}
        </div>

        <div className="quick-grid">

          <button onClick={() => quickAction("dog")}>
            🐶
            <span>Köpek</span>
          </button>

          <button onClick={() => quickAction("cat")}>
            🐱
            <span>Kedi</span>
          </button>

          <button onClick={() => quickAction("services")}>
            ✂️
            <span>Hizmetler</span>
          </button>

          <button onClick={() => quickAction("booking")}>
            📅
            <span>Randevu</span>
          </button>
        </div>
                <div className="chat-input">

          <input
            type="text"
            placeholder="Dostunuz hakkında yazın..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />

          <button
            onClick={handleSend}
            aria-label="Mesaj Gönder"
          >
            ➜
          </button>

        </div>

        <div className="ai-footer">

          <div className="status">
            <span className="status-dot"></span>
            <span>Daffy hazır</span>
          </div>

          <div className="footer-text">
            StudioDaff AI Pet Grooming Consultant
          </div>

        </div>

      </motion.div>

    </div>
  );
}