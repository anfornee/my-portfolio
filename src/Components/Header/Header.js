import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import ham from '../../assets/images/ham-icon.png';
import close from '../../assets/images/x-icon.png';

export default class Header extends Component {

    state = {
        popUpNav: {
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            height: "100vh",
            top: "0",
            right: "-251px",
            border: "1px solid #777777",
            width: "250px",
            background: "#fff",
            zIndex: "2",
            fontSize: "2em",
            transition: ".5s",
        }
    }

    openNav = () => {
        this.setState({
            popUpNav: {
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                height: "100vh",
                top: "0",
                right: "0px",
                border: "1px solid #777777",
                width: "250px",
                background: "#fff",
                zIndex: "2",
                fontSize: "2em",
                transition: ".5s",
            }
        })
    }

    closeNav = () => {
        this.setState({
            popUpNav: {
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                height: "100vh",
                top: "0",
                right: "-251px",
                border: "1px solid #777777",
                width: "250px",
                background: "#fff",
                zIndex: "2",
                fontSize: "2em",
                transition: ".5s",
            }
        })
    }

    render() {
        return (
            <div id="#" className="header-container">
                <div className="title-container">
                    <HashLink className="title" to="/#top">
                        ANTHONY PEREIRA
                                </HashLink>
                </div>
                <div className="ham-menu">
                    <img onClick={this.openNav} src={ham} alt="menu" />
                </div>
                <div style={this.state.popUpNav}>
                    <div className="pop-up-nav-items">
                        <div onClick={this.closeNav} className="close-container">
                            <img src={close} alt="close" />
                        </div>
                        <HashLink smooth to="/#about" onClick={this.closeNav}>about</HashLink>
                        <HashLink smooth to="/#projects" onClick={this.closeNav}>projects</HashLink>
                        <HashLink smooth to="/#contact" onClick={this.closeNav}>contact</HashLink>
                    </div>
                </div>
                <div className="nav-container-desktop">
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
