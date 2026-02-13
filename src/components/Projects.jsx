import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Redesign',
            type: 'UI / UX Design',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
            desc: 'A complete visual overhaul for a boutique clothing brand focused on slow fashion.'
        },
        {
            title: 'Health Dashboard',
            type: 'Product Design',
            image: 'https://images.unsplash.com/photo-1576091160550-217359f41f48?auto=format&fit=crop&q=80&w=1000',
            desc: 'A patient-centric portal that simplifies complex medical data.'
        },
        {
            title: 'Travel App',
            type: 'Mobile App',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000',
            desc: 'Seamless itinerary planning for the modern nomad.'
        },
        {
            title: 'Design System',
            type: 'Design Ops',
            image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=1000',
            desc: 'A comprehensive system built for scale and consistency.'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="section-header">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <span style={{ borderBottom: '3px solid var(--tertiary-color)' }}>CURATED WORKS</span>
                </motion.h2>
            </div>

            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', perspective: '1000px' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            rotateX: 5,
                            boxShadow: "0 20px 50px rgba(0,0,0,0.5)"
                        }}
                        transition={{ duration: 0.4 }}
                        className="glass-panel"
                        style={{ cursor: 'pointer', padding: '20px', borderRadius: '20px' }}
                    >
                        <div className="image-wrapper" style={{
                            height: '240px',
                            borderRadius: '16px',
                            marginBottom: '20px',
                            overflow: 'hidden',
                            border: '1px solid rgba(255,255,255,0.1)',
                            position: 'relative'
                        }}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'saturate(0.8) contrast(1.1)',
                                    transition: '0.3s'
                                }}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff', fontWeight: '700' }}>{project.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{project.type}</p>
                        <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>{project.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
