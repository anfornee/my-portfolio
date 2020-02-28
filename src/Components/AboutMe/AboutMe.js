import React from 'react'
import Philo from './philo'
import LimeBack from '../Gradients/LimeBack'

import { philos } from './philolist'

const AboutMe = () => (
  <div id='about'>
    <div className='about-container'>
      <div className='philo-container'>
        <div className='philo-section'>
          {philos.map((philo, i) =>
            <Philo
              key={philo.id}
              image={philo.icon}
              description={philo.description}
            />
          )}
        </div>
        <LimeBack />
        <div className='about-text-container'>
          <div className='about-text'>
            <div className='about-me'>
              <h1>About Me</h1>
              <p>
                I am a design and experience focused Full Stack Developer specializing in Javascript frameworks
                including React and AngularJS. With an effective and eloquent front end I believe you
                can tell the story of a brand and introduce yourself in a personal way, connecting with the user or
                customer without ever meeting face to face. Partner that with a quality back end and
                easily make a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe
