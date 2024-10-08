import React from 'react';
import {useState} from 'react';
import './SignUpForm.scss';
import {AiFillGoogleCircle} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {GrApple} from "react-icons/gr";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth, db} from '../../FirebaseConfig';
import {setDoc, doc} from "firebase/firestore";

const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState({
        firstName: false,
        secondName: false,
        email: false,
        password: false,
        confirmPassword: false,
    });

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let hasError = false;

        const nameRegex = /^[A-Za-z]+$/;

        if (!firstName.trim() || !nameRegex.test(firstName)) {
            setError(prev => ({...prev, firstName: true}));
            hasError = true;
        }

        if (!secondName.trim() || !nameRegex.test(secondName)) {
            setError(prev => ({...prev, secondName: true}));
            hasError = true;
        }

        if (!email.trim() || !email.includes("@")) {
            setError(prev => ({...prev, email: true}));
            hasError = true;
        }

        if (!password.trim() || password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long");
            setError(prev => ({...prev, password: true}));
            hasError = true;
        }

        if (!confirmPassword.trim()) {
            setError(prev => ({ ...prev, confirmPassword: true }));
            hasError = true;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            setError(prev => ({ ...prev, password: true, confirmPassword: true }));
            hasError = true;
        }

        if (hasError) {
            setErrorMessage("Please fill in all fields");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    firstName: firstName,
                    secondName: secondName,
                    email: user.email,
                    phoneNumber: phoneNumber,
                    password: password
                });
                console.log(user);
                console.log("User registered successfully");
                window.location.href = "/login";
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form className="sign-up" onSubmit={handleRegister}>
            <div className="sign-up__top-container">
                <h1 className="sign-up__top-container-headline">Sign up</h1>
                <p className="sign-up__top-container-text">Sign up to get rewards, and many more</p>
                <p className="error-message">{errorMessage}</p>
            </div>
            <section className="sign-up__inputs">
                <div className="sign-up__inputs-container">
                    <input type="text"
                           placeholder="First name"
                           onChange={(e) => setFirstName(e.target.value)}
                           className={`sign-up__input-field ${error.firstName ? 'error' : ''}`}
                    />

                    <input type="text"
                           placeholder="Second name"
                           onChange={(e) => setSecondName(e.target.value)}
                           className={`sign-up__input-field ${error.secondName ? 'error' : ''}`}
                    />
                    <input type="email"
                           placeholder="Email"
                           onChange={(e) => setEmail(e.target.value)}
                           className={`sign-up__input-field ${error.email ? 'error' : ''}`}
                    />
                </div>
                <div className="sign-up__inputs-container">
                    <input type="text"
                           placeholder="Phone number(optional)"
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           className="sign-up__input-field"/>
                    <input type="password"
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}
                           className={`sign-up__input-field ${error.password ? 'error' : ''}`}
                    />
                    <input type="password"
                           placeholder="Confirm password"
                           onChange={(e) => setConfirmPassword(e.target.value)}
                           className={`sign-up__input-field ${error.confirmPassword ? 'error' : ''}`}
                    />
                </div>
            </section>
            <button className="sign-up__button">Sign Up</button>
            <p>or, sign up with</p>
            <div className="sign-up__social">
                <button className="sign-up__social-icons"><AiFillGoogleCircle/></button>
                <button className="sign-up__social-icons"><FaFacebook/></button>
                <button className="sign-up__social-icons"><GrApple/></button>
            </div>
            <div className="login__register-link">
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
        </form>
    );
};

export default SignUpForm;