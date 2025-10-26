import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./GalerySection.css";

const imagenes = [
  "/Galeria 1.jpg",
  "/Galeria 8.jpg",
  "/Galeria 2.jpg",
  "/Galeria 7.jpg",
  "/Galeria 3.jpg",
  "/Galeria 6.jpg",
  "/Galeria 4.jpg",
  "/Galeria 5.jpg",
];

const GalerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotación automática
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imagenes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setActiveIndex((prev) => (prev + 1) % imagenes.length);
  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));

  return (
    <section className="galeria-section" id="galeria">
      <h2 className="galeria-title">Galería Mágica</h2>

      <div className="galeria-container">
        <button className="galeria-btn left" onClick={prev}>
          ❮
        </button>

        <div className="galeria-carousel">
          <AnimatePresence mode="wait">
            <motion.img
              key={imagenes[activeIndex]}
              src={imagenes[activeIndex]}
              alt={`imagen-${activeIndex}`}
              className="galeria-img"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        <button className="galeria-btn right" onClick={next}>
          ❯
        </button>
      </div>

      <div className="galeria-thumbs">
        {imagenes.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={`thumb ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
};

export default GalerySection;
