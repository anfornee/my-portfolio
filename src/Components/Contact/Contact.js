import React, { Component } from 'react';

import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact" >
                <div className="contact-container">
                    <h1 id="contact" className="contact-title">Contact</h1>
                    <form className="contact-form">
                        <input type="text" placeholder="name"></input>
                        <input type="text" placeholder="email"></input>
                        <textarea type="text" rows="7" placeholder="message"></textarea>
                    </form>
                </div>
            </div>
        )
    }
}