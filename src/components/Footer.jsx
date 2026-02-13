import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#000', color: '#fff', padding: '100px 10%' }}>
            <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '60px' }}>
                <div style={{ maxWidth: '300px' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-1px' }}>Vaishnavi<span style={{ color: 'var(--accent-color)' }}>.</span></h3>
                    <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.7' }}>
                        Architecting the digital future, one pixel at a time.
                    </p>
                </div>

                <div className="footer-links">
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Navigation</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}><a href="#about" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#888'}>About</a></li>
                        <li style={{ marginBottom: '15px' }}><a href="#projects" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#888'}>Projects</a></li>
                        <li style={{ marginBottom: '15px' }}><a href="#contact" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = '#888'}>Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4 style={{ color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Social</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = '#888'}>LinkedIn</a></li>
                        <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = '#888'}>Dribbble</a></li>
                        <li style={{ marginBottom: '15px' }}><a href="#" style={{ color: '#888', textDecoration: 'none', transition: '0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--secondary-color)'} onMouseOut={(e) => e.target.style.color = '#888'}>Behance</a></li>
                    </ul>
                </div>
            </div>

            <div style={{ borderTop: '1px solid #111', marginTop: '80px', paddingTop: '40px', textAlign: 'center', color: '#444', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                <p>&copy; {new Date().getFullYear()} Vaishnavi Singh. Digital Reality Established.</p>
            </div>
        </footer>
    );
};

export default Footer;
