import { Suspense } from "react"; // Import Suspense for lazy loading
import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
import React from "react";

// Lazy-load the ProjectCard component
const ProjectCard = React.lazy(() => import("@/components/ProjectCard"));

export const metadata = {
  title: "Projects",
  description:
    "These are my published and completed projects, sorted from the most recent. They reflect how my work has evolved over time.",
  alternates: {
    canonical: "https://lukaspop.com/projects",
  },
};

export default function Projects() {
  return (
    <>
      <Head>
        <link rel="alternate" href="https://lukaspop.com/cs/projekty" hrefLang="cs" />
        <link rel="alternate" href="https://lukaspop.com/projects" hrefLang="en" />
        <link rel="alternate" href="https://lukaspop.com/projects" hrefLang="x-default" />
      </Head>
      <PageWrapper>
        <section className="mx-auto max-w-7xl pt-24 pb-16">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold text-white md:text-5xl">Projects</h1>

            <p className="text-lg text-neutral-400">
              These are my published and completed projects, sorted from the most recent. They
              reflect how my work has evolved over time.
            </p>
          </div>
        </section>

        <section className="max-w-7xl">
          {/* Wrap the dynamically imported ProjectCard with Suspense */}
          <Suspense fallback={<div>Loading Projects...</div>}>
            <ProjectCard
              title="Personal Website"
              description="A project I worked on over a longer period of time, going through several complete redesigns before reaching its current form. Each version pushed me closer to a result I’m genuinely satisfied with today. The main focus is on performance and SEO."
              imagePath="/private-images/personalWebsiteProject.jpg"
              imageAlt="Lukaspop personal website"
              align="left"
              year="2026"
              skills={["Figma", "Next.js", "Tailwind", "SEO"]}
              visitLink="/en"
              locale="en"
              as="h2"
            />

            <ProjectCard
              title="Cutouts"
              description="A project for a small Irish band that was offered to me by a colleague. At the beginning, I only had their logo and a short live performance recording, which made it an interesting challenge. I designed the entire website and background artwork based on the overall vibe and impression. The artwork received such positive feedback that the band is considering turning it into merchandise."
              imagePath="/private-images/cutoutsWebsiteProject.jpg"
              imageAlt="Cutouts website"
              align="right"
              year="2025"
              skills={["Figma", "WordPress", "MailerLite"]}
              visitLink="https://cutouts.ie"
              locale="en"
              as="h2"
            />

            <ProjectCard
              title="Pixel Dread"
              description="This roughly 120-hour project has the cleanest backend and communication structure I’ve built so far. It was also my graduation project, although visually it doesn’t quite match the level of functionality it delivers."
              imagePath="/private-images/pixeldreadWebsiteProject.jpg"
              imageAlt="Pixel Dread website"
              align="left"
              year="2025"
              skills={["ASP.NET", "React", "SQL", "SEO"]}
              visitLink="https://pixeldread.com"
              locale="en"
              as="h2"
            />

            <ProjectCard
              title="Solar Panel Calculator"
              description="A custom-built calculator created for a client. It builds on a previously successful project, this time developed in collaboration with an international team."
              imagePath="/private-images/solarpanelcalculatorProject.jpg"
              imageAlt="Solar calculator showcase"
              align="right"
              year="2025"
              skills={["PHP", "WordPress", "Figma"]}
              visitLink="https://buckleyelectrical.ie/solar-panel-calculator/"
              locale="en"
              as="h2"
            />

            <ProjectCard
              title="Pension Calculator"
              description="My final project at Digital Funnel during my Erasmus placement. I was responsible for client communication, solution design, as well as implementation and testing."
              imagePath="/private-images/pensioncalculatorProject.jpg"
              imageAlt="Pension calculator showcase"
              align="left"
              year="2025"
              skills={["PHP", "WordPress", "Figma"]}
              visitLink="https://gsbcapital.ie/pension-planning/pension-calculator/#calculator"
              locale="en"
              as="h2"
            />

            <ProjectCard
              title="Sheep Monopoly"
              description="The project itself is finished, I just still need to properly document and describe it."
              imagePath="/private-images/sheepmonopolyProject.jpg"
              imageAlt="Sheep Monopoly project"
              align="right"
              year="2024"
              skills={["React", "Figma"]}
              visitLink="https://pslib-cz.github.io/2023-p3a-mpa-react-project-Lukypop"
              locale="en"
              as="h2"
            />
          </Suspense>
        </section>
      </PageWrapper>
    </>
  );
}