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
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">

                    {/* Demo */}
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
                    >
                      <Eye size={18} />
                    </a>

                    {/* Github */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
                    >
                      <Github size={18} />
                    </a>

                    {/* External */}
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-3">

                  {/* Title */}
                  <h3 className="text-xl text-purple-500 font-bold">{project.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    
                    <a
                      href={project.link}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                    >
                      Voir
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-border hover:border-purple-500 transition"
                    >
                      Code
                    </a>

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