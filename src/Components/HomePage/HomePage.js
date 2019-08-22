import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

import logo from '../../assets/images/IMG_0431.jpg';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="hero-container">
                        <img src={logo} alt="hero" />
                    </div>
                    <div className="hero-text-container">
                        <h1>Code stuff that looks good.</h1>
                        <h4>
                            I am a design and experience focused Full Stack Developer specializing in Javascript frameworks
                            including React and AngularJS. With an effective and eloquent front end experience I believe you
                            can tell the story of a brand and introduce yourself in a personal way, connecting with the user or
                            customer without ever meeting face to face. Partner that with a secure and efficient back end and
                            you can easily make a lasting impression.
                        </h4>
                    </div>
                </div>
                <Link to="/projects" className="projects-btn">My Projects</Link>
            </div>
        )
    }
}
