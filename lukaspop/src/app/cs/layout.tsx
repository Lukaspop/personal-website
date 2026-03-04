import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-black text-white antialiased">
        <div className="relative min-h-dvh">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-emerald-600/30 opacity-40 blur-3xl" />
          </div>
          <header className="fixed inset-x-0 top-0 z-50 h-16">
            <Navbar />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
