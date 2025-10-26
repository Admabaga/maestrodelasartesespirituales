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
          <p>📞 +1 601 878 18 57</p>
          <p>✉️ maestrodelasartesespirituasles@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Maestro Espiritual — Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
