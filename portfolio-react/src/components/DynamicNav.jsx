import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const DynamicNav = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            className={`nav-dock ${hidden ? 'nav-hidden' : ''}`}
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{
                y: hidden ? -100 : 0,
                x: '-50%',
                opacity: hidden ? 0 : 1
            }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                opacity: { duration: 0.2 }
            }}
        >
            {portfolioData.navigation.map((item, i) => (
                <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(0, 242, 255, 0.1)',
                        color: '#00f2ff'
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    style={{ color: '#8892b0', fontSize: '0.85rem', fontWeight: 500 }}
                >
                    <span>{item.icon}</span>
                    <span className="d-none d-md-block">{item.label}</span>
                </motion.a>
            ))}
        </motion.nav>
    );
};

export default DynamicNav;
