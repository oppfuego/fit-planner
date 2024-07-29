import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CubeAnimation from "../../components/cube-animation/CubeAnimation";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <CubeAnimation/>
            <Footer/>
        </div>
    );
};

export default HomePage;