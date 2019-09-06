import React from 'react';

const Contact = () => (
    <div className="contact" >
        <div className="contact-container">
            <h1 id="contact" className="contact-title">Contact</h1>
            <form className="contact-form" name="contact" method="POST" data-netlify="true">
                <input type="text" name="name" placeholder="name"></input>
                <input type="text" name="email" placeholder="email"></input>
                <textarea type="text" name="message" rows="7" placeholder="message"></textarea>
                <button type="submit" className="contact-btn">Send</button>
            </form>
        </div>
    </div>
)

export default Contact;