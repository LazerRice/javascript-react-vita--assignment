import React from 'react'
import './MessageBox.css'
import {useState } from 'react-router-dom'




const MessageBox = () => {
    const[firstName, setFirstName] = useState('')
    const[firstNameError, setFirstNameError] = useState ('false')
    const[email, setEmail] = useState('')
    const[firstEmailError, setEmailError] = useState ('false')
    const[errorMessage, setErrorMessage] = useState ('')
    

    const handelChange = (e) =>{
        console.log(e.traget.type)

        switch (e.target.name){
            case 'firstName':
                setFirstName(e.traget.value)
                setFirstNameError(validateLength(e.target.value, 1))
                break
            case 'email':
                setEmail(e.traget.value)
                setEmailError(validateLength(e.target.value, 3))
                break
        }


    }
    const validateLength = (value, minLength=1) => {
        if (value.length < minLength)
            return true
        return false
    }


    const handelSubmit = (e) => {
        e.preventDefault()
    }

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
        

        <form onSubmit={handelSubmit} className='formBox' noValidate>

            {/* Name */}
            <h2>Leave us a message for any information</h2>
            <p className="errorMessage">{errorMessage}</p>
            <div className='inputBox1'></div>
                <label className={`${firstNameError ? 'error':''}`}>{`Firstname ${firstNameError ? ' måste ange':'' }`}</label>
                <input type="text" name="firstName" value={firstName} onChange={(e) => handelChange(e)} placeholder="Name" required="required"/>



            {/* Email */}
            <div className='inputBox2'></div>
                <input type="email" name="email "value={email} onChange={(e) => handelChange(e)} placeholder="Email" required="required"/>


            {/* MessageField     */}
            <textarea placeholder="Your message"></textarea>

            <button type="submit"> Send your message </button>
        </form>
        

</header>



  )
}

export default MessageBox