import "./Navbar.css";
import {useRef} from "react"
import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar () {
  const navRef = useRef();

  const showNavbar = ()=> {
      navRef.current.classList.toggle("responsive_nav");
  }

    return (
      <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
          <a href='/#'>Home</a>
          <a href='/#'>Services</a>
          <a href='/#'>News</a>
          <a href='/#'>Contacts</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes/>
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
      </header>
       )
}

export default Navbar