import React, { useState } from 'react'
import './Header.css'
import Logo from '../../img/logo/logo.png'
export const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <div className="header">
        <img src={Logo} alt="" className="header__img" />
        <ul className={click ? "header__ul active" : "header__ul"}>
          <li className="header__item header__item-active">HOME <i class="header__icon fa-solid fa-caret-down"></i>
            <ul className="header__home">
              <li>HOME IMAGE SLIDER</li>
              <li>HOME VIDEO HEADER</li>
              <li>HOME REVOLUTION SLIDER</li>
              <li>SUPPORT STICKY HEADER</li>
            </ul>
          </li>
          <li className="header__item header__item-active ">HOSTING <i class="header__icon fa-solid fa-caret-down"></i>
            <ul className="header__home">
              <li>SHARED HOSTING</li>
              <li className="header__item-active">CLOUD VPS  <i class="header__icon fa-solid fa-caret-down"></i>
                <ul className="header__VPS">
                  <li>CLOUD VPS 3 PLAN5</li>
                  <li>CLOUD VPS 5 PLAN5</li>
                  <li>CLOUD VPS 6 PLAN5</li>
                </ul>
              </li>
              <li>DEDICATED</li>
            </ul>
          </li>
          <li className="header__item header__item-active">PAGES <i class="header__icon fa-solid fa-caret-down"></i>
            <ul className="header__home">
              <li>ABOUT</li>
              <li>LOGIN</li>
              <li>DATACENTER</li>
              <li>FAQS</li>
              <li>ELEMENTS</li>
            </ul>

          </li>
          <li className="header__item">DOMAINS</li>
          <li className="header__item header__item-active">BLOG <i class="header__icon fa-solid fa-caret-down"></i>
            <ul className="header__home">
              <li>CATEGORY</li>
              <li>SINGLE</li>

            </ul>
          </li>
          <li className="header__item">CONTACT</li>
        </ul>
      <div className="nav-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      </div>
    </div>
  )
}
