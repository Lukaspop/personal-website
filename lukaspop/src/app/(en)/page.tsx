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

          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-200 md:text-xl">
            Websites where aesthetics meet performance
          </p>
        </div>
      </section>

      <section id="who-am-i" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary font-bold">Who am I?</h2>

          <p className="mt-6 max-w-4xl leading-relaxed text-neutral-400">
            My name is Lukáš Pop and I focus on building modern web applications. I specialize in
            combining thoughtful design with high-quality code to create solutions that are clear,
            efficient, and easy to scale in the future.
          </p>

          <p className="mt-4 text-neutral-400">
            If you'd like to learn more about me, click the link →
            <a href="/en/about" className="text-primary ml-2 hover:underline">
              More about me
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
              description="Modern web applications built with Next.js and TypeScript."
              icon={<Code size={20} color="var(--neon-blue)" />}
            />

            <ServiceCard
              title="UI / UX"
              description="Thoughtful design focused on user experience."
              icon={<Palette size={20} color="var(--neon-red)" />}
            />

            <ServiceCard
              title="Performance"
              description="Optimization focused on speed and scalability."
              icon={<Zap size={20} color="var(--neon-yellow)" />}
            />
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#020202] pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary pb-12 text-3xl font-bold md:text-4xl">Selected Projects</h2>

          <ProjectCard
            title="Personal Website"
            description="This project is my most recent work and holds great personal value for me. The biggest challenge was designing the website itself, which took several iterations before I found the right direction."
            imagePath="/private-images/personalWebsiteProject.jpg"
            imageAlt="Screenshot of Lukaspop personal website"
            align="left"
            year="2026"
            skills={["Figma", "Next.js", "Tailwind", "SEO"]}
            visitLink="/"
            locale="en"
          />

          <ProjectCard
            title="Cutouts"
            description="This website for the Irish band Cutouts was created based only on their logo, Instagram, and a recording of their live performance. From these materials, I created several Figma designs that eventually evolved into the final website. The artwork created for the site may also appear on the band's merchandise in the future."
            imagePath="/private-images/cutoutsWebsiteProject.jpg"
            imageAlt="Screenshot of the Cutouts band website"
            align="right"
            year="2025"
            skills={["Figma", "WordPress", "MailerLite"]}
            visitLink="https://cutouts.ie"
            locale="en"
          />

          <ProjectCard
            title="Pixel Dread"
            description="This project was my first encounter with SEO. It is a website for the mobile game Pixel Dread created by Jan S. Kostlán. The backend is very well designed, especially the instance system used for communication, but the visual design does not fully reflect the technical quality of the project. For that reason, I am preparing a redesign of the website along with improvements to several SEO elements. The project is also part of my graduation thesis."
            imagePath="/private-images/pixeldreadWebsiteProject.jpg"
            imageAlt="Screenshot of the Pixel Dread website"
            align="left"
            year="2025"
            skills={["ASP.NET", "React", "SQL", "SEO", "Google Analytics"]}
            visitLink="https://pixeldread.com"
            locale="en"
          />
        </div>
      </section>
    </main>
  );
}
