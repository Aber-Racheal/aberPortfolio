import React from 'react';
import './Slide.css'



const Slide = ({ title, image, description, isActive }) => {
  return (
<div className={`slide ${isActive ? 'active' : ''}`} id='wholeProject'>



      <div className='projectImage'> <img src={image} alt={title} className="slide-image" /> </div>

      <div className="slide-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

    </div>


  );

    

};

export default Slide;
