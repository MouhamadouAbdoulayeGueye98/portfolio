import React from "react";

function Footer() {
  return (
    <footer
      className="py-6 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1950&q=80')" }}
    >
     <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-blue-500">Twitter</a>
        <a href="#" className="hover:text-blue-500">LinkedIn</a>
        <a href="#" className="hover:text-blue-500">GitHub</a>
      </div>
      <div className="bg-black bg-opacity-50 p-4 rounded-lg">
        <p>© {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      </div>
    </footer>
  );
}


export default Footer;
