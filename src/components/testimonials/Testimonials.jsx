import React, { useEffect } from 'react'
import "./testimonials.css"
import Image1 from "../../assets/1703615197195.jpeg"
import Image3 from "../../assets/avatar-1.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Certification from './Certification'

import Aos from 'aos'
import 'aos/dist/aos.css'








const data = [
  {
    id: 1,
    image: Image1,
    title: "Issaka Maman Lourwana",
    subtitle: "Digital Transformation Advocate | Founder of Digital Niger | Data-Driven Innovation",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },

  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },

  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 2,
    image: Image3,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
  },
];





const Testimonials = () => {
   useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='testi' id="testi" data-aos="fade-left">
      <section className='testimonials container section'>
        <h2 className="section_title">Clients & Reviews</h2>
        <Swiper className="testimonials_container grid"  
        modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      grabCursor={true}
        >
          {data.map(({id, image, title,subtitle, comment })=>{
              return(
                <SwiperSlide className="testimonial_item" key={id}>
                  <div className="thumb">
                    <img src={image} alt=""  className='testi_img'/>
                  </div>
                  <h3 className="testimonials_title">{title}</h3>
                  <span className="subtitle">{subtitle}</span>
                  <div className="comment">{comment}</div>
                </SwiperSlide>
              )
          })}
        </Swiper>
      </section>
      <Certification/>
    </div>
  )
}

export default Testimonials
