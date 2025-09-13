import React from 'react';
import './css/ourServices.css'; // Import your CSS file
import roof1 from '../assets/tempJPEG1.jpg';

const OurServices = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={roof1} alt="Roof 1" className="service-image" />
        <div className="service-title">
        Roof Maintenance
        </div>
      </div>
      <div className="grid-item">Preventative Care</div>
      <div className="grid-item">Roof Replacement</div>
      <div className="grid-item">Inspections</div>
    </div>
  );
};

export default OurServices;