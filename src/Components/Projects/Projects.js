import React from 'react';
import Project from './project';

import { projects } from './projectlist';

const Projects = () => (
    <div className="projects" >
        <div className="projects-page-container">
            <h1 id="projects" className="projects-title">Projects</h1>
            <div className="project-blue-line"></div>
        </div>
        <div className="projects-container">
            {projects.map((project, i) =>
                <Project key={project.id} project={project} />
            )}
        </div>
    </div>
)

export default Projects;