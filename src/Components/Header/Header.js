import React, { Component } from 'react';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="headerContainer">
                <div>
                    <h1>Anthony Pereira</h1>
                </div>
                <div>
                    <nav className="navBar">
                        <h3>About Me</h3>
                        <h3>Projects</h3>
                        <h3>Blog</h3>
                        <h3>Contact</h3>
                    </nav>
                </div>
            </div>
        )
    }
}
