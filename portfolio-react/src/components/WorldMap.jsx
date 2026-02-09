import React, { useState } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from "react-simple-maps";
import { motion, AnimatePresence } from 'framer-motion';

// URL for the world topology
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = ({ lat, lon, label, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Balanced zoom scale for a "tactical data" look
    const zoomScale = 1200;

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
                            width: '320px',
                            height: '220px',
                            zIndex: 2000,
                            marginBottom: '15px',
                            background: '#020c1b',
                            border: '1px solid var(--accent-color)'
                        }}
                    >
                        <div className="terminal-header py-1 px-3 d-flex justify-content-between align-items-center">
                            <span className="mono small text-secondary" style={{ fontSize: '0.6rem' }}>_geo_tactical_scan: {label}</span>
                            <div className="d-flex gap-1">
                                <div className="terminal-dot bg-info" style={{ width: '8px', height: '8px', boxShadow: '0 0 5px var(--accent-color)' }} />
                            </div>
                        </div>

                        <div className="w-100 h-100" style={{ padding: '0px', background: '#050a15' }}>
                            <ComposableMap
                                projection="geoMercator"
                                projectionConfig={{
                                    scale: zoomScale,
                                    center: [lon, lat]
                                }}
                                height={200}
                                style={{ width: "100%", height: "100%" }}
                            >
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                fill="#112240"
                                                stroke="#0a192f"
                                                strokeWidth={0.5}
                                                style={{
                                                    default: { outline: "none" },
                                                    hover: { fill: "#233554", outline: "none" },
                                                    pressed: { outline: "none" },
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>

                                <Marker coordinates={[lon, lat]}>
                                    <motion.circle
                                        r={6}
                                        fill="#00f2ff"
                                        initial={{ r: 4, opacity: 0.3 }}
                                        animate={{ r: [4, 8, 4], opacity: [0.3, 0.7, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    />
                                    <motion.circle
                                        r={3}
                                        fill="#00f2ff"
                                        initial={{ scale: 1, opacity: 1 }}
                                        animate={{ scale: [1, 2, 1], opacity: [1, 0.5, 1] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                    />
                                    <circle r={1.5} fill="#fff" />
                                </Marker>
                            </ComposableMap>
                        </div>

                        <div
                            className="position-absolute bottom-0 start-0 w-100 p-2 mono text-secondary smaller d-flex justify-content-between"
                            style={{ fontSize: '0.55rem', background: 'rgba(5, 10, 21, 0.9)', borderTop: '1px solid rgba(0, 242, 255, 0.1)' }}
                        >
                            <span>&gt; REGION_ACQUIRED</span>
                            <span>{lat.toFixed(2)}N {lon.toFixed(2)}E</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default WorldMap;
