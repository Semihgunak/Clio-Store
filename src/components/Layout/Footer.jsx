import React from 'react'
import "./Footer.css"
import logo from "/images/logo-flooter.png";
import navIcon1 from "/images/nav-icon1.svg";
import navIcon2 from "/images/nav-icon2.svg";
import navIcon3 from "/images/nav-icon3.svg";




const Footer = () => {
  return (
  <footer className="footer">
    <div className='container'>
      <ul className="align-items-center">
        <li>
          <img height={80} src={logo} alt="logo" />
        </li>
        <li className="text-center text-sm-end">
          <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="Icon" /></a>
            <a href="#"><img src={navIcon2} alt="Icon" /></a>
            <a href="#"><img src={navIcon3} alt="Icon" /></a>
          </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer