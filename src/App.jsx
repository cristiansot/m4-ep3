import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DoctorCard from "./components/DoctorCard";
import AppointmentForm from "./components/AppointmentForm";
import ServiceList from "./components/ServiceList";  
import FiltroEspecialidad from "./components/FiltroEspecialidad";  
import CarouselExample from "./components/Carousel";
import Testimonios from "./components/Testimonios";
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
  const [appointments, setAppointments] = useState([]);  

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

  const handleAppointmentSubmit = (newAppointment) => {
    setAppointments((prevAppointments) => [...prevAppointments, newAppointment]); 
    console.log("Nueva cita agendada:", newAppointment);
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
          <h2 style={{ marginTop: 30, color: "#5f6061" }}>Nuestra Historia</h2>
          <p style={{ marginTop: 30, fontSize: 18, color: "#868686" }}>
            Nursing Hospital es la red de atención médica más importante del país, reconocida por su compromiso con la excelencia en salud y la formación integral de futuros profesionales. Con un vasto campo clínico que abarca especialidades y niveles de atención de alta complejidad, esta institución no solo se dedica a ofrecer cuidados de calidad, sino también a liderar programas de capacitación avanzada para los médicos del mañana. Desde sus modernos hospitales hasta sus clínicas y centros de especialidades, Nursing Hospital fomenta la innovación, el aprendizaje práctico y una atención humanizada que impacta positivamente en la salud de miles de personas en todo el país.<br />
            <br />
          </p>
          <h2 style={{ color: "#5f6061"}}>Nuestra Misión</h2>
          <p>Nuestra Misión es entregar a la persona y a su familia una Atención de Salud Integral y de calidad que contribuya a su bienestar, respetando su dignidad, por equipos de gran calidad humana y excelencia profesional y académica.<br /></p>
            <br />
          <h2 style={{ color: "#5f6061" }}>Nuestra Visión</h2>
          <p>Nuestra Visión es ser la Red de Salud líder en Latinoamérica en la práctica clínica de excelencia y en el desarrollo de conocimientos para el cuidado de la persona, en colaboración con otras instituciones nacionales y extranjeras.
          </p>
          <Testimonios />
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
              onAppointmentSubmit={handleAppointmentSubmit}
            />
          </div>

          <div className="appointments-list">
            <h2 className="text-center my-4" style={{ color: "#5f6061" }}>Citas Agendadas</h2>
            {appointments.length > 0 ? (
              <ul className="list-group">
                {appointments.map((appointment, index) => (
                  <li key={index} className="list-group-item">
                    <strong>Paciente:</strong> {appointment.patientName} <br />
                    <strong>Doctor:</strong> {appointment.doctor} <br />
                    <strong>Fecha:</strong> {appointment.appointmentDate}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center" style={{ color: "#5f6061" }}>No hay citas agendadas.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
