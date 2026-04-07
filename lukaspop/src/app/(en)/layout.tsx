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
    default: "Lukaspop | Websites where aesthetics meet performance",
    template: "%s | Lukaspop – Web Developer & Designer",
  },
  description:
    "I design and build websites and apps from initial design to final deployment. I also help increase visibility with SEO (Search Engine Optimization).",
  alternates: {
    canonical: "https://lukaspop.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ogImageUrl = "/LukaspopWebsite.jpg";

  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
        <Head>
          <meta
            property="og:title"
            content="Lukaspop | Websites where aesthetics meet performance"
          />
          <meta
            property="og:description"
            content="I design and build websites and apps from initial design to final deployment. I also help increase visibility with SEO (Search Engine Optimization)."
          />
          <meta property="og:image" content={ogImageUrl} />
          <meta property="og:image:alt" content="Lukas Pop - Web Developer & Designer" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:url" content="https://lukaspop.com/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={ogImageUrl} />
        </Head>

        <CookieConsentComponent language="en" />

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
