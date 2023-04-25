import React, { useState } from 'react';
import '../css/home.css'

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
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider_1">
    <div className="slider1">
        <div className="slider__text1">
            <h3 className="text1_title text-color">What Clients Think</h3>
            <p className="text1_title1 text-color">Foundation, Jane Addams John Lennon local solutions institutions action.</p>
        </div>
      <div className="slider-content1">
        <img className="slider__item1" src={images[activeIndex].src} alt={images[activeIndex].name} />
        <div className="slider-caption1">
          <h4 className="slider-center text-color ">{images[activeIndex].content}</h4>
        </div>
        <div className="slider1-hide">
            <p className="hide__text">{images[activeIndex].content1} <span className="hide_text1">{images[activeIndex].content2}</span></p>
        </div>
      </div>
      <div className="slider-nav1">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? 'active1' : ''}
          >
            {/* <div className="nav__item1">  
            </div> */}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}
export default Slider