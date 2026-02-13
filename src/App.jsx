import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import CursorFollower from './components/CursorFollower';

function App() {
    return (
        <>
            <CursorFollower />
            <div className="scanline"></div>
            <MatrixBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
