import React from 'react';
import './ContactSection.css';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contactanos</h2>
        <p>¿Tienes dudas, quieres hablar con el maestro? Escríbenos</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Tu mensaje..." required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      <div className="contact-social">
        <h3>También puedes contactarnos por:</h3>
        <div className="social-iconsContact">
          <a href="https://wa.me/573001112233" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/raicesvivas.ecohotel" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/raicesvivasecohotel" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;