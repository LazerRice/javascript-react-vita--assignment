import React from 'react'
import './MessageBox.css'
import { useState } from 'react'
import {useFormik} from 'react'
import * as Yup from 'yup'




const MessageBox = () => {
    const[errorMessage, setErrorMessage] = useState ('')
    const from = useFormik ({

        initialValues: {
            firstName: '',
            email: '',
            message: '',

        },

        validationSchema: Yup.object( {
                firstName: Yup.string()
                    .required("You must enter a name")
                    .min(2, "The name must have atlesat 2 characters"),
                email: Yup.string()
                    .required("Please enter your email")
                    .email("You must enter a valid email"),

        }),

        onSubmit:(values) => { 
            console.log(values) 
        } 

   
    })

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
        

        <form onSubmit={from.handelSubmit} className='formBox' noValidate>

            {/* Name */}
            <h2>Leave us a message for any information</h2>
            <p className="errorMessage">{errorMessage}</p>
            <div className='inputBox1'></div>
                <label>={from.errors.firstName ? form.errors.firstName : 'Firstname'}</label>
                <input type="text" name="firstName" value={from.values.firstName} onChange={from.handelChange} placeholder="Name" required="required"/>



            {/* Email */}
            <div className='inputBox2'></div>
                <input type="email" name="email" value={from.values.email} onChange={from.handelChange} placeholder="Email" required="required"/>


            {/* MessageField     */}
            <textarea placeholder="Your message"></textarea>

            <button type="submit"> Send your message </button>
        </form>
        

</header>



  )
}

export default MessageBox