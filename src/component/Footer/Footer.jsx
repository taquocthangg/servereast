import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="footer__top">
        <div className="container">
          <div className="footer__top-wrapper">
            <div className="footer__top-icon">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-vimeo-v"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-instagram"></i>
            </div>
            <div className="footer__top-submit">
              <label htmlFor="1">
                <input type="text" name="" id="" placeholder='Subscribe to our newsletter' />
              </label>
              <button className="footer__top-btn btn">
              Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__mid">
        <ul className="footer__ul">
          <p className="p__active">Choose.</p>
          <li>Shared Hosting</li>
          <li>Reseller Hosting</li>
          <li>Cloud Managed VPS</li>
          <li>Managed Dedicated Servers</li>
        </ul>
        <ul className="footer__ul">
          <p className="p__active">Get Support.</p>
          <li>Contact Us</li>
          <li>Knowledge Base</li>
          <li>Submit a Ticket</li>
          <li>Announcement</li>
        </ul>
        <ul className="footer__ul">
          <p className="p__active">Start.</p>
          <li>WordPress Hosting</li>
          <li>Joomla Hosting</li>
          <li>Magento Hosting</li>
          <li>Drupal Hosting</li>
        </ul>
        <ul className="footer__ul">
          <p className="p__active">Ask.</p>
          <button className="btn btn__footer"> <i className="fa fa-comment"></i> LIVE CHAT</button>
         <button className="btn btn__footer"> <i className="fa fa-phone"></i> +1.186.704.2263</button>
         <button className="btn btn__footer"><i className="fa fa-envelope"></i>  E-MAIL US</button>
        </ul>
      </div>
      <div className="footer__top">
        <p>©2017 All reserved. Develop by <span>Oceanthemes</span></p>
      </div>
    </footer>
  )
}

export default Footer