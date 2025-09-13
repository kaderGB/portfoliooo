import React from 'react'

const Aboutbox = () => {
  return (
    <div className='about_boxes grid'>
      <div className="about_box">
        <i className="about_icon fa-solid fa-fire-flame-curved icon_a" ></i>

        <div>
            <h3 className="about_title">24</h3>
            <span className="about_subtitle">Project completed</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon fa-solid fa-mug-hot i1"></i>

        <div>
            <h3 className="about_title">1432</h3>
            <span className="about_subtitle">Cup of coffee</span>
        </div>
      </div>

      <div className="about_box">
        <i className="about_icon fa-solid fa-users"></i>

        <div>
            <h3 className="about_title">56</h3>
            <span className="about_subtitle">Satisfied clients</span>
        </div>
      </div>


       <div className="about_box">
        <i className="about_icon fa-solid fa-certificate"></i>

        <div>
            <h3 className="about_title ">12</h3>
            <span className="about_subtitle">Certifications</span>
        </div>
      </div>
    </div>
  )
}

export default Aboutbox
