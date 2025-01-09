import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DoctorCard from "./components/DoctorCard";
import AppointmentForm from "./components/AppointmentForm";
import teamData from "./assets/equipo.json";
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  const resolveImagePaths = (data) => {
    return data.map((doctor) => ({
      ...doctor,
      imagen: new URL(`./assets/img/${doctor.imagen}`, import.meta.url).href,
    }));
  };

  const resolvedTeamData = resolveImagePaths(teamData);

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />

      {currentSection === "Home" && <h1>Bienvenido a la Clínica</h1>}

      {currentSection === "Equipo Médico" && (
        <div>
          <h2>Equipo Médico</h2>
          <div className="doctor-list">
            {resolvedTeamData.map((doctor, index) => (
              <DoctorCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      )}


      {currentSection === "Citas" && (
        <div className="appointments-section">
          <AppointmentForm
            doctors={resolvedTeamData}
            onAppointmentSubmit={(newAppointment) => console.log(newAppointment)}
          />
        </div>
      )}
    </div>
  );
};

export default App;
