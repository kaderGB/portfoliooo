import React from 'react'
import "./home.css"
import Me from '../../assets/modelpic.png'
import Social from './Social'
import Scrolldown from './Scrolldown'
import Shapes from './Shapes'


const Home = () => {
  return (
    <div id="main_home">
      <section className='home container' id="home">
        <div className="intro">
          <img src={Me} alt="" className="home_img" />
        
          <h1 className="home_name">KADER ISSA GOULBI</h1>
          <span className="home_education">Project Manager, UxUi Designer & Software Engineer</span>
          <br/>
          <span className="experience">Available</span> <i class="fa-solid fa-circle-notch fa-spin ic" ></i>

          <Social/>

          <button  className="btn" id="#contact">Hire Me</button>
          <Scrolldown/>
        </div>
          <Shapes/>
          
      </section>
    </div>
  )
}

export default Home
