import React from 'react'
import { Carousel } from "react-bootstrap";
import "../styles/Carousel.css";
import Image1 from "../assets/images/carousel/bike_service.jpg";
import Image2 from "../assets/images/carousel/Engine_parts.jpg";
import Image3 from "../assets/images/carousel/brake.webp";
import Image4 from "../assets/images/carousel/auto-wash.jpg";
import Image5 from "../assets/images/carousel/bolt_kits.jpg";
import Image6 from "../assets/images/carousel/banner.jpg";

const CarouselComp = () => {
  return (
<div className="carousel">
    <Carousel>
      <Carousel.Item>
        <img className="image" src={Image1} alt="Slider 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src={Image2} alt="Slider 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src={Image3} alt="Slider 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src={Image4} alt="Slider 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src={Image5} alt="Slider 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="image" src={Image6} alt="Slider 1" />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default CarouselComp