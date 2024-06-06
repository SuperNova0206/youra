import React from "react";
import { FaUniversity } from "react-icons/fa";
import "animate.css"; // Importer animate.css pour les animations

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light d-flex justify-content-center align-items-center py-4">
      <div className="container">
        <h2 className="footer-title">
          Système de Matériel <FaUniversity className="mx-2" /> OFPPT | Formateur
        </h2>
        <p className="footer-text">
          &copy; <span>{year}</span> OFPPTSystem.com - Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
