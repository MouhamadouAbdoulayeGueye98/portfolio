import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Développement Web",
      description:
        "Conception d’applications et de sites web modernes, responsive et adaptés aux besoins du projet avec React, Angular, Next.js et JavaScript.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Développement Mobile",
      description:
        "Création d’applications mobiles avec React Native et Expo, avec une attention particulière portée à l’expérience utilisateur et aux performances.",
    },
    {
      icon: <FaServer />,
      title: "Backend & API",
      description:
        "Développement de services backend et d’APIs REST avec Node.js et NestJS, connectés à des bases de données PostgreSQL via Prisma.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Interfaces & UX",
      description:
        "Conception d’interfaces modernes, intuitives et responsive pour proposer une expérience claire et agréable sur différents appareils.",
    },
    {
      icon: <FaRocket />,
      title: "Optimisation & Évolution",
      description:
        "Amélioration des performances, correction de problèmes, intégration de nouvelles fonctionnalités et évolution progressive des applications.",
    },
  ];

  return (
    <section
      id="services"
      className="py-28 flex justify-center px-4 text-white"
    >
      <div className="max-w-6xl w-full">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-400">Mes</span> Services
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Des solutions adaptées pour concevoir, développer et faire évoluer
            des projets web et mobiles.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative p-7 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300"
            >
              {/* GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 transition duration-300" />

              <div className="relative">
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-400/20 text-purple-400 text-2xl mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-300 transition">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/65 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="mb-5 text-white/70">
            Vous avez un projet ou une idée à développer ?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-purple-500 hover:bg-purple-600 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;