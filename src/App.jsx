import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CaseStudies from './components/CaseStudies';
import DesignProcess from './components/DesignProcess';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GradientBackground from './components/GradientBackground';
import CursorFollower from './components/CursorFollower';

function App() {
    return (
        <div className="app-container">
            <CursorFollower />
            <GradientBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <CaseStudies />
                <DesignProcess />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
