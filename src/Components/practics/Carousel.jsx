import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://jthemes.net/themes/html/harmony-event/assets/images/event/1.event-grid.jpg',
    'https://jthemes.net/themes/html/harmony-event/assets/images/event/2.event-grid.jpg',
    'https://akcongress.com/blog/wp-content/uploads/2022/05/academic_conference_shutterstock_481869205.jpg',
    'https://images-eur.cvent.com/pr53/6a03f092600d4fd7b17308d9c0fb8bf9/beedfc5e5aa6bb934a4c6bccef6608ea/7fd7380177ad4c92a0916df31d1e07e0/9e7730605ddb469c14a53fa7a925f670!_!5efa45f3e4ce3801b26349988b74b909.jpeg?f=webp',
    'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${
            index === currentImageIndex ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
            <div>home</div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
