"use client";

export type ContactMethod = "whatsapp" | "phone";
export type ContactPlacement = "hero" | "ads_welcome_popup" | "appointment_form" | "contact_info";

export function trackContactClick(method: ContactMethod, placement: ContactPlacement) {
  if (typeof window === "undefined") return;
  const scope = window as Window & { dataLayer?: Array<Record<string, string>> };
  scope.dataLayer ??= [];
  scope.dataLayer.push({
    event: "studio_contact_click",
    contact_method: method,
    contact_placement: placement,
  });
}
