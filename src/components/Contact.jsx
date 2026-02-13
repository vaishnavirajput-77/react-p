import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="section-header">
                <h2 className="section-title">ESTABLISH_UPLINK</h2>
                <div className="line-decoration"></div>
            </div>
            <div className="contact-container glass-panel">
                <form id="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">USER_ID</label>
                        <input type="text" id="name" placeholder="Enter Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL_ADDRESS</label>
                        <input type="email" id="email" placeholder="Enter Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">TRANSMISSION</label>
                        <textarea id="message" rows="5" placeholder="Enter Message" required></textarea>
                    </div>
                    <button type="submit" className="btn primary-btn">SEND_TRANSMISSION</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
