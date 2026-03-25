import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Poppins, Outfit } from "next/font/google";
import CookieConsentComponent from "@/components/CookieConsentComponent";

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
  robots: {
    index: false,
    follow: false,
  },
  title: {
    default: "Lukaspop | Webové stránky u kterých se estetika setkává s výkonem",
    template: "%s | Lukaspop",
  },
  description: "Doplnit.",
  alternates: {
    canonical: "https://lukaspop.com/cs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
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
