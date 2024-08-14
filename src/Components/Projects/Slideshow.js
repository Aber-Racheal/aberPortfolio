import React, { useState } from 'react';
import Slide from './Slide';
import './Slide.css'; 

const Slideshow = () => {
  const slides = [
    { id: 1, title: 'Baims Educational Platform', description:'THis project', image: '/Baims.png' },
    { id: 2, title: 'Project 2', description:'THis project', image: 'url_to_your_image_2.jpg' },
    { id: 3, title: 'Project 3', description:'THis project', image: 'url_to_your_image_3.jpg' },
    { id: 4, title: 'Project 4', description:'THis project', image: 'url_to_your_image_4.jpg' },
    { id: 5, title: 'Project 5', description:'THis project', image: 'url_to_your_image_5.jpg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
  };

  return (
    <div className="slideshow-container" id='projectSection'>

   <h1 className='aboutH'>_Projects</h1>
   <h1 className='aboutTitle'>Practical Skills</h1>
      <div className="slideshow-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide key={slide.id} title={slide.title} description={slide.description} image={slide.image} isActive={index === currentSlide} />
        ))}
      </div>
      <div className="controls">
        <button onClick={goToPrevSlide} className="control-btn prev-btn">Prev</button>
        <button onClick={goToNextSlide} className="control-btn next-btn">Next</button>
      </div>
    </div>
  );
};

export default Slideshow;
