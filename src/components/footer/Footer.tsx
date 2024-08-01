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
            <div className="content__container">
                <div className="content__container--top">
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <section className="top__content">
                        <p className="top__content--text">Join Us</p>
                        <nav className="top__content--social">
                            <a href="#" className="top__content--list"><FaSquareInstagram/></a>
                            <a href="#" className="top__content--list"><FaSquareFacebook/></a>
                            <a href="#" className="top__content--list"><FaSquareTwitter/></a>
                            <a href="#" className="top__content--list"><FaSquareYoutube/></a>
                        </nav>
                    </section>
                </div>
                <hr className="dividing"/>
                <div className="content__container--main">
                    <div className="footer__left">
                        <h1 className="footer__left--text">Choose your coach and follow your dreams together</h1>
                    </div>
                    <div className="footer__right">
                        <nav className="footer__links">
                            <h2 className="footer__links footer__links--text">About Us</h2>
                            <a href="">About Us</a>
                            <a href="">Services</a>
                            <a href="">Training plans</a>
                            <a href="">Our Trainers</a>
                        </nav>
                        <nav className="footer__links">
                            <h2 className="footer__links footer__links--text">Contact Us</h2>
                            <a href="">Email: fitplaner@gmail.com</a>
                            <a href="">Contact number: +380 123 456 789</a>
                            <a href="">Address: LoremIpsum 18-A</a>
                            <a href="">Working hours: Mn-Fr, 9:00 - 18:00</a>
                        </nav>
                        <nav className="footer__links">
                            <h2 className="footer__links footer__links--text">Legal</h2>
                            <a href="">Terms</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Coockie Policy</a>
                            <a href="">FAQ</a>
                        </nav>
                    </div>
                </div>
                <hr className="dividing"/>
                <div className="content__container--bottom">
                    <p>© 2024 FitPlaner. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;