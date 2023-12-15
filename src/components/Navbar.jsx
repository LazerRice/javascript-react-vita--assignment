import React from 'react'
import { Link } from "react-router-dom"
import {NavLink} from "react-router-dom"
import { useState } from 'react'
import img from '../img/Logo.jpg'

import "./Navbar.css"

import Button from '../components/Buttons/buttons'

const Navbar = () => {
    const [menuOpen, setMenuopen] =useState(false)

  return (
    <nav>
        <Link to="/" className="titel">
            <img src={img} alt=""/>
        </Link>
        <div className="menu" onClick={() =>{ 
            setMenuopen(!menuOpen)

             }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""} >
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
            <li>
                 <NavLink to="/news">News</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
           
        </ul>
        <Button text="Login" url="/login"/>
    </nav>
    
  )
}

export default Navbar