import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section id="philosophy" className="section philosophy-section">
            <div className="section-header">
                <h2 className="section-title">CREATIVE_MINDSET</h2>
                <div className="line-decoration"></div>
            </div>
            <div className="philosophy-container glass-panel">
                <div className="quote-box">
                    Design is not just what it looks like and feels like. Design is how it works. — Steve Jobs
                </div>
                <div className="mindset-grid">
                    <motion.div className="mindset-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>USER_FIRST</h3>
                        <p>Placing empathy at the core of every design decision.</p>
                    </motion.div>
                    <motion.div className="mindset-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>AESTHETIC_PURPOSE</h3>
                        <p>Beautiful interfaces drive better engagement and trust.</p>
                    </motion.div>
                    <motion.div className="mindset-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3>ITERATIVE_GROWTH</h3>
                        <p>Design is never finished, only improved through feedback.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
