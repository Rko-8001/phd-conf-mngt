import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from './img1.png';
import './Carousal.css';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to your Dashboard</h3>
          <p>STUDENT INFORMATION.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Welcome to your Dashboard</h3>
          <p>STUDENT INFORMATION.</p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Welcome to your Dashboard</h3>
          <p>STUDENT INFORMATION.</p>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;