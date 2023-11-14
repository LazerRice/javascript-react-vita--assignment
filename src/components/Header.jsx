import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">Services</NavLink>
      <NavLink to="/">News</NavLink>
      <NavLink to="/">Contacts</NavLink>
      
    </nav>
  )
}

export default Header