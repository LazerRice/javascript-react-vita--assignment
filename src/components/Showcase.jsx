import React from 'react'
import './Showcase.css'

import Button from '../assets/components/Button'




const Showcase = () => {
  return (
    <section className="showcase">
    <div className="container">
        <div className="content">
            <h1> We provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <img src="./img/manglassesread.svg"/>
              <Button text="Get Consulting" url="/contact"/>
              <Button text="Learn More" url="/contact"/>
        </div>
        <div className='sponserbar'>
          <img src="./img/Logos.png"/>
     </div>
    </div>
</section>

  )
}

export default Showcase