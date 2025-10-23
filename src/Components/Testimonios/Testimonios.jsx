import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonios.css";

const testimoniosData = [
  { id: 1, nombre: "Sonia", texto: "Los amarres de amor realmente cambiaron mi vida. Nunca imaginé volver a sentir esa conexión tan fuerte.", imagen: "/sonia.jpg" },
  { id: 2, nombre: "Ronal", texto: "Increíble experiencia, profesionalismo y resultados reales. Me siento agradecido por todo el proceso.", imagen: "/ronalJesus.jpg" },
  { id: 3, nombre: "Radi", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/radi.jpg" },
  { id: 4, nombre: "Joaquin", texto: "Los amarres de amor realmente cambiaron mi vida. Nunca imaginé volver a sentir esa conexión tan fuerte.", imagen: "/joaquin.jpg" },
  { id: 5, nombre: "Martha", texto: "Increíble experiencia, profesionalismo y resultados reales. Me siento agradecido por todo el proceso.", imagen: "/martha.jpg" },
  { id: 6, nombre: "Osman", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/Osman.jpg" },
  { id: 7, nombre: "Sofia", texto: "Los amarres de amor realmente cambiaron mi vida. Nunca imaginé volver a sentir esa conexión tan fuerte.", imagen: "/sofia.jpg" },
  { id: 8, nombre: "Oralia", texto: "Increíble experiencia, profesionalismo y resultados reales. Me siento agradecido por todo el proceso.", imagen: "/oralia.jpg" },
  { id: 9, nombre: "Karla", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/karla.jpg" },
  { id: 10, nombre: "Rafael", texto: "Los amarres de amor realmente cambiaron mi vida. Nunca imaginé volver a sentir esa conexión tan fuerte.", imagen: "/rafael.jpg" },
  { id: 11, nombre: "Santiago", texto: "Increíble experiencia, profesionalismo y resultados reales. Me siento agradecido por todo el proceso.", imagen: "/santiago.jpg" },
  { id: 12, nombre: "Kevin", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/kevin.jpg" },
  { id: 13, nombre: "Familia Isaias", texto: "Los amarres de amor realmente cambiaron mi vida. Nunca imaginé volver a sentir esa conexión tan fuerte.", imagen: "/familiaIsaias.jpg" },
  { id: 14, nombre: "Artemio", texto: "Increíble experiencia, profesionalismo y resultados reales. Me siento agradecido por todo el proceso.", imagen: "/artemio.jpg" },
  { id: 15, nombre: "Fernando", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/fernando.jpg" },
  { id: 16, nombre: "Elizabeth", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/elizabeth.jpg" },
  { id: 17, nombre: "Giselle", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/giselem.jpg" },
  { id: 18, nombre: "Alexandra", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/alexandra.jpg" },
  { id: 19, nombre: "Gloria", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/gloria.jpg" },
  { id: 20, nombre: "Alfredo", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/alfredo.jpg" },
  { id: 21, nombre: "Gonzalo", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/gonzalo.jpg" },
  { id: 22, nombre: "Agustina", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/agustina.jpg" },
  { id: 23, nombre: "Fabiola", texto: "Desde el primer momento sentí confianza. El acompañamiento fue constante y los resultados, maravillosos.", imagen: "/fabiola.jpg" },
];

const Testimonios = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  };

  // Cambio automático
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimoniosData.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [paused]);

  // Teclas del teclado ← →
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % testimoniosData.length);
        setPaused(true);
      } else if (e.key === "ArrowLeft") {
        setDirection(-1);
        setActiveIndex((prev) =>
          prev === 0 ? testimoniosData.length - 1 : prev - 1
        );
        setPaused(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="testimonios" className="testimonios-section">
      <h2 className="testimonios-title">Testimonios</h2>

      <div
        className="carousel-container"
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={testimoniosData[activeIndex].id}
            className="testimonial-card"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={testimoniosData[activeIndex].imagen}
              alt={testimoniosData[activeIndex].nombre}
              className="testimonial-img"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <div className="testimonial-content">
              <h5 className="testimonial-name">
                {testimoniosData[activeIndex].nombre}
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
