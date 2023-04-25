import React from 'react'
import '../css/container.css'
import Hinh1 from '../img/container/Hinh1.png'
import Hinh2 from '../img/container/Hinh2.png'
import Hinh3 from '../img/container/Hinh3.png'
import Hinh4 from '../img/container/Hinh4.png'
const Container = () => {
  return (
    <div>
        <div className="container1">
            <div>
            <div className="container1_wrap">
            <div className="container1_wrap1">GET <span>30%</span>OFF</div>
            <div className="container1_wrap2">
                <h2>GET STARTING TODAY</h2>
                <p>by register a domain name</p>
            </div>
            </div>
            <form action="" className="container1__form">
                <input type="text" className="container1__input" placeholder="Enter your domain..."/>
                <button className="btn container1__btn">SEARCH</button>
            </form>
            </div>
         </div>
         <div className="container2__text-wrap">
            <div className="container2__text">
              <h2>Most Popular Hosting Plans</h2>
              <p className="des">Opportunity organization think tank, non-partisan fundraising campaign social responsibility</p>
            </div>
          </div>
         <div className="container2">
            <div className="container2__list">
                <h2>Shared Hosting</h2>
                <div className="container2__item">
                  <h3>STARTING FROM</h3>
                  <span>$9</span>
                  <h3> PER MONTH</h3>
                </div>
                <p>Personal use</p>
                <p className="container2__p-active">Unlimited projects</p>
                <p>24/7 support</p>
                <p className="container2__p-active">Personal use</p>
                <p>Unlimited projects</p>
                <p className="container2__p-active">24/7 support</p>
                <div className="container2__btn-wrap">
                  <div className="btn container2__btn">COMPARE PLANS</div>
                </div>
            </div>
            <div className="container2__list">
                <h2>Reseller Hosting</h2>
                <div className="container2__item">
                  <h3>STARTING FROM</h3>
                  <span>$18</span>
                  <h3> PER MONTH</h3>
                </div>
                <p>Personal use</p>
                <p className="container2__p-active">Unlimited projects</p>
                <p>24/7 support</p>
                <p className="container2__p-active">Personal use</p>
                <p>Unlimited projects</p>
                <p className="container2__p-active">24/7 support</p>
                <div className="container2__btn-wrap">
                  <div className="btn container2__btn">ORDER NOW</div>
                </div>
            </div>
            <div className="container2__list container2__list-active">
                <h2 >Cloud VPS</h2>
                <div className="container2__item">
                  <h3>STARTING FROM</h3>
                  <span>$37</span>
                  <h3> PER MONTH</h3>
                </div>
                <p>Personal use</p>
                <p className="container2__p-active">Unlimited projects</p>
                <p>24/7 support</p>
                <p className="container2__p-active">Personal use</p>
                <p>Unlimited projects</p>
                <p className="container2__p-active">24/7 support</p>
                <div className="container2__btn-wrap">
                  <div className="btn container2__btn">LEARN MORE</div>
                </div>
            </div>
            <div className="container2__list">
                <h2>Dedicated Servers</h2>
                <div className="container2__item">
                  <h3>STARTING FROM</h3>
                  <span>$126</span>
                  <h3> PER MONTH</h3>
                </div>
                <p>Personal use</p>
                <p className="container2__p-active">Unlimited projects</p>
                <p>24/7 support</p>
                <p className="container2__p-active">Personal use</p>
                <p>Unlimited projects</p>
                <p className="container2__p-active">24/7 support</p>
                <div className="container2__btn-wrap">
                  <div className="btn container2__btn">ORDER NOW</div>
                </div>
            </div>
         </div>
         <div className="container2__text-wrap">
            <div className="container2__text">
              <h2>A few <i class="fa fa-heart"></i> lovely stats</h2>
              <p className="des">Synthesize inclusive capitalism, global health clean water grantees nonprofit equal opportunity.</p>
            </div>
          </div>
          <div className="container4">
            <img src={Hinh1} alt="" />
            <img src={Hinh2} alt="" />
            <img src={Hinh3} alt="" />
            <img src={Hinh4} alt="" />
          </div>
    </div>
  )
}

export default Container