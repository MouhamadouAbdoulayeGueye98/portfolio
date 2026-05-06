import React, { useRef } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6a6m8nf",  
        "template_j4cwocq", 
        form.current,
        "Baxv0EhxvfdCvUeim"
      )
      .then(
        () => {
          toast.success("Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          toast.error("Erreur, réessayez plus tard.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 ">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="text-4xl text-center mb-20 md:text-5xl font-bold">
        <span className="text-purple-400">Contactez-</span>Moi
      </h2>

      <div className="max-w-5xl text-black mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* Infos de contact */}
        <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-white">
            <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-purple-500"></span>
            Mes Coordonnées
          </h3>

          <div className="flex items-center gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-900 text-purple-500">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span className="text-white">+221 78 150 47 64</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-900 text-purple-500">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span className="text-white">mouhagueyegueye@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gray-900 text-purple-500">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <span className="text-white">Rufisque, Dakar, Sénégal</span>
          </div>

          <div className="pt-6 sm:pt-8">
            <h4 className="font-medium mb-3 sm:mb-4 text-xs text-white text-center sm:text-sm text-muted-foreground">
              Retrouvez-moi sur
            </h4>
            <div className="flex items-center justify-center gap-6 text-xl">
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
          </div>
        </div>

        {/* Formulaire */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 p-8 rounded-xl border border-border shadow-lg flex flex-col gap-4"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-white">
            <span className="w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-purple-500"></span>
            Envoie-Moi un Message
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Nom"
            className="w-full bg-transparent px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-transparent px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            className="w-full bg-transparent text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border bordern-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-sm sm:text-base"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-500 transition flex items-center justify-center gap-2"
          >
            Envoyer
            <Send size={16} className="sm:size-[18px]" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
