import React, { useState } from "react";
import { projects } from "../data";
import NavigationCircles from "./NavigationCircles";

const ProjectShowcase = () => {
  const [search, setSearch] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="projects" className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0 py-10">
      <h2 className="text-4xl font-light mb-2">My Projects</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full xl:w-[500px] p-3 rounded-md border border-red-500 dark:border-yellow-500 dark:bg-gray-800 text-red-500 dark:text-white mb-6"
      />

      {/* Project Grid */}
      <div className="w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-6 xl:mb-6 mb-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div
              key={index}
              className="relative w-[220px] md:w-[260px] lg:w-[200px] h-[150px] overflow-hidden rounded-lg shadow-lg bg-gray-400/20 dark:bg-gray-600/20 p-4 flex flex-col justify-center items-center text-center transition-transform duration-300 transform hover:scale-110"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`absolute inset-0 flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${hoveredIndex === index ? "backdrop-blur-md bg-gray-800/80 text-white" : "bg-transparent text-red-500 dark:text-yellow-500"}`}
              >
                {hoveredIndex === index ? (
                  <>
                    <p className="text-sm">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-500 dark:text-yellow-300 mt-2 hover:underline"
                    >
                      View Project →
                    </a>
                  </>
                ) : (
                  <h3 className="text-lg font-bold">{project.title}</h3>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-red-500 dark:text-yellow-500">No projects found</p>
        )}
      </div>

      <NavigationCircles section="projects" />
    </div>
  );
};

export default ProjectShowcase;
