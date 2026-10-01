import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projects from "../data/projects.js";

function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-28 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Mes{" "}
            <span className="text-purple-400">
              Projets
            </span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
            Une sélection de projets réalisés pour mettre en pratique mes
            compétences en développement web, mobile et backend.
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-500">

                {/* IMAGE */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-black/50 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                    {/* DEMO */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir le projet ${project.title}`}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/80 hover:bg-purple-500 text-white shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <ExternalLink size={19} />
                      </a>
                    )}

                    {/* GITHUB */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir le code source de ${project.title}`}
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-black/60 border border-white/20 hover:bg-white hover:text-black text-white transition-all duration-300 hover:scale-110"
                      >
                        <Github size={19} />
                      </a>
                    )}
                  </div>

                  {/* PROJECT TYPE */}
                  {project.type && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs text-white">
                      {project.type}
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-6">

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto pt-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={`${project.id}-${tech}-${index}`}
                          className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* BOTTOM ACCENT */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* OPTIONAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/MouhamadouAbdoulayeGueye98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/30 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            <Github size={18} />
            Voir plus de projets
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;