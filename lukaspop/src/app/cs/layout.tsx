import "../styles/globals.css";
import NavbarCs from "@/components/cs/Navbar";
import { PageWrapper } from "@/components/Pagewrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-[#040404] text-[#FAFAFA] overflow-x-hidden">
        <div className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
          <div className="pointer-events-auto">
            <NavbarCs />
          </div>
        </div>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
