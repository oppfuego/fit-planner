import React, { useState } from 'react';
import './LoginForm.scss';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../FirebaseConfig';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState({
        email: false,
        password: false,
    });

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let hasError = false;

        if (!email.trim() || !email.includes("@")) {
            setErrorMessage("Please enter a valid email address");
            setError(prev => ({ ...prev, email: true }));
            hasError = true;
        }

        if (!password.trim() || password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            setError(prev => ({ ...prev, password: true }));
            hasError = true;
        }

        if (hasError) {
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            window.location.href = "/home";
        } catch (error) {
            console.error(error);

        }
    }

    return (
        <form className="login" onSubmit={handleLogin} noValidate>
            <div className="login__top-container">
                <h1 className="login__top-container-headline">Sign in</h1>
                <p className="login__top-container-text">Sign in to your account to see products catered to you</p>
                <p className="error-message">{errorMessage}</p>
            </div>
            <div className="login__input">
                <input type="email"
                       placeholder="Email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className={`login__input-field ${error.email ? 'error' : ''}`}
                />
                <input type="password"
                       placeholder="Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       className={`login__input-field ${error.password ? 'error' : ''}`}
                />
            </div>
            <button className="login__sign-in-button">Sign In</button>
            <p>or, sign in with</p>
            <div className="login__social-container">
                <button className="login__social-links"><AiFillGoogleCircle/></button>
                <button className="login__social-links"><FaFacebook/></button>
                <button className="login__social-links"><GrApple/></button>
            </div>
            <div className="login__register-link">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </form>
    );
};

export default LoginForm;