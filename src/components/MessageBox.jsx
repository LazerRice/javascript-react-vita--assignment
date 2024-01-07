import React from 'react'
import './MessageBox.css'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../assets/components/Button'




const MessageBox = () => {
    const emailRegex = new RegExp (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    const[errorMessage, setErrorMessage] = useState ('')
    const form = useFormik ({

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
                    .email("You must enter a valid email")
                    .matches(emailRegex, "Invalid email"),
                message: Yup.string()
                    .required("Write your message here")
                    .min(21, "You have to write a message"),


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
        

        <form onSubmit={form.handelSubmit} className='formBox' noValidate>

            {/* Name */}
            <h2>Leave us a message for any information</h2>
            <p className="errorMessage">{errorMessage}</p>
            <div className='inputBox1'></div>
                <label>={form.errors.firstName ? form.errors.firstName : ''}</label>
                <input type="text" name="firstName" value={form.values.firstName} onChange={form.handleChange} placeholder="Name" required="required"/>



            {/* Email */}
            <div className='inputBox2'></div>
                <label>={form.errors.email ? form.errors.email : ""}</label>
                <input type="email" name="email" value={form.values.email} onChange={form.handleChange} placeholder="Email" required="required"/>


            {/* MessageField     */}
            <textarea placeholder="Your message"  ></textarea>
            <label>={form.errors.message ? form.errores.message : "Message"}</label>
            <Button text="Submit" url="/contact"/>
           
        </form>
        

</header>



  )
}

export default MessageBox