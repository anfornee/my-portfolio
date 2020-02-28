import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HomePage/HeroSection'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import BlueForward from './Components/Gradients/BlueForward'
import LimeForward from './Components/Gradients/LimeForward'
import BlueBack from './Components/Gradients/BlueBack'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='main'>
          <HeroSection />
          <BlueForward />
          <AboutMe />
          <LimeForward />
          <Projects />
          <BlueBack />
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
