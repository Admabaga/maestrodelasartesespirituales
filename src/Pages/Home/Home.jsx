import CustomNavbar from "../../Components/Nav/Navbar"
import Footer from "../../Components/Footer/Footer"
import ContactSection from "../../Components/ContactSection/ContactSection"
import ServicesSection from "../../Components/ServicesSection/ServicesSection"
import './Home.css'
export default function Home() {
    return (
        <>
            <CustomNavbar />
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Maestro de las artes espirituales.</h1>
                        <p>lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi distinctio ea ipsa in quod explicabo quae necessitatibus quos, architecto ullam earum libero commodi alias dolorem amet molestias omnis, impedit esse.</p>
                        <a href="#about" className="hero-button">Descubre más</a>
                    </div>
                </div>
            </section>
            <ServicesSection/>
            <ContactSection/>
            <Footer></Footer>
        </>)
}