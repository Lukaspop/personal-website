import { Suspense } from 'react';
import Head from "next/head";
import { Code, Palette, Zap } from "lucide-react";
import { Poppins } from "next/font/google";
import React from 'react';

// Lazy-load the components
const ServiceCard = React.lazy(() => import('@/components/ServiceCard'));
const ProjectCard = React.lazy(() => import('@/components/ProjectCard'));
const WaveEffects = React.lazy(() => import('@/components/WaveEffect'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <WaveEffects />
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-70% to-[#020202]" />
          <div className="relative z-10 px-6 text-center">
            <h1 className={`${poppins.className} text-[clamp(4rem,8vw,6rem)] leading-tight font-bold tracking-[-0.024em] text-[#FAFAFA]`}>
              Lukaspop
              <span className="text-[#FF2455] drop-shadow-[0_0_25px_rgba(255,36,85,0.6)]">+</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl px-8 text-lg text-neutral-200 md:text-xl">
              Websites where aesthetics meet performance
            </p>
          </div>
        </section>

        <section id="services" className="bg-[#020202] pt-24">
          <div className="mx-auto max-w-7xl px-6">
            <header className="mb-12 max-w-2xl">
              <h2 className="text-primary text-3xl font-bold md:text-4xl">Services</h2>
            </header>

            <div className="grid gap-6 md:grid-cols-3">
              <Suspense fallback={<div>Loading Service...</div>}>
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
              </Suspense>
            </div>
          </div>
        </section>

        <section id="projekty" className="bg-[#020202] pt-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">Selected Projects</h2>

            <p className="mb-16 max-w-4xl leading-relaxed text-neutral-400">
              This is only a small selection of my work. If you’re interested in more projects and details, visit →
              <a href="/en/projects" className="text-primary ml-2 hover:underline">all projects</a>
            </p>

            <Suspense fallback={<div>Loading Projects...</div>}>
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
                description="The website for the Irish band Cutouts was created based on their logo, Instagram and a recording of their live performance. From these materials, I created several designs in Figma, which gradually evolved into the final version of the website."
                imagePath="/private-images/cutoutsWebsiteProject.jpg"
                imageAlt="Screenshot of Cutouts band website"
                align="right"
                year="2025"
                skills={["Figma", "WordPress", "MailerLite"]}
                visitLink="https://cutouts.ie"
                locale="en"
                as="h2"
              />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}