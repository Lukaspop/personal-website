"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { toCs } from "@/lib/routeMap";

type Slider = { x: number; w: number };
type Phase = "closed" | "rounding" | "expanding";

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
      { href: "/", label: "Home" },
      { href: "/about-me", label: "About " },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" },
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
      {open && (
        <div
          className={[
            "fixed inset-0 z-40",
            "bg-black/55",
            "backdrop-blur-[2px]",
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
                  "w-full [@media(min-width:456px)]:w-fit [@media(min-width:456px)]:max-w-[min(92vw,720px)]",

                  // ✅ neutral glass (same as CS)
                  "bg-white/[0.045] backdrop-blur-[20px]",
                  "ring-1 ring-white/12",
                  "shadow-[0_16px_52px_rgba(0,0,0,0.68)]",

                  "overflow-hidden",
                  "transition-[border-radius,max-height] ease-[cubic-bezier(0.16,1,0.3,1)]",
                  "duration-[220ms]",
                  "[@media(min-width:456px)]:rounded-[32px]",
                  isRoundedPanel ? "rounded-2xl" : "rounded-[32px]",
                  isExpanded ? "max-h-[520px] duration-[500ms]" : "max-h-[56px]",
                  "[@media(min-width:456px)]:max-h-[56px]",
                ].join(" ")}
              >
                {/* ✅ mostly neutral lighting */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-100
                             bg-[radial-gradient(950px_430px_at_18%_-12%,rgba(255,255,255,0.12),transparent_58%),radial-gradient(900px_420px_at_88%_122%,rgba(255,255,255,0.06),transparent_56%)]"
                />
                {/* tiny brand hint */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-40
                             bg-[radial-gradient(700px_300px_at_22%_0%,rgba(255,36,85,0.10),transparent_60%),radial-gradient(650px_280px_at_86%_120%,rgba(255,161,173,0.07),transparent_62%)]"
                />
                {/* sheen */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0
                             bg-gradient-to-br from-white/10 via-white/0 to-white/0"
                />

                <nav className="relative flex items-center gap-2 sm:gap-3 h-[56px] pr-2 [@media(min-width:456px)]:pr-3">
                  <button
                    type="button"
                    onClick={() => router.push(toCs(normalizePath(pathname)))}
                    aria-label="Switch to Czech"
                    className={[
                      "ml-3 h-10 w-10 rounded-full overflow-hidden flex-shrink-0",
                      "cursor-pointer",
                      "bg-white/[0.06] hover:bg-white/[0.09]",
                      "ring-1 ring-white/12 hover:ring-white/18",
                      "shadow-[0_10px_26px_rgba(0,0,0,0.45)]",
                      "transition-all duration-200",
                    ].join(" ")}
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

                  <div className="hidden [@media(min-width:456px)]:flex min-w-0 px-0 flex-1">
                    <div
                      ref={linksRef}
                      className="relative flex h-10 items-center gap-1 lg:gap-2 w-full justify-center"
                    >
                      {/* ✅ active pill: NO border, neutral glass, tiny brand hint */}
                      <div
                        aria-hidden
                        className={[
                          "absolute left-0 top-0 h-10 rounded-full pointer-events-none",
                          "backdrop-blur-xl",
                          "bg-white/[0.08]",
                          "shadow-[0_12px_30px_rgba(0,0,0,0.42)]",
                          "after:pointer-events-none after:absolute after:inset-0 after:rounded-full",
                          "after:bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.02))]",
                          "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:opacity-60",
                          "before:bg-[linear-gradient(90deg,rgba(255,36,85,0.06),transparent_45%,rgba(255,161,173,0.05))]",
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
                          className={[
                            "group relative z-10 h-10 inline-flex items-center justify-center rounded-full whitespace-nowrap",
                            "border-none",
                            "text-sm lg:text-base 2xl:text-lg",
                            "px-4 lg:px-5 2xl:px-6",
                            "leading-none",
                            "text-[var(--text-primary)]/90",
                            "transition-all duration-200",
                            "hover:bg-white/[0.045]",
                            "hover:shadow-[0_10px_26px_rgba(0,0,0,0.30)]",
                          ].join(" ")}
                        >
                          <span
                            aria-hidden
                            className="pointer-events-none absolute inset-0 rounded-full opacity-0
                                       group-hover:opacity-100 transition-opacity duration-200
                                       bg-[linear-gradient(90deg,rgba(255,36,85,0.04),rgba(255,255,255,0.06),rgba(255,161,173,0.03))]"
                          />
                          <span className="relative">{it.label}</span>
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
                    "relative px-3 pb-3",
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
                        className={[
                          "group relative h-12 rounded-xl",
                          "ring-1 ring-white/12 hover:ring-white/16",
                          "bg-white/[0.03] hover:bg-white/[0.05]",
                          "shadow-[0_12px_30px_rgba(0,0,0,0.46)]",
                          "inline-flex items-center justify-center whitespace-nowrap",
                          "transition-all duration-200",
                          "text-[var(--text-primary)]/90",
                        ].join(" ")}
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 rounded-xl opacity-0
                                     group-hover:opacity-100 transition-opacity duration-200
                                     bg-[linear-gradient(90deg,rgba(255,36,85,0.035),rgba(255,255,255,0.06),rgba(255,161,173,0.03))]"
                        />
                        <span className="relative">{it.label}</span>
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
