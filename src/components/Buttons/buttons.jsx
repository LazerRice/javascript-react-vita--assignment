import React from 'react'
import '../Buttons/buttons.css'

const buttons = ({ text, url }) => {
  return (
    <a className="btn-theme" href={url}>
        {text}
        <i className="fa-solid fa-arrow-up-right"></i>
    </a>

  )
}

export default buttons