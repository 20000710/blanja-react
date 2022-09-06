import React, { Component, Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../../assets/style/swiper.css'
import img1 from '../../assets/img/card-promotion.png'
import img2 from '../../assets/img/card-promotion2.png'
import img3 from '../../assets/img/card-promotion.png'
import img4 from '../../assets/img/card-promotion2.png'

export class Carousel extends Component {
  render() {
    return (
        <Fragment>
            <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                >
            <SwiperSlide>
                <img src={img1} alt="img 1"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="img 2"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="img 3"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src={img4} alt="img 4"/>
            </SwiperSlide>
            </Swiper>
        </Fragment>
    )
  }
}

export default Carousel