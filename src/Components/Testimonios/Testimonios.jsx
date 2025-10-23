import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonios.css";

const testimoniosData = [
    {
        id: 1,
        nombre: "María López",
        texto:
            "Los amarres de amor realmente cambiaron mi vida. Nunca imaginé volver a sentir esa conexión tan fuerte.",
        imagen: "/Imagen de WhatsApp 2025-10-22 a las 17.25.05_2b1929ee.jpg",
    },
    {
        id: 2,
        nombre: "Carlos Ramírez",
        texto:
            "Increíble experiencia, profesionalismo y resultados reales. Me siento agradecido por todo el proceso.",
        imagen: "/Imagen de WhatsApp 2025-10-22 a las 17.25.05_2b1929ee.jpg",
    },
    {
        id: 3,
        nombre: "Andrea González",
        texto:
            "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.",
        imagen: "/istockphoto-1005073438-1024x1024.jpg",
    },
];

const Testimonios = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const containerRef = useRef(null);
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const revealOnScroll = () => {
            revealElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();

        return () => window.removeEventListener("scroll", revealOnScroll);
    }, []);

    useEffect(() => {
        if (!paused) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimoniosData.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [paused]);

    // Detectar clics fuera del carrusel para reanudar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setPaused(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <section id="testimonios" className="testimonios-section">
            <h2 className="testimonios-title">Testimonios</h2>
            <div className="carousel-container" ref={containerRef}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={testimoniosData[activeIndex].id}
                        className="testimonial-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <motion.img
                            src={testimoniosData[activeIndex].imagen}
                            alt={testimoniosData[activeIndex].nombre}
                            className="testimonial-img"
                            onClick={() => setPaused(true)}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="testimonial-content">
                            <p className="testimonial-text">
                                “{testimoniosData[activeIndex].texto}”
                            </p>
                            <h5 className="testimonial-name">
                                — {testimoniosData[activeIndex].nombre}
                            </h5>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="carousel-indicators">
                    {testimoniosData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setActiveIndex(index);
                                setPaused(true);
                            }}
                            className={`indicator ${index === activeIndex ? "active" : ""}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
