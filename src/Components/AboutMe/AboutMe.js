import React, { Component } from 'react'
import Philo from './philo';

import computer from '../../assets/images/computer@2x.png';
import cogs from '../../assets/images/cogs@2x.png';
import happy from '../../assets/images/happy@2x.png';

export default class AboutMe extends Component {
    render() {

        const philos = [`${computer}`, `${cogs}`, `${happy}`];

        return (
            <div id="about" >
                <div className="about-container">
                    <div className="philo-container">
                        <div className="philo-section">
                            {philos.map((philo, i) =>
                                <Philo image={philo} key={i + 1} />
                            )}
                        </div>
                        <div className="about-text-container">
                            <div className="about-text">
                                <div className="about-me">
                                    <h1>About Me</h1>
                                    <p>
                                    I am a design and experience focused Full Stack Developer specializing in Javascript frameworks
                                    including React and AngularJS. With an effective and eloquent front end I believe you
                                    can tell the story of a brand and introduce yourself in a personal way, connecting with the user or
                                    customer without ever meeting face to face. Partner that with a secure and efficient back end and
                                    easily make a lasting impression.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
