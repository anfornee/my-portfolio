import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Icons from '../Icons/Icons';

// import logo from '../../assets/images/IMG_0431.jpg';
import scroll from '../../assets/images/scroll-icon@2x.png';

const HeroSection = () => (
    <div id="home" >
        <div id="top" ></div>
        <div className="container">
            <div className="hero-text-container">
                <div className="text-container">
                    <div className="hero-title">
                        <h1>Good looking code.</h1>
                    </div>
                    <HashLink smooth to="/#projects" className="projects-btn">My Projects</HashLink>
                    <Icons />
                </div>
            </div>
            {/* <div className="hero-container">
                <img src={logo} alt="hero" />
            </div> */}
        </div>
        <HashLink smooth to="/#about">
            <div className="scroll-icon">
                <img src={scroll} alt="scroll" className="wait" />
            </div>
        </HashLink>
    </div>
)

export default HeroSection;
