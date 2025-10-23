import React, { useState } from 'react';
import './ContactSection.css';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, mensaje } = formData;

    if (!nombre || !email || !mensaje) {
      alert('Por favor completa todos los campos antes de enviar.');
      return;
    }

    const phoneNumber = '573205909106'; 
    const texto = `🌿 *Hola Maestro!* 🙏\n\nTe escribe *${nombre}* y desea comunicarse contigo.\n\n🪶 *Motivo de consulta:* ${email}\n💬 *Mensaje:* ${mensaje}`;
    const encodedText = encodeURIComponent(texto);

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(url, '_blank');

    setFormData({
      nombre: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Contáctanos</h2>
        <p>¿Tienes dudas o deseas hablar con el maestro? Escríbenos</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Motivo de consulta"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje..."
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-enviar">Enviar mensaje</button>
      </form>

      <div className="contact-social">
        <h3>También puedes contactarnos por:</h3>
        <div className="social-iconsContact">
          <a href="https://wa.me/573218854756" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
       <p>Linea de whatsapp</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
