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
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={secondImage} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage src={thirdImage} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;
