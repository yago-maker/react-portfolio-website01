import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/nice.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
       <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Yago Santos</h1>
        <h5 className="text-ligth">
           Fullstack Developer
        </h5>
       <CTA />
       <HeaderSocials />
       <div className="me">
        <img src={ME} alt="ME" />
       </div>
       <a href="#contact" className='scroll_down'>scrooll Down</a>
       </div>
    </header>
  )
}

export default Header