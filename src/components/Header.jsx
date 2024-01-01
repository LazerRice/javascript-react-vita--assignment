import React from 'react'
import Logo from '../img/Logo-png-test.png'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
      <div className='container'>
        <a href="home.html" >< img className="logotype" scr={Logo} alt ="" /></a>
        <nav>
          <ul>
              <li><NavLink to ="/">Home</NavLink></li>
              <li><NavLink to ="/services">Services</NavLink></li>
              <li><NavLink to ="/news">News</NavLink></li>
              <li><NavLink to ="/contacts">Contacts</NavLink></li>
          </ul>
        </nav>
      </div>
    
    
  )
}

export default Header