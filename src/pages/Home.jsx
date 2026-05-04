import React from "react";
import { motion } from "framer-motion";

// import profileImg from ""; // 👈 mets ta photo ici

function Home() {
  const name = "Mouhamadou Abdoulaye Gueye";
  const words = name.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const colors = [
    "text-purple-500",
    "text-cyan-500",
    "text-emerald-500",
  ];

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
            variants={container}
            initial="hidden"
            animate="visible"
          >
            Bonjour, je suis <br />

            <span className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariant}
                  className={`inline-block ${colors[index % colors.length]}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            className="text-muted-foreground mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            Développeur Frontend spécialisé en React & expériences web modernes
          </motion.p>

          {/* BUTTON */}
          <motion.a
            href="#projects"
            className="inline-block mt-8 px-6 py-3 rounded-xl bg-primary text-white hover:bg-purple-800 transition"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            Voir mes projets
          </motion.a>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="relative">

            {/* Glow background */}
            <div className="absolute inset-0 bg-purple-400 blur-3xl rounded-full scale-110" />

            {/* IMAGE */}
            <img
              src="/profil1.jpeg"
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl border border-border shadow-2xl hover:scale-105 transition duration-500"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;