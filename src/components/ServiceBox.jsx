import React from 'react'

const ServiceBox = ({title, description, url}) => {
  return (
    <div className="service-box">
      <div className='line'></div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div className='service-box-links'>
        <a className="btn-circle" href={url}><i className="fa-light fa-arrow-right"></i></a>
      </div>
    </div>
  )
}

export default ServiceBox