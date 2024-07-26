import React from 'react';
import "./Footer.scss"
import {ReactComponent as Logo} from "../../assets/Logo.svg";
import {Link} from "react-router-dom";
import {FaSquareInstagram} from "react-icons/fa6";
import {FaSquareFacebook} from "react-icons/fa6";
import {FaSquareTwitter} from "react-icons/fa6";
import {FaSquareYoutube} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content-container">
                <div className="footer__top-content">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <section className="footer__content">
                        <p>Join Us</p>
                        <nav className="footer__social-networks">
                            <a href="#">
                                <FaSquareInstagram/>
                            </a>
                            <a href="#">
                                <FaSquareFacebook/>
                            </a>
                            <a href="#">
                                <FaSquareTwitter/>
                            </a>
                            <a href="#">
                                <FaSquareYoutube/>
                            </a>
                        </nav>
                    </section>
                </div>
                <hr className="dividing__line"/>
                <div className="footer__main-content">
                    <div className="footer__left-content">
                        <h1>
                            Choose your coach and follow your dreams together
                        </h1>
                    </div>
                    <div className="footer__right-content">
                        <nav className="footer__links">
                            <h2>
                                About Us
                            </h2>
                            <a href="">About Us</a>
                            <a href="">Services</a>
                            <a href="">Training plans</a>
                            <a href="">Our Trainers</a>
                        </nav>
                        <nav className="footer__links">
                            <h2>
                                Contact Us
                            </h2>
                            <a href="">Email: fitplaner@gmail.com</a>
                            <a href="">Contact number: +380 123 456 789</a>
                            <a href="">Address: LoremIpsum 18-A</a>
                            <a href="">Working hours: Mn-Fr, 9:00 - 18:00</a>
                        </nav>
                        <nav className="footer__links">
                            <h2>
                                Legal
                            </h2>
                            <a href="">Terms</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Coockie Policy</a>
                            <a href="">FAQ</a>
                        </nav>
                    </div>
                </div>
                <hr className="dividing__line"/>

                <div className="footer__bottom-content">
                    <p>
                        © 2024 FitPlaner. All rights reserved.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Footer;