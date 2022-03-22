import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Project extends Component {

  state = {
    background: this.props.project.image,
  }

  render() {
    const project = this.props.project
    const demoLink = `/project-demo/${project.id}`
    const url = project.url
    ? <a target='_blank' rel='noopener noreferrer' href={project.url}> • View site</a>
    : false

    return (
      <div className='project-container'>
        <div className='project-picture-container'>
          <img
            className='project-image'
            src={this.state.background}
            alt='project logo'
          />
          <Link 
            to={{
              pathname: demoLink,
              state: {
                project
              }
            }}
            className='image-overlay-message'>
            <p>View Demo</p>
          </Link>
        </div>
        <div className='project-description'>
          <a href={project.link}>View code</a>{url}
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    )
  }
}
