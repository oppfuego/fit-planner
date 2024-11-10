import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CoachInfo from "../../components/coach-info/CoachInfo";

const CoachPage = () => {
    return (
        <div>
            <Header/>

            <CoachInfo/>

            <Footer/>
        </div>
    );
};

export default CoachPage;