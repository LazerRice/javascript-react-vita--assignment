import React from 'react'
import './Button.css'

const Button = ({text,url}) => {
  return (
    <a className='btn-theme' href={url}>
        {text}
        <i className='fa-solid fa-arrow-up-right'></i>
    </a>
  )
}

export default Button