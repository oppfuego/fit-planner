import React from 'react';
import "./HeroSection.scss";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section__content">
                <h1 className="hero-section__title">Work with professionals</h1>
                <p className="hero-section__description">We provide the best professionals to help you achieve your goals</p>
                <Link to={"/login"} className="hero-section__link">
                    Start now
                </Link>
            </div>

        </div>
    );
};

export default HeroSection;