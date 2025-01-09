import React, { useState } from "react";

const Navbar = ({ onSectionChange }) => {
  const [activeSection, setActiveSection] = useState("Home");

  const handleSectionClick = (section) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {["Home", "Equipo Médico", "Citas"].map((section) => (
          <li
            key={section}
            className={`navbar-item ${activeSection === section ? "active" : ""}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
