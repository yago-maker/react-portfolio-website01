import React from 'react'
import './experience.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Experience() {
  return (
    <section id='experience'>
         <h5>What Skills i Have</h5>
         <h2> My Expericence</h2>

         <div className='container experience_container'>
          <div className='experience_frontend'>
            <h3>Experience FrontEnd</h3>
               <div className="experience_content">
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                 <div>
                 <h4>JavaScript</h4>
                 <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                 <div>
                 <h4>React</h4>
                 <small className='text-light'>Experienced</small>
                 </div>
                </article>
               </div>
          </div>

             {/*---------------END OF FRONTEND ---------------*/}

          <div className='experience_backend'>
          <h3>Experience BackEnd</h3>
          <div className="experience_content">
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>Python</h4>
                   <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience_details'>
                  <AiOutlineCheck/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                  
                </article>
               </div>
          </div>
         </div>
    </section>
  )
}

export default Experience
