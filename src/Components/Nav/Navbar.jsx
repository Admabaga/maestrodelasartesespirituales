import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css'; // Asegúrate de tener el CSS que te dejo abajo

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 15,
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, height: 0, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    const scrollToSection = (id) => {
        setExpanded(false);
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            navigate('/');
            setTimeout(() => {
                const retry = document.querySelector(id);
                if (retry) {
                    retry.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    };

    return (
        <Navbar
            fixed="top"
            style={{
                backgroundColor: '#121212',
                zIndex: 1050,
            }}
            variant="dark"
            expand="lg"
            className="py-2 shadow-sm"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container className="align-items-center">
                {/* Logo */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{
                        scale: 1.05,
                        filter: 'drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))',
                        transition: { duration: 0.3 }
                    }}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <Navbar.Brand
                        as={Link}
                        to="/"
                        className="d-flex align-items-center"
                        style={{ padding: 0 }}
                    >
                        <img
                            src="/ChatGPT_Image_20_oct_2025__08_13_00_p.m.-removebg-preview.png"
                            style={{ height: '48px', objectFit: 'contain' }}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                </motion.div>

                {/* Botón hamburguesa */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Menú colapsable */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <AnimatePresence>
                        {expanded ? (
                            // ===== VISTA MÓVIL =====
                            <motion.div
                                key="mobile-nav"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={menuVariants}
                                className="w-100 bg-dark px-4 py-3 rounded-bottom"
                            >
                                <Nav className="flex-column text-center">
                                    <Nav.Link
                                        as="button"
                                        className="nav-item-animated my-2"
                                        onClick={() => scrollToSection('#home')}
                                    >
                                        <motion.span variants={itemVariants}>Inicio</motion.span>
                                    </Nav.Link>

                                    <Nav.Link
                                        as="button"
                                        className="nav-item-animated my-2"
                                        onClick={() => scrollToSection('#services')}
                                    >
                                        <motion.span variants={itemVariants}>Servicios del maestro</motion.span>
                                    </Nav.Link>
                                    <Nav.Link
                                        as="button"
                                        className="nav-item-animated my-2"
                                        onClick={() => scrollToSection('#testimonios')}
                                    >
                                        <motion.span variants={itemVariants}>Testimonios</motion.span>
                                    </Nav.Link>

                                    <Nav.Link as="button" className="my-3">
                                        <motion.button
                                            variants={itemVariants}
                                            className="btn btn-accent w-100"
                                            onClick={() => scrollToSection('#contact')}
                                        >
                                            Contacto
                                        </motion.button>
                                    </Nav.Link>
                                </Nav>
                            </motion.div>
                        ) : (
                            // ===== VISTA ESCRITORIO =====
                            <Nav className="ms-auto d-none d-lg-flex align-items-center">
                                <Nav.Link
                                    as="button"
                                    className="me-3 fs-6 nav-item-animated"
                                    onClick={() => scrollToSection('#home')}
                                >
                                    Inicio
                                </Nav.Link>

                                <Nav.Link
                                    as="button"
                                    className="me-3 fs-6 nav-item-animated"
                                    onClick={() => scrollToSection('#services')}
                                >
                                    Servicios del maestro
                                </Nav.Link>
                                <Nav.Link
                                    as="button"
                                    className="me-3 fs-6 nav-item-animated"
                                    onClick={() => scrollToSection('#testimonios')}
                                >
                                    Testimonios
                                </Nav.Link>

                                <Nav.Link
                                    as="button"
                                    onClick={() => scrollToSection('#contact')}
                                >
                                    <button className="btn btn-accent btn-sm px-3 py-1 rounded-pill">
                                        Contacto
                                    </button>
                                </Nav.Link>
                            </Nav>
                        )}
                    </AnimatePresence>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
