import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  imagePath: string;
  imageAlt: string;
  visitLink: string;
  skills?: string[];
  align?: "left" | "right";
  locale?: "cs" | "en";
  as?: "h2" | "h3" | "h4";
}

const fixCzechTypography = (text: string) => {
  return text.replace(/\b([aiouksvz])\s+/gi, "$1\u00A0");
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  description,
  imagePath,
  imageAlt,
  visitLink,
  skills = [],
  align = "left",
  locale = "cs",
  as = "h3",
}) => {
  const Heading = as;

  return (
    <article
      className={`grid items-center gap-12 pb-24 lg:grid-cols-2 ${
        align === "right" ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="max-w-xl">
        <div className="flex items-start justify-between">
          <Heading className="text-3xl font-semibold tracking-tight">
            <a
              href={visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white-200 group flex items-center gap-1"
            >
              <span className="transition-transform group-hover:translate-x-1">{title}</span>
              <ArrowUpRight className="h-6 w-6 text-white transition-colors group-hover:text-[#FF2455]" />
            </a>
          </Heading>

          <span className="text-sm text-neutral-400">{year}</span>
        </div>

        <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-neutral-400">
          {locale === "cs" ? fixCzechTypography(description) : description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-[760px] cursor-pointer"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 p-4 transition-transform duration-500 group-hover:border-white/20">
            <Image
              src={imagePath}
              alt={imageAlt}
              className="aspect-video w-full rounded-xl object-cover transition duration-500 select-none group-hover:scale-[1.02]"
              layout="responsive"
              width={760}
              height={426}  // Adjust the width and height as needed for your aspect ratio
              loading="lazy"
            />
          </div>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;