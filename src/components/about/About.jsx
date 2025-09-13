import React from 'react'
import "./about.css"
import Me from '../../assets/modelpic.png'
import Aboutbox from './Aboutbox'
import Techstack from '../about/Techstack'

const About = () => {
  return (
    <section className='about container section' id="about">
      <h2 className="section_title">About Me</h2>
      <p className='p_about'>Hello! I'm Kader, a passionate software engineer, UX/UI designer, and IT project manager with over 8 years of experience blending code, creativity, and strategy to build impactful digital solutions. My journey started in the trenches of coding, where I fell in love with turning complex problems into elegant, scalable software. Along the way, I discovered the magic of user-centered design—crafting intuitive interfaces that make technology feel effortless and human. Now, as a project manager, I orchestrate teams to deliver projects on time, under budget, and with a focus on real-world results.</p>
<p className='p_about'>What drives me? Empathy and efficiency. I emphasize understanding users deeply, whether through wireframes, prototypes, or data-driven iterations, to create products that not only work but delight.</p>
  <p className='p_about'> My process is collaborative and iterative: I start with discovery—listening to stakeholders and users—then dive into design and development, testing rigorously, and refining based on feedback. This holistic approach adds value by bridging gaps between tech, design, and business, helping companies innovate faster, reduce risks, and boost user engagement.</p>
<p className='p_about'>I thrive in dynamic teams, bringing a positive energy that fosters creativity and problem-solving. If you're building something meaningful, let's connect—I'm excited to bring my unique mix of skills to your next project and turn ideas into reality.</p>
     
      <Aboutbox/>
      <Techstack/>
    </section>
  )
}

export default About
