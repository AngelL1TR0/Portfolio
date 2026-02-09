import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#050a15',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                overflow: 'hidden'
            }}
        >
            <div className="position-relative">
                {/* Glowing Circle */}
                <motion.div
                    animate={{
                        rotate: 360,
                        borderColor: ['#00f2ff', 'transparent', '#00f2ff'],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '2px solid #00f2ff',
                        boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                    }}
                />

                {/* Inner Pulse */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                    className="position-absolute translate-middle top-50 start-50"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, #00f2ff 0%, transparent 70%)',
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 mono"
                style={{ color: '#00f2ff', letterSpacing: '4px' }}
            >
                <span className="accent-text">_INITIATING_CORE</span>
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                >
                    _
                </motion.span>
            </motion.div>

            <div className="mt-3 progress-bar-container" style={{ width: '200px', height: '2px', background: 'rgba(0, 242, 255, 0.1)', position: 'relative' }}>
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    style={{ height: '100%', background: '#00f2ff', boxShadow: '0 0 10px #00f2ff' }}
                />
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
