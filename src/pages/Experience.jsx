import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // barre de progression verticale
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
      type: "Freelance",
      description:
        "Plateforme de mise en relation entre clients et prestataires. Développement frontend et intégration API.",
    },
    {
      role: "Développeur Frontend",
      company: "Tektal",
      period: "2025",
      type: "Project",
      description:
        "Application de navigation intelligente avec cartes interactives et optimisation performance.",
    },
    {
      role: "Développeur Web",
      company: "Nu Dem",
      period: "2025",
      type: "Project",
      description:
        "Application de réservation de billets d’avion avec recherche, booking et SEO optimisation.",
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
      className="py-28 bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mon{" "}
            <span className="text-purple-500">Expérience</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Un parcours en développement frontend et full-stack.
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* LINE BACKGROUND */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-200" />

          {/* PROGRESS LINE (ANIMÉE) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 h-full w-[2px] origin-top bg-purple-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
          />

          <div className="space-y-20">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants(index)}
              >

                {/* NODE */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_25px_rgba(99,102,241,0.8)] z-10" />

                {/* CONTENT */}
                <div className="w-full md:w-1/2 px-6">

                  <div className="p-6 rounded-2xl border border-border bg-background/70 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300 group">

                    {/* TOP ROW */}
                    <div className="flex items-center justify-between mb-2">

                      <h3 className="text-xl font-bold group-hover:text-purple-500 transition">
                        {exp.role}
                      </h3>

                      {/* BADGE */}
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-purple-700 border border-primary/20">
                        {exp.type}
                      </span>

                    </div>

                    {/* COMPANY */}
                    <p className="text-purple-300 font-medium">
                      {exp.company}
                    </p>

                    {/* PERIOD */}
                    <p className="text-sm text-muted-foreground mb-3">
                      {exp.period}
                    </p>

                    {/* DESCRIPTION */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
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