"use client";

import PageWrapper from "@/components/PageWrapper";
import { Timeline } from "@/components/Timeline/Timeline";
import Image from "next/image";
import TechStack from "@/components/Techstack";

export default function About() {
  const data = [
    {
      year: "2010",
      title: "Art School",
      description:
        "I spent around 10 years attending an art school, where I developed a strong sense for creativity, detail, and visual thinking.",
    },
    {
      year: "2019",
      title: "First Steps",
      description:
        "My first exposure to web development and technology. I started experimenting with simple projects.",
    },
    {
      year: "2021",
      title: "SPŠSE",
      description:
        "Studied at SPŠSE, where I began developing programming skills and working with technology more systematically.",
    },
    {
      year: "2025",
      title: "Graduation",
      description:
        "Finishing high school marked a major step forward towards a more professional approach to my work.",
    },
    {
      year: "2025",
      title: "University",
      description: "Started university and continued developing my skills in software engineering.",
    },
    {
      year: "2025",
      title: "Erasmus+ & Digital Funnel",
      description:
        "Gained international experience and worked in a digital agency environment at Digital Funnel.",
    },
    {
      year: "2025",
      title: "Freelancing",
      description: "Started working on my own projects and building modern web applications.",
    },
    {
      year: "2026",
      title: "Future",
      description: "If you see yourself here, feel free to reach out.",
      dashed: true,
    },
  ];

  return (
    <PageWrapper>
      <section className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            About me
          </h1>

          <p className="text-lg leading-relaxed text-neutral-300">
            Hi, I’m Lukáš and I focus on building modern web applications and websites.
          </p>

          <p className="leading-relaxed text-neutral-400">
            I see websites as a combination of technology and aesthetics. Every detail, every pixel,
            and every piece of whitespace has its purpose and contributes to the final experience.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">Focus</p>

              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Web development, UI/UX design, and performance-driven solutions.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs tracking-wider text-neutral-500 uppercase">Outside tech</p>

              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Design, creativity, and exploring new ideas beyond the digital world.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-pink-500/20 via-purple-500/10 to-blue-500/20 blur-3xl" />

            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full border border-white/10 sm:h-[300px] sm:w-[300px] lg:h-[360px] lg:w-[360px]">
              <Image
                src="/private-images/ImageOfMyself.webp"
                alt="Lukas Pop"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-2xl md:mb-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">What I work with</h2>

          <p className="mt-3 text-neutral-400">
            Technologies and tools I use when designing, developing and deploying web applications.
          </p>
        </div>

        <TechStack />
      </section>

      <Timeline
        data={data}
        heading="My journey"
        subheading="The path that brought me where I am today."
      />
    </PageWrapper>
  );
}
