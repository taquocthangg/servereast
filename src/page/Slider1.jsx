import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/home.css'
import slider_logo1 from "../img/avt/testimonial.jpg";
import slider_logo2 from "../img/avt/testimonial2.jpg";
import slider_logo3 from "../img/avt/testimonial3.jpg";
const images = [
  {
    id: 1,
    src: require('../img/avt/testimonial.jpg'),
    content: 'Save the world citizens of change; medicine immunize, convener design thinking global network Kickstarter empowerment prevention effectiveness. Service improving quality youth incubation foster. Expanding community ownership, urban experience in the field scalable',
    content1: 'Bill Good, Chairman of ',
    content2: 'Solution S.A.',
  },
  {
    id: 2,
    src: require('../img/avt/testimonial2.jpg'),
    content: 'Future social movement carbon emissions reductions voice; foster reduce child mortality measures theory of social change emergent women and children. Life-expectancy gender rights safeguards save lives social analysis dignity health developing nations.',
    content1: 'Alvaro DeMichelis, Founder of ',
    content2: 'Global Corp.',
  },
  {
    id: 3,
    src: require('../img/avt/testimonial3.jpg'),
    content: 'International tackle working alongside. Economic security, significant invest, Ford Foundation respect public service crowdsourcing research affordable health. Philanthropy equal opportunity assessment expert accelerate United Nations environmental, poverty, political, public.',
    content1: 'Bjorn Swift, CEO of ',
    content2: 'Campaign Ltd.',
  },
];
function Slider1() {
  const setting1 = {
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed:3100,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider1-content">

    <div className="slider1-container1">
      <div className="slider1-title">
        <h1 className="slider-title1">What Clients Think</h1>
        <p className="slider-title2">Foundation, Jane Addams John Lennon local solutions institutions action.</p>
      </div>
    <Slider {...setting1}>
      <div className="slider2_11_item">
        <img src={slider_logo1} alt="" srcset="" />
        <div className="slider1-text1">
          <p className="text1-slider2 ">International tackle working alongside. Economic security, significant invest, Ford Foundation respect public service crowdsourcing research affordable health. Philanthropy equal opportunity assessment expert accelerate United Nations environmental, poverty, political, public.</p>
          <p className="text2-slider2">Bjorn Swift, CEO of <a href="#">Campaign Ltd.</a></p>
        </div>
      </div>
      <div className="slider2_11_item">
      <img src={slider_logo2} alt="" srcset="" />
      <div className="slider1-text1">
          <p className="text1-slider2">International tackle working alongside. Economic security, significant invest, Ford Foundation respect public service crowdsourcing research affordable health. Philanthropy equal opportunity assessment expert accelerate United Nations environmental, poverty, political, public.</p>
          <p className="text2-slider2">Bjorn Swift, CEO of <a href="#">Campaign Ltd.</a></p>
        </div>
      </div>
      <div className="slider2_11_item">
      <img src={slider_logo3} alt="" srcset="" />
      <div className="slider1-text1">
          <p className="text1-slider2">International tackle working alongside. Economic security, significant invest, Ford Foundation respect public service crowdsourcing research affordable health. Philanthropy equal opportunity assessment expert accelerate United Nations environmental, poverty, political, public.</p>
          <p className="text2-slider2">Bjorn Swift, CEO of <a href="#">Campaign Ltd.</a></p>
        </div>
      </div>

    </Slider>
  </div>
        
  </div>
  );
}
export default Slider1