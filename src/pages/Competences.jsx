import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaBootstrap,
  FaAngular,
} from "react-icons/fa";
import { SiTailwindcss, SiStyledcomponents, SiNextdotjs } from "react-icons/si";

function Competences() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS / Tailwind", icon: <SiTailwindcss className="text-sky-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-500" /> },
    { name: "Git / GitHub", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "Angular", icon: <FaAngular className="text-red-600" /> },
    { name: "Styled Components", icon: <SiStyledcomponents className="text-pink-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  ];

  return (
    <section
      id="competences"
      className="py-20 bg-gray-100 text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes Compétences
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-white
                shadow-md
                rounded-xl
                p-6
                flex
                flex-col
                items-center
                gap-3
                hover:scale-105
                hover:shadow-xl
                transition
              "
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;
