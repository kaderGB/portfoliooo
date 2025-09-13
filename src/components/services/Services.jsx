import React from 'react'
import "./services.css" 
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'
import ING from '../../assets/code-svgrepo-com.png'
import Workwith from './Workwith'
import UX from '../../assets/design-svgrepo-com.png'



const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>
      <h3 className="section_title1">Transforming visions into reality through technology, design, and Agile expertise.</h3>
      <div className="cards_all1">
        <div className="card_service">
          <div className="card_header">
            <h1 className='head_h1'>01.</h1>
          </div>
          <div className='card_body'>
            <h1 className='card_h1'>Software Development</h1>
            <h2 className='card_h2'>Building Your Vision, Line by Line</h2>
            <h2 className='card_h2'>I build scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js), offering full-stack development with responsive frontends, secure APIs and database architecture, and optimized code for speed and reliability.

</h2>
           
            
          </div>
        </div>

       



       <div className="card_service">
          <div className="card_header">
             <h1 className='head_h1'>02.</h1>
          </div>
          <div className='card_body'>
            <h1 className='card_h1'>UxUi Design</h1>
            <h2 className='card_h2'>Designing Intuitive, User-Centric Experiences</h2>
            <h2 className='card_h2'>I create user-centered designs through research (interviews, surveys, competitive analysis), wireframes, and interactive prototypes. I design intuitive user flows, conduct usability tests, apply design thinking, develop scalable design systems, and integrate UX into Agile workflows.</h2>
            
          </div>
        </div>




        <div className="card_service">
          <div className="card_header">
             <h1 className='head_h1'>03.</h1>
           
          </div>
          <div className='card_body'>
            <h1 className='card_h1'>IT Project Management</h1>
            <h2 className='card_h2'>Leading Projects to Success</h2>
            <h2 className='card_h2'>I lead end-to-end project lifecycles, managing planning, resources, and delivery. I collaborate with stakeholders to align on goals, mitigate risks, and implement Agile (Scrum, Kanban) for iterative progress, ensuring on-time, on-budget delivery with high quality.</h2>
            
          </div>
        </div>

 </div>





 <div className="cards_all2"> 
        <div className="card_service">
          <div className="card_header">
             <h1 className='head_h1'>04.</h1>
           
          </div>
          <div className='card_body'>
            <h1 className='card_h1'>Agile Coaching</h1>
            <h2 className='card_h2'>Empowering Agile Transformation</h2>
            <h2 className='card_h2'>I guide teams to adopt Agile principles, mentor for self-organization, and optimize workflows as a Scrum Master. I foster continuous improvement, align teams with business goals, and enhance collaboration to drive efficient, high-quality project delivery.</h2>
            
          </div>
        </div>



        <div className="card_service">
          <div className="card_header">
             <h1 className='head_h1'>05.</h1>
           
          </div>
          <div className='card_body'>
            <h1 className='card_h1'>Agile Facilitation</h1>
            <h2 className='card_h2'>Fostering Collaborative Agile Practices</h2>
            <h2 className='card_h2'>I facilitate Scrum ceremonies (sprint planning, stand-ups, retrospectives), lead workshops to build Agile mindsets, and resolve team blockers. I promote collaboration and iterative progress to boost productivity and ensure alignment with project objectives.</h2>
            
          </div>
        </div>



          <div className="card_service">
          <div className="card_header">
             <h1 className='head_h1'>06.</h1>
           
          </div>
          <div className='card_body'>
            <h1 className='card_h1'>Social Volunteering</h1>
            <h2 className='card_h2'>Driving Community Impact</h2>
            <h2 className='card_h2'>I engage in social volunteering to support community initiatives, leveraging my technical and organizational skills. I contribute to projects that promote social good, mentor aspiring professionals, and foster inclusive, collaborative environments for positive change.</h2>
            
          </div>
        </div>

        </div>

     
     
    <Workwith/>
      
    </section>
    
  )
}

export default Services
