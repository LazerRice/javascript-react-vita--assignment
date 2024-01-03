import React from 'react'
import './MessageBox.css'



const MessageBox = () => {
  return (

    <header>
        <div className="contactForm">
            <div className="container-message">
             <div className="message-board">
                <form>
                    <h2>Leave us a message for any information.</h2>
                    <div className="inputBox">
                        <input type="text" placeholder="Name" name="" required="required"/>
                    </div>
                    <div className="inputBox">
                        <input type="text" placeholder="Email" name="" required="required"/>
                    </div>
                    <div className="inputBox">
                        <textarea required="required" placeholder="Type your message..."></textarea>
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value="Send"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <section className="map">
            <img src="bilder/maplocation.png" alt=""/>
    </section>
</header>
  )
}

export default MessageBox