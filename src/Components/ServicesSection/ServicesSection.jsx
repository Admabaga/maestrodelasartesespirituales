import React, { useState } from 'react';
import './ServicesSection.css';

const services = [
    {
        title: "Amarres y union de pareja",
        description: "¿Tu pareja se ha alejado? A través de un amarre de amor poderoso puedo ayudarte a reavivar la pasión, unir corazones y atraer nuevamente el cariño sincero que te pertenece. Resultados efectivos y energía pura.",
        icon: "/Images/Alojamientos.png",
        details: (
            <ul>
                <li><strong>Amarre de deseo:</strong> Reaviva la pasión y el fuego interior en tu relación.</li>
                <li><strong>Ritual de unión sexual:</strong> Fortalece el vínculo íntimo y energético entre parejas.</li>
                <li><strong>Atracción irresistible:</strong> Canaliza energías para ser deseado y recordado.</li>
                <li><strong>Incluye:</strong> Consulta personalizada, materiales rituales y guía espiritual del Maestro.</li>
            </ul>
        )
    }, {
        title: "Lecturas de Tarot y Oráculos.",
        description: "Recibe guía espiritual sobre amor, trabajo, salud y destino.",
        icon: "/Images/Alojamientos.png",
        details: (
            <ul>
                <li><strong>Día de sol:</strong> $40.000 COP por persona</li>
                <li><strong>Amanecida:</strong> $90.000 COP por noche</li>
                <li><strong>Cabaña familiar (4 personas):</strong> $300.000 COP</li>
                <li><strong>Incluye:</strong> Desayuno orgánico, acceso a zonas verdes</li>
            </ul>
        )
    }, {
        title: "Limpiezas Energéticas y Protección.",
        description: "Elimina bloqueos y renueva tu energía vital.",
        icon: "/Images/Alojamientos.png",
        details: (
            <ul>
                <li><strong>Día de sol:</strong> $40.000 COP por persona</li>
                <li><strong>Amanecida:</strong> $90.000 COP por noche</li>
                <li><strong>Cabaña familiar (4 personas):</strong> $300.000 COP</li>
                <li><strong>Incluye:</strong> Desayuno orgánico, acceso a zonas verdes</li>
            </ul>
        )
    }, {
        title: "Rituales de Prosperidad y Abundancia.",
        description: "Atrae oportunidades y equilibra tu flujo económico.",
        icon: "/Images/Alojamientos.png",
        details: (
            <ul>
                <li><strong>Día de sol:</strong> $40.000 COP por persona</li>
                <li><strong>Amanecida:</strong> $90.000 COP por noche</li>
                <li><strong>Cabaña familiar (4 personas):</strong> $300.000 COP</li>
                <li><strong>Incluye:</strong> Desayuno orgánico, acceso a zonas verdes</li>
            </ul>
        )
    }
];

const ServicesSection = () => {
    const [selected, setSelected] = useState(null);

    return (
        <section id="services" className="services-section">
            <div className="services-header">
                <h2>Servicios del Maestro</h2>
                <p>Conecta con la naturaleza a través de nuestras experiencias únicas</p>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        onClick={() => setSelected(service)}
                    >
                        <img src={service.icon} alt={service.title} className="service-icon" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
            {selected && (
                <div className="modal-overlay" onClick={() => setSelected(null)}>
                    <div className="modal-content animated" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn top-right" onClick={() => setSelected(null)}>&times;</button>
                        <img src={selected.icon} alt={selected.title} className="modal-icon" />
                        <h3>{selected.title}</h3>
                        {selected.details}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesSection;