import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* Columna 1 */}
        <div>
          <h3 className="footer-title">Maestro Espiritual</h3>
          <p>
            Conecta con la sabiduría ancestral y el equilibrio interior a través
            de las artes espirituales y el autoconocimiento.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-links">
          <h4 className="footer-title">Enlaces</h4>
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#testimonios">Testimonios</a>
          <a href="#contact">Contacto</a>
        </div>

        {/* Columna 3 */}
        <div className="footer-contact">
          <h4 className="footer-title">Contacto</h4>
          <p>📍 Medellín, Colombia</p>
          <p>📞 +57 300 123 4567</p>
          <p>✉️ maestro@espiritual.com</p>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="footer-title">Sígueme</h4>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Maestro Espiritual — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
