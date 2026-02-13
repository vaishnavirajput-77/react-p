import React, { useEffect, useRef } from 'react';

const CursorFollower = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };

        const addActive = () => cursor?.classList.add('active');
        const removeActive = () => cursor?.classList.remove('active');

        document.addEventListener('mousemove', moveCursor);

        const links = document.querySelectorAll('a, button, .project-card, .about-card, input, textarea');
        links.forEach(link => {
            link.addEventListener('mouseenter', addActive);
            link.addEventListener('mouseleave', removeActive);
        });

        // MutationObserver to handle dynamically added elements if needed, 
        // but for now we'll just re-attach on hover for simplicity or use a global delegate if we were fancy.
        // React way: we can't easily attach to all future elements without a context or global listener.
        // Better approach for React: Global event listener for mouseover that checks target.

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, .project-card, .about-card, input, textarea')) {
                addActive();
            } else {
                removeActive();
            }
        };

        // We'll stick to the simple mousemove for position and use mouseover delegation for active state
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return <div id="cursor-follower" className="cursor-follower" ref={cursorRef}></div>;
};

export default CursorFollower;