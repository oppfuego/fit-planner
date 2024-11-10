import React, { useState, useEffect } from 'react';
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import { auth, db } from '../../FirebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { CgGym } from "react-icons/cg";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState<string | null>(null);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setIsLoggedIn(true);

                const userDoc = await getDoc(doc(db, "Users", user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserRole(userData.role);
                }
            } else {
                setIsLoggedIn(false);
                setUserRole(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="header">
            <div className="header__content-container">
                <div>
                    {isLoggedIn ? (
                        <Link to={"/"} className="header__content-list--mod">
                            <Logo />
                        </Link>
                    ) : (
                        <Link to={"/login"} className="header__content-list--mod">
                            <Logo />
                        </Link>
                    )}
                </div>
                <div className="header__menu">
                    <span className="header__menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </span>
                    {isLoggedIn ? (
                        <Link to="/info-user-page" className="header__menu-icon">
                            <FaUser />
                        </Link>
                    ) : (
                        <Link to="/login" className="header__menu-icon">
                            <FaUser />
                        </Link>
                    )}
                </div>
                <nav className={`header__content ${menuOpen ? 'header__content--open' : ''}`}>
                    {isLoggedIn ? (
                        <>
                            <a href="#" className="header__content-list">About Us</a>
                            <a href="#" className="header__content-list">Services</a>
                            <a href="#" className="header__content-list">Our Trainers</a>
                            <a href="#" className="header__content-list">Contacts</a>
                        </>
                    ) : (
                        <Link to={"/"} className="header__content-list--mod">Schedule</Link>
                    )}
                </nav>
                <div className={`header__login ${isLoggedIn ? 'header__login--logged-in' : ''}`}>
                    {isLoggedIn ? (
                        <div className="header__login-icons">
                            <Link to="/info-user-page" className="header__profile-icon">
                                <FaUser />
                            </Link>

                            <Link to="/coach-page" className="header__profile-icon">
                                {userRole === "Coach" && <CgGym />}
                            </Link>
                        </div>

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