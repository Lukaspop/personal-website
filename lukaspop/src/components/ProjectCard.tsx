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
}) => {
  return (
    <section
      className={`grid items-center gap-24 pb-24 lg:grid-cols-2 ${
        align === "right" ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* TEXT */}
      <div className="flex h-full max-w-xl flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-3xl font-semibold text-white">{title}</h3>
          <span className="text-sm text-neutral-500">{year}</span>
        </div>

        <p className="mt-4 text-lg leading-relaxed text-neutral-400">{description}</p>

        {/* SKILLS + CTA */}
        {(skills.length > 0 || visitLink) && (
          <div className="mt-6 flex items-center justify-between gap-6">
            {/* SKILLS */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-neutral-300 backdrop-blur"
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
              className="group inline-flex items-center gap-2 whitespace-nowrap text-white opacity-80 transition hover:opacity-100"
            >
              Navštívit projekt
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        )}
      </div>

      {/* IMAGE */}
      <div className="flex justify-center">
        <a
          href={visitLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-[700px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-xl transition hover:border-white/20"
        >
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={imagePath}
              alt={imageAlt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
