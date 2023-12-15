import React from 'react'

const OurServices = () => {
  return (
    <section className="service-section">
        <img className="background-lines-right" scr="img/background-lines-right.svg" alt=""/>
        <div className="container">
            <div className="section-title">Our Services</div>
            <h2>We provice the best consulting services</h2>
            <div className="service-boxes">
                <ServiceBox/>
                <ServiceBox/>
            </div>
            <div className="browser-services">
                <a className="btn-outline-dark" href="#">Browse Services <i className="fa-solid fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
    
  )
}

export default OurServices