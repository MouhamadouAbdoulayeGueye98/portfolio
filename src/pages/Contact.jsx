import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Contactez-moi</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg">
        <input type="text" placeholder="Nom" className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <input type="email" placeholder="Email" className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        <textarea placeholder="Message" rows="5" className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition">
          Envoyer
        </button>
      </form>
    </section>
  );
}


export default Contact;
