import React from 'react'
import '../components/Showcase.css'
import showcaseimg from '../img/showcase-image.svg'
import Button from './Buttons/buttons'

const Showcase = () => {
  return (
      <div>
              <h4> We Provide The Best Business Solutions </h4>
              <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
      <img src={showcaseimg} alt=""/>
            <div className="button-links">
                <Button text="Get Consulting" url="service/get-consulting"/>
                <Button text="Learn more" url="service/get-consulting"/>
            </div>
      </div>
    
  )
}

export default Showcase