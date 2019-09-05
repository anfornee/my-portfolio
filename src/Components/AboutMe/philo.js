import React from 'react';

const Philo = props => (
    <div class="philo">
        <img className="philo-icon" src={props.image} alt="icon" />
        <div className="blue-line"></div>
        <div className="philo-text">
            <h4>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam
                </h4>
        </div>
    </div>
)

export default Philo;