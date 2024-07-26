import React from 'react';
import './SignUpForm.scss';
import {AiFillGoogleCircle} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {GrApple} from "react-icons/gr";

const SignUpForm = () => {
    return (
        <div className="header__sign-up-content">
            <div className="sign-up__headline">
                <h1>
                    Sign up
                </h1>
                <p>
                    Sign up to get rewards, and many more
                </p>
            </div>

            <section className="sign-up__inputs-wrapper">
                <div className="sign-up__inputs">
                    <div className="input__wrapper">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input-field"
                        />
                    </div>
                    <div className="input__wrapper">
                        <input
                            type="password"
                            placeholder="Adress"
                            className="input-field"
                        />
                    </div>
                    <div className="input__wrapper">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input-field"
                        />
                    </div>
                </div>
                <div className="sign-up__inputs">
                    <div className="input__wrapper">
                        <input
                            type="text"
                            placeholder="Email"
                            className="input-field"
                        />
                    </div>
                    <div className="input__wrapper">
                        <input
                            type="password"
                            placeholder="Country"
                            className="input-field"
                        />
                    </div>
                    <div className="input__wrapper">
                        <input
                            type="text"
                            placeholder="Password"
                            className="input-field"
                        />
                    </div>
                </div>
            </section>

            <button className="sign-up__button">
                Sign Up
            </button>
            <p>
                or, sign up with
            </p>
            <div className="sign-up__social-links">
                <button className="sign-up__social-button"><AiFillGoogleCircle/></button>
                <button className="sign-up__social-button"><FaFacebook/></button>
                <button className="sign-up__social-button"><GrApple/></button>
            </div>
        </div>
    );
};

export default SignUpForm;