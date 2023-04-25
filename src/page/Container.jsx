import React from 'react'
import '../css/container.css'
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
                  <p>STARTING FROM</p>
                  <span>$9</span>
                  <p> PER MONTH</p>
                </div>
                <p>Personal use</p>
                <p className="container2__p-active">Unlimited projects</p>
                <p>24/7 support</p>
                <p className="container2__p-active">Personal use</p>
                <p>Unlimited projects</p>
                <p className="container2__p-active">24/7 support</p>
                <div className="container2__btn">
                  <div className="btn">COMPARE4 PLANS</div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Container