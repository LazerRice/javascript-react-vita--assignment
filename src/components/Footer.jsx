import React from 'react'
import './Footer.css'
import fb from '../img/icons8-facebook-144.png'
import twitter from '../assets/img/icons8-twitter-144'
import instagram from '../assets/img/icons8-instagram-128'
import linkedin from '../assets/img/icons8-linkedin-138'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
          <div className="sb_footer-links_div">
            <h4> Company</h4>
            <a href='/Home>'>
              <p>About</p>
            </a>
            <a href='/Home>'>
              <p>Features</p>
            </a>
            <a href='/Home>'>
              <p>Works</p>
            </a>
            <a href='/Home>'>
              <p>Career</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4> Help</h4>
            <a href='/Home>'>
              <p>Customer Support</p>
            </a>
            <a href='/Home>'>
              <p>Delivery Details</p>
            </a>
            <a href='/Home>'>
              <p>Terms & Conditions</p>
            </a>
            <a href='/Home>'>
              <p>Privacy Policy</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4> Resources</h4>
            <a href='/Home>'>
              <p>Free eBooks</p>
            </a>
            <a href='/Home>'>
              <p>Development Tutorial</p>
            </a>
            <a href='/Home>'>
              <p>How to - Blog</p>
            </a>
            <a href='/Home>'>
              <p>Youtube playlist</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
            <h4> Links</h4>
            <a href='/Home>'>
              <p>Free eBooks</p>
            </a>
            <a href='/Home>'>
              <p>Development tutorial</p>
            </a>
            <a href='/Home>'>
              <p>How to - blog</p>
            </a>
            <a href='/Home>'>
              <p>Youtube playslist</p>
            </a>
          </div>
          <div className="sb_footer-links_div">
              <h4>Coming soon on</h4>
              <div className="socilamedia">
                <p><img scr={fb} alt=""/></p>
                <p><img scr={twitter} alt=""/></p>
                <p><img scr={instagram} alt=""/></p>
                <p><img scr={linkedin} alt=""/></p>
              </div>
          </div>
      </div>

      <hr></hr>

      <div className='sb_footer-below'>
        <div className='sb_footer-copyright'>
          <p>
             @{new DataTransfer().getFullYear()} CodeInn. © 2023 Crito - Consulting Company Inc. All Rights Reserved.
          </p>
        </div>
        <div className='sb_footer-below-links'>
          <a href="/terms"><div><p>Terms & Conditions</p></div></a>
          <a href="/terms"><div><p>Privacy</p></div></a>
          <a href="/terms"><div><p>Security</p></div></a>
        </div>
      </div>

    </div>
    </div>
  )
}

export default Footer