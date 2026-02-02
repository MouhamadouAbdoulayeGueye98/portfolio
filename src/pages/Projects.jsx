import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

function Projects() {
  return (
    <section
      id="projects"
      className="
        py-20
        text-black
        bg-none
        md:bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1950&q=80')]
        md:bg-cover
        md:bg-center
      "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
          Mes Projets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
