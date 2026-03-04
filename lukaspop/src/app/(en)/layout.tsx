import "../styles/globals.css";
import NavbarEn from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
          <div className="pointer-events-auto">
            <NavbarEn />
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
