import React, { Component } from 'react'

export default class Project extends Component {

  state = {
    background: this.props.project.image
  }

  handleMouseEnter = () => {
    this.setState({
      background: this.props.project.gif
    })
  }

  handleMouseLeave = () => {
    this.setState({
      background: this.props.project.image
    })
  }

  render () {
    const project = this.props.project
    return (
      <div className='project-container'>
        <div className='project-picture-container'>
          <img
            className='project-image'
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            src={this.state.background}
            alt='project logo'
          />
        </div>
        <div className='project-description'>
          <a href={project.link}>View code</a>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    )
  }
}
