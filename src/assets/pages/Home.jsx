import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Showcase from '../../components/Showcase'





const Home = () => {
  return (
  <div className='cover'>
    <Header/>
    <Showcase/>
   <main>
    <img src="./img/Logos.png"/>
   </main>
   <Footer/>
    
  </div> 
  )
}

export default Home