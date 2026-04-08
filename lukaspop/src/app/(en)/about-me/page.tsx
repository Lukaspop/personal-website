import { Suspense } from "react"; // Import Suspense for lazy loading
import PageWrapper from "@/components/PageWrapper";
import Head from "next/head";
import React from "react";
const Timeline = React.lazy(() => import("@/components/Timeline/Timeline"));
const TechStack = React.lazy(() => import("@/components/Techstack"));
const Image = React.lazy(() => import("next/image"));

export const metadata = {
  title: "About me",
  alternates: {
    canonical: "https://lukaspop.com/about-me",
  },
};

export default function About() {
  const data = [
    {
      year: "2011",
      title: "Art School",
      description:
        "This is probably where it all started. It was my first real encounter with art, and over ten years I had the opportunity to explore different forms of it and gradually develop my creativity.",
    },
    {
      year: "2019",
      title: "First technical steps",
      description:
        "I’m not entirely sure what led me to it, but around this time I wrote my first lines of HTML somewhere in an online learning platform.",
    },
    {
      year: "2021",
      title: "SPŠSE",
      description:
        "Starting a technical secondary school focused on IT was a key moment for me, when my experimenting with code finally started to take shape.",
    },
    {
      year: "2023",
      title: "Dreamind",
      description:
        "My first internship in a company, where I also returned the following year. I helped with developing an application in React.",
    },
    {
      year: "2025",
      title: "Graduation",
      description:
        "Finishing secondary school, which taught me much more than I originally expected.",
    },
    {
      year: "2025",
      title: "Erasmus+ & Digital Funnel",
      description:
        "After finishing school, I went to Ireland for Erasmus, where I gained valuable experience, mainly in collaboration, and got more into SEO.",
    },
    {
      year: "2025",
      title: "University",
      description:
        "Starting university was quite chaotic, but I believe I will gradually move closer to topics that suit me better, as the bachelor’s programme is still quite general.",
    },
    {
      year: "2025",
      title: "Freelancing & Digital Funnel",
      description:
        "My collaboration with Digital Funnel continued even after Erasmus. A colleague even referred me to a project for a local band, for which I’m still very grateful. If you’re reading this, thanks, Gene.",
    },
    {
      year: "2026",
      title: "Future",
      description:
        "The future is hard to predict, but if you would like to be part of it, feel free to reach out.",
      dashed: true,
    },
  ];

  return (
    <>
      <Head>
        <link rel="alternate" href="https://lukaspop.com/cs/o-mne" hrefLang="cs" />
        <link rel="alternate" href="https://lukaspop.com/about-me" hrefLang="en" />
        <link rel="alternate" href="https://lukaspop.com/about-me" hrefLang="x-default" />
      </Head>
      <PageWrapper>
        <section className="grid min-h-[calc(100vh-64px)] items-center gap-14 py-16 lg:grid-cols-2">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              About me
            </h1>

            <p className="text-lg leading-relaxed text-neutral-300">
              Hi, my name is Lukas and on this page, you can find an overview of my experience, what
              I do, and what led me to building websites.
            </p>

            <p className="leading-relaxed text-neutral-400">
              I see websites as a form of modern art that, beyond their visual side, help brands
              grow and reach new customers.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs tracking-wider text-neutral-500 uppercase">Focus</p>

                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Frontend and web development
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs tracking-wider text-neutral-500 uppercase">Outside tech</p>

                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Fitness, future personal trainer
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-blue-500/20 blur-3xl" />

              <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-white/10 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
                {/* Use Suspense for the Image component */}
                <Suspense fallback={<div>Loading Image...</div>}>
                  <Image
                    src="/private-images/ImageOfMyself.webp"
                    alt="Lukas Pop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="mb-10 max-w-2xl md:mb-12">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              What I have experience in
            </h2>

            <p className="mt-3 text-neutral-400">
              I mainly focus on frontend development, as it’s where I have the most experience, but
              I’m also open to other technologies.
            </p>
          </div>

          <Suspense fallback={<div>Loading Tech Stack...</div>}>
            <TechStack />
          </Suspense>
        </section>

        <Suspense fallback={<div>Loading Timeline...</div>}>
          <Timeline
            data={data}
            heading="My journey"
            subheading="The path that brought me where I am today."
          />
        </Suspense>
      </PageWrapper>
    </>
  );
}