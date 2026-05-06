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
          Développeur web passionné, je crée des interfaces modernes et
          performantes en alliant créativité et expertise technique.
          <br /><br />
          Je maîtrise un large éventail de technologies front-end, notamment
          React, Angular, HTML, CSS, JavaScript, Bootstrap et Styled Components.
          J’ai également des bases solides en backend avec Node.js et Next.js.
          <br /><br />
          J’aime transformer des idées en projets concrets, concevoir des
          expériences utilisateur intuitives et optimiser chaque détail pour des
          applications web fluides et performantes.
        </p>
      </motion.div>
    </section>
  );
}

export default About;