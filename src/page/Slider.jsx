import React, { useState } from 'react';
const images = [
    {
      id: 1,
      src: 'path/to/image1',
      name: 'Image 1'
    },
    {
      id: 2,
      src: 'path/to/image2',
      name: 'Image 2'
    },
    {
      id: 3,
      src: 'path/to/image3',
      name: 'Image 3'
    },
    {
      id: 4,
      src: 'path/to/image4',
      name: 'Image 4'
    }
  ];
  function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className="slider">
      <div className="slider-content">
        <img src={images[activeIndex].src} alt={images[activeIndex].name} />
        <div className="slider-caption">
          <h3>{images[activeIndex].name}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="slider-nav">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={index === activeIndex ? 'active' : ''}
          >
            {image.name}
          </button>
        ))}
      </div>
    </div>
    );
  }
  export default Slider