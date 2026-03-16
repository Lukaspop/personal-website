import PageWrapper from "@/components/PageWrapper";
import { Timeline } from "@/components/Timeline/Timeline";
import Image from "next/image";
import TechStack from "@/components/Techstack";

export default function OMne() {
  const data = [
    {
      year: "2010",
      title: "ZUŠ",
      description:
        "Přibližně 10 let jsem navštěvoval základní uměleckou školu, kde jsem si vybudoval cit pro kreativitu, detail a tvorbu.",
    },
    {
      year: "2019",
      title: "První zmínky",
      description:
        "První kontakt s weby a technickým světem. Začal jsem experimentovat s jednoduchými projekty.",
    },
    {
      year: "2021",
      title: "SPŠSE",
      description:
        "Studium na SPŠSE, kde jsem začal rozvíjet programování a práci s technologiemi systematičtěji.",
    },
    {
      year: "2025",
      title: "Maturita",
      description:
        "Dokončení střední školy pro mě znamenalo velkou změnu a posun směrem k profesionálnější práci.",
    },
    {
      year: "2025",
      title: "Vysoká škola",
      description: "Nástup na vysokou školu a další rozvoj v oblasti softwarového inženýrství.",
    },
    {
      year: "2025",
      title: "Erasmus+ & Digital Funnel",
      description: "Zkušenost ze zahraničí a práce v digitální agentuře Digital Funnel.",
    },
    {
      year: "2025",
      title: "Freelancing",
      description: "Začal jsem pracovat na vlastních projektech a moderních webových aplikacích.",
    },
    {
      year: "2026",
      title: "Budoucnost",
      description: "Pokud se tady chcete vidět, neváhejte mi napsat.",
      dashed: true,
    },
  ];

  return (
    <PageWrapper>
      {/* HERO */}
      <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2">
        {/* TEXT */}
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            O mně
          </h1>

          <p className="text-lg leading-relaxed text-neutral-300">
            Ahoj, jmenuji se Lukáš a věnuji se vývoji webových aplikací a moderních webových
            stránek.
          </p>

          <p className="leading-relaxed text-neutral-400">
            Weby beru jako kombinaci techniky a estetiky. Každý detail, každý pixel a každé prázdné
            místo na stránce má svůj význam a dohromady tvoří výsledný dojem z produktu.
          </p>

          {/* INFO CARDS */}
          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">Zaměření</p>

              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Tady musím přidat věci.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">Mimo tech</p>

              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Tady musím přidat věci.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-blue-500/20 blur-3xl" />

            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-white/10 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
              <Image
                src="/private-images/ImageOfMyself.webp"
                alt="Lukas Pop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-2xl md:mb-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">V čem mám zkušenosti</h2>

          <p className="mt-3 text-neutral-400">
            Technologie a nástroje, se kterými nejčastěji pracuji při návrhu, vývoji a nasazení
            webových aplikací.
          </p>
        </div>

        <TechStack />
      </section>

      {/* TIMELINE */}
      <Timeline
        data={data}
        heading="Můj příběh"
        subheading="Cesta, která mě přivedla až tam, kde teď jsem."
      />
    </PageWrapper>
  );
}
