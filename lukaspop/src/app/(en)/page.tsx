import { ServiceCard } from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import WaveEffects from "@/components/WaveEffect";
import Head from "next/head";
import { Code, Palette, Zap } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export default function Home() {
  return (
    <>
      <Head>
        <link rel="alternate" href="https://lukaspop.com/cs" hrefLang="cs" />
        <link rel="alternate" href="https://lukaspop.com" hrefLang="en" />
        <link rel="alternate" href="https://lukaspop.com" hrefLang="x-default" />
      </Head>
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

        <section id="who-am-i" className="bg-[#020202] pt-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-primary font-bold">Who am I?</h2>

            <p className="mt-6 max-w-4xl leading-relaxed text-neutral-400">
              I almost forgot to introduce myself. My name is Lukáš&nbsp;Pop and I focus on building
              websites and web applications from the initial concept to deployment. I care mainly
              about performance and sustainability, while trying to wrap this combination in a
              visually appealing design.
            </p>

            <p></p>

            <p className="mt-4 text-neutral-400">
              If you’d like to learn more about me in detail, read more here →
              <a href="en/about" className="text-primary ml-2 hover:underline">
                More about me
              </a>
            </p>
          </div>
        </section>

        <section id="services" className="bg-[#020202] pt-24">
          <div className="mx-auto max-w-7xl px-6">
            <header className="mb-12 max-w-2xl">
              <h2 className="text-primary text-3xl font-bold md:text-4xl">Services</h2>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              <ServiceCard
                title="Custom Presentation Website"
                description="I will guide you through the entire process from the initial design to deployment and create a website that helps present you or your brand."
                icon={<Code size={20} />}
                iconColor="#6569f0"
              />

              <ServiceCard
                title="Web Application"
                description="I will create a custom solution that saves you time and improves the user experience on your website."
                icon={<Palette size={20} />}
                iconColor="#fa2d37"
              />

              <ServiceCard
                title="SEO & Online Visibility"
                description="I will improve your search engine rankings, set up Google Analytics, create a Google Business profile and fix issues on your website."
                icon={<Zap size={20} />}
                iconColor="#f59f1d"
              />
            </div>
          </div>
        </section>

        <section id="projekty" className="bg-[#020202] pt-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">Selected Projects</h2>

            <p className="mb-16 max-w-4xl leading-relaxed text-neutral-400">
              This is only a small selection of my work. If you’re interested in more projects and
              details, visit →
              <a href="/en/projects" className="text-primary ml-2 hover:underline">
                all projects
              </a>
            </p>

            <ProjectCard
              title="Personal Website"
              description="This project is my latest work and has strong personal value for me. The biggest challenge was the design itself, which I reached only after several iterations and searching for the right direction."
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
              description="The website for the Irish band Cutouts was created based on their logo, Instagram and a recording of their live performance. From these materials, I created several designs in Figma, which gradually evolved into the final version of the website. The artwork created for the site may also appear on their future merchandise."
              imagePath="/private-images/cutoutsWebsiteProject.jpg"
              imageAlt="Screenshot of Cutouts band website"
              align="right"
              year="2025"
              skills={["Figma", "WordPress", "MailerLite"]}
              visitLink="https://cutouts.ie"
              locale="en"
              as="h2"
            />

            <ProjectCard
              title="Pixel Dread"
              description="In this project I encountered SEO for the first time. It is a website for the mobile application Pixel Dread by Jan S. Kostlán. The backend of the project is very high quality, especially the instance communication system, but visually the website does not match its technical level. That is why I am preparing a redesign and adjusting some SEO elements. The project is also part of my graduation work."
              imagePath="/private-images/pixeldreadWebsiteProject.jpg"
              imageAlt="Screenshot of Pixel Dread website"
              align="left"
              year="2025"
              skills={["ASP.NET", "REST API", "React", "SQL", "SEO", "Google Analytics"]}
              visitLink="https://pixeldread.com"
              locale="en"
              as="h2"
            />
          </div>
        </section>
      </main>
    </>
  );
}
