import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experiences = [
    {
      role: "Développeur Frontend",
      company: "Volkeno (Stage)",
      period: "Mars 2025 - Juin 2025",
      type: "Stage",
      description:
        "Développement d’interfaces modernes avec React, Angular et Tailwind CSS. Intégration d’API et amélioration UX.",
    },
    {
      role: "Développeur Frontend",
      company: "Djokkale",
      period: "2025 - Présent",
      type: "Projet",
      description:
        "Plateforme de mise en relation entre clients et prestataires. Développement frontend et intégration API.",
    },
    {
      role: "Développeur Frontend",
      company: "Tektal",
      period: "2025",
      type: "Projet",
      description:
        "Application de navigation intelligente avec cartes interactives et optimisation des performances.",
    },
    {
      role: "Développeur Web",
      company: "Nu Dem",
      period: "2025",
      type: "Projet",
      description:
        "Application de réservation de billets d’avion avec recherche, booking et optimisation SEO.",
    },
  ];

  const itemVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 flex justify-center px-4 text-white"
    >
      <div className="max-w-5xl w-full">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-400">Mon</span> Expérience
          </h2>
          <p className="text-white/60 mt-4">
            Un parcours en développement frontend et full-stack.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10" />

          {/* PROGRESS LINE  */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 h-full w-[2px] origin-top bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
          />

          <div className="space-y-20">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants(index)} 
              >

                {/* NODE */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.9)] z-10" />

                {/* CONTENT */}
                <div className="w-full md:w-1/2 px-6">
                  <div className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group hover:-translate-y-2">

                    {/* TOP */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-purple-300 transition">
                        {exp.role}
                      </h3>

                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* COMPANY */}
                    <p className="text-purple-300 font-medium">
                      {exp.company}
                    </p>

                    {/* PERIOD */}
                    <p className="text-sm text-white/50 mb-3">
                      {exp.period}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-white/70 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;