import React from "react";

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
  const ctaText = locale === "en" ? "Visit project" : "Navštívit projekt";

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
          <h3 className="text-3xl font-semibold tracking-tight text-white">{title}</h3>

          <span className="text-sm text-neutral-500">{year}</span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-neutral-400">
          {description}
        </p>

        {/* SKILLS + CTA */}
        <div className="mt-6 flex items-center justify-between gap-6">
          {/* SKILLS */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href={visitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm whitespace-nowrap text-white/80 transition hover:text-white"
          >
            {ctaText}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
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
