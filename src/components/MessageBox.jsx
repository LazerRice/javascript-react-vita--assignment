import React from 'react'
import './MessageBox.css'




const MessageBox = () => {
  return (

<header>   
        <div className="container-contact" >
            <div className="box">
            <div className="icon"><i className="fa-solid fa-location-dot"></i></div>
            <h3>Visit us</h3>
            <p>Sveavägen 31 111 34 STOCKHOLM</p>
         </div>
        <div className="box">
            <div className="icon"><i className="fa-solid fa-phone"></i></div>
            <h3>Call us</h3>
            <p>+46 (8) 121 470 50
                +46 (8) 121 470 51</p>
        </div>
            <div className="box">
            <div className="icon"><i className="fa-solid fa-envelope"></i></div>
            <h3>Email us</h3>
            <p>info@crito.com support@crito.com</p>
        </div>
         </div>
        
    
        <form className='formBox' noValidate>
            <h2>Leave us a message for any information</h2>
            <div className='inputBox1'></div>
                <input type="text" placeholder="Name" name="" required="required"/>
            <div className='inputBox2'></div>
                <input type="text" placeholder="Email" name="" required="required"/>
            <textarea placeholder="Your message"></textarea>
        </form>
        

</header>



  )
}

export default MessageBox