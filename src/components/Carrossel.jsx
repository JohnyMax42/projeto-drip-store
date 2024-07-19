import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Shoes from '../assets/shoes.png'
import Banner from "./Banner";
// Imagens 
import image1 from '../assets/homeSlides/home-slide-1.jpeg';
import image2 from '../assets/homeSlides/home-slide-2.jpeg';
import image3 from '../assets/homeSlides/home-slide-3.jpeg';
import image4 from '../assets/homeSlides/home-slide-4.jpeg';
import image5 from '../assets/homeSlides/home-slide-5.jpeg';
import image6 from '../assets/homeSlides/home-slide-6.jpeg';
import image7 from '../assets/homeSlides/home-slide-7.jpeg';
import image8 from '../assets/homeSlides/home-slide-8.jpeg';


function Carrossel() {

  return (
    <div>
      <Carousel variant="dark" controls keyboard={true} pause="hover" slide={false} style={{ borderRadius: 4 }}>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <Banner />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image1} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image2} alt="Third Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image3} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image4} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image5} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image6} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image7} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ objectFit: 'contain' }}>
          <img className="d-flex w-100" src={image8} alt="Second Slide" style={{ height: 681, width: 1440 }} />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div >
  )
}

export default Carrossel
