import React from 'react'
import './Footer.css'
import fb from '../img/facebook.png'
import twitter from '../img/twitter.png'
import insta from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import logo from '../img/logofooter.png'



const Footer = () => {
  return (
    <div className="footer">
    <div className="sb_footer section_padding">
        <div className="sb_footer-links">
              <div className="sb_footer-links_div">
                <img src={logo} alt=""/> 
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat obcaecati voluptas voluptates! 
                Voluptates laborum nam ratione minus necessitatibus, iure praesentium.
                </p>
            </div>
            <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="/">
                    <p>About</p>
                </a>
                <a href="/">
                    <p>Features</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="/">
                    <p>About</p>
                </a>
                <a href="/">
                    <p>Features</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="/">
                    <p>About</p>
                </a>
                <a href="/">
                    <p>Features</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>Company</h4>
                <a href="/">
                    <p>About</p>
                </a>
                <a href="/">
                    <p>Features</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
                <a href="/">
                    <p>Works</p>
                </a>
            </div>
            <div className="sb_footer-links_div">
                <h4>SocialMedia</h4>
                <div className="socialmedia">
                    <p><img scr={fb} alt=""/></p>
                    <p><img scr={twitter} alt=""/></p>
                    <p><img scr={linkedin} alt=""/></p>
                    <p><img scr={insta} alt=""/></p>
                </div>
            </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Crito. All right reserved
                </p>
            </div>
            <div className="sb_footer-below-links">
                <a href="/terms"><div><p>Terms & conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>



            </div>

        </div>
    </div>
</div>
  )
}

export default Footer