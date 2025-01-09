import React from 'react';
import { Carousel } from 'react-bootstrap';

import firstImage from '../assets/img/carousel/carrusel_1.jpg';
import secondImage from '../assets/img/carousel/carrusel_2.jpg';
import thirdImage from '../assets/img/carousel/carrusel_3.jpg'; // Corregido

function ExampleCarouselImage({ src, alt }) {
  return <img className="d-block w-100" src={src} alt={alt} />;
}

function CarouselExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage src={firstImage} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={secondImage} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={thirdImage} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;
