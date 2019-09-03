import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import github from '../../assets/images/github-icon.png';
import instagram from '../../assets/images/instagram-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import twitter from '../../assets/images/twitter-icon.png';
import scroll from '../../assets/images/scroll-icon@2x.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="farts">
                <div className="footer">
                    <HashLink smooth to="/##" className="footer-scroll-icon">
                        <img src={scroll} alt="scroll" />
                    </HashLink>
                    <p className="copyright">ANTHONY PEREIRA ©</p>
                    <div className="footer-icon-container">
                        <a href="https://www.instagram.com/anthonypereiramusic"><img src={instagram} alt="instagram" /></a>
                        <a href="https://twitter.com/THEanfornee"><img src={twitter} alt="twitter" /></a>
                        <a href="https://www.linkedin.com/in/anthony-luis-pereira/"><img src={linkedin} alt="linkedin" /></a>
                        <a href="https://github.com/anfornee"><img src={github} alt="github" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
