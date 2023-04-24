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
              <div className="footer__top-btn btn">
              Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer