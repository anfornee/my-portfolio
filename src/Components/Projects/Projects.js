import React from 'react'
import Project from './project'

import { projects } from './projectlist'

const Projects = () => (
  <div className='projects'>
    <div id='projects' />
    <div className='projects-page-container'>
      <h2 className='section-title black'>Projects</h2>
      <div className='project-blue-line' />
    </div>
    <div className='projects-container'>
      {projects.map((project, i) =>
        <Project key={project.id} project={project} />
      )}
    </div>
  </div>
)

export default Projects
