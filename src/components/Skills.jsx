import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            category: 'UX Architecture',
            items: ['User Research', 'Info Architecture', 'Usability Testing', 'Wireframing', 'Persona Dev', 'Journey Maps']
        },
        {
            category: 'UI Engineering',
            items: ['Design Systems', '3D Prototyping', 'Adv. Typography', 'Visual Hierarchy', 'Responsive Layouts', 'Micro-interactions']
        },
        {
            category: 'Tech Stack',
            items: ['Figma', 'Spline 3D', 'React.js', 'Three.js', 'Framer Motion', 'Blender']
        }
    ];

    return (
        <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorative Image */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.1,
                filter: 'grayscale(1) invert(1)'
            }}>
                <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
                    alt="Cyber Circuitry"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div className="section-header">
                <span className="section-subtitle" style={{ color: 'var(--secondary-color)' }}>CAPABILITIES</span>
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Technical <span style={{ color: 'var(--accent-color)' }}>Arsenal</span>
                </motion.h2>
            </div>

            <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-panel"
                        style={{ padding: '30px', borderRadius: '15px', backdropFilter: 'blur(20px)' }}
                    >
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#fff', fontWeight: '600', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{skillGroup.category}</h3>
                        <ul className="skill-list" style={{ listStyle: 'none', padding: 0 }}>
                            {skillGroup.items.map((item, i) => (
                                <li key={i} style={{ marginBottom: '10px', fontSize: '1.1rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '10px', color: 'var(--accent-color)', textShadow: '0 0 5px var(--accent-color)' }}>▹</span> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
