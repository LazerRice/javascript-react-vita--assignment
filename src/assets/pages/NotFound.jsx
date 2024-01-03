import React from 'react'
import Footer from '../../components/Footer'



const NotFound = () => {
  return (
    <div className='cover'>
    <main>
      <section className='notfound-sec'>
      <h1>404 Page not found</h1>
      <p> Unable to find the page.</p>
      <img src="./img/404monkey.jpg"/>
      <Footer/>
      </section>
    </main>
   
    </div>
  )
}

export default NotFound