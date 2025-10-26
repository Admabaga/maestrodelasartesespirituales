import CustomNavbar from "../../Components/Nav/Navbar"
import Footer from "../../Components/Footer/Footer"
import ContactSection from "../../Components/ContactSection/ContactSection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import Testimonios from "../../Components/Testimonios/Testimonios"
import { FaWhatsapp} from 'react-icons/fa';
import './Home.css'
export default function Home() {
    return (
        <>
            <CustomNavbar />
            <section className="hero-section" id="home">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Maestro de las artes espirituales.</h1>
                        <p>
                            Soy Jose gregorio, guía espiritual y practicante de las artes místicas.
                            A través de rituales, amarres, limpias y lecturas, ayudo a las personas a equilibrar su energía,
                            sanar vínculos y abrir caminos de amor, prosperidad y protección.
                        </p>
                        <p>
                            Desde joven sentí la presencia de lo invisible. Aprendí los secretos del tarot,
                            la magia blanca y los rituales ancestrales de protección.
                            Hoy pongo mi conocimiento al servicio de quienes buscan respuestas y equilibrio espiritual.
                        </p>
                        <a href="#services" className="hero-button">Descubre más</a>
                    </div>
                </div>
            </section>
            <ServicesSection />
            <Testimonios />
            <ContactSection />
            <Footer></Footer>
            <div className="whatsappIcon"></div>
            <a
                href="https://wa.me/16018781857"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
            >
                <FaWhatsapp className="whatsapp-icon" />
            </a>
        </>)
}