import React, {useState } from 'react'
import '../App.css'
import '../pages/project/sections.css' 
import ScrollToTop from "../scrollToTop"; 
import Contacts from "../components/images/contact.png"

export default function Contact() {

    const[message,setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <>
        <ScrollToTop />
        <div id="contact" className='contactsection'>
            <div className='contactRow'>
                <div className='contactleftColumn'>
                    <img src={Contacts} className="image" />
                </div>
                <div className='contactrightColumn'>
                    <h1 className='contactTitle'>Contact Me</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name='email' placeholder="  Email"/>
                        <textarea name='message' placeholder="  Message"></textarea>
                        <button className="sendbutton" type="submit">Send</button>
                        {message && <span> Thanks for contacting me!</span>}
                   </form>
                </div>
            </div>
        </div>

        <div className="contactwrapper">        
        <div id="contact" className='contactsection'>
            <h2 className='contactSubTitle'>Contact Details</h2>
            <p className='SmallSpacing' />
            <p className='contactSubTitle'> <i className='fa fa-phone' />  Phone : +62 89638303065</p>
            <p className='SmallSpacing' />
            <p className='contactSubTitle'> <i className='fa fa-inbox' />  Email : ivanparmenas@gmail.com </p>
            <p className='SmallSpacing' />
        </div>
        <div id="contact" className='contactsection'>
            <p className='contactSubTitle'> Social Media </p>
            <p className='contactSubTitle'>
                <i className='fab fa-line' /> Line : ivannathanparmenas
            </p>
            <p className='contactSubTitle'>
                <i className='fab fa-instagram' /> Instagram: ivan_nathan1
            </p>
        </div>
    </div>

           
    
    </>
    );
}