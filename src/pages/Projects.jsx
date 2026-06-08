import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Eye } from "lucide-react";
import projects from "../data/projects.js";

function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-4xl text-center mb-20 md:text-5xl font-bold">
          Mes{" "}
          <span className="text-purple-400">Projets</span>
        </h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>

              {/* CARD */}
              <div className="group relative rounded-2xl overflow-hidden border border-border bg-background shadow-lg hover:shadow-2xl transition-all duration-500">

                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">

                    {/* Demo */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-purple-200/20 hover:bg-purple-400 text-white transition"
                    >
                      <Eye size={18} />
                    </a>

                    {/* Github */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-purple-200/20 hover:bg-purple-400 text-white transition"
                    >
                      <Github size={18} />
                    </a>

                    {/* External */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-purple-200/20 hover:bg-purple-400 text-white transition"
                    >
                      <ExternalLink size={18} />
                    </a>

                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-4">

                  {/* Title */}
                  <h3 className="text-xl text-purple-500 font-bold">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies sous forme de boutons */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.technologies?.map((tech, i) => (
                      <button
                        key={i}
                        className="px-4 py-2 rounded-lg bg-purple-600/10 text-purple-400 border border-purple-500/20 hover:bg-purple-600 hover:text-white transition duration-300 text-sm"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>

                </div>

                {/* Accent bottom bar */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-500" />

              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;