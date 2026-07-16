"use client";

import { useMemo, useState } from "react";
import "./Appointment.css";

type FormData = {
  name: string;
  phone: string;
  pet: string;
  type: string;
  breed: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const services = [
  {
    name: "Premium Grooming",
    duration: "2 Saat",
  },
  {
    name: "Banyo & Spa",
    duration: "1 Saat",
  },
  {
    name: "Tırnak Kesimi",
    duration: "20 Dakika",
  },
  {
    name: "Kulak Temizliği",
    duration: "15 Dakika",
  },
  {
    name: "Kedi Grooming",
    duration: "90 Dakika",
  },
];

const hours = [
  "09:00","09:30",
  "10:00","10:30",
  "11:00","11:30",
  "12:00","12:30",
  "13:00","13:30",
  "14:00","14:30",
  "15:00","15:30",
  "16:00","16:30",
  "17:00","17:30",
  "18:00","18:30",
  "19:00",
];

export default function Appointment() {

  const today = useMemo(() => {
    return new Date().toISOString().split("T")[0];
  }, []);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    pet: "",
    type: "",
    breed: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) => {

    let value = e.target.value;

    if (e.target.name === "phone") {
      value = value.replace(/\D/g, "").slice(0, 11);
    }

    setForm((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const selectedService =
    services.find(
      (item) => item.name === form.service
    );

  const sendWhatsApp = () => {

    if (
      !form.name ||
      !form.phone ||
      !form.pet ||
      !form.service ||
      !form.date ||
      !form.time
    ) {
      alert("Lütfen zorunlu alanları doldurun.");
      return;
    }

    if (form.phone.length < 10) {
      alert("Telefon numarası geçersiz.");
      return;
    }

    setLoading(true);

    const text = `🐾 STUDIO DAFF RANDEVU TALEBİ

👤 Ad Soyad:
${form.name}

📞 Telefon:
${form.phone}

🐶 Evcil Hayvan:
${form.pet}

🐾 Tür:
${form.type}

🦴 Irk:
${form.breed}

✂ Hizmet:
${form.service}

⏱ Süre:
${selectedService?.duration ?? "-"}

📅 Tarih:
${form.date}

🕒 Saat:
${form.time}

📝 Mesaj:
${form.message}`;

    setTimeout(() => {

      window.open(
        `https://wa.me/905307347462?text=${encodeURIComponent(
          text
        )}`,
        "_blank"
      );

      setLoading(false);

    }, 700);
  };

  return (

    <section
      className="appointment"
      id="appointment"
    >

      <div className="appointment-title">

        <span>ONLINE RANDEVU</span>

        <h2>

          WhatsApp ile

          <br />

          Kolay Randevu

        </h2>

        <p>

          Bilgilerinizi doldurun,

          tek tıkla WhatsApp üzerinden

          bize ulaşın.

        </p>

      </div>

      <div className="appointment-form">

        <input
          name="name"
          placeholder="Ad Soyad *"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="05XXXXXXXXX *"
          value={form.phone}
          onChange={handleChange}
          inputMode="numeric"
        />

        <input
          name="pet"
          placeholder="Evcil Hayvan Adı *"
          value={form.pet}
          onChange={handleChange}
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
        >

          <option value="">
            Tür Seçiniz
          </option>

          <option>Köpek</option>

          <option>Kedi</option>

        </select>

        <input
          name="breed"
          placeholder="Irk"
          value={form.breed}
          onChange={handleChange}
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
        >

          <option value="">
            Hizmet Seçiniz *
          </option>

          {services.map((service) => (

            <option
              key={service.name}
              value={service.name}
            >
              {service.name}
            </option>

          ))}

        </select>

        <input
          type="date"
          name="date"
          min={today}
          value={form.date}
          onChange={handleChange}
        />

        <select
          name="time"
          value={form.time}
          onChange={handleChange}
        >

          <option value="">
            Saat Seçiniz *
          </option>

          {hours.map((hour) => (

            <option
              key={hour}
              value={hour}
            >
              {hour}
            </option>

          ))}

        </select>
                {selectedService && (

          <div className="appointment-summary">

            <h3>
              🐾 Randevu Özeti
            </h3>

            <p>
              <strong>Hizmet:</strong>{" "}
              {selectedService.name}
            </p>

            <p>
              <strong>Tahmini Süre:</strong>{" "}
              {selectedService.duration}
            </p>

            {form.date && (
              <p>
                <strong>Tarih:</strong>{" "}
                {form.date}
              </p>
            )}

            {form.time && (
              <p>
                <strong>Saat:</strong>{" "}
                {form.time}
              </p>
            )}

          </div>

        )}

        <textarea
          rows={5}
          name="message"
          placeholder="Mesajınız"
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="button"
          onClick={sendWhatsApp}
          disabled={loading}
        >
          {loading
            ? "WhatsApp Açılıyor..."
            : "WhatsApp'tan Randevu Oluştur"}
        </button>

      </div>

    </section>

  );
}