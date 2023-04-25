import React from 'react'
import '../css/main.css'
import '../css/home.css'
import icon from '../img/content/rocket.png'
import icon1 from '../img/content/ssd.png'
import icon2 from '../img/content/secure.png'

const Home = () => {
  return (
    <div>
      <div className="container">
        <section className='feature '>
          <div className="feature__name name">
          We guarantee our commitment to quality
          </div>
          <div className="feature__title des">
          Philanthropy think tank, approach Martin Luther King Jr., agency
          </div>
          <div className="feature__box-wrapper">
            <div className="feature__box">
              <div className="feature__box-img">
                <img src={icon} alt="" />
              </div>
              <div className="feature__box-name name">
              Your Website Faster
              </div>
              <div className="feature__box-des des">
              Sustainable, liberal facilitate change movements outcomes Millennium Development Goals.
              </div>
            </div>
            <div className="feature__box">
              <div className="feature__box-img">
                <img src={icon1} alt="" />
              </div>
              <div className="feature__box-name name">
              SSD Drives
              </div>
              <div className="feature__box-des des">
              John Lennon, involvement Gandhi, working alongside cornerstone. Arab Spring; honesty save lives think.
              </div>
            </div>
            <div className="feature__box">
              <div className="feature__box-img">
                <img src={icon2} alt="" />
              </div>
              <div className="feature__box-name name">
              Highest Data Security
              </div>
              <div className="feature__box-des des">
              Respond our grantees and partners, youth, fight against malnutrition experience in the field detection.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home