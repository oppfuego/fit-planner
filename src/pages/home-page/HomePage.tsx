import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/hero-section/HeroSection";
import AboutUs from "../../components/about-us/AboutUs";
import BenefitsSection from "../../components/benefit-section/BenefitsSection";

const HomePage = () => {
    return (
        <div id="root">
            <Header/>
            <HeroSection/>
            {/*<BenefitsSection/>*/}
            {/*<AboutUs/>*/}
            <Footer/>
        </div>
    );
};

export default HomePage;