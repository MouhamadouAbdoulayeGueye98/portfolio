import React, { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    const email = form.current.email.value.trim();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Veuillez entrer une adresse email valide.");
      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(
        "service_6a6m8nf",
        "template_j4cwocq",
        form.current,
        "Baxv0EhxvfdCvUeim"
      );

      toast.success("Message envoyé avec succès !");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      toast.error(
        "Une erreur est survenue. Veuillez réessayer plus tard."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 px-4 text-white"
    >
      <Toaster
        position="top-right"
        reverseOrder={false}
      />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-purple-400">
              Contactez-
            </span>
            moi
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Vous avez un projet, une opportunité ou simplement une question ?
            N’hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-white/10 backdrop-blur-md shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              Mes coordonnées
            </h3>

            <div className="space-y-6">

              {/* PHONE */}
              <a
                href="tel:+221781504764"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-white/40 mb-1">
                    Téléphone
                  </p>

                  <span className="text-white group-hover:text-purple-300 transition">
                    +221 78 150 47 64
                  </span>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:mouhagueyegueye@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-white/40 mb-1">
                    Email
                  </p>

                  <span className="text-white group-hover:text-purple-300 transition break-all">
                    mouhagueyegueye@gmail.com
                  </span>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-900 text-purple-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-white/40 mb-1">
                    Localisation
                  </p>

                  <span className="text-white">
                    Rufisque, Dakar, Sénégal
                  </span>
                </div>
              </div>
            </div>

            {/* SOCIAL NETWORKS */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-white/50 text-center mb-5">
                Retrouvez-moi sur
              </p>

              <div className="flex justify-center gap-4">

                {/* X */}
                <motion.a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="X"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-purple-300 hover:border-purple-400/40 transition"
                >
                  <FaXTwitter />
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-purple-300 hover:border-purple-400/40 transition"
                >
                  <FaLinkedin />
                </motion.a>

                {/* GITHUB */}
                <motion.a
                  href="https://github.com/MouhamadouAbdoulayeGueye98"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:text-purple-300 hover:border-purple-400/40 transition"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-gray-900/80 border border-white/10 shadow-lg backdrop-blur-md"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
              Envoyez-moi un message
            </h3>

            <div className="space-y-5">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-white/60 mb-2"
                >
                  Nom
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  autoComplete="name"
                  minLength={2}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white/60 mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-white/60 mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Parlez-moi de votre projet..."
                  rows="6"
                  minLength={10}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-background text-white placeholder:text-white/30 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30"
              >
                {isSending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>

        {/* FOOTER MESSAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-12 text-sm text-white/40"
        >
          <CheckCircle size={16} className="text-purple-400" />
          Disponible pour échanger sur vos projets et opportunités.
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;