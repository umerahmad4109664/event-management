import React, { useState, useEffect } from 'react';
import './carousel.css';

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg',
    'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg',
    'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg',
    'https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_640.jpg',
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
