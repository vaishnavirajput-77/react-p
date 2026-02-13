import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        {
            title: 'UI/UX Design',
            icon: '🎨',
            desc: 'Creating intuitive, user-centric interfaces that blend aesthetics with functionality. Design that solves problems.'
        },
        {
            title: 'Web Development',
            icon: '💻',
            desc: 'Bringing visual concepts to life with clean, semantic code using React, Tailwind, and modern web standards.'
        },
        {
            title: 'Mobile App Design',
            icon: '📱',
            desc: 'Designing seamless mobile experiences for iOS and Android, focusing on touch interactions and responsiveness.'
        },
        {
            title: 'Design Systems',
            icon: '📐',
            desc: 'Building scalable component libraries and style guides to ensure consistency across digital products.'
        },
        {
            title: 'Interaction Design',
            icon: '✨',
            desc: 'Adding life to interfaces with subtle micro-interactions and smooth animations that guide user behavior.'
        },
        {
            title: 'Prototyping',
            icon: '⚡',
            desc: 'High-fidelity interactive prototypes to test flows and visualize the final product before development.'
        }
    ];

    return (
        <section id="services" className="section">
            <div className="section-header">
                <h2 className="section-title">CORE_MODULES</h2>
                <div className="line-decoration"></div>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, rotateY: 10, z: 50 }}
                    >
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
