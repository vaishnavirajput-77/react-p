import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="glass-panel">
                <div className="logo">
                    <span className="bracket">&lt;</span>
                    <span className="text-glitch" data-text="DEV_PORTFOLIO">DEV_PORTFOLIO</span>
                    <span className="bracket">/&gt;</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#home" className="nav-item" data-text="HOME">HOME</a></li>
                    <li><a href="#about" className="nav-item" data-text="ABOUT">ABOUT</a></li>
                    <li><a href="#projects" className="nav-item" data-text="PROJECTS">PROJECTS</a></li>
                    <li><a href="#contact" className="nav-item" data-text="CONTACT">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
