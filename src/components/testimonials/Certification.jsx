import React from 'react'
import Metal from '../../assets/metal.png'

const Certification = () => {
  return (
    <section className='certification container section' id="certification">
        <h2 className="section_title">Certifications</h2>
        <div className="certi_items">
        <div id='certi_list'>
            <div id='certi'></div>
            <img src={Metal} alt="" id='metal_img'/>
            <h1 className='certi_h1'>Certification Google Agile Project Management</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Metal} alt="" id='metal_img'/>
            <h1 className='certi_h1'>Scrum master Certification</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Metal} alt="" id='metal_img'/>
            <h1 className='certi_h1'>Certification Meta Principles of UX/UI Design</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Metal} alt="" id='metal_img'/>
            <h1 className='certi_h1'>Certification Meta Version Control </h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Metal} alt="" id='metal_img'/>
            <h1 className='certi_h1'>Certification Meta React Basics</h1>
        </div>


          <div id='certi_list'>
            <div id='certi'></div>
            <img src={Metal} alt="" id='metal_img'/>
            <h1 className='certi_h1'>Certification Meta Programming javascript</h1>
        </div>

        </div>
        </section>
  )
}

export default Certification
