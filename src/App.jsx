//Oj vad jag har haft det svårt att förstå JavaScript och detta program. Har startat om flera gånger då min sida bara blir vit efter ett tag 
// och jag inte listat ut vart jag har lagt fel komponet någonstans.  Det är därför mitt projekt inte är klart. Hade kommit kanske långt innan jag fick problem och bestämmde mig för att 
// börja om. Och nu är jag lite fastnat. Jag siktar på att göra komplettering. 
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Contacts from './pages/Contacts'

import React, {useState} from 'react';

import { ReactComponent as Peace } from './icons/Troll-Face';
import { ReactComponent as Mask } from './icons/anonymous-face-mask';
import { ReactComponent as Gurnface } from './icons/Gurnface';
import { ReactComponent as Okej } from './icons/Untitled-1';
import { ReactComponent as House } from './icons/bb-home-';
import { ReactComponent as Tree } from './icons/xmas01';
import { ReactComponent as Coffee } from './icons/pitr_Coffee_cup_icon';
import { ReactComponent as Bullish } from './icons/bullish';







function App() {
  return (
   <NavBar>
      <NavItem icon= {<Peace/>} />
      <NavItem icon= {<Mask/>} />
      <NavItem icon= {<Gurnface/>} />

      <NavItem icon= {<Okej/>} />
        <DropdownMenu/>
      <NavItem/>
   </NavBar>
   
  );
}

function DropdownMenu () {

  function DropdownItem(props) {
    return (
        <a href="#" className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>

          {props.children}

          <span className="icon-right">{props.rightIcon}</span>

        </a>
    );
  }

  return (
    <div className="dropdown">
          <DropdownItem>My profile</DropdownItem>
          <Dropdownitem>
            leftIcon={<Coffee/>}
            rightIcon={<Bullish/>}

          </Dropdownitem>
    </div>
  );
}

function NavBar(props) {
  return (

    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen]= useState(false);
  return(
    <li className="nav-item"> 
      <a href='#' className="icon-button" onClick={()=> setOpen(!open)}>
        {props.icon}

      </a>
      {open && props.children}
    </li>
  );
}
export default App



