"use client";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            Studio<span>Daff</span>
          </h2>

          <p>
            Sevgiyle bakım, mutlu patiler.
            Premium pet grooming deneyimini
            güven, hijyen ve profesyonellikle
            buluşturuyoruz.
          </p>

          <div className="footer-social">

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Google Maps
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Hızlı Menü</h3>

          <a href="#anasayfa">Ana Sayfa</a>
          <a href="#hizmetler">Hizmetler</a>
          <a href="#hakkimizda">Hakkımızda</a>
          <a href="#yorumlar">Yorumlar</a>
          <a href="#iletisim">İletişim</a>

        </div>
                <div className="footer-contact">

          <h3>İletişim</h3>

          <p>📍 İstanbul, Türkiye</p>

          <p>📞 +90 555 555 55 55</p>

          <p>✉️ info@studiodaff.com</p>

          <p>🕘 Pzt - Cts : 09:00 - 19:00</p>

          <p>🐾 Pazar : Randevulu</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2025 Studio<span>Daff</span> • Premium Pet Grooming
        </p>

      </div>

    </footer>
  );
}