import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="title-container">
                    <Link className="title" to="/">
                        Anthony Pereira
                        </Link>
                </div>
                <div className="nav-container">
                    <div className="navbar">
                        <Link to="/about-me">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        )
    }
}
