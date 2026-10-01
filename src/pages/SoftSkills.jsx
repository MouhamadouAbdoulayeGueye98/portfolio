import React from "react";
import { motion } from "framer-motion";

import {
  FaUsers,
  FaComments,
  FaPuzzlePiece,
  FaClock,
  FaBrain,
  FaBookOpen,
} from "react-icons/fa";

function SoftSkills() {
  const skills = [
    {
      icon: <FaUsers />,
      title: "Travail en équipe",
      description:
        "Collaboration avec développeurs et designers, partage des idées et contribution aux objectifs communs.",
    },

    {
      icon: <FaComments />,
      title: "Communication",
      description:
        "Communication claire pour comprendre les besoins, partager les informations et expliquer les choix techniques.",
    },

    {
      icon: <FaPuzzlePiece />,
      title: "Résolution de problèmes",
      description:
        "Analyse des problèmes techniques et recherche de solutions adaptées aux besoins du projet.",
    },

    {
      icon: <FaBrain />,
      title: "Adaptabilité",
      description:
        "Capacité à m'adapter à de nouveaux environnements, outils et technologies selon les besoins.",
    },

    {
      icon: <FaClock />,
      title: "Organisation",
      description:
        "Organisation des tâches, priorisation du travail et respect des délais définis pour les projets.",
    },

    {
      icon: <FaBookOpen />,
      title: "Apprentissage continu",
      description:
        "Veille et apprentissage régulier pour améliorer mes compétences et découvrir de nouvelles technologies.",
    },
  ];

  return (
    <section
      id="softskills"
      className="py-28 flex justify-center px-4 text-white"
    >
      <div className="max-w-6xl w-full">
        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Mes <span className="text-purple-400">Soft Skills</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Les qualités humaines et professionnelles que je mets au service de
            mes projets et du travail en équipe.
          </p>
        </motion.div>

        {/* =========================
            GRID
        ========================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                p-7
                rounded-2xl

                backdrop-blur-md
                bg-white/10

                border
                border-white/20

                shadow-lg

                hover:border-purple-400/40
                hover:shadow-purple-500/20

                transition-all
                duration-300
              "
            >
              {/* Effet lumineux */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  bg-purple-500/5
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                  pointer-events-none
                "
              />

              {/* =========================
                  ICON
              ========================== */}

              <div
                className="
                  relative
                  w-14
                  h-14
                  flex
                  items-center
                  justify-center

                  rounded-xl

                  bg-purple-500/10
                  border
                  border-purple-400/20

                  text-2xl
                  text-purple-400

                  mb-5

                  group-hover:scale-110
                  group-hover:bg-purple-500/20

                  transition-all
                  duration-300
                "
              >
                {skill.icon}
              </div>

              {/* =========================
                  TITLE
              ========================== */}

              <h3
                className="
                  relative
                  text-xl
                  font-semibold
                  mb-3

                  group-hover:text-purple-300

                  transition-colors
                  duration-300
                "
              >
                {skill.title}
              </h3>

              {/* =========================
                  DESCRIPTION
              ========================== */}

              <p
                className="
                  relative
                  text-white/65
                  text-sm
                  leading-relaxed
                "
              >
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
