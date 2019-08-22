import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="title-container">
                    <HashLink className="title" to="/#home">
                        Anthony Pereira
                        </HashLink>
                </div>
                <div className="nav-container">
                    <div className="navbar">
                        <HashLink to="/#about">about</HashLink>
                        <HashLink to="/#projects">projects</HashLink>
                        <HashLink to="/#contact">contact</HashLink>
                    </div>
                </div>
            </div>
        )
    }
}
