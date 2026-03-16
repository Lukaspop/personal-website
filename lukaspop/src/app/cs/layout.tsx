import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";

const geist = Geist({
  variable: "--font-geist-sans",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${geist.variable} ${poppins.variable}`}>
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
