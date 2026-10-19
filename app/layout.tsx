import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAdsWelcomePopup from "@/components/GoogleAdsWelcomePopup";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StudioDaff | Etiler Pet Kuaför, Köpek ve Kedi Bakımı",
  description: "StudioDaff Etiler’de profesyonel köpek ve kedi bakım hizmetleri: pet grooming, banyo, tırnak ve kulak bakımı. Bilgi ve randevu için bize ulaşın.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "StudioDaff",
    title: "StudioDaff | Etiler Pet Grooming",
    description: "Etiler’de profesyonel köpek ve kedi bakımı.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={poppins.className}>
        <GoogleAdsWelcomePopup />

        {children}
      </body>

      <GoogleTagManager gtmId="GTM-T7664RC4" />
    </html>
  );
}