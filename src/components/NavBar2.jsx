import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const AppNavbar2 = ({ onSectionChange }) => {
  const handleSectionClick = (section) => {
    onSectionChange(section);
  };

  return (
    <Navbar bg="primary" variant="dark" style={{ height: 50 }}>
      <Container>
        <Nav className="text-center mt-4 mb-4">
          {["Nuestra Historia", "Nuestra Misión", "Nuestra Visión", "Testimonios"].map((section) => (
            <Nav.Link
              key={section}
              href="#"
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppNavbar2;
