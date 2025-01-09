import PropTypes from 'prop-types';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img
        src={doctor.imagen}
        alt={`Foto de ${doctor.nombre}`}
        className="doctor-image"
        style={{ height: 580, borderRadius: 30 }}
      />
      <div className="doctor-info">
        <h2 className="doctor-name" style={{ marginTop: 20, color: 'GrayText' }}>{doctor.nombre}</h2>
        <p className="doctor-specialty">Especialidad: {doctor.especialidad}</p>
        <p className="doctor-experience" style={{ marginTop: -8 }}>
          Años de experiencia: {doctor.años_experiencia}
        </p>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    años_experiencia: PropTypes.number.isRequired,
  }).isRequired,
};

export default DoctorCard;
