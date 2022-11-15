import React from 'react'
import 'swiper/css';
import '../../assets/style/swiper.css'
import img1 from '../../assets/img/card-promotion.png'
import img2 from '../../assets/img/card-promotion2.png'
import img3 from '../../assets/img/card-promotion.png'
import { Carousel } from "react-bootstrap";
import './carousel.css'

const CarouselHome = () => {
    return (
      <div>
        <div className="container slide">
          <div className="row justify-content-center">
            <Carousel style={{
              width: "456px",
              height: "180px",
              marginTop: "3rem"
            }}>
              <Carousel.Item interval={1000}>
                <img className="d-block w-100" src={img1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img className="d-block w-100" src={img2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }

export default CarouselHome