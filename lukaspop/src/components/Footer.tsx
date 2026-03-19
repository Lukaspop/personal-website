"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function getLocale(pathname: string) {
  return pathname.startsWith("/cs") ? "cs" : "en";
}

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocale(pathname);

  const links =
    locale === "cs"
      ? [
          { href: "/cs", label: "Domů" },
          { href: "/cs/o-mne", label: "O mně" },
          { href: "/cs/projekty", label: "Projekty" },
        ]
      : [
          { href: "/", label: "Home" },
          { href: "/about-me", label: "About" },
          { href: "/projects", label: "Projects" },
        ];

  return (
    <footer id="footer" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="space-y-3">
            <Link
              href={locale === "cs" ? "/cs" : "/"}
              className="block text-[22px] leading-none text-white"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 700,
              }}
            >
              Lukaspop
              <span className="text-[#FF2455] drop-shadow-[0_0_30px_rgba(255,36,85,0.6)]">+</span>
            </Link>

            <p className="text-xs text-neutral-500">Lukáš Pop © {new Date().getFullYear()}</p>
          </div>

          <div>
            <p className="mb-3 text-xs tracking-[0.04em] text-neutral-500 uppercase">Quick links</p>

            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs tracking-[0.04em] text-neutral-500 uppercase">Legal</p>

            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={locale === "cs" ? "/cs/cookies" : "/cookies"}
                  className="text-neutral-400 hover:text-white"
                >
                  Cookies
                </Link>
              </li>

              <li>
                <Link
                  href={locale === "cs" ? "/cs/privacy-policy" : "/privacy-policy"}
                  className="text-neutral-400 hover:text-white"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs tracking-[0.04em] text-neutral-500 uppercase">Reach me</p>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@lukaspop.com" className="text-neutral-400 hover:text-white">
                  hello@lukaspop.com
                </a>
              </li>

              <li>
                <a href="tel:+420720285566" className="text-neutral-400 hover:text-white">
                  +420 720 285 566
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/lukasspop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com/in/lukas-pop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
