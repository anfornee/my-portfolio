import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './HeroSection.css';

import logo from '../../assets/images/IMG_0431.jpg';
import github from '../../assets/images/github-icon.png';
import instagram from '../../assets/images/instagram-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import twitter from '../../assets/images/twitter-icon.png';


export default class HeroSection extends Component {
    render() {
        return (
            <div id="home" >
                <div className="container">
                    <div className="hero-text-container">
                        <div className="text-container">
                            <div className="hero-title">
                                <h1>Code stuff that looks good.</h1>
                            </div>
                            <div className="hero-desc-container">
                                <h4>
                                    I am a design and experience focused Full Stack Developer specializing in Javascript frameworks
                                    including React and AngularJS. With an effective and eloquent front end experience I believe you
                                    can tell the story of a brand and introduce yourself in a personal way, connecting with the user or
                                    customer without ever meeting face to face. Partner that with a secure and efficient back end and
                                    you can easily make a lasting impression.
                            </h4>
                            </div>
                            <Link to="/projects" className="projects-btn">My Projects</Link>
                            <div className="icon-container">
                                <a href="https://www.instagram.com/anthonypereiramusic"><img src={instagram} alt="instagram" /></a>
                                <a href="https://twitter.com/THEanfornee"><img src={twitter} alt="twitter" /></a>
                                <a href="https://www.linkedin.com/in/anthony-luis-pereira/"><img src={linkedin} alt="linkedin" /></a>
                                <a href="https://github.com/anfornee"><img src={github} alt="github" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="hero-container">
                        <img src={logo} alt="hero" />
                    </div>
                </div>
            </div>
        )
    }
}
