import React from "react";
import { ArrowUpRight } from "lucide-react";

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
}

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
}) => {
  return (
    <section
      className={`grid items-center gap-14 pb-28 lg:grid-cols-2 ${
        align === "right" ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* TEXT */}
      <div className="max-w-xl">
        {/* TITLE + YEAR */}
        <div className="flex items-start justify-between">
          <a
            href={visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-0 text-3xl font-semibold tracking-tight text-white"
          >
            {title}
            <ArrowUpRight className="h-6 w-6 text-white" />{" "}
          </a>

          <span className="text-sm text-neutral-500">{year}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-neutral-400">
          {description}
        </p>

        {/* SKILLS */}
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

      {/* IMAGE */}
      <div className="flex justify-center">
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-[760px] cursor-pointer"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-4 transition hover:border-white/20">
            <img
              src={imagePath}
              alt={imageAlt}
              className="aspect-video w-full rounded-lg object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
