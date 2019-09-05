import React from 'react';

import github from '../../assets/images/github-icon.png';
import instagram from '../../assets/images/instagram-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import twitter from '../../assets/images/twitter-icon.png';

const Icons = () => (
    <div className="icon-container">
        <a href="https://www.instagram.com/anthonypereiramusic"><img src={instagram} alt="instagram" /></a>
        <a href="https://twitter.com/THEanfornee"><img src={twitter} alt="twitter" /></a>
        <a href="https://www.linkedin.com/in/anthony-luis-pereira/"><img src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/anfornee"><img src={github} alt="github" /></a>
    </div>
)


export default Icons;