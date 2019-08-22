import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="title-container">
                    <HashLink className="title" to="/#home">
                     ANTHONY PEREIRA
                        </HashLink>
                </div>
                <div className="nav-container">
                    <div className="navbar">
                        <HashLink smooth to="/#about">about</HashLink>
                        <HashLink smooth to="/#projects">projects</HashLink>
                        <HashLink smooth to="/#contact">contact</HashLink>
                    </div>
                </div>
            </div>
        )
    }
}
