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
} from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiNextdotjs } from "react-icons/si";

function Competences() {
  const skills = [
    { name: "HTML 5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-500 text-4xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-4xl" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600 text-4xl" /> },
    { name: "Style components", icon: <SiStyledcomponents className="text-pink-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" /> },
  ];

  // duplication pour boucle infinie fluide
  const loopedSkills = [...skills, ...skills];

  return (
    <section
      id="competences"
      className="py-28 bg-gradient-to-br from-background via-background to-purple-500 overflow-hidden"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Mes{" "}
          <span className="text-purple-500">Compétences</span>
        </h2>
      </div>

      {/* MARQUEE */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 min-w-[120px]"
            >

              {/* ICON CARD */}
              <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-background/70 border border-border backdrop-blur-md shadow-md hover:scale-110 transition">
                {skill.icon}
              </div>

              {/* NAME */}
              <p className="text-sm text-muted-foreground">
                {skill.name}
              </p>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Competences;