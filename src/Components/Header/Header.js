import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import ham from '../../assets/images/ham-icon.png';
import close from '../../assets/images/x-icon.png';
import avatar from '../../assets/images/IMG_1129_smaller.JPG'

export default class Header extends Component {

  state = {
    popUpNav: {
      right: '-251px',
    }
  }

  openNav = () => {
    this.setState({
      popUpNav: {
        right: '0px',
      }
    })
  }

  closeNav = () => {
    this.setState({
      popUpNav: {
        right: '-251px',
      }
    })
  }

  render() {
    return (
      <div id='#' className='header-container'>
        <div className='title-container'>
          <HashLink smooth className='title' to='/#top'>
            <img src={avatar} alt='A decently handsome fella!' />
            <span>ANTHONY PEREIRA</span>
          </HashLink>
        </div>
        <div className='ham-menu'>
          <img onClick={this.openNav} src={ham} alt='menu' />
        </div>
        <div className='pop-up-nav' style={this.state.popUpNav}>
          <div className='pop-up-nav-items'>
            <div onClick={this.closeNav} className='close-container'>
              <img src={close} alt='close' />
            </div>
            <HashLink smooth to='/#about-section' onClick={this.closeNav}>about</HashLink>
            <HashLink smooth to='/#projects-section' onClick={this.closeNav}>projects</HashLink>
            <HashLink smooth to='/#contact' onClick={this.closeNav}>contact</HashLink>
          </div>
        </div>
        <div className='nav-container-desktop'>
          <div className='navbar'>
            <HashLink smooth to='/#about-section'>about</HashLink>
            <HashLink smooth to='/#projects-section'>projects</HashLink>
            <HashLink smooth to='/#contact'>contact</HashLink>
          </div>
        </div>
      </div>
    )
  }
}
