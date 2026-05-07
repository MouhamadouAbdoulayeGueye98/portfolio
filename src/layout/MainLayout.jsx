import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  const [stars, setStars] = useState([]);
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    generateStars();
    generateShapes();

    const handleResize = () => {
      generateStars();
      generateShapes();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🌟 Générateur d'etoile
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 6000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  // 🔷 Générateur Formes de contour
  const generateShapes = () => {
    const newShapes = [];

    const clipPaths = [
      // Cercle
      "circle(50%)",

      // Triangle
      "polygon(50% 0%, 0% 100%, 100% 100%)",

      // Diamant
      "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",

      // Hexagon
      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    ];

    for (let i = 0; i < 14; i++) {
      newShapes.push({
        id: i,

        size: Math.random() * 140 + 40,

        x: Math.random() * 100,

        y: Math.random() * 100,

        rotate: Math.random() * 360,

        duration: Math.random() * 20 + 10,

        delay: Math.random() * 5,

        opacity: Math.random() * 0.25 + 0.05,

        borderWidth: Math.random() * 2 + 1,

        clipPath:
          clipPaths[Math.floor(Math.random() * clipPaths.length)],
      });
    }

    setShapes(newShapes);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 🌟 étoile */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-pulse"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity + 0.2, 
            boxShadow: "0 0 6px white",
            animationDuration: star.duration + "s",
          }}
        />
      ))}

      {/* 🔷 Formes de contour */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute animate-float"
          style={{
            width: shape.size + "px",
            height: shape.size + "px",
            left: shape.x + "%",
            top: shape.y + "%",

            opacity: shape.opacity || 0.25,

            clipPath: shape.clipPath,

            transform: `rotate(${shape.rotate}deg)`,

            animationDuration: shape.duration + "s",
            animationDelay: shape.delay + "s",

            // ✅ BORDER visible
            border: `${shape.borderWidth}px solid rgb(255, 255, 255)`,

            background: "transparent",

            // ✨ glow plus fort (important pour fond noir)
            boxShadow: `
              0 0 20px rgba(130, 2, 251, 0.98),
              0 0 50px rgb(255, 255, 255)
            `,

            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* 📦 Main */}
      <div className="relative z-10">
        <Navbar />

        <main className="px-4 pt-20">{children}</main>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;