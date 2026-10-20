# SD-AI-001 — GTM / GA4 conversion verification

Status: configuration and browser verification required before merging.

## Event contract

The website pushes this event to `window.dataLayer`:

```js
{
  event: "studio_contact_click",
  contact_method: "whatsapp" | "phone",
  contact_placement: "hero" | "ads_welcome_popup" | "appointment_form" | "contact_info"
}
```

These events measure **click intent**, not an actual sent WhatsApp message, connected phone call, confirmed booking or paid customer.

## GTM configuration

1. Open Google Tag Manager container `GTM-T7664RC4`. Check the site and environment are correct.
2. Create Custom Event trigger with event name `studio_contact_click`.
3. Create Data Layer Variables `contact_method` and `contact_placement` (Version 2).
4. Create a GA4 Event tag using the existing GA4 Google tag, event name `studio_contact_click` and parameters with the two variables. Apply the trigger. Follow applicable consent settings.
5. Preview (Tag Assistant), visit the staging deployment, click the hero WhatsApp, phone and appointment form CTAs, and confirm each event fires **once**, with correct placement.
6. Check GA4 DebugView/realtime for the test events. Do not label these clicks as confirmed bookings.
7. Only after confirming attribution and deduplication, decide whether Google Ads should import these as secondary / diagnostic conversion actions. A verified completed booking should be a separate primary conversion.
8. Publish the GTM container only with owner approval.

## Regression checks

- Direct/organic visit: Google Ads welcome popup must not appear.
- Google paid landing URL: popup may appear once per session, unless dismissed.
- Form: incomplete required fields must block; complete form must open a *prefilled* WhatsApp message and user must send it manually.
- Popup blocked or WhatsApp cancelled must never be recorded as a confirmed booking.
- Phone links should open the phone handler on mobile; record a click only.
- Check consent banner and whether GTM tags honor consent choices.
- Confirm the real canonical host; set `NEXT_PUBLIC_SITE_URL` in hosting environment and inspect `/sitemap.xml`, `/robots.txt`.
- Confirm mobile accessibility of popup, close button, form and external links.

Do not paste API keys, access tokens, customer phone numbers or test leads into CI logs.
