import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'
const Footer = () => {
  return (
    <motion.footer
      className="footer-dark pt-5 pb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-uppercase">Maestro de las artes espirituales</h5>
            <p style={{ fontSize: '0.95rem' }}>
              Comunidad de recuperación que impulsa la transformación personal a través de apoyo, eventos y experiencias.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3">Navegación</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="#contacto" className="text-light text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6 className="text-uppercase fw-semibold mb-3">Contáctanos</h6>
            <p style={{ fontSize: '0.9rem' }}>
              📍 Estados unidos<br />
              📧 maestrodelasartesespirituales@gmail.com<br />
              📞 +57 300 123 4567
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook text-light fs-5"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram text-light fs-5"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube text-light fs-5"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center" style={{ fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} Maestro de las artes espirituales — Todos los derechos reservados.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;