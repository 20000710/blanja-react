import React, { Component, Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/style/swiper.css'
import img1 from '../../assets/img/card-promotion.png'
import img2 from '../../assets/img/card-promotion2.png'
import img3 from '../../assets/img/card-promotion.png'

export class Carousel extends Component {
  render() {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}

export default Carousel