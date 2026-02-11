import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

function Projects() {
  // Variants pour chaque carte
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Variants pour le container (staggerChildren)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // 0.2s entre chaque carte
      },
    },
  };

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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // déclenche quand 30% de la grille est visible
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
