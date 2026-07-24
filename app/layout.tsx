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
  title: "StudioDaff",
  description: "Premium Pet Grooming & Spa",
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