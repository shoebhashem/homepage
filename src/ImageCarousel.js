// src/ImageCarousel.js

import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: 'image1.jpg',
      text: 'Welcome to My Homepage!',
    },
    {
      src: 'image2.jpg',
      text: 'Explore and Enjoy!',
    },
    // Add more images and corresponding texts as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="image-carousel">
      <img src={images[currentIndex].src} alt="carousel" />
      <p>{images[currentIndex].text}</p>
    </div>
  );
};

export default ImageCarousel;
