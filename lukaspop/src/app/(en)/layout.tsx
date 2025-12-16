import "../styles/globals.css";
import NavbarEn from "@/components/en/Navbar";
import { PageWrapper } from "@/components/Pagewrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#040404] text-[#FAFAFA] overflow-x-hidden">
        <div className="fixed top-0 left-0 right-0 z-[999] pointer-events-none">
          <div className="pointer-events-auto">
            <NavbarEn />
          </div>
        </div>
        <main>
          <PageWrapper className="pt-24 sm:pt-28">{children}</PageWrapper>
        </main>
      </body>
    </html>
  );
}
