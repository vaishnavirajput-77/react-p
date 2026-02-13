import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{
            minHeight: '800px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Image Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.15,
                filter: 'grayscale(1) brightness(0.5)'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                    alt="Network Background"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
                <span className="section-subtitle" style={{ color: 'var(--accent-color)' }}>INITIATE SEQUENCE</span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff', textShadow: '0 0 20px rgba(114, 9, 183, 0.6)' }}
                >
                    READY TO <br /> <span style={{ color: 'var(--accent-color)' }}>COLLABORATE?</span>
                </motion.h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)' }}>
                    My inbox is always open. Whether you have a question or just want to discuss the future of the web, hit me up.
                </p>
            </div>

            <div className="contact-links" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@vaishnavi.dev" className="btn btn-primary" style={{ padding: '20px 40px', fontSize: '1.1rem' }}>
                    Send Transmission
                </a>
                <a href="#" className="btn icon-btn" style={{
                    padding: '20px',
                    fontSize: '1.5rem',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    backdropFilter: 'blur(5px)'
                }}>
                    🔗
                </a>
            </div>
        </section>
    );
};

export default Contact;
