import React, {useState} from 'react';
import "./Header.scss";
import {ReactComponent as Logo} from "../../assets/Logo.svg";
import {Link} from "react-router-dom";
import {FaBars, FaUser} from "react-icons/fa";
import ModalSign from "../modal-sign/ModalSign";
import LoginForm from "../login-form/LoginForm";
import SignUpForm from "../sign-up-form/SignUpForm";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [isLoginModalOpen, setLoginModalState] = React.useState(false);
    const toggleLoginModal = () => setLoginModalState(!isLoginModalOpen);

    const [isSignupModalOpen, setSignupModalState] = React.useState(false);
    const toggleSignupModal = () => setSignupModalState(!isSignupModalOpen);

    return (
        <div className="header">
            <div className="header__content-container">
                <div className="header__logo-wrapper">
                    <Link to="/">
                        <Logo className="logo__wrapper-logo"/>
                    </Link>
                </div>
                <div className="header__menu-icon-wrapper">
                    <span className="header__menu-icon" onClick={toggleMenu}>
                        <FaBars/>
                    </span>
                    <span className="header__menu-icon" onClick={toggleLoginModal}
                    >
                        <FaUser/>
                    </span>
                    <ModalSign isOpen={isLoginModalOpen}
                               onClose={toggleSignupModal}
                               >
                        <LoginForm/>
                    </ModalSign>
                </div>
                <nav className={`header__content ${menuOpen ? 'header__menu-open' : ''}`}>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <a href="#">Our Trainers</a>
                    <a href="#">Contacts</a>
                </nav>
                <div className="header__login-content">
                    <button className="header__login-button"
                            onClick={toggleLoginModal}
                    >
                        Log in
                    </button>
                    <ModalSign
                        isOpen={isLoginModalOpen}
                        onClose={toggleLoginModal}
                    >
                        <LoginForm/>
                    </ModalSign>
                    <button className="header__sign-up-button"
                            onClick={toggleSignupModal}
                    >
                        Sign up
                    </button>
                    <ModalSign
                        isOpen={isSignupModalOpen}
                        onClose={toggleSignupModal}
                    >
                        <SignUpForm/>
                    </ModalSign>

                </div>
            </div>
        </div>
    );
};

export default Header;
