import React from 'react';
import './CubeAnimation.scss';

const CubeAnimation = () => {
    return (
        <div className="cube">
            <div className="cube__side cube__side--front"></div>
            <div className="cube__side cube__side--back"></div>
            <div className="cube__side cube__side--right"></div>
            <div className="cube__side cube__side--left"></div>
            <div className="cube__side cube__side--top"></div>
            <div className="cube__side cube__side--bottom"></div>
        </div>
    );
};

export default CubeAnimation;