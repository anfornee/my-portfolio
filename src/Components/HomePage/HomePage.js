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
                    <h1>Code stuff that looks good.</h1>
                </div>
                <Link to="/projects" className="projects-btn">My Projects</Link>
            </div>
        )
    }
}
