"use client";

import { useEffect, useState } from "react";
import "./GoogleAdsWelcomePopup.css";

type TrackingEvent = "whatsapp_click" | "phone_click";

function trackContactClick(event: TrackingEvent) {
  const dataLayer = (window as Window & {
    dataLayer?: Array<Record<string, string>>;
  }).dataLayer;

  // GTM consumes custom events; tags and conversions are configured separately.
  dataLayer?.push({
    event: "studio_contact_click",
    contact_method: event === "whatsapp_click" ? "whatsapp" : "phone",
    contact_placement: "ads_welcome_popup",
  });
}

function isGoogleAdVisit(search: string) {
  const params = new URLSearchParams(search);
  const hasClickId = ["gclid", "gbraid", "wbraid"].some((key) =>
    params.has(key),
  );
  const source = params.get("utm_source")?.toLowerCase();
  const medium = params.get("utm_medium")?.toLowerCase();

  return (
    hasClickId ||
    ((source === "google" || source === "googleads") &&
      ["cpc", "ppc", "paidsearch", "paid_search"].includes(medium ?? ""))
  );
}

export default function GoogleAdsWelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!isGoogleAdVisit(window.location.search)) return;
      if (window.sessionStorage.getItem("sd_ads_popup_dismissed") === "1") {
        return;
      }
      setOpen(true);
    } catch {
      // Storage may be unavailable; ad-source checking still works.
      if (isGoogleAdVisit(window.location.search)) setOpen(true);
    }
  }, []);

  const closePopup = () => {
    setOpen(false);
    try {
      window.sessionStorage.setItem("sd_ads_popup_dismissed", "1");
    } catch {
      // Closing the popup must work without browser storage.
    }
  };

  if (!open) return null;

  return (
    <div className="sd-popup-overlay">
      <div className="sd-popup" role="dialog" aria-modal="true" aria-labelledby="sd-ads-popup-title">
        <button type="button" className="sd-close" onClick={closePopup} aria-label="Kapat">
          ✕
        </button>

        <h2 id="sd-ads-popup-title" className="sd-heading">
          StudioDaff&apos;a Hoş Geldiniz
        </h2>
        <p className="sd-title">Premium Pet Grooming &amp; Spa</p>
        <p className="sd-desc">
          Köpeğiniz veya kediniz için profesyonel bakım randevunuzu
          birkaç saniye içinde oluşturabilirsiniz.
        </p>

        <a
          href="https://wa.me/905307347462?text=Merhaba%20StudioDaff%20Köpeğim%20için%20randevu%20oluşturmak%20istiyorum."
          target="_blank"
          rel="noopener noreferrer"
          className="sd-btn sd-whatsapp"
          onClick={() => trackContactClick("whatsapp_click")}
        >
          WhatsApp&apos;tan Randevu Al
        </a>
        <a
          href="tel:+905307347462"
          className="sd-btn sd-phone"
          onClick={() => trackContactClick("phone_click")}
        >
          📞 Hemen Ara
        </a>
        <button type="button" className="sd-link" onClick={closePopup}>
          Siteyi İncele
        </button>
      </div>
    </div>
  );
}
