import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="section-header">
                <h2 className="section-title">SYSTEM_INFO</h2>
                <div className="line-decoration"></div>
            </div>
            <div className="about-grid">
                <motion.div
                    className="about-card glass-panel floating"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ animationDelay: '0s' }}
                >
                    <h3>&gt; PROFILE</h3>
                    <p>Passionate Computer Science Engineer specialized in building scalable web applications and interactive experiences. Obsessed with clean code and futuristic interfaces.</p>
                </motion.div>
                <motion.div
                    className="about-card glass-panel floating"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ animationDelay: '0.2s' }}
                >
                    <h3>&gt; TECH_STACK</h3>
                    <div className="skill-tags">
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Python</span>
                        <span>WebGL</span>
                        <span>CSS3</span>
                    </div>
                </motion.div>
                <motion.div
                    className="about-card glass-panel floating"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ animationDelay: '0.4s' }}
                >
                    <h3>&gt; EXPERIENCE</h3>
                    <ul className="exp-list">
                        <li>
                            <span className="date">2024 - Present</span>
                            <strong>Full Stack Developer</strong>
                            <small>TechCorp Industries</small>
                        </li>
                        <li>
                            <span className="date">2022 - 2024</span>
                            <strong>Frontend Engineer</strong>
                            <small>Creative Solutions</small>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default About;