import React from 'react';
import { motion } from 'framer-motion';

const DesignProcess = () => {
    const steps = [
        {
            title: 'Research & Discovery',
            desc: 'Immersion into the problem space using data analytics and user interviews.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Strategy & Architecture',
            desc: 'Designing the blueprint. Defining user flows and information hierarchy.',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: '3D Prototyping',
            desc: 'Building high-fidelity, interactive models to visualize the spatial experience.',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Development',
            desc: 'Coding pixel-perfect interfaces with React, Three.js, and Framer Motion.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
        },
        {
            title: 'Deployment',
            desc: 'Launching scalable, performant applications to the global network.',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
        }
    ];

    return (
        <section id="process" className="section">
            <div className="section-header">
                <span className="section-subtitle" style={{ color: 'var(--tertiary-color)' }}>THE ALGORITHM</span>
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Exec. Routine
                </motion.h2>
            </div>

            <div className="process-timeline" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '80px', paddingLeft: '40px', borderLeft: '2px solid rgba(255,255,255,0.1)' }}>
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="process-step"
                        style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}
                    >
                        <span style={{
                            position: 'absolute',
                            left: '-51px',
                            top: '5px',
                            width: '20px',
                            height: '20px',
                            background: 'var(--bg-color)',
                            borderRadius: '50%',
                            border: '2px solid var(--accent-color)',
                            boxShadow: '0 0 10px var(--accent-color)',
                            zIndex: 5
                        }}></span>

                        <div className="step-content">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: '#fff', fontWeight: '700', textShadow: '0 0 5px rgba(255,255,255,0.5)' }}>{index + 1}. {step.title}</h3>
                            <p style={{ maxWidth: '500px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>{step.desc}</p>
                        </div>

                        <motion.div
                            className="step-visual"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{
                                height: '220px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.1)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
                                cursor: 'pointer'
                            }}
                        >
                            <img
                                src={step.image}
                                alt={step.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    opacity: 0.8,
                                    filter: 'contrast(1.1) brightness(0.9)',
                                    transition: '0.4s ease'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DesignProcess;
