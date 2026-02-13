import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ['FULL STACK DEVELOPER', 'UI/UX DESIGNER', 'TECH ENTHUSIAST', 'PROBLEM SOLVER'];

    const codeBlockRef = useRef(null);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (codeBlockRef.current) {
                const x = (window.innerWidth - e.pageX * 2) / 100;
                const y = (window.innerHeight - e.pageY * 2) / 100;
                codeBlockRef.current.style.transform = `translate(-50%, -50%) rotateY(20deg) translateX(${x}px) translateY(${y}px)`;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <div className="glitch-container">
                    <h1 className="hero-title glitch" data-text="HELLO_WORLD">HELLO_WORLD</h1>
                </div>
                <h2 className="subtitle">I AM A <span id="typing-text">{text}</span><span className="cursor">|</span></h2>
                <p className="hero-desc">Building the digital future with code and creativity.</p>
                <div className="cta-group">
                    <a href="#projects" className="btn primary-btn">VIEW_PROJECTS</a>
                    <a href="#contact" className="btn secondary-btn">INITIATE_CONTACT</a>
                </div>
            </div>
            <div className="hero-visual">
                <div className="hologram-container">
                    <div className="circle-ring"></div>
                    <div className="circle-ring inner"></div>
                    <div className="code-block-visual" ref={codeBlockRef}>
                        <code>
                            const dev = &#123;<br />
                            &nbsp;&nbsp;status: "online",<br />
                            &nbsp;&nbsp;skills: ["Code", "Design"],<br />
                            &nbsp;&nbsp;mission: "Innovate"<br />
                            &#125;;
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default hero;
