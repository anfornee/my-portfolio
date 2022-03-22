import React from 'react'
import Philo from './philo'
import LimeForward from '../Gradients/LimeForward'
import LimeBack from '../Gradients/LimeBack'

import { philos } from './philolist'

const AboutMe = () => (
  <div id='about'>
    <div className='about-container'>
      <div className='philo-container'>
        <LimeBack />
        <div className='about-text-container'>
          <div className='about-text'>
            <div className='about-me'>
              <h2 className='section-title black'>About Me</h2>
              <p>
                I am a design and experience focused Front End Web Developer who loves to grow and learn new things.
                My experience has increased the productivity of development teams while decreasing technical debt. Outside
                of professional work I've kept up with modern development tools such as React and NextJS by building
                useful web applications for others and myself. I believe that with an effective and eloquent front end
                experience you can tell the story of a brand and introduce yourself in a personal way, connecting with
                the user or customer without ever meeting face to face.
              </p>
            </div>
          </div>
        </div>
        <LimeForward />
        <div className='philo-section'>
          {philos.map((philo, i) =>
            <Philo
              key={philo.id}
              image={philo.icon}
              description={philo.description}
            />
          )}
        </div>
      </div>
    </div>
  </div>
)

export default AboutMe
