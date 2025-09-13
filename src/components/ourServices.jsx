import React from 'react';
import './css/ourServices.css'; // Import your CSS file
import roof1 from '../assets/tempJPEG1.jpg';
import roof2 from '../assets/roofrecover.jpg';
import roof3 from '../assets/roofwork.jpg';
import roof4 from '../assets/roofwork2.jpg';

const OurServices = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={roof1} alt="Roof 1" className="service-image" />
        <div className="service-title">
          Roof Maintenance
        </div>
      </div>
      <div className="grid-item">
        <img src={roof2} alt="Roof 2" className="service-image" />
        <div className="service-title">
          Preventative Care
        </div>
      </div>
      <div className="grid-item">
        <img src={roof3} alt="Roof 3" className="service-image" />
        <div className="service-title">
          Roof Replacement
        </div>
      </div>
      <div className="grid-item">
        <img src={roof4} alt="Roof 4" className="service-image" />
        <div className="service-title">
          Inspections
        </div>
      </div>
    </div>
  );
};

export default OurServices;