import React, { useState } from "react";
import Navbar from "./components/Navbar";
import DoctorCard from "./components/DoctorCard";
import AppointmentForm from "./components/AppointmentForm";
import ServiceList from "./components/ServiceList";  
import teamData from "./assets/equipo.json";
import CarouselExample from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");
  const [selectedService, setSelectedService] = useState(""); 

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

  const services = ["Consultas Generales", "Emergencias", "Cirugías", "Pediatría", "Cardiología"];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    console.log("Servicio seleccionado:", service);
  };

  return (
    <div className="App">
      <Navbar onSectionChange={handleSectionChange} />

      {currentSection === "Home" && (
        <>
          <ServiceList 
            services={services} 
            onServiceSelect={handleServiceSelect}  
          />
          <CarouselExample />
          <p style={{ marginTop: 30, fontSize: 18 }}>
            Nursing Hospital es la red de atención médica más importante del país, reconocida por su compromiso con la excelencia en salud y la formación integral de futuros profesionales. Con un vasto campo clínico que abarca especialidades y niveles de atención de alta complejidad, esta institución no solo se dedica a ofrecer cuidados de calidad, sino también a liderar programas de capacitación avanzada para los médicos del mañana. Desde sus modernos hospitales hasta sus clínicas y centros de especialidades, Nursing Hospital fomenta la innovación, el aprendizaje práctico y una atención humanizada que impacta positivamente en la salud de miles de personas en todo el país.<br />
            <br />
            Nuestra Misión es entregar a la persona y a su familia una Atención de Salud Integral y de calidad que contribuya a su bienestar, respetando su dignidad, por equipos de gran calidad humana y excelencia profesional y académica.<br />
            <br />
            Nuestra Visión es ser la Red de Salud líder en Latinoamérica en la práctica clínica de excelencia y en el desarrollo de conocimientos para el cuidado de la persona, en colaboración con otras instituciones nacionales y extranjeras.
          </p>
        </>
      )}

      {currentSection === "Equipo Médico" && (
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center my-4">Equipo Médico</h2>
          <div className="doctor-list w-100">
            <div className="row justify-content-center">
              {resolvedTeamData.map((doctor, index) => (
                <div key={index} className="col-12 col-md-6 col-sm-8 mb-4 d-flex justify-content-center">
                  <DoctorCard doctor={doctor} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentSection === "Citas" && (
        <> 
          <CarouselExample />
          <div className="appointments-section">
            <AppointmentForm
              doctors={resolvedTeamData}
              onAppointmentSubmit={(newAppointment) => console.log(newAppointment)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
