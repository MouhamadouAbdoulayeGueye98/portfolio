import React from "react";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      role: "Développeur Frontend",
      company: "Volkeno (Stage)",
      period: "Mars-2025 - Juin-2025",
      description:
        "Développement d’interfaces modernes avec React, Angular, style component et Tailwind CSS. Intégration d’API et amélioration de l’expérience utilisateur.",
    },
    {
      role: "Développeur Frontend",
      company: "Djokkale",
      period: "2025 - Présent",
      description:
        "Dokkale est plate-forme de mise en relation entre client et prestataire. Développement d’interfaces modernes avec React et Tailwind CSS. Intégration d’API et amélioration de l’expérience utilisateur.",
    },
    {
      role: "Développeur Frontend",
      company: "Tektal",
      period: "Mars-2025 - Juin-2025",
      description:
        "TEKTAL est une application de navigation, il se distingue des applications de navigation classiques en s'adaptant spécifiquement aux besoins des utilisateurs. Travail sur la performance, le responsive design et sur l'intégration de la carte de navigation.",
    },
    {
      role: "Développeur Web",
      company: "Nu Dem",
      period: "Mars-2025 - Juin-2025",
      description:
        "Nu Dem est une application web de réservation de billets d’avion permettant aux utilisateurs de rechercher des vols, de réserver et de sauvegarder leurs réservations. Travail sur la performance, le responsive design et le SEO.",
    },
  ];

  // Variants pour chaque item
  const itemVariants = (index) => ({
    hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 }, // pair gauche, impair droite
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  });

  return (
    <section id="experience" className="py-20 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes Expériences
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-blue-600 pl-6 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={itemVariants(index)}
            >
              <span className="absolute -left-3 top-2 w-5 h-5 bg-blue-600 rounded-full"></span>

              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-600 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
