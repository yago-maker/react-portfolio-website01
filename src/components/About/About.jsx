import React from 'react'
import './about.css'
import ME from '../../assets/perfilabout.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About me</h2>

        <div className='container about_container'>
            <div className='about_me'>
              <div className='about_me-image'>
                  <img src={ME} alt="About image"/>
              </div>
            </div>
            <div className='about_content'>
              <div className='about_cards'>
                    <article className='about_card'>
                      <BsAward className='about_icon'/>
                      <h5>Experience</h5>
                      <small>3+ Years Working</small>
                    </article>
                    <article className='about_card'>
                      <FiUsers className='about_icon'/>
                      <h5>Clients</h5>
                      <small>3200 + Worldwide</small>
                    </article>
                    <article className='about_card'>
                      <AiFillFolderOpen className='about_icon'/>
                      <h5>Projects</h5>
                      <small>80+ Completed</small>
                    </article>
              </div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore iure, culpa quia repellat perspiciatis earum dolore nam laboriosam quaerat quas nihil rem! Cumque recusandae enim ad magni, modi accusantium dolorem.
              </p>
                <a href="#contact" className='btn'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About