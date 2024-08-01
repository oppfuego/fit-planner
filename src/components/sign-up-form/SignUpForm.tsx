import React from 'react';
import './SignUpForm.scss';
import {AiFillGoogleCircle} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {GrApple} from "react-icons/gr";

const SignUpForm = () => {
    return (
        <div className="sign-up">
            <div className="sign-up__top-container">
                <h1 className="sign-up__top-container--headline">Sign up</h1>
                <p className="sign-up__top-container--text">Sign up to get rewards, and many more</p>
            </div>
            <section className="sign-up__inputs">
                <div className="sign-up__inputs-container">
                    <input type="text"
                           placeholder="Your name"
                           className="sign-up__inputs-container--field"/>
                    <input type="password"
                           placeholder="Adress"
                           className="sign-up__inputs-container--field"/>
                    <input type="text"
                           placeholder="Username"
                           className="sign-up__inputs-container--field"/>
                </div>
                <div className="sign-up__inputs-container">
                    <input type="text"
                           placeholder="Email"
                           className="sign-up__inputs-container--field"/>
                    <input type="password"
                           placeholder="Country"
                           className="sign-up__inputs-container--field"/>
                    <input type="text"
                           placeholder="Password"
                           className="sign-up__inputs-container--field"/>
                </div>
            </section>
            <button className="sign-up__button">Sign Up</button>
            <p>or, sign up with</p>
            <div className="sign-up__social-links">
                <button className="sign-up__social-links--button"><AiFillGoogleCircle/></button>
                <button className="sign-up__social-links--button"><FaFacebook/></button>
                <button className="sign-up__social-links--button"><GrApple/></button>
            </div>
        </div>
    );
};

export default SignUpForm;