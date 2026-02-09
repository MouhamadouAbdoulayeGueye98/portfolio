import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-white text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/008/612/703/non_2x/html-code-on-computer-monitor-software-web-developer-programming-code-photo.jpg')"
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg">
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Bonjour, je suis <br /> Mouhamadou Abdoulaye Gueye</h2>
        <p className="text-xl mb-6">Développeur Frontend </p>
        <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
          Voir mes projets
        </a>
      </div>
    </section>
  );
}



export default Home;
