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
            Toto jsou mé publikované a dokončené projekty, seřazené od nejnovějších. Ukazují, jak se
            moje práce v průběhu času posunula.
          </p>
        </div>
      </section>

      <section className="max-w-7xl">
        <ProjectCard
          title="Osobní stránka"
          description="Projekt, který se mě držel delší dobu a prošel několika kompletními redesigny, než dosáhl své finální podoby. Každá verze mě postupně posouvala blíž k výsledku, se kterým jsem dnes spokojený. Důraz je zde kladen na výkon a také na SEO."
          imagePath="/private-images/personalWebsiteProject.jpg"
          imageAlt="Osobní stránka Lukaspop+"
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
          description="Tento okolo 120h projekt má ten nejčistější backend a komunikaci s ním, byl zároveň mojí maturitní prací, bohužel jeho vizuální strana je velmi neúměrná k funkci, kterou předvádí."
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
          description="Kalkulačka vytvořená na míru pro klienta. Navazuje na předchozí úspěšný projekt, tentokrát ve spolupráci se zahraničním týmem."
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
          description="Můj poslední projekt ve firmě Digital Funnel během Erasmu. Zajišťoval jsem komunikaci s klientem, návrh řešení i samotnou implementaci a testování."
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
          description="Projekt je hotový, jen jej musím popsat textově. "
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
