import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { FaReact, FaAngular, FaNodeJs, FaGithub } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiExpo,
  SiLeaflet,
} from "react-icons/si";

function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /*
   * ==========================================
   * EXPERIENCES
   * ==========================================
   */

  const experiences = [
    {
      role: "Développeur Frontend",
      company: "Volkeno",
      period: "Mars 2025 - Juin 2025",
      type: "Stage",

      description:
        "Développement d'interfaces web modernes, intégration d'APIs et amélioration de l'expérience utilisateur sur différents projets.",

      technologies: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Angular",
          icon: <FaAngular />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],
    },

    {
      role: "Développeur Web",
      company: "DJOKKALE",
      period: "2025 - Présent",
      type: "Projet",

      description:
        "Développement d'une plateforme de mise en relation entre clients et prestataires de services. Travail sur les interfaces, la logique applicative et l'intégration des APIs.",

      technologies: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
      ],
    },

    {
      role: "Développeur Frontend",
      company: "TEKTAL",
      period: "2025",
      type: "Projet",

      description:
        "Développement d'une application orientée agriculture avec cartographie interactive, visualisation des données et intégration de fonctionnalités géolocalisées.",

      technologies: [
        {
          name: "Angular",
          icon: <FaAngular />,
        },
        {
          name: "Leaflet",
          icon: <SiLeaflet />,
        },
      ],
    },

    {
      role: "Développeur Web",
      company: "NU DEM",
      period: "2025",
      type: "Projet",

      description:
        "Développement d'une application de réservation de billets d'avion avec recherche, gestion du processus de réservation et optimisation de l'expérience utilisateur.",

      technologies: [
        {
          name: "React",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
        },
      ],
    },

    {
      role: "Développeur Full Stack",
      company: "Easy Rent",
      period: "2026 - Présent",
      type: "Projet",

      description:
        "Conception et développement d'une application mobile de recherche de logements et de colocations. Mise en place de l'authentification, des annonces, favoris, conversations, notifications, demandes de visite et gestion des données.",

      technologies: [
        {
          name: "React Native",
          icon: <FaReact />,
        },
        {
          name: "Expo",
          icon: <SiExpo />,
        },
        {
          name: "NestJS",
          icon: <SiNestjs />,
        },
        {
          name: "Prisma",
          icon: <SiPrisma />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
        },
      ],
    },
  ];

  /*
   * ==========================================
   * ANIMATION
   * ==========================================
   */

  const itemVariants = (index) => ({
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-28 flex justify-center px-4 text-white overflow-hidden"
    >
      <div className="max-w-6xl w-full">
        {/* ==========================================
            HEADER
        ========================================== */}

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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-400">Mon</span> Expérience
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Un parcours mêlant développement web, mobile et backend à travers
            des expériences professionnelles et des projets concrets.
          </p>
        </motion.div>

        {/* ==========================================
            TIMELINE
        ========================================== */}

        <div className="relative">
          {/* LIGNE PRINCIPALE */}

          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              h-full
              w-[2px]
              bg-white/10
              md:-translate-x-1/2
            "
          />

          {/* LIGNE DE PROGRESSION */}

          <motion.div
            style={{
              scaleY,
            }}
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              h-full
              w-[2px]
              origin-top
              bg-purple-400
              shadow-[0_0_20px_rgba(168,85,247,0.6)]
              md:-translate-x-1/2
            "
          />

          {/* ==========================================
              ITEMS
          ========================================== */}

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                className={`
                  relative
                  flex
                  items-center

                  ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
                `}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                variants={itemVariants(index)}
              >
                {/* ==========================================
                    NODE
                ========================================== */}

                <div
                  className="
                    absolute
                    left-4
                    md:left-1/2
                    -translate-x-1/2

                    w-5
                    h-5

                    rounded-full

                    bg-purple-400

                    border-4
                    border-background

                    shadow-[0_0_25px_rgba(168,85,247,0.9)]

                    z-20
                  "
                />

                {/* ==========================================
                    CONTENT
                ========================================== */}

                <div
                  className="
                    w-full
                    md:w-1/2

                    pl-12
                    md:px-8
                  "
                >
                  <div
                    className="
                      group

                      p-6
                      md:p-7

                      rounded-2xl

                      backdrop-blur-md
                      bg-white/10

                      border
                      border-white/20

                      shadow-lg

                      hover:shadow-purple-500/20

                      hover:border-purple-400/40

                      transition-all
                      duration-300

                      hover:-translate-y-2
                    "
                  >
                    {/* ==========================================
                        HEADER CARD
                    ========================================== */}

                    <div
                      className="
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between

                        gap-3

                        mb-3
                      "
                    >
                      <h3
                        className="
                          text-xl
                          font-bold

                          group-hover:text-purple-300

                          transition
                        "
                      >
                        {exp.role}
                      </h3>

                      <span
                        className="
                          w-fit

                          text-xs

                          px-3
                          py-1

                          rounded-full

                          bg-purple-500/20

                          text-purple-300

                          border
                          border-purple-400/30
                        "
                      >
                        {exp.type}
                      </span>
                    </div>

                    {/* ==========================================
                        COMPANY
                    ========================================== */}

                    <p
                      className="
                        text-purple-300
                        font-semibold
                        mb-1
                      "
                    >
                      {exp.company}
                    </p>

                    {/* ==========================================
                        PERIOD
                    ========================================== */}

                    <p
                      className="
                        text-sm
                        text-white/50
                        mb-4
                      "
                    >
                      {exp.period}
                    </p>

                    {/* ==========================================
                        DESCRIPTION
                    ========================================== */}

                    <p
                      className="
                        text-white/70
                        text-sm
                        leading-relaxed
                        mb-6
                      "
                    >
                      {exp.description}
                    </p>

                    {/* ==========================================
                        TECHNOLOGIES
                    ========================================== */}

                    <div
                      className="
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {exp.technologies.map((technology) => (
                        <div
                          key={technology.name}
                          className="
                              flex
                              items-center
                              gap-2
                              px-3
                              py-2
                              rounded-lg
                              bg-black/20
                              border
                              border-white/10
                              text-xs
                              text-white/70
                              hover:text-white
                              hover:border-purple-400/40
                              transition
                            "
                        >
                          <span
                            className="
                                text-base
                                text-purple-300
                              "
                          >
                            {technology.icon}
                          </span>

                          <span>{technology.name}</span>
                        </div>
                      ))}
                    </div>
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
