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
      className={`grid items-center gap-12 pt-12 lg:grid-cols-2 ${
        align === "right" ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* TEXT */}
      <div className="max-w-xl">
        <p className="mb-2 text-sm text-gray-400">{year}</p>

        <h3 className="mb-4 text-3xl font-semibold">{title}</h3>

        <p className="mb-6 text-lg text-gray-300">{description}</p>

        <a
          href={visitLink}
          className="inline-flex items-center gap-2 text-white opacity-80 transition hover:opacity-100"
        >
          View project ↗
        </a>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-[700px] overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-xl">
          {/* window top bar */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          {/* image */}
          <img src={imagePath} alt={title} className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
