import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    return (
        <section id="achievements" className="section">
            <div className="section-header">
                <span className="section-subtitle" style={{ color: 'var(--tertiary-color)' }}>MILESTONES</span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Recognition <span style={{ color: 'var(--tertiary-color)' }}>& Certs</span>
                </motion.h2>
            </div>

            <div className="achievements-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
                <div className="text-columns" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <div className="glass-panel" style={{ padding: '30px', borderRadius: '20px' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>AWARDS</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--accent-color)' }}>Best Innovative Design</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>TechDesign Summit 2024</span>
                            </li>
                            <li style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--accent-color)' }}>Site of the Day</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Awwwards Honorable Mention</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-panel" style={{ padding: '30px', borderRadius: '20px' }}>
                        <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>CERTIFICATIONS</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--secondary-color)' }}>Three.js Journey</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Certificate of Mastery, 2023</span>
                            </li>
                            <li style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '20px' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem', color: 'var(--secondary-color)' }}>Google UX Design</h4>
                                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Professional Certificate, 2022</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{
                        height: '100%',
                        minHeight: '400px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        padding: '10px'
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?auto=format&fit=crop&q=80&w=1000"
                        alt="Achievement Abstract"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '14px', opacity: 0.8 }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
