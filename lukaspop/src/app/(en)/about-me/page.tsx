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
                {/* Replace with <Image ... /> */}
                <div className="h-full w-full grid place-items-center text-white/60 text-sm">
                  photo placeholder
                </div>
              </div>

              {/* subtle glow */}
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
              I’m Lukas — I build clean, fast, SEO-friendly websites with a strong
              focus on detail. I like simple layouts, sharp typography and
              interactions that feel “quietly premium”.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              My sweet spot is bridging design and engineering: taking a visual
              idea and shipping it as a real product with performance, semantics
              and maintainability in mind.
            </p>

            {/* quick meta */}
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                ["Focus", "Next.js • UI • SEO"],
                ["Style", "Minimal • Glass • Dark"],
                ["Principle", "Ship & iterate"],
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
              A mix of frontend craft, practical engineering and SEO awareness.
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
              What I enjoy building and how I like to work.
            </p>

            <ul className="relative mt-5 space-y-3 text-white/80">
              {[
                "Minimal UI with a premium feel (no clutter, no noise).",
                "Strong typography, spacing and clean grids.",
                "SEO-first structure: semantics, headings, internal linking.",
                "Performance: ship fast, load fast, stay fast.",
                "Communication: clear expectations, quick iterations.",
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
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-white/95">My Story</h2>
              <p className="mt-2 text-sm text-white/65">
                A simple timeline of what I’ve been doing — and where I’m headed.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {[
              {
                title: "Early curiosity",
                meta: "First experiments • learning by building",
                text: "Started tinkering with websites and UI details — the kind of stuff you notice only after you care.",
              },
              {
                title: "Real projects",
                meta: "Freelance / personal work • shipping",
                text: "Moved from “cool demos” to real pages that need structure, speed, and a clear message.",
              },
              {
                title: "Design-meets-engineering",
                meta: "Polish • systems • consistency",
                text: "Focused on reusable components, smooth interactions, and keeping the experience cohesive.",
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-lg font-semibold text-white/95">
                    {b.title}
                  </div>
                  <div className="text-xs text-white/55">{b.meta}</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {b.text}
                </p>
              </div>
            ))}

            {/* Dashed "Who knows" */}
            <div
              className={[
                "rounded-3xl p-6",
                "bg-white/[0.02]",
                "ring-1 ring-white/12",
                "shadow-[0_14px_44px_rgba(0,0,0,0.55)]",
                "border border-dashed border-white/25",
              ].join(" ")}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="text-lg font-semibold text-white/90">
                  Who knows?
                </div>
                <div className="text-xs text-white/55">next chapter • TBD</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Maybe a bigger product, maybe a brand studio vibe, maybe something
                completely unexpected.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm sm:text-base text-white/70 leading-relaxed">
            We don’t really know what the future looks like — but together we can
            define it. If you have an idea, a problem, or just a vision, I’m down
            to explore it with you.
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
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60
                         bg-[radial-gradient(900px_420px_at_20%_-10%,rgba(255,255,255,0.10),transparent_60%),radial-gradient(700px_320px_at_90%_120%,rgba(255,36,85,0.12),transparent_65%)]"
            />
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
