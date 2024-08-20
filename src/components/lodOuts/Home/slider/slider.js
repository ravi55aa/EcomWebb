
import React from 'react';
import Slider from "react-slick";
import './slider.css';
import slider1 from '../../../../css/images/slider1.jpg'
import slider2 from '../../../../css/images/slider2.jpg'
import Subscribe from '../subscribe/subscribe';
const HomeSlider = () => {

    var settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true
    };

    
return (
    <section className='homeSlider'>
        <div className='container-fluid position-relative'>
                <Slider {...settings} className='main_homeSlider'>
                        <div >
                            <img src={slider1} alt="image1" />
                            <div className='mainTextHolder'>
                                <h2>Fresh vegetables big <br/> discount</h2>
                                <p>sign up for the daily newsLetter</p>
                            </div>
                        </div>
                        <div >
                            <img src={slider2} alt="image2" />
                            <div className='mainTextHolder'>
                                <h2>Don't miss amazing grocery<br/> Deals</h2>
                                <p>sign up for the daily newsLetter</p>
                            </div>
                        </div>
            </Slider>
            <Subscribe/>
        </div>
    </section>
  )
}

export default HomeSlider