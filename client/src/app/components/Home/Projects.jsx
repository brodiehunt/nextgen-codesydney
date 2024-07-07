"use client";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import ProjectCard from "./ProjectCard";

export default function Projects({ projectsData }) {
  const [projects, setProjects] = useState(projectsData);

  const handleNextClick = () => {
    const newProjects = [...projects.slice(1), projects[0]];
    setProjects(newProjects);
  };

  return (
    <div className="pt-10 overflow-hidden xl:h-[80vh] xl:max-h-[800px] relative">
      <div className="h-[80%] relative">
        {projects &&
          projects.map((projectInfo, index) => {
            return (
              <ProjectCard
                key={projectInfo.organisation}
                index={index}
                projectInfo={projectInfo}
              />
            );
          })}
      </div>
      <div className="justify-start gap-20 hidden xl:flex ">
        <button
          className="group flex gap-2 items-center text-custom-primary py-1  hover:text-custom-light hover:border-custom-light transition-all duration-400"
          onClick={handleNextClick}
        >
          Next Project
          <GrFormNextLink className="text-3xl text-custom-primary ml-0 group-hover:text-custom-light transition-all duration-400 group-hover:translate-x-[10px]" />
        </button>
      </div>
    </div>
  );
}
