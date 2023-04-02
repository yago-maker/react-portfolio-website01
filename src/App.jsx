import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from '../src/components/About/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'
import Contacts from './components/contacts/Contact'

const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Portfolio/>
   <Testimonials/>
   <Contacts/>
   <Footer/>
   </>
  )
}

export default App
