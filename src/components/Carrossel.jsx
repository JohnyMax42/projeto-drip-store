import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Shoes from '../assets/shoes.png'
import Banner from "./Banner";


function Carrossel(){
    return(
        <div>
        <Carousel>
        <Carousel.Item>
            <Banner/>
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className = "d-flex w-100" src={Shoes} alt="Second Slide"  style={{height: 681, width: 1440}}/>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-flex w-100" src={Shoes} alt="Third Slide" style={{height: 681, width: 1440}} />
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    )
}

export default Carrossel
