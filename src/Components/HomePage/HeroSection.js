import React from 'react'
import { HashLink } from 'react-router-hash-link'
import DarkModeToggle from './DarkModeToggle'
import Icons from '../Icons/Icons'

// import logo from '../../assets/images/IMG_0431.jpg';
import scroll from '../../assets/images/scroll-icon@2x.png'

const HeroSection = ({ darkMode, setDarkMode }) => (
  <div id='home'>
    <div id='top' />
    <div className='container'>
      <div className='hero-text-container'>
        <div className='text-container'>
          <div className='hero-title'>
            <h1>Good looking code.</h1>
          </div>
          <HashLink smooth to='/#projects-section' className='projects-btn'>My Projects</HashLink>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Icons />
        </div>
      </div>
    </div>
    <HashLink smooth to='/#about-section'>
      <div className='scroll-icon'>
        <img src={scroll} alt='scroll' className='wait' />
      </div>
    </HashLink>
  </div>
)

export default HeroSection
