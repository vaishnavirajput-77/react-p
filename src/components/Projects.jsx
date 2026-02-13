import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'NEON_DASHBOARD',
            desc: 'Real-time analytics dashboard with data visualization.',
            tech: ['React', 'D3.js'],
            id: '01'
        },
        {
            title: 'AI_CHAT_INTERFACE',
            desc: 'Generative AI chat interface with voice recognition.',
            tech: ['Python', 'TensorFlow'],
            id: '02'
        },
        {
            title: 'CYBER_COMMERCE',
            desc: 'Next-gen e-commerce platform with 3D product views.',
            tech: ['Three.js', 'Vue'],
            id: '03'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="section-header">
                <h2 className="section-title">PROJECT_DATABASE</h2>
                <div className="line-decoration"></div>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card glass-panel"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <div className="project-image">
                            <div className="overlay"></div>
                            <div className="placeholder-img">PROJECT_{project.id}</div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="tech-used">
                                {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                            </div>
                            <div className="project-links">
                                <a href="#">DEMO</a>
                                <a href="#">CODE</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
