import React from 'react';

const Philo = props => (
    <div class="philo">
        <img className="philo-icon" src={props.image} alt="icon" />
        <div className="blue-line"></div>
        <div className="philo-text">
            <h4>{props.description}</h4>
        </div>
    </div>
)

export default Philo;