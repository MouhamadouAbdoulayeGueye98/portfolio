import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="flex justify-center items-center py-24 px-4 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full p-10 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-6 text-purple-400 text-center">
          À propos de moi
        </h2>

        {/* Content */}
        <p className="leading-relaxed text-white/80 text-center">
          Développeur Full Stack, je conçois et développe des applications web
          et mobiles modernes, de l’interface utilisateur jusqu’au backend et à
          la base de données. 
          <br /><br />
          Je travaille principalement avec React, React
          Native et Expo pour le développement frontend et mobile, ainsi qu’avec
          Node.js, NestJS, Prisma et PostgreSQL pour la conception d’APIs et de
          services backend.
          <br /><br />
          J’accorde une attention particulière à l’expérience
          utilisateur, à la qualité du code et à la conception d’applications
          fiables, maintenables et performantes. 
          <br /><br />
          À travers mes projets, j’aime transformer des idées en solutions concrètes, 
          en travaillant sur l’ensemble du cycle de développement : conception, interface, 
          logique métier, API, base de données et intégration des différents services.
        </p>
      </motion.div>
    </section>
  );
}

export default About;