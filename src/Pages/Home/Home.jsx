import CustomNavbar from "../../Components/Nav/Navbar"
import Footer from "../../Components/Footer/Footer"
import ContactSection from "../../Components/ContactSection/ContactSection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import Testimonios from "../../Components/Testimonios/Testimonios"
import './Home.css'
export default function Home() {
    return (
        <>
            <CustomNavbar />
            <section className="hero-section" id="home">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Maestro de las artes espirituales.</h1>
                        <p>lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio ea ipsa in quod explicabo quae necessitatibus quos, architecto ullam earum libero commodi alias dolorem amet molestias omnis, impedit esse.</p>
                        <a href="#services" className="hero-button">Descubre más</a>
                    </div>
                </div>
            </section>
            <ServicesSection />
            <Testimonios />
            <ContactSection />
            <Footer></Footer>
        </>)
}