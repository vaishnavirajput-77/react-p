import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    useEffect(() => {
        if (targetRef.current) {
            setScrollRange(targetRef.current.scrollWidth - targetRef.current.offsetWidth);
        }
    }, [targetRef]);

    const cards = [
        { title: "Design Systems", img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=1000", desc: "Creating unified visual languages" },
        { title: "Mobile Apps", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000", desc: "iOS & Android Experiences" },
        { title: "Web Interfaces", img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000", desc: "Responsive & Modern Web" },
        { title: "User Research", img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000", desc: "Understanding behaviors" },
        { title: "Prototyping", img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1000", desc: "Interactive Mockups" },
    ];

    return (
        <section ref={targetRef} className="h-scroll-section" style={{ height: '300vh', position: 'relative' }}>
            <div className="sticky-wrapper" style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
                <div className="section-header" style={{ position: 'absolute', top: '50px', left: '10%', zIndex: 2 }}>
                    <h2 className="section-title">VISUAL_SHOWCASE</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Scroll down to explore gallery</p>
                </div>
                <motion.div style={{ x, display: 'flex', gap: '50px', paddingLeft: '10%' }} className="h-scroll-container">
                    {cards.map((card, i) => (
                        <div key={i} className="gallery-card glass-panel" style={{ minWidth: '400px', height: '500px', borderRadius: '30px', overflow: 'hidden', position: 'relative' }}>
                            <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div className="card-overlay" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                <h3 style={{ color: '#fff' }}>{card.title}</h3>
                                <p style={{ color: '#ccc' }}>{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
