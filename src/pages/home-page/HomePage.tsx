import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Calendar from "../../components/calendar/Calendar";

const HomePage = () => {
    return (
        <div id="root">
            <Header/>
            <main>
                <Calendar/>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;