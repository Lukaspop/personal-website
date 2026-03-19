import PageWrapper from "@/components/PageWrapper";
import ProjectCard from "@/components/ProjectCard";
export const metadata = {
  title: "Projects",
  alternates: {
    canonical: "https://lukaspop.com/projects",
  },
};
export default function Projects() {
  return (
    <PageWrapper>
      <section className="mx-auto max-w-7xl pt-24 pb-16">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Projects</h1>

          <p className="text-lg text-neutral-400">
            A selection of projects I’ve worked on. Each one solves a different problem and helped
            me grow.
          </p>
        </div>
      </section>

      <section className="max-w-7xl">
        <ProjectCard
          title="Personal Website"
          description="My current project where I worked on design, structure and technical implementation. The biggest challenge was defining the right direction and building a consistent visual identity."
          imagePath="/private-images/personalWebsiteProject.jpg"
          imageAlt="Personal website Lukaspop"
          align="left"
          year="2026"
          skills={["Figma", "Next.js", "Tailwind", "SEO"]}
          visitLink="/en"
          locale="en"
          as="h2"
        />

        <ProjectCard
          title="Cutouts"
          description="A website for an Irish band built based on their visual identity and music. Designed in Figma and then translated into a live website."
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
          description="A project focused on SEO and redesign. The backend is solid, but the visual side doesn’t match modern standards, so I’m working on improving it."
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
          description="A custom-built calculator for a client. It builds on a previously successful project, this time developed in collaboration with an international team."
          imagePath="/private-images/solarpanelcalculatorProject.jpg"
          imageAlt="Solar calculator"
          align="right"
          year="2025"
          skills={["PHP", "WordPress", "Figma"]}
          visitLink="https://buckleyelectrical.ie/solar-panel-calculator/"
          locale="en"
          as="h2"
        />

        <ProjectCard
          title="Pension Calculator"
          description="My final project at Digital Funnel during my Erasmus. I handled communication, design, development, and testing."
          imagePath="/private-images/pensioncalculatorProject.jpg"
          imageAlt="Pension calculator"
          align="left"
          year="2025"
          skills={["PHP", "WordPress", "Figma"]}
          visitLink="https://gsbcapital.ie/pension-planning/pension-calculator/#calculator"
          locale="en"
          as="h2"
        />

        <ProjectCard
          title="Sheep Monopoly"
          description="The project is finished, I just need to document it properly. More details coming soon."
          imagePath="/private-images/sheepmonopolyProject.jpg"
          imageAlt="Sheep Monopoly project"
          align="right"
          year="2024"
          skills={["React"]}
          visitLink="#"
          locale="en"
          as="h2"
        />
      </section>
    </PageWrapper>
  );
}
