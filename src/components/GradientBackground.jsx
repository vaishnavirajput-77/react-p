import React from 'react';
import { motion } from 'framer-motion';

const GradientBackground = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            overflow: 'hidden',
            background: 'var(--bg-color)'
        }}>
            {/* Noise Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.05,
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                zIndex: 2,
                pointerEvents: 'none'
            }}></div>

            {/* Glowing Aurora Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 1.2, 0.9, 1],
                    rotate: [0, 45, -45, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-10%',
                    width: '70vw',
                    height: '70vw',
                    background: 'radial-gradient(circle, var(--secondary-color) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(80px)',
                    opacity: 0.2,
                    zIndex: 0
                }}
            />

            <motion.div
                animate={{
                    x: [0, -150, 50, 0],
                    y: [0, 100, -100, 0],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '-20%',
                    right: '-10%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, var(--tertiary-color) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(80px)',
                    opacity: 0.15,
                    zIndex: 0
                }}
            />

            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, var(--accent-color) 0%, rgba(0,0,0,0) 70%)',
                    filter: 'blur(90px)',
                    zIndex: 0
                }}
            />
        </div>
    );
};

export default GradientBackground;
