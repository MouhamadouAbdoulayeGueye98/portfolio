import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

function Home() {
  const [isName, setIsName] = useState(true);

  const name = "Mouhamadou Abdoulaye Gueye";
  const words = name.split(" ");

  const colors = [
    "text-purple-500",
    "text-cyan-500",
    "text-emerald-500",
  ];

  // 🔁 BOUCLE INFINIE
  useEffect(() => {
    const interval = setInterval(() => {
      setIsName((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/10 px-6"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT TEXT */}
        <div className="flex-1 text-center md:text-left">

          {/* TITLE */}
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Bonjour, je suis <br />

            <motion.div
              key={isName ? "name" : "title"}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="mt-4"
            >
              {isName ? (
                <span className="flex flex-wrap justify-center md:justify-start gap-3">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className={`inline-block ${
                        colors[index % colors.length]
                      }`}
                    >
                      {word}
                    </span>
                  ))}
                </span>
              ) : (
                <span className="text-purple-500">
                  Développeur Full Stack
                </span>
              )}
            </motion.div>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            className="text-muted-foreground mt-6 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Je conçois et développe des applications web et mobiles modernes,
            de l’interface utilisateur au backend, en passant par les APIs et
            les bases de données.
          </motion.p>

          {/* TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-2 mt-6"
          >
            {[
              "React",
              "Angular",
              "React Native",
              "Node.js",
              "NestJS",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
          >
            {/* Voir mes projets */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-800 transition"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </a>

            {/* Me contacter */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            >
              Me contacter
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
        >
          <div className="relative">

            {/* Glow background */}
            <div className="absolute inset-0 bg-purple-400 blur-3xl rounded-full scale-110" />

            {/* Carré décoratif */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl border border-purple-400/20 bg-purple-500/10 backdrop-blur-md"
            />

            {/* IMAGE */}
            <img
              src="/profil1.jpeg"
              alt="Mouhamadou Abdoulaye Gueye"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-border shadow-2xl hover:scale-105 transition duration-500"
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-gray-900/90 backdrop-blur-md border border-white/10 shadow-xl whitespace-nowrap"
            >
              <span className="flex items-center gap-2 text-sm text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Développement Web & Mobile
              </span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;