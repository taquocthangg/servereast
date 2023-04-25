import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider_logo1 from "../img/logo/1.png";
import slider_logo2 from "../img/logo/2.png";
import slider_logo3 from "../img/logo/3.png";
import slider_logo4 from "../img/logo/4.png";
import slider_logo5 from "../img/logo/5.png";
import slider_logo6 from "../img/logo/6.png";
import slider_logo7 from "../img/logo/7.png";
import slider_logo8 from "../img/logo/8.png";
import slider_logo9 from "../img/logo/9.png";
const Slider2 = () => {
    const settings = {
        dots:false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div className="slider-containerf">
    <div className="slider-container1_2">
    <Slider {...settings}>
      <div className="slider2_1_item">
        <img src={slider_logo1} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
      <img src={slider_logo2} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
      <img src={slider_logo3} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
      <img src={slider_logo4} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
      <img src={slider_logo5} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
         <img src={slider_logo6} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
         <img src={slider_logo7} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
         <img src={slider_logo8} alt="" srcset="" />
      </div>
      <div className="slider2_1_item">
         <img src={slider_logo9} alt="" srcset="" />
      </div>
    </Slider>
  </div>
  </div>
  )
}

export default Slider2