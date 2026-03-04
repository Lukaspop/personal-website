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
        { href: "/cs/kontakt", label: "Kontakt" },
      ];
    }

    return [
      { href: "/", label: "Home" },
      { href: "/about-me", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ];
  }, [locale]);

  const switchLanguage = () => {
    const target = locale === "cs" ? toEn(pathname) : toCs(pathname);

    router.push(target);
  };

  return (
    <header className="animate-navbar fixed top-0 left-0 z-[999] w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={locale === "cs" ? "/cs" : "/"} className="text-lg font-semibold text-white">
          Lukaspop<span className="text-[#FF2455]">+</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {items.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            onClick={switchLanguage}
            className="ml-4 h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/20 transition hover:ring-white/40"
          >
            <Image
              src={
                locale === "cs"
                  ? "/private-images/english-flag.png"
                  : "/private-images/czech-flag.png"
              }
              alt="switch language"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </button>
        </nav>

        <div className="md:hidden">
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
              className="block text-white/80 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setOpen(false);
              switchLanguage();
            }}
            className="flex items-center gap-3 pt-4"
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
