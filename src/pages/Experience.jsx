import React from "react";

function Experience() {
  const experiences = [
    {
      role: "Développeur Frontend",
      company: "Djokkale",
      period: "2024 - Présent",
      description:
        "Développement d’interfaces modernes avec React et Tailwind CSS. Intégration d’API et amélioration de l’expérience utilisateur.",
    },
    {
      role: "Développeur Web",
      company: "Projet Personnel",
      period: "2023 - 2024",
      description:
        "Création de projets web (portfolio, e-commerce). Travail sur la performance, le responsive design et le SEO.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white text-gray-800"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Mes Expériences
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 pl-6 relative"
            >
              <span className="absolute -left-2 top-2 w-4 h-4 bg-blue-600 rounded-full"></span>

              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>
              <p className="text-blue-600 font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                {exp.period}
              </p>
              <p className="text-gray-600">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
