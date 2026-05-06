import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaPaintBrush, FaRocket, FaTools } from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Développement Web",
      description:
        "Création de sites web modernes, rapides et responsive avec React, Next.js et Tailwind CSS.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Conception d’interfaces intuitives et attractives pour améliorer l’expérience utilisateur.",
    },
    {
      icon: <FaRocket />,
      title: "Optimisation & Performance",
      description:
        "Amélioration de la vitesse, du SEO et des performances globales de vos applications web.",
    },
    {
      icon: <FaTools />,
      title: "Maintenance de site",
      description:
        "Mise à jour, correction de bugs, sécurité et amélioration continue de votre site web.",
    },
  ];

  return (
    <section id="services" className="py-28 flex justify-center px-4 text-white">
      <div className="max-w-5xl w-full">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-400">Mes</span> Services
          </h2>
          <p className="text-white/60 mt-4">
            Des solutions adaptées pour donner vie à vos projets digitaux.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* ICON */}
              <div className="text-3xl mb-4 text-purple-400 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/70 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="mb-4 text-white/70">
            Besoin d’un site ou d’une amélioration ?
          </p>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition"
          >
            Contacte-moi
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;