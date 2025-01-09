import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DoctorCard from "./components/DoctorCard";
import AppointmentForm from "./components/AppointmentForm";
import ServiceList from "./components/ServiceList";  
import FiltroEspecialidad from "./components/FiltroEspecialidad";  
import CarouselExample from "./components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState("Home");
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedEspecialidad, setSelectedEspecialidad] = useState(""); 
  const [loadingDoctors, setLoadingDoctors] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);
  const [selectedService, setSelectedService] = useState(""); 

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/awakelab/m5-ep1/equipo.json");
        const data = await response.json();
        setDoctors(data);  
        setLoadingDoctors(false);
      } catch (error) {
        console.error("Error al cargar los médicos:", error);
        setLoadingDoctors(false); 
      }
    };

    fetchDoctors();

    setServices([
      "Consultas Generales", 
      "Emergencias", 
      "Cirugías", 
      "Pediatría", 
      "Cardiología"
    ]);
    setLoadingServices(false);
  }, []); 

  const filteredDoctors = selectedEspecialidad
    ? doctors.filter((doctor) => doctor.especialidad === selectedEspecialidad)
    : doctors;

  const especialidades = [...new Set(doctors.map((doctor) => doctor.especialidad))];

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
            Nursing Hospital es la red de atención médica más importante del país...
          </p>
        </>
      )}

      {currentSection === "Equipo Médico" && (
        <>
          <FiltroEspecialidad 
            especialidades={especialidades}  
            onEspecialidadSelect={setSelectedEspecialidad} 
          />
          {loadingDoctors ? (
            <p>Cargando médicos...</p>  
          ) : (
            <div className="container d-flex flex-column align-items-center">
              <h2 className="text-center my-4">Equipo Médico</h2>
              <div className="doctor-list w-100">
                <div className="row justify-content-center">
                  {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor, index) => (
                      <div key={index} className="col-12 col-md-6 col-sm-8 mb-4 d-flex justify-content-center">
                        <DoctorCard doctor={doctor} />
                      </div>
                    ))
                  ) : (
                    <p>No hay doctores para esta especialidad.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {currentSection === "Citas" && (
        <> 
          <CarouselExample />
          <div className="appointments-section">
            <AppointmentForm
              doctors={doctors}
              onAppointmentSubmit={(newAppointment) => console.log(newAppointment)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
