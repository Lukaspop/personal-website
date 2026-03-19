import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Outfit, Poppins } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },

  title: {
    default: "Lukaspop | Websites where aesthetics meet performance",
    template: "%s | Lukaspop",
  },
  description: "Fill out.",
  alternates: {
    canonical: "https://lukaspop.com/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
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
