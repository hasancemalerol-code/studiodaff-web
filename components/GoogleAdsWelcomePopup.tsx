"use client";

import { useState } from "react";
import "./GoogleAdsWelcomePopup.css";

export default function GoogleAdsWelcomePopup() {
  const [open, setOpen] = useState(true);

  const closePopup = () => {
    setOpen(false);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="sd-popup-overlay">
      <div className="sd-popup">
        <button
          type="button"
          className="sd-close"
          onClick={closePopup}
          aria-label="Kapat"
        >
          ✕
        </button>

        <h2 className="sd-heading">
          StudioDaff&apos;a Hoş Geldiniz
        </h2>

        <p className="sd-title">
          Premium Pet Grooming &amp; Spa
        </p>

        <p className="sd-desc">
          Köpeğiniz veya kediniz için profesyonel bakım
          randevunuzu birkaç saniye içinde oluşturabilirsiniz.
        </p>

        <a
          href="https://wa.me/905307347462?text=Merhaba%20StudioDaff%20Köpeğim%20için%20randevu%20oluşturmak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="sd-btn sd-whatsapp"
        >
          WhatsApp&apos;tan Randevu Al
        </a>

        <a
          href="tel:+905307347462"
          className="sd-btn sd-phone"
        >
          📞 Hemen Ara
        </a>

        <button
          type="button"
          className="sd-link"
          onClick={closePopup}
        >
          Siteyi İncele
        </button>
      </div>
    </div>
  );
}