"use client";

import type { FormEvent } from "react";
import "./Contact.css";
import { trackContactClick } from "@/lib/tracking";

function submitAppointment(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const get = (name: string) => String(data.get(name) ?? "").trim();
  const message = [
    "Merhaba StudioDaff, randevu talep etmek istiyorum.",
    `Ad Soyad: ${get("name")}`,
    `Telefon: ${get("phone")}`,
    `Evcil Dostum: ${get("pet")}`,
    `Hizmet: ${get("service")}`,
    `Not: ${get("message") || "Yok"}`,
  ].join("\n");
  // WhatsApp only prepares the message; the visitor confirms sending it.
  window.open(`https://wa.me/905307347462?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  trackContactClick("whatsapp", "appointment_form");
}


export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-title">

        <span>İLETİŞİM</span>

        <h2>
          Studio Daff ile
          <br />
          İletişime Geçin
        </h2>

        <p>
          Dostunuz için en doğru bakım hizmetini birlikte
          planlayalım. Telefon, WhatsApp veya iletişim
          formu üzerinden bize ulaşabilirsiniz.
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-left">

          <div className="map-box">

            <iframe
              src="https://www.google.com/maps?q=STUDIO%20DAFF%20PET%20GROOMING%20(JIJI%20PET),%20Etiler,%20Sayg%C4%B1l%C4%B1%20Sk.%20No:5%20D:A,%20%C4%B0stanbul&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

          <div className="contact-info">

            <div className="info-item">

              <h3>📍 Adres</h3>

              <p>
                Etiler
                <br />
                Saygılı Sokak No:5 D:A
                <br />
                İstanbul
              </p>

            </div>

            <div className="info-item">

              <h3>📞 Telefon</h3>

              <a href="tel:+905307347462" onClick={() => trackContactClick("phone", "contact_info")}>
                +90 530 734 74 62
              </a>

            </div>

            <div className="info-item">

              <h3>📧 E-Posta</h3>

              <a href="mailto:info@studiodaff.com">
                info@studiodaff.com
              </a>

            </div>

            <div className="info-item">

              <h3>🕒 Çalışma Saatleri</h3>

              <p>
                Pazartesi - Cumartesi
                <br />
                09:00 - 19:00
              </p>

            </div>

          </div>

        </div>

        <div className="contact-right">

          <form className="contact-form" onSubmit={submitAppointment}>

            <input
              type="text"
              name="name"
              autoComplete="name"
              maxLength={100}
              required
              aria-label="Ad Soyad"
              placeholder="Ad Soyad"
            />

            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              minLength={10}
              maxLength={20}
              required
              aria-label="Telefon"
              placeholder="Telefon"
            />

            <input
              type="text"
              name="pet"
              maxLength={100}
              required
              aria-label="Evcil Dostunuz"
              placeholder="Evcil Dostunuz"
            />

            <select name="service" defaultValue="" required aria-label="Hizmet Seçiniz">
              <option value="" disabled>
                Hizmet Seçiniz
              </option>

              <option>Köpek Grooming</option>
              <option>Kedi Grooming</option>
              <option>Banyo & Spa</option>
              <option>Tırnak Kesimi</option>
              <option>Kulak Temizliği</option>

            </select>

            <textarea
              rows={6}
              name="message"
              maxLength={1200}
              aria-label="Mesajınız"
              placeholder="Mesajınız"
            />

            <button type="submit">
              WhatsApp ile Randevu Talebi Gönder
            </button>
            <p style={{ color: "#d8d8d8", fontSize: "13px", lineHeight: 1.5 }} role="note">
              Butona bastığınızda WhatsApp açılır. Talebiniz, mesajı WhatsApp üzerinden gönderdiğinizde iletilir; randevunuz henüz kesinleşmez.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}