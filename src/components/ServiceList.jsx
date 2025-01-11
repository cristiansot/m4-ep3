import PropTypes from "prop-types";

const ServiceList = ({ services, onServiceSelect }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", backgroundColor: "#ff2a6b", height: 50 }}>
      <h4 style={{ color: "#FFF", marginLeft: 20, marginTop: 6, fontSize: 20, fontWeight: 300 }}>Servicios Destacados</h4>
      <select onChange={(e) => onServiceSelect(e.target.value)} style={{ padding: "8px", borderRadius: "10px", fontSize: "14px", backgroundColor: '#ff2a6b', borderColor: '#FFF'}}>
        <option value="">Seleccionar un servicio</option>
        {services.map((service, index) => (
          <option key={index} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  onServiceSelect: PropTypes.func.isRequired,
};

export default ServiceList;
