import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaAngular,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiStyledcomponents,
  SiNextdotjs,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiExpo,
} from "react-icons/si";

function Competences() {
  const categories = [
    {
      title: "Frontend & Web",
      direction: "left",
      duration: 30,
      skills: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-600 text-4xl" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-400 text-4xl" />,
        },
        {
          name: "React",
          icon: <FaReact className="text-cyan-500 text-4xl" />,
        },
        {
          name: "Angular",
          icon: <FaAngular className="text-red-600 text-4xl" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white text-4xl" />,
        },
        {
          name: "Bootstrap",
          icon: <FaBootstrap className="text-purple-600 text-4xl" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
        },
        {
          name: "Styled Components",
          icon: (
            <SiStyledcomponents className="text-pink-500 text-4xl" />
          ),
        },
      ],
    },

    {
      title: "Mobile",
      direction: "right",
      duration: 18,
      skills: [
        {
          name: "React Native",
          icon: <FaReact className="text-cyan-500 text-4xl" />,
        },
        {
          name: "Expo",
          icon: <SiExpo className="text-white text-4xl" />,
        },
      ],
    },

    {
      title: "Backend & API",
      direction: "left",
      duration: 20,
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600 text-4xl" />,
        },
        {
          name: "NestJS",
          icon: <SiNestjs className="text-red-600 text-4xl" />,
        },
        {
          name: "REST API",
          icon: <FaNodeJs className="text-green-600 text-4xl" />,
        },
      ],
    },

    {
      title: "Database & ORM",
      direction: "right",
      duration: 18,
      skills: [
        {
          name: "PostgreSQL",
          icon: (
            <SiPostgresql className="text-blue-500 text-4xl" />
          ),
        },
        {
          name: "Prisma",
          icon: <SiPrisma className="text-white text-4xl" />,
        },
      ],
    },

    {
      title: "Outils & Workflow",
      direction: "left",
      duration: 18,
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-red-500 text-4xl" />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-white text-4xl" />,
        },
      ],
    },
  ];

  /**
   * Nombre minimum d'éléments nécessaire
   * pour activer le défilement.
   */
  const MIN_SKILLS_FOR_SCROLL = 5;

  return (
    <section
      id="competences"
      className="py-28 bg-gradient-to-br from-background via-background to-purple-500 overflow-hidden"
    >
      {/* =========================
          HEADER
      ========================== */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Mes{" "}
          <span className="text-purple-400">
            Compétences
          </span>
        </h2>

        <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Les technologies et outils que j'utilise pour concevoir,
          développer et faire évoluer des applications web et mobiles.
        </p>
      </motion.div>

      {/* =========================
          CATEGORIES
      ========================== */}

      <div className="space-y-20">
        {categories.map((category, categoryIndex) => {
          const shouldScroll =
            category.skills.length >= MIN_SKILLS_FOR_SCROLL;

          /**
           * Pour les catégories qui défilent,
           * on duplique les compétences afin
           * de créer une boucle continue.
           */
          const displayedSkills = shouldScroll
            ? [...category.skills, ...category.skills]
            : category.skills;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.08,
              }}
            >
              {/* TITRE DE LA CATÉGORIE */}

              <h3 className="text-center text-xl md:text-2xl font-semibold mb-9 px-4">
                {category.title}
              </h3>

              {/* =========================
                  MODE CENTRÉ
              ========================== */}

              {!shouldScroll && (
                <div className="flex flex-wrap justify-center gap-8 px-4">
                  {displayedSkills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      skill={skill}
                    />
                  ))}
                </div>
              )}

              {/* =========================
                  MODE MARQUEE
              ========================== */}

              {shouldScroll && (
                <div className="relative w-full overflow-hidden">
                  {/* Dégradés sur les côtés */}

                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />

                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-purple-500/20 to-transparent z-10" />

                  <motion.div
                    className="flex gap-8 md:gap-10 w-max px-4"
                    animate={{
                      x:
                        category.direction === "left"
                          ? ["0%", "-50%"]
                          : ["-50%", "0%"],
                    }}
                    transition={{
                      duration: category.duration,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {displayedSkills.map((skill, index) => (
                      <SkillCard
                        key={`${skill.name}-${index}`}
                        skill={skill}
                      />
                    ))}
                  </motion.div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/**
 * ==========================================
 * CARTE COMPÉTENCE
 * ==========================================
 */

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="flex flex-col items-center justify-center gap-3 min-w-[120px]"
    >
      {/* ICON */}

      <div
        className="
          w-20
          h-20
          flex
          items-center
          justify-center
          rounded-2xl
          bg-background/70
          border
          border-border
          backdrop-blur-md
          shadow-md
          transition
          duration-300
        "
      >
        {skill.icon}
      </div>

      {/* NAME */}

      <p className="text-sm text-muted-foreground text-center whitespace-nowrap">
        {skill.name}
      </p>
    </motion.div>
  );
}

export default Competences;