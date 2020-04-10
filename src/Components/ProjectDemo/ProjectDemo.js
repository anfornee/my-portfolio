import React from 'react'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'
import { Link } from 'react-router-dom'
import close from '../../assets/images/x-icon.png'

const ProjectDemo = props => {
  const project = props.location.state.project
  console.log(project)
  return (
    <div className='project-demo-container'>.
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
        <Player
          src={project.demo}
        />
      </div>
    </div>
  )
}

export default ProjectDemo
