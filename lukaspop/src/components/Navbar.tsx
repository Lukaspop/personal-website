"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { toCs, toEn } from "@/lib/routeMap";

function normalizePath(p: string) {
  if (!p) return "/";
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}

function getLocale(pathname: string) {
  return pathname.startsWith("/cs") ? "cs" : "en";
}

export default function Navbar() {
  const pathnameRaw = usePathname();
  const pathname = normalizePath(pathnameRaw);
  const router = useRouter();

  const locale = getLocale(pathname);
  const [open, setOpen] = useState(false);

  const items = useMemo(() => {
    if (locale === "cs") {
      return [
        { href: "/cs", label: "Domů" },
        { href: "/cs/o-mne", label: "O mně" },
        { href: "/cs/projekty", label: "Projekty" },
      ];
    }

    return [
      { href: "/", label: "Home" },
      { href: "/about-me", label: "About" },
      { href: "/projects", label: "Projects" },
    ];
  }, [locale]);

  const switchLanguage = () => {
    const target = locale === "cs" ? toEn(pathname) : toCs(pathname);
    router.push(target);
  };

  const isActive = (href: string) => {
    if (href === "/" || href === "/cs") {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const contactLabel = locale === "cs" ? "Kontakt" : "Contact";

  return (
    <header className="animate-navbar fixed top-0 left-0 z-[999] w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href={locale === "cs" ? "/cs" : "/"}
          className="cursor-pointer [font-family:var(--font-poppins)] text-xl font-semibold tracking-[0.008em] text-white"
        >
          Lukaspop
          <span className="text-[#FF2455] drop-shadow-[0_0_30px_rgba(255,36,85,0.6)]">+</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`ml-2 flex h-7 cursor-pointer items-center transition-colors duration-200 ${
                isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="#footer"
            className="flex h-7 items-center justify-center rounded-full border border-white/15 px-3 text-sm text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
          >
            {contactLabel}
          </a>

          <button
            onClick={switchLanguage}
            className="h-9 w-9 cursor-pointer overflow-hidden rounded-full ring-1 ring-white/20 transition hover:ring-white/40"
          >
            <Image
              src={
                locale === "cs"
                  ? "/private-images/czech-flag.webp"
                  : "/private-images/english-flag.webp"
              }
              alt="switch language"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </button>
        </nav>

        <div className="cursor-pointer md:hidden">
          <Hamburger toggled={open} toggle={setOpen} size={20} />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-4 border-t border-white/10 bg-black/90 px-6 py-6 backdrop-blur-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block cursor-pointer transition ${
                isActive(item.href) ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="#footer"
            onClick={() => setOpen(false)}
            className="block cursor-pointer text-white/80 hover:text-white"
          >
            {contactLabel}
          </a>

          <button
            onClick={() => {
              setOpen(false);
              switchLanguage();
            }}
            className="flex cursor-pointer items-center gap-3 pt-4"
          >
            <Image
              src={
                locale === "cs"
                  ? "/private-images/english-flag.png"
                  : "/private-images/czech-flag.png"
              }
              alt="switch language"
              width={28}
              height={28}
            />
            <span>{locale === "cs" ? "English" : "Čeština"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
