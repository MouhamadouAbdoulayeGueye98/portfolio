import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg')"
      }}
    >
      <div className="max-w-3xl mx-auto text-center bg-black bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-4xl font-bold mb-6">À propos de moi</h2>
        <p className="leading-relaxed">
          Développeur web passionné, je crée des interfaces modernes et performantes en alliant créativité et expertise technique. Je maîtrise un large éventail de technologies front-end et back-end, notamment React, Angular, Next.js, Node.js, HTML, CSS, JavaScript, Bootstrap et Style Components. J’aime transformer des idées en projets concrets, concevoir des expériences utilisateur intuitives et optimiser chaque détail pour des applications web fluides et performantes.
        </p>
      </div>
    </section>
  );
}



export default About;
