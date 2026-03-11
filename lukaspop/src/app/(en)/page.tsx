import { ServiceCard } from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import WaveEffects from "@/components/WaveEffect";
import { Code, Palette, Zap } from "lucide-react";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export default function Home() {
  return (
    <main>
      <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
        <WaveEffects />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-70% to-[#020202]" />
        <div className="relative z-10 px-6 text-center">
          <h1
            className={`${poppins.className} text-[clamp(4rem,8vw,6rem)] leading-tight font-bold tracking-[-0.024em] text-[#FAFAFA]`}
          >
            Lukaspop
            <span className="text-[#FF2455] drop-shadow-[0_0_25px_rgba(255,36,85,0.6)]">+</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-200 md:text-xl">
            Webové stránky u kterých se estetika setkává s&nbsp;výkonem
          </p>
        </div>
      </section>

      <section id="who-am-i" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary font-bold">Kdo jsem?</h2>

          <p className="mt-6 max-w-4xl leading-relaxed text-neutral-400">
            Jmenuji se Lukáš Pop a věnuji se vývoji moderních webových aplikací. Zaměřuji se na
            kombinaci promyšleného designu, kvalitního kódu a řešení, která jsou přehledná a snadno
            rozšiřitelná i do budoucna.
          </p>

          <p className="mt-4 text-neutral-400">
            Pokud se o mně chcete dozvědět více, klikněte na tento odkaz →
            <a href="cs/o-mne" className="text-primary ml-2 hover:underline">
              Více o mně
            </a>
          </p>
        </div>
      </section>

      <section id="services" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-12 max-w-2xl">
            <h2 className="text-primary text-3xl font-bold md:text-4xl">Services</h2>
          </header>
          <div className="grid gap-3 md:grid-cols-3">
            <ServiceCard
              title="Web Development"
              description="Moderní webové aplikace postavené na Next.js a TypeScriptu."
              icon={<Code size={20} color="var(--neon-blue)" />}
            />
            <ServiceCard
              title="UI / UX"
              description="Promyšlený design zaměřený na uživatelský zážitek."
              icon={<Palette size={20} color="var(--neon-red)" />}
            />
            <ServiceCard
              title="Performance"
              description="Optimalizace rychlosti a škálovatelnosti."
              icon={<Zap size={20} color="var(--neon-yellow)" />}
            />
          </div>
        </div>
      </section>

      <section id="projekty" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary text-3xl font-bold md:text-4xl">Projects</h2>
          <ProjectCard
            title="Osobní stránka"
            description="Tento projekt je nejnovější a jde o moji osobní stránku, milion verzí se odvrátilo až se to dostalo do tohoto stavu, který se mi velmi líbí."
            imagePath="/private-images/lukaspopWebsite.png"
            imageAlt="123"
            align="left"
            year="2026"
            visitLink="/projects"
          />
          <ProjectCard
            title="Cutouts"
            description="kapela v irsku wtf jak se mi tohle povedlo, ale je to brutálně hustý"
            imagePath="/private-images/cutoutsWebsite.png"
            imageAlt="123"
            align="right"
            year="2025"
            visitLink="/projects"
          />
          <ProjectCard
            title="Pixeldread"
            description="takovej overkill na backend, že to ani není možný ale dobře, spoiler, mám v plánu dělat redesign celého vzhledu, protože ten kod co tam spojuje backend a frontend je nadherný, ale vizuál to celé zabijí"
            imagePath="/private-images/pixeldreadWebsite.png"
            imageAlt="123"
            align="left"
            year="2025"
            visitLink="/projects"
          />
        </div>
      </section>
    </main>
  );
}
