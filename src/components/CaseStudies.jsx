import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    return (
        <section id="case-studies" className="section">
            <div className="section-header">
                <span className="section-subtitle" style={{ color: 'var(--accent-color)' }}>FEATURED CASE STUDY</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Vitalis Health <span style={{ color: 'var(--accent-color)' }}>Nexus</span>
                </motion.h2>
                <p style={{ maxWidth: '800px', fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
                    A revolutionary patient analytics platform that uses real-time 3D data visualization to bridge the gap between complex medical metrics and patient understanding.
                </p>
            </div>

            <motion.div
                className="glass-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{
                    padding: '40px',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <div className="case-study-hero" style={{
                    height: '450px',
                    borderRadius: '16px',
                    marginBottom: '40px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative'
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=2000"
                        alt="Vitalis Health Dashboard"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                    />
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, transparent 60%, var(--bg-color) 100%)',
                        pointerEvents: 'none'
                    }}></div>
                </div>

                <div className="case-study-details" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    <div className="case-section">
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary-color)', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Objective</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                            Transform overwhelming clinical data into a human-centric interface that Empowers patients and streamlines doctor reviews.
                        </p>
                    </div>
                    <div className="case-section">
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Solution</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                            A high-fidelity dashboard featuring dark-mode optimized 3D heart and brain models that pulsate with real-time biometric feeds.
                        </p>
                    </div>
                    <div className="case-section">
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--tertiary-color)', marginBottom: '0.8rem', textTransform: 'uppercase' }}>Results</h3>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
                            Reduced patient interpretation errors by 60% and increased doctor-patient consultation efficiency by 40% through visual clarity.
                        </p>
                    </div>
                </div>

                <div className="case-link" style={{ marginTop: '50px', textAlign: 'center' }}>
                    <a href="#" className="btn btn-primary" style={{ padding: '15px 40px', background: 'transparent', border: '1px solid var(--accent-color)', color: '#fff' }}>View Full Study</a>
                </div>
            </motion.div>
        </section>
    );
};

export default CaseStudies;
