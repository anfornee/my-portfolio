import React, { Component } from 'react'
import Philo from './philo';

import './AboutMe.css';

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
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                        diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                        aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore
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
