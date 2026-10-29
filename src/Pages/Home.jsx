import React from 'react'
import Hero from '../Components/Hero.jsx'
import About from '../Components/About.jsx'
import Skills from '../Components/Skills.jsx'
import Project from '../Components/Project.jsx'
import Contact from '../Components/Contact.jsx'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  )
}

export default Home