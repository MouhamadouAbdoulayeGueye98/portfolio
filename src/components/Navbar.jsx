import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", href: "#home", icon: <FaHome />, label: "Accueil" },
    { id: "about", href: "#about", icon: <FaUser />, label: "A Propos" },
    { id: "experience", href: "#experience", icon: <FaBriefcase />, label: "Exp" },
    { id: "services", href: "#services", icon: <FaRocket />, label: "Services" },
    { id: "projects", href: "#projects", icon: <FaProjectDiagram />, label: "Projets" },
    { id: "contact", href: "#contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setShowNavbar(currentScrollY < lastScrollY);
        setLastScrollY(currentScrollY);
      }

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
      animate={{ y: showNavbar ? 0 : -120 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="w-full px-4 md:px-10 py-3 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg">

        {/* CONTAINER */}
        <div className="flex items-center justify-between">

          {/* LOGO*/}
          <div className="text-white italic font-bold text-lg hidden md:block" style={{fontFamily: "'Lobster', cursive"}}>
            M.A.G
          </div>

          {/* NAV ITEMS */}
          <div className="flex items-center justify-between w-full md:w-auto md:gap-6">

            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center text-sm md:text-base transition ${
                    isActive
                      ? "text-purple-400"
                      : "text-white/70 hover:text-purple-300"
                  }`}
                >
                  <div className="text-lg md:text-xl">
                    {item.icon}
                  </div>

                  {/* LABEL (visible desktop uniquement) */}
                  <span className="hidden md:block text-xs mt-1">
                    {item.label}
                  </span>
                </motion.a>
              );
            })}

          </div>

        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;