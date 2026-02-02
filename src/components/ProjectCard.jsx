import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a href={project.link} target="_blank" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition">
          Voir le projet
        </a>
      </div>
    </div>
  );
}


export default ProjectCard;
