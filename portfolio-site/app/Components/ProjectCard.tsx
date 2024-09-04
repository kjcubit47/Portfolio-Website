import Image from "next/image";
import React from "react";

type Props = {
  project: {
    title: string;
    description: string;
    demoLink?: string;
    demoButtonText?: string;
    image: string;
    technologies: string[];
    githubLink?: string;
    imageProps?: { width: number; height: number };
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden flex flex-col">
      <Image
        src={project.image}
        alt={project.title}
        width={project.imageProps?.width || 600}
        height={project.imageProps?.height || 400}
        className="w-full h-40 object-cover border-slate-300 border"
      />
      <div className="p-4 flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      </div>
      <div className="p-4 flex justify-between items-center">
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {project.demoButtonText}
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline ml-auto"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
