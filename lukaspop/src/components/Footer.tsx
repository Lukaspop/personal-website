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
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-4">
            <Link
              href={locale === "cs" ? "/cs" : "/"}
              className="cursor-pointer text-[22px] leading-none tracking-[0.01em] text-white"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 700,
              }}
            >
              Lukaspop
              <span className="text-[#FF2455] drop-shadow-[0_0_30px_rgba(255,36,85,0.6)]">+</span>
            </Link>

            <p className="text-sm text-neutral-500">Lukáš Pop © {new Date().getFullYear()}</p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-neutral-500 uppercase">
              Quick links
            </h4>

            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-neutral-500 uppercase">
              Legal
            </h4>

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

          {/* REACH ME */}
          <div>
            <h4 className="mb-4 text-sm font-medium tracking-wider text-neutral-500 uppercase">
              Reach me
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@lukaspop.com" className="text-neutral-400 hover:text-white">
                  hello@lukaspop.com
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
