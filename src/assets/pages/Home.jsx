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
    <h1>Home</h1>
   </main>
   <Footer/>
    
  </div> 
  )
}

export default Home