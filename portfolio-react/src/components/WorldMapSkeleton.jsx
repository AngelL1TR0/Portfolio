import React from 'react';

const WorldMapSkeleton = () => {
    return (
        <span 
            className="placeholder-glow"
            style={{ display: 'inline-block', width: '80px', height: '20px' }}
        >
            <span 
                className="placeholder col-12" 
                style={{ background: 'rgba(0, 242, 255, 0.2)', borderRadius: '4px' }}
            />
        </span>
    );
};

export default WorldMapSkeleton;
