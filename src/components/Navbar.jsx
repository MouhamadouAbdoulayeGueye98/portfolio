import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", href: "#home", icon: <FaHome /> },
    { id: "about", href: "#about", icon: <FaUser /> },
    { id: "competences", href: "#competences", icon: <FaCode /> },
    { id: "experience", href: "#experience", icon: <FaBriefcase /> },
    { id: "projects", href: "#projects", icon: <FaProjectDiagram /> },
    { id: "contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide / show navbar
      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setShowNavbar(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
      }

      // Detect active section
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-5 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">

        {navItems.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <motion.a
              key={index}
              href={item.href}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`text-xl transition ${
                isActive
                  ? "text-purple-400 drop-shadow-lg"
                  : "text-white hover:text-purple-300"
              }`}
            >
              {item.icon}
            </motion.a>
          );
        })}

      </div>
    </motion.nav>
  );
}

export default Navbar;