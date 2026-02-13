import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        { id: 1, title: 'DISCOVERY', desc: 'Understanding the problem, user research, and defining personas.' },
        { id: 2, title: 'IDEATION', desc: 'Brainstorming, sketching, and wireframing user flows and interfaces.' },
        { id: 3, title: 'DESIGN', desc: 'Creating high-fidelity mockups, design systems, and visual assets.' },
        { id: 4, title: 'DEVELOPMENT', desc: 'Bringing designs to life with clean, modular React components.' },
    ];

    return (
        <section id="process" className="section process-section">
            <div className="section-header">
                <h2 className="section-title">WORKFLOW_INIT</h2>
                <div className="line-decoration"></div>
            </div>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                {steps.map((step, i) => (
                    <motion.div
                        key={step.id}
                        className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        <div className="timeline-content glass-panel">
                            <span className="step-number">{step.id}</span>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Process;
