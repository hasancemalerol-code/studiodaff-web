"use client";

import "./Contact.css";

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
              src="https://www.google.com/maps?q=STUDIO%20DAFF%20PET%20GROOMING%20(J%C4%B0J%C4%B0%20PET),%20Rumeli%20Hisar%C4%B1,%20Sayg%C4%B1l%C4%B1%20Sk.%20No:5%20D:A,%2034470%20Sar%C4%B1yer%20%C4%B0stanbul&output=embed"
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
                Rumeli Hisarı
                <br />
                Saygılı Sokak No:5 D:A
                <br />
                Sarıyer / İstanbul
              </p>

            </div>

            <div className="info-item">

              <h3>📞 Telefon</h3>

              <a href="tel:+902128926832">
                +90 212 892 68 32
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

          <form className="contact-form">

            <input
              type="text"
              placeholder="Ad Soyad"
            />

            <input
              type="tel"
              placeholder="Telefon"
            />

            <input
              type="text"
              placeholder="Evcil Dostunuz"
            />

            <select defaultValue="">
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
              placeholder="Mesajınız"
            />

            <button type="submit">
              Randevu Oluştur
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}