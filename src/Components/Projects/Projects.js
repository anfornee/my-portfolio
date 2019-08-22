import React, { Component } from 'react';
import Project from './project';

import './Projects.css';

export default class Projects extends Component {
    render() {

        const projects = [1, 2, 3, 4, 5, 6, 7, 8];


        return (
            <div className="projects" >
                <div className="projects-page-container">
                    <h1 id="projects" className="projects-title">Projects</h1>
                    <div className="blue-line"></div>
                    <div className="projects-container">
                    {projects.map((project, i) =>
                                <Project  />
                            )}
                    </div>
                </div>
            </div>
        )
    }
}