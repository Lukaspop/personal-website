import React from "react";

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  imagePath: string;
  visitLink: string;
  align?: "left" | "right";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  description,
  imagePath,
  visitLink,
  align = "left",
}) => {
  return (
    <section
      className={`grid items-center gap-12 py-20 lg:grid-cols-2 ${
        align === "right" ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* TEXT */}
      <div className="max-w-xl">
        <p className="mb-2 text-sm text-gray-400">{year}</p>

        <h2 className="mb-4 text-3xl font-semibold">{title}</h2>

        <p className="mb-6 text-lg text-gray-300">{description}</p>

        <a
          href={visitLink}
          className="inline-flex items-center gap-2 text-white opacity-80 transition hover:opacity-100"
        >
          View project ↗
        </a>
      </div>

      {/* IMAGE */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-[700px] rounded-2xl border border-white/10 bg-black p-2 shadow-xl">
          <img src={imagePath} alt={title} className="w-full rounded-xl object-contain" />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
