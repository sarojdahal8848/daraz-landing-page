import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <Carousel fade controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/3442fae3-ee91-485c-9c93-11e1de605646.jpg_1200x1200.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/761f003c-59fa-4814-afd7-7ab1e5c5b4ae.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/2a227681-69e5-47bb-aa83-f57f106ab0cd.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/f83d9c89-a767-4137-9ebc-da814e552c98.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/1b83642b-3eef-420e-80da-a415361ada4c.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/77fcb441-77af-4c43-9556-6fd777b4290d.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/ff1a2f14-4fbb-4fef-9be8-7b5e9e206c77.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/d1902b6a-a8bb-4356-8365-c04a694ded16.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
