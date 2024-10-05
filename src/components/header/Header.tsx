import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import {auth} from '../../FirebaseConfig';


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="header">
            <div className="header__content-container">
                <div>
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="header__menu">
                    <span className="header__menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </span>
                    <Link to="/login" className="header__menu-icon">
                        <FaUser />
                    </Link>
                </div>
                <nav className={`header__content ${menuOpen ? 'header__content--open' : ''}`}>
                    <a href="#" className="header__content-list">About Us</a>
                    <a href="#" className="header__content-list">Services</a>
                    <a href="#" className="header__content-list">Our Trainers</a>
                    <a href="#" className="header__content-list">Contacts</a>
                </nav>
                <div className={`header__login ${isLoggedIn ? 'header__login--logged-in' : ''}`}>
                    {isLoggedIn ? (
                        <Link to="/info-user-page" className="header__profile-icon">
                            <FaUser/>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login" className="header__login-button">
                                Log in
                            </Link>
                            <Link to="/signup" className="header__login-button header__login-button--sign-up">
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;