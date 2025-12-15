"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { toCs } from "@/lib/routeMap";

type Slider = { x: number; w: number };

function normalizePath(p: string) {
  if (!p) return "/";
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}

function getActiveIndex(items: { href: string }[], pathname: string) {
  const c = normalizePath(pathname);
  let best = 0;
  let bestLen = -1;

  for (let i = 0; i < items.length; i++) {
    const h = normalizePath(items[i].href);
    const ok = h === "/" ? c === "/" : c === h || c.startsWith(h + "/");
    if (ok && h.length > bestLen) {
      best = i;
      bestLen = h.length;
    }
  }
  return best;
}

export default function NavbarEn() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useMemo(
    () => [
      { href: "/", label: "Home" },
      { href: "/about-me", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  // Close on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  // Close when switching to desktop (md+)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => mq.matches && setMenuOpen(false);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Desktop slider
  const linksRef = useRef<HTMLDivElement | null>(null);
  const linkEls = useRef<(HTMLAnchorElement | null)[]>([]);
  const [slider, setSlider] = useState<Slider>({ x: 0, w: 0 });
  const [ready, setReady] = useState(false);

  const activeIndex = useMemo(
    () => getActiveIndex(items, pathname),
    [items, pathname]
  );

  const setLinkRef =
    (i: number) =>
    (el: HTMLAnchorElement | null): void => {
      linkEls.current[i] = el;
    };

  useLayoutEffect(() => {
    const recalc = () => {
      const container = linksRef.current;
      const el = linkEls.current[activeIndex];
      if (!container || !el) return;

      const cr = container.getBoundingClientRect();
      const r = el.getBoundingClientRect();

      setSlider({
        x: Math.round(r.left - cr.left),
        w: Math.round(r.width),
      });
      setReady(true);
    };

    setReady(false);
    recalc();

    const ro = new ResizeObserver(recalc);
    if (linksRef.current) ro.observe(linksRef.current);
    linkEls.current.forEach((a) => a && ro.observe(a));

    window.addEventListener("resize", recalc);
    return () => {
      window.removeEventListener("resize", recalc);
      ro.disconnect();
    };
  }, [activeIndex]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="relative z-50 w-full pt-4 px-3 sm:px-4">
      <div className="mx-auto w-full max-w-[760px]">
        {/* NAVBAR */}
        <nav
          aria-label="Primary navigation"
          className={[
            "relative z-50 flex items-center gap-2 sm:gap-3",
            "py-2", // padding řešíme přes margin u ikon
            "bg-black/55 backdrop-blur-[12px]",
            "border border-white/15 transition-[border-radius] duration-200",
            "w-full md:w-fit md:mx-auto",
            menuOpen ? "rounded-2xl rounded-b-none" : "rounded-full",
          ].join(" ")}
        >
          {/* FLAG (left margin 8px) */}
          <button
            type="button"
            onClick={() => router.push(toCs(normalizePath(pathname)))}
            aria-label="Switch to Czech"
            className="ml-3 h-10 w-10 rounded-full overflow-hidden bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-colors cursor-pointer flex-shrink-0"
          >
            <Image
              src="/private-images/czech-flag.png"
              alt=""
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </button>

          {/* DESKTOP LINKS + SLIDER */}
          <div className="hidden md:flex min-w-0 px-1">
            <div ref={linksRef} className="relative flex h-10 items-center gap-1">
              <div
                aria-hidden
                className={[
                  "absolute left-0 top-0 h-10 rounded-full pointer-events-none",
                  "bg-white/10 border border-white/20",
                  ready
                    ? "opacity-100 transition-[transform,width,opacity] duration-300 ease-out"
                    : "opacity-0 transition-none",
                ].join(" ")}
                style={{
                  transform: `translateX(${slider.x}px)`,
                  width: `${slider.w}px`,
                }}
              />

              {items.map((it, i) => (
                <Link
                  key={it.href}
                  href={it.href}
                  ref={setLinkRef(i)}
                  className="relative z-10 h-10 px-4 inline-flex items-center justify-center rounded-full whitespace-nowrap border border-transparent hover:bg-white/5 hover:border-white/15 transition-colors"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>

          {/* HAMBURGER (mobile only) – right margin 8px */}
          <div className="md:hidden ml-auto mr-2 flex items-center">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              direction="left"
              rounded
              size={20}
              duration={0.25}
              label="Menu"
            />
          </div>
        </nav>

        {/* BACKDROP (animate) */}
        <div
          className={[
            "fixed inset-0 z-40 md:hidden",
            "bg-black/60 backdrop-blur-sm",
            "transition-opacity duration-200",
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          ].join(" ")}
          onClick={closeMenu}
          aria-hidden
        />

        {/* MOBILE PANEL (attached + slide-down animation) */}
        <div
          className={[
            "relative z-50 md:hidden",
            "transition-[opacity,transform,max-height] duration-250 ease-out",
            menuOpen
              ? "opacity-100 translate-y-0 max-h-[420px] pointer-events-auto"
              : "opacity-0 -translate-y-2 max-h-0 pointer-events-none",
          ].join(" ")}
        >
        <div className="mt-2 border border-white/15 bg-black/70 backdrop-blur-[12px] rounded-2xl p-3 overflow-hidden">
            <div className="grid gap-2">
              {items.map((it) => (
                <Link
                  key={it.href}
                  href={it.href}
                  onClick={closeMenu}
                  className="h-12 rounded-xl border border-white/10 inline-flex items-center justify-center whitespace-nowrap hover:bg-white/5 hover:border-white/15 transition-colors"
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
