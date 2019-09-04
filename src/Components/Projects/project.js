import React from 'react';

const Project = (props) => (
    <div className="project-container">
        <div className="project-picture-container">
            <img className="project-image" src={props.project.image} alt="project logo" />
        </div>
        <div className="project-description">
            <h2>{props.project.title}</h2>
            <p>{props.project.description}</p>
        </div>
    </div>
)

export default Project;
