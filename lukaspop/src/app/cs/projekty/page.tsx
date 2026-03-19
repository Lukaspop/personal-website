"use client";

import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";

export default function Projekty() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-7xl pt-24 pb-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Projekty</h1>

          <p className="text-lg text-neutral-400">
            Výběr projektů, na kterých jsem pracoval. Každý z nich řeší jiný problém a posunul mě o
            krok dál.
          </p>
        </div>
      </section>

      <section className="max-w-7xl">
        <ProjectCard
          title="Osobní stránka"
          description="Můj aktuální projekt, na kterém jsem řešil design, strukturu i technické provedení. Největší výzvou bylo najít správný směr a vytvořit konzistentní vizuální identitu."
          imagePath="/private-images/personalWebsiteProject.jpg"
          imageAlt="Osobní web Lukaspop"
          align="left"
          year="2026"
          skills={["Figma", "Next.js", "Tailwind", "SEO"]}
          visitLink="/cs"
          locale="cs"
        />

        <ProjectCard
          title="Cutouts"
          description="Web pro irskou kapelu vytvořený na základě jejich vizuální identity a hudby. Návrh vznikl ve Figmě a následně byl převeden do finální podoby."
          imagePath="/private-images/cutoutsWebsiteProject.jpg"
          imageAlt="Cutouts web"
          align="right"
          year="2025"
          skills={["Figma", "WordPress", "MailerLite"]}
          visitLink="https://cutouts.ie"
          locale="cs"
        />

        <ProjectCard
          title="Pixel Dread"
          description="Projekt zaměřený na SEO a redesign. Backend je kvalitní, ale vizuální stránka neodpovídá současným standardům, proto pracuji na jeho zlepšení."
          imagePath="/private-images/pixeldreadWebsiteProject.jpg"
          imageAlt="Pixel Dread web"
          align="left"
          year="2025"
          skills={["ASP.NET", "React", "SQL", "SEO"]}
          visitLink="https://pixeldread.com"
          locale="cs"
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
        />

        <ProjectCard
          title="Sheep Monopoly"
          description="Projekt je hotový, jen jej musím popsat textově. "
          imagePath="/private-images/sheepmonopolyProject.jpg"
          imageAlt="Sheep Monopoly projekt"
          align="right"
          year="2024"
          skills={["React"]}
          visitLink="#"
          locale="cs"
        />
      </section>
    </PageWrapper>
  );
}
