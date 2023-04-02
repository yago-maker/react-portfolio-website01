import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

  const data = [
    {
      avatar: AVTR1,
      name: 'Tina Snow',
      review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque repellendus vitae fugit! Sequi, ipsam adipisci vitae porro beatae ullam vel expedita nisi inventore. Officiis eius aperiam sunt sint eum?'
    },

    {
      avatar: AVTR2,
      name: 'Jina Snow',
      review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque repellendus vitae fugit! Sequi, ipsam adipisci vitae porro beatae ullam vel expedita nisi inventore. Officiis eius aperiam sunt sint eum?'
    },

    {
      avatar: AVTR3,
      name: 'Mina Snow',
      review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque repellendus vitae fugit! Sequi, ipsam adipisci vitae porro beatae ullam vel expedita nisi inventore. Officiis eius aperiam sunt sint eum?'
    },

    {
      avatar: AVTR4,
      name: 'Nina Snow',
      review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda itaque repellendus vitae fugit! Sequi, ipsam adipisci vitae porro beatae ullam vel expedita nisi inventore. Officiis eius aperiam sunt sint eum?',
    }
  ]
     
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

  
   

    <Swiper className="container testimonials_container"
        // install Swiper module
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
  {
    data.map(({avatar, name, review }, index) => {
      return (

        <SwiperSlide key={index} className='testimonials'>
        <div className='client_avatar'>
          <img src={avatar} alt="Avatar One" />
        </div>
        <h5 className='name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>
      )
    })
  }
    </Swiper>
    </section>
  )
}

export default Testimonials