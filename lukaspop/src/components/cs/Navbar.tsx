"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { toEn } from "@/lib/routeMap";

type Slider = { x: number; w: number };
type Phase = "closed" | "rounding" | "expanding";

function normalizePath(p: string) {
  if (!p) return "/cs";
  return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}

function getActiveIndex(items: { href: string }[], pathname: string) {
  const c = normalizePath(pathname);
  let best = 0;
  let bestLen = -1;

  for (let i = 0; i < items.length; i++) {
    const h = normalizePath(items[i].href);
    const ok = c === h || c.startsWith(h + "/");
    if (ok && h.length > bestLen) {
      best = i;
      bestLen = h.length;
    }
  }
  return best;
}

export default function NavbarCs() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("closed");

  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const phaseRef = useRef(phase);
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  const timers = useRef<number[]>([]);

  const items = useMemo(
    () => [
      { href: "/cs", label: "Domů" },
      { href: "/cs/o-mne", label: "O mně" },
      { href: "/cs/projekty", label: "Projekty" },
      { href: "/cs/kontakt", label: "Kontakt" },
    ],
    []
  );

  function clearTimers() {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }

  useEffect(() => {
    return () => clearTimers();
  }, []);

  function setOpenTwoPhase(next: boolean) {
    clearTimers();

    const currentOpen = openRef.current;
    const currentPhase = phaseRef.current;

    if (!next && !currentOpen && currentPhase === "closed") return;

    if (next) {
      setOpen(true);
      setPhase("rounding");
      timers.current.push(window.setTimeout(() => setPhase("expanding"), 140));
    } else {
      setPhase("rounding");
      timers.current.push(
        window.setTimeout(() => {
          setOpen(false);
          setPhase("closed");
        }, 220)
      );
    }
  }

  const toggleMenu = (value: boolean | ((prev: boolean) => boolean)) => {
    const prev = openRef.current;
    const next = typeof value === "function" ? value(prev) : value;
    setOpenTwoPhase(next);
  };

  useEffect(() => {
    if (openRef.current) setOpenTwoPhase(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 456px)");
    const handler = () => mq.matches && setOpenTwoPhase(false);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

      setSlider({ x: Math.round(r.left - cr.left), w: Math.round(r.width) });
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

  const isExpanded = phase === "expanding";
  const isRoundedPanel = phase !== "closed";

  return (
    <>
      {/* ✅ Backdrop exists ONLY when open (removes "extra overlay" from DOM) */}
      {open && (
        <div
          className={[
            "fixed inset-0 z-40",
            "bg-black/60",
            "transition-opacity duration-300 ease-out",
            "[@media(min-width:456px)]:hidden",
          ].join(" ")}
          onClick={() => setOpenTwoPhase(false)}
          aria-hidden
        />
      )}

      <header className="sticky top-0 z-[999] w-full pt-4">
        <div className="px-3 sm:px-6">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mx-auto w-full max-w-[760px]">
              <div
                className={[
                  "relative z-[999] mx-auto",
                  "w-full [@media(min-width:456px)]:w-[432px]",
                  // ✅ use your brand black (so it doesn't show as bg-black/*)
                  "bg-[#040404]/55 backdrop-blur-[12px]",
                  "border border-white/15 overflow-hidden",
                  "transition-[border-radius,max-height] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "duration-[220ms]",
                  "[@media(min-width:456px)]:rounded-[32px]",
                  isRoundedPanel ? "rounded-2xl" : "rounded-[32px]",
                  isExpanded ? "max-h-[520px] duration-[500ms]" : "max-h-[56px]",
                  "[@media(min-width:456px)]:max-h-[56px]",
                ].join(" ")}
              >
                <nav className="flex items-center gap-2 sm:gap-3 h-[56px] pr-0 [@media(min-width:456px)]:pr-0">
                  <button
                    type="button"
                    onClick={() => router.push(toEn(normalizePath(pathname)))}
                    aria-label="Switch to English"
                    className="ml-3 h-10 w-10 rounded-full overflow-hidden bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-colors cursor-pointer flex-shrink-0"
                  >
                    <Image
                      src="/private-images/english-flag.png"
                      alt=""
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </button>

                  <div className="hidden [@media(min-width:456px)]:flex min-w-0 px-0 flex-1">
                    <div
                      ref={linksRef}
                      className="relative flex h-10 items-center gap-1 w-full justify-center"
                    >
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

                  <div className="ml-auto mr-2 flex items-center [@media(min-width:456px)]:hidden">
                    <Hamburger
                      toggled={open}
                      toggle={toggleMenu}
                      direction="left"
                      rounded
                      size={20}
                      duration={0.25}
                      label="Menu"
                    />
                  </div>
                </nav>

                <div
                  className={[
                    "px-3 pb-3",
                    "transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "[@media(min-width:456px)]:hidden",
                    isExpanded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
                  ].join(" ")}
                  style={{ pointerEvents: isExpanded ? "auto" : "none" }}
                >
                  <div className="grid gap-2 pt-2">
                    {items.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        onClick={() => setOpenTwoPhase(false)}
                        className="h-12 rounded-xl border border-white/10 inline-flex items-center justify-center whitespace-nowrap hover:bg-white/5 hover:border-white/15 transition-colors"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
