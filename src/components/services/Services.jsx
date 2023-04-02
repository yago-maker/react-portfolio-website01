import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id='services'>
      
        <h5>What I Offer</h5>
        <h2>Services</h2>

        
        <div className='container services_container'>
          <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

            <ul className='service_list'>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>

          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
            </ul>
          </article>

             {/* WEB DEVELOPMENT */}

          <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>

            <ul className='service_list'>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>

          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
            </ul>
          </article>
                 

                   {/* CONTENT CREATION */}
             
                 
          <article className='service'>
            <div className="service_head">
              <h3>Content creation</h3>
            </div>

            <ul className='service_list'>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>

          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
          <li>
            <AiOutlineCheck className='service_list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore perspiciatis, a earum </p>
          </li>
            </ul>
          </article>
        </div>
    </section>
  )
}

export default Services