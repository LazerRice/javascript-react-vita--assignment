import React from 'react'
import './Showcase.css'

import showcaseimg from '../assets/img/manglassesread.svg'



const Showcase = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <h1> We provide The Best business Solitions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <img className="showcaseglass" scr={showcaseimg} alt=""/>
            <a className="btn-theme btn-login" href="#">Get consulting <i className="fa-solid fa-arrow-right"></i></a>
            <a className="btn-theme btn-login" href="#">Learn more<i className="fa-solid fa-arrow-right"></i></a>
            
        </div>
        
    </div>
</section>

  )
}

export default Showcase