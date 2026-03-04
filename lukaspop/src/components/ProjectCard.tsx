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
    <div
      className={`flex ${align === "left" ? "flex-row" : "flex-row-reverse"} mb-10 items-center sm:flex-col`}
    >
      {/* Textová část */}
      <div className="max-w-[50%] sm:max-w-full sm:text-center">
        <h2 className="text-2xl font-semibold sm:text-xl">{title}</h2>
        <p className="text-sm text-gray-500 sm:text-xs">{year}</p>
        <p className="my-2 text-lg sm:text-base">{description}</p>
        <a href={visitLink} className="text-lg text-blue-500 hover:underline sm:text-base">
          Visit Project
        </a>
      </div>

      {/* Obrázek */}
      <div className="max-h-[300px] w-full sm:mt-4 sm:max-h-[250px]">
        <img
          src={imagePath}
          alt={title}
          className="h-full w-full max-w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
