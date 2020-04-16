import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import HeroSection from './Components/HomePage/HeroSection'
import Header from './Components/Header/Header'
import Projects from './Components/Projects/Projects'
import BlueForward from './Components/Gradients/BlueForward'
import LimeForward from './Components/Gradients/LimeForward'
import BlueBack from './Components/Gradients/BlueBack'
import ProjectDemo from './Components/ProjectDemo/ProjectDemo'

import './App.css'

const App = () => {
  const darkModeClassName = 'App dark'
  const [darkMode, setDarkMode] = useState(false)
  return (
    <Router>
      <div className={darkMode ? darkModeClassName : 'App'}>
        <Header />
        <div className='main'>
          <HeroSection setDarkMode={setDarkMode} />
          <BlueForward />
          <AboutMe />
          <LimeForward />
          <Projects />
          <BlueBack />
          <Contact />
          <Route
            exact path='/project-demo/:id'
            component={ProjectDemo}
          />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
