import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import close from '../../assets/images/x-icon.png'

const ProjectDemo = props => {
  const project = props.location.state.project
  return (
    <div className='project-demo-container'>
      <Link to='/' className='project-demo-fullscreen-close' />
      <div className='project-demo-title'>
        <Link to='/'>
          <img
            className='demo-close'
            src={close} alt='close'
          />
        </Link>
        <h1>{project.title}</h1>
      </div>
      <div className='project-video-container'>
        <ReactPlayer url={project.demo} controls width='100%' height='100%' />
      </div>
    </div>
  )
}

export default ProjectDemo
