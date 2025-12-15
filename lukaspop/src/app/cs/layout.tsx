import "../styles/globals.css";

import NavbarCs from "../../components/cs/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <NavbarCs />
        <main>{children}</main>
      </body>
    </html>
  );
}
