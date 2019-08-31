import React, { Component } from 'react';
import Project from './project';

import './Projects.css';

import countdown from '../../assets/images/project-images/countdown.png';
import weather from '../../assets/images/project-images/react-weather.png';
import todo from '../../assets/images/project-images/angular-todo.png';
import expressProfile from '../../assets/images/project-images/express-profile.png';
import responsive from '../../assets/images/project-images/responsive-example.png';
import music from '../../assets/images/project-images/anthony-pereira-music.png';

export default class Projects extends Component {
    render() {

        const projects = [
            {
                "title": "React Countdown",
                "description": "React front end retrieves events from MongoDB using Express and displays the title and date as well as a countdown until that day. Can add new events.",
                "image": countdown,
                "id": 1
            },
            {
                "title": "React Weather",
                "description": "React front end using OpenWeatherMap and MapQuest APIs gets current weather for specified location",
                "image": weather,
                "id": 2
            },
            {
                "title": "Angular Todo",
                "description": "Add and view details of todo. Also be able to complete/remove todo from list.",
                "image": todo,
                "id": 3
            },
            {
                "title": "Express Profile",
                "description": "Create a profile and write/edit post using RESTful system.",
                "image": expressProfile,
                "id": 4
            },
            {
                "title": "Responsive Template",
                "description": "Template responsive website completely built with HTML/CSS and minimal JavaScript.",
                "image": responsive,
                "id": 5
            },
            {
                "title": "Anthony Pereira Music",
                "description": "Single page portfolio site built with basic HTML, CSS,  and JavaScript.",
                "image": music,
                "id": 6
            }
        ]

        return (
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
    }
}