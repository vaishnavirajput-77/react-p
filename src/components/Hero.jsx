import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="section hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '0', position: 'relative', overflow: 'hidden' }}>
            <div className="hero-content" style={{ maxWidth: '800px', zIndex: 10 }}>
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--accent-color)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        letterSpacing: '3px',
                        textShadow: '0 0 10px rgba(247, 37, 133, 0.5)'
                    }}
                >
                    WELCOME TO THE FUTURE
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    style={{
                        fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                        lineHeight: '1',
                        marginBottom: '1.5rem',
                        color: '#fff',
                        textShadow: '0 0 20px rgba(114, 9, 183, 0.8), 0 0 40px rgba(114, 9, 183, 0.4)'
                    }}
                >
                    DIGITAL <span style={{
                        background: 'linear-gradient(to right, #f72585, #7209b7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0 0 10px rgba(114, 9, 183, 0.5))'
                    }}>REALITY</span> <br /> ARCHITECT
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        borderLeft: '2px solid var(--accent-color)',
                        paddingLeft: '1.5rem'
                    }}
                >
                    Designing immersive 3D experiences and high-performance interfaces. I bridge the gap between imagination and code.
                </motion.p>

                <motion.div
                    className="cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: 'flex', gap: '25px', flexWrap: 'wrap' }}
                >
                    <a href="#projects" className="btn btn-primary" style={{
                        padding: '15px 40px',
                        background: 'linear-gradient(90deg, #7209b7, #f72585)',
                        border: 'none',
                        color: '#fff',
                        boxShadow: '0 0 30px rgba(114, 9, 183, 0.5)'
                    }}>Explore My Universe</a>
                    <a href="#contact" className="btn" style={{
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff',
                        backdropFilter: 'blur(5px)'
                    }}>Initiate Contact</a>
                </motion.div>
            </div>

            {/* Profile Image & Effects */}
            <div style={{
                position: 'absolute',
                right: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '450px',
                height: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
            }} className="hero-image-container">
                {/* Rotating Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        border: '1px solid rgba(247, 37, 133, 0.2)',
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                        boxShadow: '0 0 30px rgba(114, 9, 183, 0.1)',
                        zIndex: 1
                    }}
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        width: '80%',
                        height: '80%',
                        border: '1px solid rgba(76, 201, 240, 0.3)',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        zIndex: 2
                    }}
                />

                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        position: 'relative',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 0 50px rgba(114, 9, 183, 0.6), inset 0 0 20px rgba(0,0,0,0.5)',
                        zIndex: 3,
                        background: '#000'
                    }}
                >
                    <img
                        src="/profile.jpg"
                        alt="Vaishnavi Singh"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'contrast(1.2) brightness(1.1) saturate(1.1)'
                        }}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.parentNode.style.background = 'radial-gradient(circle, #2b0c3d 0%, #000 100%)';
                            e.target.parentNode.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:rgba(255,255,255,0.5);font-family:monospace;">NO SIGNAL</div>';
                        }}
                    />

                    {/* Glitch Overlay Effect */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(125deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 40%, rgba(255,255,255,0.1) 100%)',
                        pointerEvents: 'none'
                    }}></div>
                </motion.div>

                {/* Floating Tech Elements */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '10%',
                        right: '0',
                        fontSize: '0.8rem',
                        color: 'var(--accent-color)',
                        fontFamily: 'monospace',
                        textShadow: '0 0 5px var(--accent-color)',
                        zIndex: 4
                    }}
                >
                    &lt;SYSTEM.READY /&gt;
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
