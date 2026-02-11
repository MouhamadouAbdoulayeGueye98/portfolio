import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" }); // déclenche l'animation quand la section entre dans la vue
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/008/612/703/non_2x/html-code-on-computer-monitor-software-web-developer-programming-code-photo.jpg')",
      }}
    >
      <div
        ref={ref}
        className="bg-black bg-opacity-50 p-10 rounded-lg backdrop-blur-md"
      >
        <motion.h2
          className="text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial="hidden"
          animate={controls}
          variants={variants}
        >
          Bonjour, je suis <br /> Mouhamadou Abdoulaye Gueye
        </motion.h2>

        <motion.p
          className="text-xl mb-6"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3 } },
          }}
        >
          Développeur Frontend
        </motion.p>

        <motion.a
          href="#projects"
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
          }}
        >
          Voir mes projets
        </motion.a>
      </div>
    </section>
  );
}

export default Home;
