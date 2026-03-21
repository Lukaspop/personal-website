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
    <main className="relative overflow-hidden">
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

          <p className="mx-auto mt-4 max-w-xl px-8 text-lg text-neutral-200 md:text-xl">
            Webové stránky u kterých se estetika setkává s&nbsp;výkonem
          </p>
        </div>
      </section>
      <section id="who-am-i" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary font-bold">Kdo jsem?</h2>

          <p className="mt-6 max-w-4xl leading-relaxed text-neutral-400">
            Málem jsem se zapomněl představit. Jmenuji se Lukáš&nbsp;Pop a&nbsp;věnuji se tvorbě
            webových stránek i&nbsp;aplikací od samého návrhu až po nasazení. Záleží mi hlavně na
            výkonu a&nbsp;udržitelnosti, přičemž se tuto kombinaci snažím zabalit do pro oči
            příznivého obalu.
          </p>

          <p></p>

          <p className="mt-4 text-neutral-400">
            Pokud byste se o&nbsp;mně zajímali více do hloubky, přečtěte si více pod tímto odkazem →
            <a href="cs/o-mne" className="text-primary ml-2 hover:underline">
              Více o mně
            </a>
          </p>
        </div>
      </section>
      <section id="services" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-12 max-w-2xl">
            <h2 className="text-primary text-3xl font-bold md:text-4xl">Nabízené služby</h2>
          </header>
          <div className="grid gap-3 md:grid-cols-3">
            <ServiceCard
              title="Prezentační web na míru"
              description="Provedu vás celým procesem od samotného návrhu po nasazení a vytvořím web, který pomůže zviditelnit vás či vaši značku."
              icon={<Code size={20} color="var(--neon-blue)" />}
            />
            <ServiceCard
              title="Webová aplikace"
              description="Vytvořím řešení na míru, které vám ušetří čas a zlepší uživatelský zážitek na vašem webu."
              icon={<Palette size={20} color="var(--neon-red)" />}
            />
            <ServiceCard
              title="SEO & Online viditelnost"
              description="Zlepším vaši pozici ve vyhledávačích, nastavím Google Analytics, vytvořím Google Business a odstraním nedostatky vašeho webu."
              icon={<Zap size={20} color="var(--neon-yellow)" />}
            />
          </div>
        </div>
      </section>
      <section id="projekty" className="bg-[#020202] pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary pb-12 text-3xl font-bold md:text-4xl">Výběr z projektů</h2>
          <ProjectCard
            title="Osobní stránka"
            description="Tento projekt je mým nejnovějším dílem a má pro mě velkou osobní hodnotu. Největší výzvou byl samotný návrh stránky, ke kterému jsem se dostal až po několika iteracích a hledání správného směru."
            imagePath="/private-images/personalWebsiteProject.jpg"
            imageAlt="Screenshot osobní webové stránky Lukaspop"
            align="left"
            year="2026"
            skills={["Figma", "Next.js", "Tailwind", "SEO"]}
            visitLink="/cs"
            locale="cs"
          />

          <ProjectCard
            title="Cutouts"
            description="Webová stránka pro irskou kapelu Cutouts vznikla na základě jejich loga, Instagramu a nahrávky živého vystoupení. Z těchto podkladů jsem vytvořil několik návrhů ve Figmě, ze kterých postupně vznikla finální podoba webu. Artwork vytvořený pro stránku by se v budoucnu mohl objevit i na jejich merch."
            imagePath="/private-images/cutoutsWebsiteProject.jpg"
            imageAlt="Screenshot webové stránky kapely Cutouts"
            align="right"
            year="2025"
            skills={["Figma", "WordPress", "MailerLite"]}
            visitLink="https://cutouts.ie"
            locale="cs"
          />

          <ProjectCard
            title="Pixel Dread"
            description="Na tomto projektu jsem se poprvé setkal se SEO. Jde o web k mobilní aplikaci Pixel Dread od Jana S. Kostlána. Backend projektu je velmi kvalitní, zejména systém instancí pro komunikaci, ale vizuální stránka webu podle mě neodpovídá jeho technické úrovni. Proto připravuji redesign webu a úpravu některých SEO prvků. Projekt je také součástí mé maturitní práce."
            imagePath="/private-images/pixeldreadWebsiteProject.jpg"
            imageAlt="Screenshot webové stránky Pixel Dread"
            align="left"
            year="2025"
            skills={["ASP.NET", "REST API", "React", "SQL", "SEO", "Google Analytics"]}
            visitLink="https://pixeldread.com"
            locale="cs"
          />
        </div>
      </section>
    </main>
  );
}
