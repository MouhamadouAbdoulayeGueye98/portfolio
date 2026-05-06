import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaComments, FaLightbulb, FaClock, FaBrain } from "react-icons/fa";

function SoftSkills() {
  const skills = [
    {
      icon: <FaUsers />,
      title: "Travail en équipe",
      description: "Collaboration efficace avec designers et développeurs.",
    },
    {
      icon: <FaComments />,
      title: "Communication",
      description: "Capacité à expliquer clairement des concepts techniques.",
    },
    {
      icon: <FaLightbulb />,
      title: "Créativité",
      description: "Trouver des solutions innovantes aux problèmes complexes.",
    },
    {
      icon: <FaClock />,
      title: "Gestion du temps",
      description: "Respect des délais et organisation des tâches.",
    },
    {
      icon: <FaBrain />,
      title: "Adaptabilité",
      description: "Apprentissage rapide de nouvelles technologies.",
    },
  ];

  return (
    <section id="softskills" className="py-28 flex justify-center px-4 text-white">
      <div className="max-w-5xl w-full">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Mes <span className="text-purple-400">Soft Skills</span>
          </h2>
          <p className="text-white/60 mt-4">
            Des compétences humaines essentielles pour réussir en équipe.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* ICON */}
              <div className="text-3xl mb-4 text-purple-400 group-hover:scale-110 transition">
                {skill.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition">
                {skill.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white/70 text-sm">
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