import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CustomNavbar = () => {
    const [expanded, setExpanded] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, height: 0 },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                type: "spring",
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

    // Función para desplazamiento suave a secciones por id (#services, #contact)
    const handleScrollTo = (id) => {
        setExpanded(false);
        const element = document.querySelector(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar
            style={{ backgroundColor: '#121212' }}
            variant="dark"
            expand="lg"
            className="py-1 shadow-sm"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container className="align-items-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    whileHover={{
                        scale: 1.05,
                        filter: "drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5))",
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
                            style={{ height: "48px", objectFit: "contain" }}
                            alt="Logo"
                        />
                    </Navbar.Brand>
                </motion.div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                key="mobile-nav"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={menuVariants}
                                className="w-100 bg-dark px-4 py-3 rounded-bottom"
                            >
                                <Nav className="flex-column">
                                    <LinkContainer to="/" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Inicio</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    <Nav.Link
                                        className="nav-item-animated"
                                        onClick={() => handleScrollTo('#services')}
                                    >
                                        <motion.span variants={itemVariants}>Amarres de amor</motion.span>
                                    </Nav.Link>

                                    <LinkContainer to="/nosotros" onClick={() => setExpanded(false)}>
                                        <Nav.Link className="nav-item-animated">
                                            <motion.span variants={itemVariants}>Nosotros</motion.span>
                                        </Nav.Link>
                                    </LinkContainer>

                                    <Nav.Link onClick={() => handleScrollTo('#contact')}>
                                        <motion.button
                                            variants={itemVariants}
                                            className="btn btn-accent w-100 mt-3"
                                        >
                                            Contacto
                                        </motion.button>
                                    </Nav.Link>
                                </Nav>
                            </motion.div>
                        )}

                        {!expanded && (
                            <Nav className="ms-auto d-none d-lg-flex align-items-center">
                                <LinkContainer to="/">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Inicio</Nav.Link>
                                </LinkContainer>

                                <Nav.Link
                                    className="me-3 fs-6 nav-item-animated"
                                    onClick={() => handleScrollTo('#services')}
                                >
                                    Amarres de amor
                                </Nav.Link>

                                <LinkContainer to="/nosotros">
                                    <Nav.Link className="me-3 fs-6 nav-item-animated">Nosotros</Nav.Link>
                                </LinkContainer>

                                <Nav.Link onClick={() => handleScrollTo('#contact')}>
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
