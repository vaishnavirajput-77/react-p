import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? 'navbar scrolled' : 'navbar'} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '20px 5%',
            zIndex: 1000,
            background: scrolled ? 'rgba(5, 1, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(157, 78, 221, 0.2)' : 'none',
            transition: 'all 0.4s ease'
        }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto' }}>
                <a href="#" className="logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#fff', letterSpacing: '2px', textShadow: '0 0 10px rgba(157, 78, 221, 0.8)' }}>
                    VAISHNAVI<span style={{ color: 'var(--accent-color)' }}>.</span>
                </a>

                <ul className="nav-links" style={{ display: 'flex', gap: '40px', listStyle: 'none' }}>
                    {['About', 'Process', 'Projects', 'Contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-color)', textTransform: 'uppercase', letterSpacing: '2px', transition: '0.3s' }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-color)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-color)'}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
