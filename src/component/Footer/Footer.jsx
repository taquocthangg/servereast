import React from 'react'
import './Footer.css'
import backgroundFooter from '../../img/logo/ctabg.png'
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
              <div className="footer__top-btn btn">
              Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__mid">
        <ul className="footer__ul">
          <li className="li__active">Choose.</li>
          <li>Shared Hosting</li>
          <li>Reseller Hosting</li>
          <li>Cloud Managed VPS</li>
          <li>Managed Dedicated Servers</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer