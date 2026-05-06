import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-center mb-6 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-4 px-6 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg"
      >
        {/* Socials */}
        <div className="flex gap-6 text-xl">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-purple-300 transition"
          >
            <FaTwitter />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-purple-300 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-purple-300 transition"
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;