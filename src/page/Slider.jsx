import React, { useState } from 'react';
import '../css/home.css'
import { IoIosRocket} from 'react-icons/io';
const images = [
    {
      id: 1,
      src: require('../img/banner/1.jpg'),
      name: 'SHARED HOSTING',
      content:'secure, fast and reliable',
      content1:'See the Features',

      content3:'fa-solid fa-rocket',
      content2:'SHARED HOSTING'
    },
    {
      id: 2,
      src: require('../img/banner/2.jpg'),
      name: 'RESELLING SERVEREAST. EASIER THAN EVER.',
      content:'your customers expect nothing but the best',
      content1:'Learn More',
      content2:'RESELLER HOSTING',
      content3:'fa fa-line-chart'
    },
    {
      id: 3,
      src: require('../img/banner/3.jpg'),
      name: 'SSD VPS. IN THE CLOUD.',
      content:'we deliver what you need',
      content1:'More Info',
      content2:'CLOUD VPS',
      content3:'fa fa-cloud'
    },
    {
      id: 4,
      src: require('../img/banner/1.jpg'),
      name: 'MANAGED DEDICATED SERVERS',
      content:'24/7/365 Server Support',
      content1:'Order Now',
      content2:'DEDICATED SERVERS',
      content3:'fa fa-tasks'
    }
  ];
  function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className="slider">
      <div className="slider-content">
        <img className="slider__item " src={images[activeIndex].src} alt={images[activeIndex].name} />
        <div className="slider-caption">
          <h1 >{images[activeIndex].name}</h1>
          <h4>{images[activeIndex].content}</h4>
          <button><a href="#">{images[activeIndex].content1}</a></button>
        </div>
      </div>
      <div className="slider-nav">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? 'active' : ''}
          >
           <div className="nav__item">
            <i className={image.content3}></i>
             <div ></div> 
           {image.content2}
           </div>
          </button>
        ))}
      </div>
    </div>
    );
  }
  export default Slider