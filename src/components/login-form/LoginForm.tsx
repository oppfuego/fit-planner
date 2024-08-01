import React from 'react';
import './LoginForm.scss';
import {AiFillGoogleCircle} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {GrApple} from "react-icons/gr";

const LoginForm = () => {
    return (
        <div className="login">
            <div className="login__top-container">
                <h1 className="login__top-container--headline">Sign in</h1>
                <p className="login__top-container--text">Sign in to your account to see products catered to you</p>
            </div>
            <div className="login__input">
                <div>
                    <input type="text"
                        placeholder="Username"
                        className="login__input--field"/>
                </div>
                <div>
                    <input type="password"
                        placeholder="Password"
                        className="login__input--field"/>
                </div>
            </div>
            <button className="login__sign-in-button">
                Sign In
            </button>
            <p>or, sign in with</p>
            <div className="login__social-links">
                <button className="login__social-links--button"><AiFillGoogleCircle/></button>
                <button className="login__social-links--button"><FaFacebook/></button>
                <button className="login__social-links--button"><GrApple/></button>
            </div>
        </div>
    );
};

export default LoginForm;