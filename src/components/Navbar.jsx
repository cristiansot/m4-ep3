import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import logotipo from '../assets/img/logotipo.png';  

const AppNavbar = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  return (
    <Navbar bg="light" data-bs-theme="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logotipo}  
            alt="Mi Clínica"
            style={{ height: 60 }}
          />
        </Navbar.Brand>
        <Nav className="text-center mt-4 mb-4">
          {["Home", "Equipo Médico", "Citas"].map((section) => (
            <Nav.Link
              key={section}
              href="#"
              onClick={() => handleSectionClick(section)}
              active={activeSection === section}
            >
              {section}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
