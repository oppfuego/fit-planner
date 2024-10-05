import React from 'react';
import Header from "../../components/header/Header";
import LoginForm from "../../components/login-form/LoginForm";
import Footer from "../../components/footer/Footer";

const LoginPage = () => {
    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default LoginPage;