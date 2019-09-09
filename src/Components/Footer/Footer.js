import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Icons from '../Icons/Icons';

import scroll from '../../assets/images/scroll-icon@2x.png';

const Footer = () => (
    <div className="footer-block">
        <div className="footer">
            <HashLink smooth to="/#top" className="footer-scroll-icon">
                <img src={scroll} alt="scroll" />
            </HashLink>
            <p className="copyright">ANTHONY PEREIRA ©</p>
            <div className="footer-icon-container">
                <Icons />
            </div>
        </div>
    </div>
)

export default Footer;