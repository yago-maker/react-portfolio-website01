import React from 'react'
import './contacts.css'
import {MdEmail} from  'react-icons/md'
import {BsMessenger} from  'react-icons/bs'
import {FaWhatsapp} from  'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5e7os1r', 'template_iiesz6m', form.current, '69gLqwjaYJfl_UKI3')

    e.target.reset()
   
  };
  

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
         <div className="contact_options">
            <article className="contact_option">
              <MdEmail className='contact_option-icon'/>
               <h4>Email</h4>
               <h5>yagopsantos1994@gmail.com</h5>
               <a href="mailto:yagopsantos1994@gmail.com" target= "_blank">Send a menssage</a>
            </article>
            <article className="contact_option">
              <BsMessenger className='contact_option-icon'/>
               <h4>Messeger</h4>
               <h5>DevMaker</h5>
               <h5>yagopsantos1994@gmail.com</h5>
               <a href="https://m.me/yago.kira" target="_blank">Send a menssage </a>
            </article>
            <article className="contact_option">
              <FaWhatsapp className='contact_option-icon'/>
               <h4>WhatsApp</h4>
               <h5>+5531995555516</h5>
               <a href="https://api.whatsapp.com/send?phone+5531995555516" target="_blank">Send a menssage</a>
            </article>
         </div>

                {/* END OF CONTACT OPTIONS */}

         <form action={form} onSubmit={sendEmail}>

          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name='message' id='' rows="7" placeholder='Your Messa' required>
          </textarea>
          <button type='submit' className='btn'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact