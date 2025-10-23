import React, { useState } from 'react';
import './ServicesSection.css';

const services = [
    {
        title: "Amarres y Unión de Pareja",
        description:
            "¿Tu pareja se ha alejado? A través de un amarre de amor poderoso puedo ayudarte a reavivar la pasión, unir corazones y atraer nuevamente el cariño sincero que te pertenece. Rituales auténticos y energía pura para restaurar el amor verdadero.",
        firstIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.50.53_6709c411.jpg",
        secondIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.50.53_b98be43f.jpg",
        details: (
            <ul>
                <li><strong>Amarre de deseo:</strong> Reaviva la pasión y el fuego interior en tu relación.</li>
                <li><strong>Ritual de unión eterna:</strong> Sella la conexión espiritual y emocional entre ambos.</li>
                <li><strong>Atracción irresistible:</strong> Canaliza energías para ser recordado, amado y deseado.</li>
                <li><strong>Incluye:</strong> Consulta personalizada, materiales rituales y acompañamiento directo del Maestro.</li>
            </ul>
        )
    },
    {
        title: "Lecturas de Tarot y Oráculos",
        description:
            "Descubre lo que el universo tiene preparado para ti. A través de las cartas del Tarot, los oráculos y la intuición espiritual, recibirás guía sobre amor, dinero, salud y destino. Cada lectura es una ventana a tu camino interior.",
        firstIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.59.16_5f7db3ac.jpg",
        secondIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.59.16_18df7a4e.jpg",
        details: (
            <ul>
                <li><strong>Tarot del amor:</strong> Resuelve dudas sobre tu pareja, expareja o futuro sentimental.</li>
                <li><strong>Lectura general:</strong> Conoce las energías que te rodean en el presente y futuro cercano.</li>
                <li><strong>Oráculo ancestral:</strong> Conexión con sabiduría espiritual y mensajes de tus guías.</li>
                <li><strong>Incluye:</strong> Interpretación profunda, mensaje canalizado y consejos del Maestro.</li>
            </ul>
        )
    },
    {
        title: "Limpiezas Energéticas y Protección",
        description:
            "Libérate de energías negativas, envidias, mal de ojo y bloqueos emocionales. Recupera tu equilibrio interior con limpiezas profundas que purifican tu entorno y restauran tu bienestar espiritual.",
        firstIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.59.17_93c92100.jpg",
        secondIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.59.17_93c92100.jpg",
        details: (
            <ul>
                <li><strong>Limpieza con hierbas y fuego:</strong> Elimina vibraciones densas y restaura tu vitalidad.</li>
                <li><strong>Protección espiritual:</strong> Escudos energéticos personalizados para mantenerte a salvo.</li>
                <li><strong>Ritual con sal y cuarzos:</strong> Purificación total del alma y armonización del aura.</li>
                <li><strong>Incluye:</strong> Diagnóstico energético, ritual completo y recomendaciones personales.</li>
            </ul>
        )
    },
    {
        title: "Rituales de Prosperidad y Abundancia",
        description:
            "Atrae la buena suerte, la estabilidad económica y las oportunidades con rituales sagrados de prosperidad. Libérate de bloqueos financieros y abre el camino a la abundancia universal.",
        firstIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.59.18_8919eb12.jpg",
        secondIcon: "/Imagen de WhatsApp 2025-10-22 a las 16.59.18_a801cd4d.jpg",
        details: (
            <ul>
                <li><strong>Ritual del dinero imantado:</strong> Activa la energía de atracción económica.</li>
                <li><strong>Baños de apertura de caminos:</strong> Limpia la energía y llama a nuevas oportunidades.</li>
                <li><strong>Ritual de ofrenda a la tierra:</strong> Gratitud y conexión con la fuente de la prosperidad.</li>
                <li><strong>Incluye:</strong> Materiales rituales, guía energética y seguimiento del Maestro.</li>
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
                <p>
                    Conecta con la energía universal a través de los dones del Maestro.  
                    Cada servicio ha sido diseñado con sabiduría ancestral y propósito espiritual  
                    para ayudarte a sanar, atraer y transformar tu vida.  
                    🌙✨ Encuentra el equilibrio entre cuerpo, mente y espíritu.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        onClick={() => setSelected(service)}
                    >
                        <img src={service.firstIcon} alt={service.title} className="service-icon" />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>

            {selected && (
                <div className="modal-overlay" onClick={() => setSelected(null)}>
                    <div className="modal-content animated" onClick={(e) => e.stopPropagation()}>
                        <img src={selected.secondIcon} alt={selected.title} className="modal-icon" />
                        <h3>{selected.title}</h3>
                        {selected.details}
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesSection;
