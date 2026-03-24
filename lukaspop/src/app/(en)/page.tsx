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
            Websites where aesthetics meet performance
          </p>
        </div>
      </section>

      <section id="who-am-i" className="bg-[#020202] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary font-bold">Who am I?</h2>

          <p className="mt-6 max-w-4xl leading-relaxed text-neutral-400">
            I almost forgot to introduce myself. My name is Lukáš&nbsp;Pop, and I focus on building
            websites and web applications — from the initial concept all the way to deployment. I
            care deeply about performance and sustainability, while making sure the final result is
            visually appealing.
          </p>

          <p className="mt-4 text-neutral-400">
            If you’d like to learn more about me, you can read more here →
            <a href="en/about" className="text-primary ml-2 hover:underline">
              About me
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
              title="Custom Website"
              description="I’ll guide you through the entire process — from design to deployment — and create a website that helps you or your brand stand out."
              icon={<Code size={20} color="var(--neon-blue)" />}
            />

            <ServiceCard
              title="Web Application"
              description="I build custom solutions that save you time and improve the user experience of your product or website."
              icon={<Palette size={20} color="var(--neon-red)" />}
            />

            <ServiceCard
              title="SEO & Online Visibility"
              description="I improve your search engine rankings, set up analytics, create Google Business profiles, and fix key issues on your website."
              icon={<Zap size={20} color="var(--neon-yellow)" />}
            />
          </div>
        </div>
      </section>

      <section id="projekty" className="bg-[#020202] pt-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-primary mb-24 text-3xl font-bold md:text-4xl">Selected Projects</h2>

          <ProjectCard
            title="Personal Website"
            description="This project is my most recent work and holds strong personal value for me. The biggest challenge was the design itself, which I reached only after several iterations and exploring different directions."
            imagePath="/private-images/personalWebsiteProject.jpg"
            imageAlt="Screenshot of Lukaspop personal website"
            align="left"
            year="2026"
            skills={["Figma", "Next.js", "Tailwind", "SEO"]}
            visitLink="/en"
            locale="en"
          />

          <ProjectCard
            title="Cutouts"
            description="This website for the Irish band Cutouts was created based on their logo, Instagram presence, and a recording of their live performance. From these inputs, I developed several design concepts in Figma, which gradually evolved into the final website. The artwork created for the site may also be used for their future merchandise."
            imagePath="/private-images/cutoutsWebsiteProject.jpg"
            imageAlt="Screenshot of Cutouts band website"
            align="right"
            year="2025"
            skills={["Figma", "WordPress", "MailerLite"]}
            visitLink="https://cutouts.ie"
            locale="en"
          />

          <ProjectCard
            title="Pixel Dread"
            description="This project was my first experience with SEO. It’s a website for the mobile game Pixel Dread by Jan S. Kostlán. The backend is very well structured, especially the instance-based communication system, but visually it doesn’t fully reflect its technical quality. That’s why I’m currently working on a redesign and SEO improvements. The project is also part of my graduation work."
            imagePath="/private-images/pixeldreadWebsiteProject.jpg"
            imageAlt="Screenshot of Pixel Dread website"
            align="left"
            year="2025"
            skills={["ASP.NET", "REST API", "React", "SQL", "SEO", "Google Analytics"]}
            visitLink="https://pixeldread.com"
            locale="en"
          />
        </div>
      </section>
    </main>
  );
}
