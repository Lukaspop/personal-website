export default function AboutMePage() {
  return (
    <main className="px-4 sm:px-6">
      <div className="mx-auto w-full max-w-[980px] pt-14 pb-24">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[320px,1fr] items-start">
          {/* Avatar */}
          <div className="flex md:justify-start justify-center">
            <div className="relative">
              <div
                className={[
                  "h-[240px] w-[240px] sm:h-[280px] sm:w-[280px]",
                  "rounded-full overflow-hidden",
                  "bg-white/[0.04] ring-1 ring-white/12",
                  "shadow-[0_18px_60px_rgba(0,0,0,0.65)]",
                ].join(" ")}
              >
                <div className="h-full w-full grid place-items-center text-white/60 text-sm">
                  photo placeholder
                </div>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 opacity-60
                           bg-[radial-gradient(180px_180px_at_50%_50%,rgba(255,36,85,0.18),transparent_60%)]"
              />
            </div>
          </div>

          {/* Intro */}
          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--text-primary)]">
              About Me
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              I’m Lukas. I build websites at the intersection of technology and
              aesthetics. I care about how things work — but even more about how
              they feel.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              I’m not a big studio or a faceless agency. Every project I work on
              represents progress, learning, and another step forward in
              defining my own direction.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["Focus", "Web • UI • Backend thinking"],
                ["Style", "Minimal • Detail-driven"],
                ["Mindset", "Learn • Build • Improve"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className={[
                    "rounded-2xl p-4",
                    "bg-white/[0.04] ring-1 ring-white/10",
                    "shadow-[0_14px_44px_rgba(0,0,0,0.55)]",
                  ].join(" ")}
                >
                  <div className="text-xs uppercase tracking-wide text-white/50">
                    {k}
                  </div>
                  <div className="mt-1 text-sm text-white/90">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS + PREFERENCES */}
        <section className="mt-14 grid gap-4 md:grid-cols-2">
          {/* Skills */}
          <div
            className={[
              "rounded-3xl p-6",
              "bg-white/[0.045] ring-1 ring-white/12",
              "shadow-[0_16px_52px_rgba(0,0,0,0.68)]",
              "relative overflow-hidden",
            ].join(" ")}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70
                         bg-[radial-gradient(700px_340px_at_18%_0%,rgba(255,36,85,0.12),transparent_60%)]"
            />
            <h2 className="relative text-xl font-semibold text-white/95">
              Skills
            </h2>
            <p className="relative mt-2 text-sm leading-relaxed text-white/65">
              Skills built through hands-on projects, experimentation, and
              real-world use.
            </p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {[
                "Next.js",
                "TypeScript",
                "React",
                "Tailwind",
                "UI / UX polish",
                "SEO fundamentals",
                "Performance",
                "Accessibility",
                "Animations",
                "Content structure",
              ].map((t) => (
                <span
                  key={t}
                  className={[
                    "px-3 py-1.5 rounded-full text-sm",
                    "bg-white/[0.04] ring-1 ring-white/10",
                    "text-white/85",
                  ].join(" ")}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div
            className={[
              "rounded-3xl p-6",
              "bg-white/[0.045] ring-1 ring-white/12",
              "shadow-[0_16px_52px_rgba(0,0,0,0.68)]",
              "relative overflow-hidden",
            ].join(" ")}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70
                         bg-[radial-gradient(700px_340px_at_82%_110%,rgba(255,161,173,0.10),transparent_62%)]"
            />
            <h2 className="relative text-xl font-semibold text-white/95">
              Preferences
            </h2>
            <p className="relative mt-2 text-sm leading-relaxed text-white/65">
              How I like to think about projects and what I naturally gravitate
              towards.
            </p>

            <ul className="relative mt-5 space-y-3 text-white/80">
              {[
                "Clean, thoughtful design — no unnecessary noise.",
                "Strong focus on detail, spacing, and visual balance.",
                "Systems that make sense, even if they’re slightly overbuilt.",
                "Long-term thinking instead of quick fixes.",
                "Clear communication and honest expectations.",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="text-sm leading-relaxed">{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

{/* MY STORY */}
<section className="mt-14">
  <h2 className="text-2xl font-semibold text-white/95">Můj příběh</h2>
  <p className="mt-2 text-sm text-white/65">
    Stručná časová osa toho, kde jsem začal — a kam mířím.
  </p>

  <div className="mt-6 grid gap-3">
    {[
      {
        icon: "🎨",
        title: "ZUŠ (Základní umělecká škola)",
        year: "2012–2022",
        text:
          "K tvorbě jsem měl blízko už od dětství. Nešlo o digitál, ale o papír a sklo. Naučilo mě to trpělivosti a tomu, že detail dělá výsledek.",
      },
      {
        icon: "💻",
        title: "SPŠSE",
        year: "2021–2025",
        text:
          "Technický základ a první větší projekty. Tady se začala potkávat estetika s tím, aby věci fungovaly a dávaly smysl i uvnitř.",
      },
      {
        icon: "🧩",
        title: "Dreamind",
        year: "2023",
        text:
          "První zkušenost s reálnými projekty mimo školu. Skutečné zadání, limity a hlavně praxe místo teorie.",
      },
      {
        icon: "✈️",
        title: "Erasmus+ (Irsko)",
        year: "2025",
        text:
          "Vystoupení z komfortní zóny. Nové prostředí, nový pohled na práci i na sebe. Velký osobní i profesní posun.",
      },
      {
        icon: "🚀",
        title: "DigitalFunnel & freelancing",
        year: "2025",
        text:
          "Práce s klienty, odpovědnost za výsledek, komunikaci i rozhodnutí. Tady jsem nejvíc pochopil hodnotu dobře odvedené práce.",
      },
      {
        icon: "🎓",
        title: "Maturita",
        year: "2025",
        text:
          "Uzavření jedné etapy. Důležitý milník — ale pro mě spíš přechod než finále.",
      },
    ].map((b) => (
      <div
        key={b.title}
        className={[
          "rounded-3xl p-6",
          "bg-white/[0.04] ring-1 ring-white/10",
          "shadow-[0_14px_44px_rgba(0,0,0,0.55)]",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-4">
          {/* Left: icon + title */}
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span
                className={[
                  "h-9 w-9 rounded-full grid place-items-center flex-shrink-0",
                  "bg-white/[0.05] ring-1 ring-white/12",
                  "text-white/90",
                ].join(" ")}
                aria-hidden
              >
                {b.icon}
              </span>
              <div className="text-lg font-semibold text-white/95 truncate">
                {b.title}
              </div>
            </div>
          </div>

          {/* Right: year pill */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="hidden sm:block h-8 w-px bg-white/10" aria-hidden />
            <span
              className={[
                "h-8 px-3 rounded-full inline-flex items-center justify-center",
                "bg-white/[0.05] ring-1 ring-white/12",
                "text-xs tracking-wide text-white/75",
                "shadow-[0_10px_26px_rgba(0,0,0,0.35)]",
              ].join(" ")}
            >
              {b.year}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-white/70">
          {b.text}
        </p>
      </div>
    ))}

    {/* Dashed "A DÁL?" */}
    <div
      className={[
        "rounded-3xl p-6",
        "bg-white/[0.02]",
        "ring-1 ring-white/12",
        "shadow-[0_14px_44px_rgba(0,0,0,0.55)]",
        "border border-dashed border-white/25",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={[
              "h-9 w-9 rounded-full grid place-items-center flex-shrink-0",
              "bg-white/[0.04] ring-1 ring-white/12",
              "text-white/85",
            ].join(" ")}
            aria-hidden
          >
            ✨
          </span>
          <div className="text-lg font-semibold text-white/90">A dál?</div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="hidden sm:block h-8 w-px bg-white/10" aria-hidden />
          <span
            className={[
              "h-8 px-3 rounded-full inline-flex items-center justify-center",
              "bg-white/[0.04] ring-1 ring-white/12",
              "text-xs tracking-wide text-white/70",
            ].join(" ")}
          >
            2026+
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/65">
        Nevím přesně co přijde. Ale vím, že to bude dál růst — projekt po projektu.
      </p>
    </div>
  </div>

  <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
    Cesty nejsou vždy předem dané. Vznikají postupně — skrze zvědavost,
    konzistenci a chuť jít dál.
  </p>
</section>


        {/* CTA */}
        <section className="mt-14">
          <div
            className={[
              "rounded-3xl p-7 sm:p-9",
              "bg-white/[0.045] ring-1 ring-white/12",
              "shadow-[0_18px_60px_rgba(0,0,0,0.70)]",
              "relative overflow-hidden",
            ].join(" ")}
          >
            <h2 className="relative text-2xl sm:text-3xl font-semibold text-white/95">
              Zaujal jsem tě?
            </h2>
            <p className="relative mt-3 text-sm sm:text-base leading-relaxed text-white/70 max-w-[70ch]">
              Neváhej se ozvat — ať už chceš nový web, redesign, nebo jen probrat
              nápad. Rád navrhnu cestu od první myšlenky až po hotový launch.
            </p>

            <div className="relative mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className={[
                  "inline-flex items-center justify-center",
                  "h-11 px-5 rounded-full",
                  "bg-white/[0.10] hover:bg-white/[0.14]",
                  "ring-1 ring-white/18 hover:ring-white/24",
                  "text-white/90",
                  "transition-all duration-200",
                  "shadow-[0_14px_44px_rgba(0,0,0,0.55)]",
                ].join(" ")}
              >
                Napiš mi
              </a>
              <a
                href="/projects"
                className={[
                  "inline-flex items-center justify-center",
                  "h-11 px-5 rounded-full",
                  "bg-white/[0.03] hover:bg-white/[0.06]",
                  "ring-1 ring-white/12 hover:ring-white/16",
                  "text-white/80",
                  "transition-all duration-200",
                ].join(" ")}
              >
                Mrkni na projekty
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
