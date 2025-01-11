import React from "react";
import PropTypes from "prop-types";

const FiltroEspecialidad = ({ especialidades, onEspecialidadSelect }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ff2a6b", height: 60 }}>
      <h4 style={{ color: "#FFF", marginLeft: 20, marginTop: 6, fontWeight: 300 }}>Filtrar por especialidad</h4>
      <select
        onChange={(e) => onEspecialidadSelect(e.target.value)}
        style={{ padding: "8px", borderRadius: "5px", fontSize: "16px", backgroundColor: '#ff2a6b', borderColor: '#FFF' }}
      >
        <option value="">Seleccionar una especialidad</option>
        {especialidades.map((especialidad, index) => (
          <option key={index} value={especialidad}>
            {especialidad}
          </option>
        ))}
      </select>
    </div>
  );
};

FiltroEspecialidad.propTypes = {
  especialidades: PropTypes.arrayOf(PropTypes.string).isRequired,
  onEspecialidadSelect: PropTypes.func.isRequired,
};

export default FiltroEspecialidad;
