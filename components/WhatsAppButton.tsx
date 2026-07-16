"use client";

import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phone = "905551234567"; // <-- Kendi numaranı yaz
  const message =
    "Merhaba, StudioDaff hakkında bilgi almak istiyorum.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="currentColor"
      >
        <path d="M19.11 17.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.67.61.7.22 1.33.19 1.83.11.56-.08 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16.02 3C8.84 3 3 8.76 3 15.86c0 2.48.72 4.9 2.08 6.98L3.7 29l6.34-1.66a13.1 13.1 0 005.98 1.5h.01c7.18 0 13.02-5.76 13.02-12.86C29.05 8.76 23.2 3 16.02 3z" />
      </svg>
    </a>
  );
}