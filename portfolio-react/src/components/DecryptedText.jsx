import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const chars = '-./*+!@#$%^7890qwertyuiopasdfghjklzxcvbnm';

const DecryptedText = ({ text, speed = 40, delay = 0, className = "", animateOnHover = true }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);
    const intervalRef = useRef(null);

    // Function to scramble the text
    const scramble = () => {
        setDisplayedText(text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join(""));
    };

    const startAnimation = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayedText(prev =>
                text.split("").map((letter, index) => {
                    if (index < iteration) {
                        return letter;
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
                setIsAnimating(false);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        // Initial scramble
        scramble();

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(startAnimation, delay);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            clearInterval(intervalRef.current);
            observer.disconnect();
        };
    }, [text, delay]);

    const handleMouseEnter = () => {
        if (animateOnHover) {
            startAnimation();
        }
    };

    const handleMouseLeave = () => {
        if (animateOnHover) {
            // Re-scramble when the mouse leaves
            clearInterval(intervalRef.current);
            setIsAnimating(false);
            scramble();
        }
    };

    return (
        <span
            ref={containerRef}
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: animateOnHover ? 'pointer' : 'default' }}
        >
            {displayedText || text.replace(/./g, '#')}
        </span>
    );
};

export default DecryptedText;
