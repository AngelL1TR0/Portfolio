import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorldMap = ({ lat, lon, label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="position-relative d-inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <span className="accent-text pointer-cursor" style={{ cursor: 'pointer', borderBottom: '1px dashed var(--accent-color)' }}>
                {children || label}
            </span>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="map-popover cyber-card p-0 overflow-hidden"
                        style={{
                            position: 'absolute',
                            bottom: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '280px',
                            height: '160px',
                            zIndex: 2000,
                            marginBottom: '15px',
                            background: '#020c1b',
                            border: '1px solid var(--accent-color)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div className="terminal-header py-1 px-3 d-flex justify-content-between align-items-center">
                            <span className="mono small text-secondary" style={{ fontSize: '0.6rem' }}>_mapcn_relay: {label.toUpperCase()}</span>
                            <div className="d-flex gap-1">
                                <span className="mono text-info smaller fw-bold" style={{ fontSize: '0.5rem' }}>PRECISION_MAX</span>
                                <div className="terminal-dot bg-info" style={{ width: '8px', height: '8px', boxShadow: '0 0 5px var(--accent-color)' }} />
                            </div>
                        </div>

                        <div className="flex-grow-1 d-flex align-items-center justify-content-center" style={{ background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.1) 0%, transparent 70%)' }}>
                            <div className="text-center">
                                <div style={{ color: '#00f2ff', fontSize: '2rem', marginBottom: '8px' }}>📍</div>
                                <div className="mono text-secondary" style={{ fontSize: '0.7rem' }}>{label}</div>
                            </div>
                        </div>

                        <div
                            className="position-absolute bottom-0 start-0 w-100 p-2 mono text-secondary smaller d-flex justify-content-between"
                            style={{ fontSize: '0.55rem', background: 'rgba(5, 10, 21, 0.9)', borderTop: '1px solid rgba(0, 242, 255, 0.1)', zIndex: 10 }}
                        >
                            <span className="accent-text">&gt; COORDINATES_RELEVANT</span>
                            <span>{lat.toFixed(4)}N {lon.toFixed(4)}E</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorldMap;
