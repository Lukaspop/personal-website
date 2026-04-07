import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import CookieConsentComponent from "@/components/CookieConsentComponent";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  robots: {},
  title: {
    default: "Lukaspop | Webové stránky, u kterých se estetika setkává s výkonem",
    template: "%s | Lukaspop – Web Developer & Designer",
  },
  description:
    "Navrhuji a vytvářím weby i aplikace od samého návrhu po finální nasazení. Také pomáhám se zvýšením viditelnosti pomocí SEO (optimalizace pro vyhledávače).",
  alternates: {
    canonical: "https://lukaspop.com/cs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ogImageUrl = "/LukaspopWebsite.jpg"; // Updated path to your image

  return (
    <html lang="cs" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
        <Head>
          {/* Preload fonts */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            as="font"
            type="font/woff2"
          />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap"
            as="font"
            type="font/woff2"
          />

          <meta
            property="og:title"
            content="Lukaspop+++ | Webové stránky, u kterých se estetika setkává s výkonem"
          />
          <meta
            property="og:description"
            content="Navrhuji a vytvářím weby i aplikace od samého návrhu po finální nasazení. Také pomáhám se zvýšením viditelnosti pomocí SEO (optimalizace pro vyhledávače)."
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:alt" content="Lukáš Pop - Web Developer & Designer" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://lukaspop.com/cs" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={ogImageUrl} />
        </Head>
        <CookieConsentComponent language="cs" />
        <div className="pointer-events-none fixed top-0 right-0 left-0 z-[999]">
          <div className="pointer-events-auto">
            <Navbar />
          </div>
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
