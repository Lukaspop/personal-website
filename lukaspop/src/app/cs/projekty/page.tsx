import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
export const metadata = {
  title: "Projekty",
  alternates: {
    canonical: "https://lukaspop.com/cs/projekty",
  },
};
export default function Projekty() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-7xl pt-24 pb-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Projekty</h1>

          <p className="text-lg text-neutral-400">
            Toto jsou mé publikované a dokončené projekty, seřazené od nejnovějších. Ukazují hlavně
            to, jak se moje práce v průběhu času posunula.
          </p>
        </div>
      </section>

      <section className="max-w-7xl">
        <ProjectCard
          title="Osobní stránka"
          description="Projekt, který se mě držel delší dobu a prošel několika kompletními redesigny, než dosáhl své finální podoby. Každá verze mě postupně posouvala blíž k výsledku, se kterým jsem dnes spokojený. Důraz je zde kladen na výkon a také na SEO."
          imagePath="/private-images/personalWebsiteProject.jpg"
          imageAlt="fotka Osobní stránky"
          align="left"
          year="2026"
          skills={["Figma", "Next.js", "Tailwind", "SEO"]}
          visitLink="/cs"
          locale="cs"
          as="h2"
        />

        <ProjectCard
          title="Cutouts"
          description="Projekt pro menší irskou kapelu, který mi byl nabídnut kolegou. Na začátku jsem měl k dispozici pouze jejich logo a krátký záznam z živého vystoupení, což z projektu udělalo zajímavou výzvu. Celý web i backgroundový artwork jsem proto navrhl na základě celkové atmosféry a dojmu. Artwork měl tak pozitivní ohlas, že z něj kapela do budoucna zvažuje vytvořit merch."
          imagePath="/private-images/cutoutsWebsiteProject.jpg"
          imageAlt="Cutouts web"
          align="right"
          year="2025"
          skills={["Figma", "WordPress", "MailerLite"]}
          visitLink="https://cutouts.ie"
          locale="cs"
          as="h2"
        />

        <ProjectCard
          title="Pixel Dread"
          description="Tento projekt představuje CMS (Content Management System), kde je backend řešen velmi profesionálně a s důrazem na rozšiřitelnost. Bohužel je tato kvalitní funkčnost obalena velmi podprůměrným vizuálem. Do budoucna proto plánuji kompletní redesign, aby více než 100 hodin práce mělo i odpovídající, reprezentativní vzhled."
          imagePath="/private-images/pixeldreadWebsiteProject.jpg"
          imageAlt="Pixel Dread web"
          align="left"
          year="2025"
          skills={["ASP.NET", "React", "SQL", "SEO"]}
          visitLink="https://pixeldread.com"
          locale="cs"
          as="h2"
        />

        <ProjectCard
          title="Solar Panel Calculator"
          description="Moje druhá kalkulačka, vytvořená dle požadavků irského klienta. Projekt byl jednodušší, jelikož jsem mohl vycházet z předchozí kalkulačky, u které už jsem měl mnoho věcí dobře podchycených. Tento projekt vznikl také díky pozitivním ohlasům od jiného klienta (Pension Calculator)."
          imagePath="/private-images/solarpanelcalculatorProject.jpg"
          imageAlt="Solar calculator showcase"
          align="right"
          year="2025"
          skills={["PHP", "WordPress", "Figma"]}
          visitLink="https://buckleyelectrical.ie/solar-panel-calculator/"
          locale="cs"
          as="h2"
        />

        <ProjectCard
          title="Pension Calculator"
          description="Můj poslední projekt ve firmě Digital Funnel během Erasmu. Nejdříve jsem musel pochopit, jak celý výpočet funguje, a následně navrhnout řešení. Poté jsem komunikoval s klientem a prezentoval mu fungování (např. nastavení proměnných ročních úroků, které jsou upravitelné v admin části). Součástí projektu byl také grafický návrh a jeho implementace."
          imagePath="/private-images/pensioncalculatorProject.jpg"
          imageAlt="Pension calculator showcase"
          align="left"
          year="2025"
          skills={["PHP", "WordPress", "Figma"]}
          visitLink="https://gsbcapital.ie/pension-planning/pension-calculator/#calculator"
          locale="cs"
          as="h2"
        />

        <ProjectCard
          title="Sheep Monopoly"
          description="Toto je můj nejstarší prezentovatelný projekt. Jde o Monopoly, kde se místo měst obchoduje s ovcemi. Graficky je to opět méně povedená hra, ale naučil jsem se na ní hodně práce s Reactem."
          imagePath="/private-images/sheepmonopolyProject.jpg"
          imageAlt="Sheep Monopoly projekt"
          align="right"
          year="2024"
          skills={["React", "Figma"]}
          visitLink="https://pslib-cz.github.io/2023-p3a-mpa-react-project-Lukypop"
          locale="cs"
          as="h2"
        />
      </section>
    </PageWrapper>
  );
}
