import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="section-header" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                <div className="about-text-content">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: 'var(--primary-color)' }}
                    >
                        <span style={{ borderBottom: '3px solid var(--accent-color)' }}>ABOUT THE CREATOR</span>
                    </motion.h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-color)', marginTop: '2rem' }}>
                        I don't just build websites; I construct digital dimensions. My passion lies in pushing the boundaries of web technologies to create immersive, 3D-enriched interfaces.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
                        Based in the intersection of art and technology, I've spent years mastering the crafts of digital storytelling and spatial design.
                    </p>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="glass-panel"
                    style={{
                        height: '400px',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        position: 'relative',
                        boxShadow: '0 0 40px rgba(114, 9, 183, 0.3)'
                    }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000"
                        alt="Creative Abstract 3D"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(114, 9, 183, 0.2), transparent)' }}></div>
                </motion.div>
            </div>

            <div className="philosophy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', perspective: '1000px' }}>
                <motion.div
                    className="glass-panel hover-3d"
                    initial={{ opacity: 0, rotateX: 20, z: -100 }}
                    whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ height: '60px', width: '60px', marginBottom: '20px', opacity: 0.8 }}>
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd1dc00?auto=format&fit=crop&q=80&w=200" alt="Vision" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--secondary-color)', textShadow: '0 0 10px rgba(157, 78, 221, 0.5)' }}>Visionary Design</h3>
                    <p>Merging artistic intuition with architectural precision to craft interfaces that feel alive.</p>
                </motion.div>

                <motion.div
                    className="glass-panel hover-3d"
                    initial={{ opacity: 0, rotateX: 20, z: -100 }}
                    whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ height: '60px', width: '60px', marginBottom: '20px', opacity: 0.8 }}>
                        <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=200" alt="Depth" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-color)', textShadow: '0 0 10px rgba(247, 37, 133, 0.5)' }}>Interactive Depth</h3>
                    <p>Using 3D libraries and complex animations to add a Z-axis to the flat web.</p>
                </motion.div>

                <motion.div
                    className="glass-panel hover-3d"
                    initial={{ opacity: 0, rotateX: 20, z: -100 }}
                    whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ height: '60px', width: '60px', marginBottom: '20px', opacity: 0.8 }}>
                        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=200" alt="Future" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--tertiary-color)', textShadow: '0 0 10px rgba(76, 201, 240, 0.5)' }}>Future Proof</h3>
                    <p>Building with the tech of tomorrow, today. Scalable, performant, and ready for the metaverse.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;