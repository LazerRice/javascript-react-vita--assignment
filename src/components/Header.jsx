import React from 'react'
import './Header.css'
import {NavLink, Link }  from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
          <Link to="/">< img src="./img/Logo.jpg"/></Link>
            <button className="menu-bars"><i className="fa-solid fa-bars-staggered"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-info">
                        <div className="content-box">
                            <i className="fa-solid fa-phone"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-solid fa-envelope"></i>
                            Info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 Stockholm
                        </div>
                    </div>
                    <div className="social-media"> 
                        <a href="https://www.facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://twitter.com/?lang=sv" target="_blank"><i className="fa-brands fa-twitter"></i></a>
                        <a href="https://se.linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                 </div>
                    <div className="main-menu">
                     <nav>
                        <li><NavLink to ="/">Home</NavLink></li>
                        <li><NavLink to ="/services">Services</NavLink></li>
                        <li><NavLink to ="/news">News</NavLink></li>
                        <li><NavLink to ="/contact">Contact</NavLink></li>
                     </nav>
                     <a className="btn-theme btn-login" href="login.html">Login<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <img src="bilder/background-lines.svg" alt=""/>
            </div>        
        </div>   
    </header>

    
    
  )
}

export default Header