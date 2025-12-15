import "../styles/globals.css";

import NavbarEn from "../../components/en/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavbarEn />
        <main>{children}</main>
      </body>
    </html>
  );
}
