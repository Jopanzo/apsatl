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
        <div className="service-content">
          We offer comprehensive roof maintenance services to ensure your roof remains in top condition year-round.
        </div>
      </div>
      <div className="grid-item">
        <img src={roof2} alt="Roof 2" className="service-image" />
        <div className="service-title">
          Preventative Care
        </div>
        <div className="service-content">
          Prevent future repairs today and extend the life of your roof with our preventative care services.
        </div>
      </div>
      <div className="grid-item">
        <img src={roof3} alt="Roof 3" className="service-image" />
        <div className="service-title">
          Roof Replacement
        </div>
        <div className="service-content">
          When repairs aren't enough, we provide full roof replacement services with high-quality materials and expert craftsmanship.
        </div>
      </div>
      <div className="grid-item">
        <img src={roof4} alt="Roof 4" className="service-image" />
        <div className="service-title">
          Inspections
        </div>
        <div className="service-content">
          Let our experts conduct thorough roof inspections to identify potential issues before they become major problems.
        </div>
      </div>
    </div>
  );
};

export default OurServices;