import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
        Contactez-moi
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        
        {/* Infos de contact */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold mb-4">Mes coordonnées</h3>

          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" />
            <span>+221 78 150 47 64</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <span>mouhagueyegueye@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" />
            <span>Rufisque, Dakar, Sénégal</span>
          </div>
        </div>

        {/* Formulaire */}
        <form className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );}

export default Contact;
