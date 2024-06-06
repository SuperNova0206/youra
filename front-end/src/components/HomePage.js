import React from 'react';
import { FaUniversity } from 'react-icons/fa'; 
import './style.css'

export default function HomePage() {
  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <h2 className="p-2 text-center">
        Bienvenue à l'application de gestion de ista
      </h2>
      <div className="animated-icon mb-4">
        <FaUniversity style={{ fontSize: '4rem', color: '#007bff' }} />
      </div>
      <img 
        src="img/ofppt.png" 
        alt="Logo OFPPT" 
        className="animated-img d-block mx-auto p-4" 
        style={{ maxWidth: '25%', height: 'auto' }} 
      />
    </div>
  );
}
