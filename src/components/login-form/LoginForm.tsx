import React from 'react';
import './LoginForm.scss';
import {AiFillGoogleCircle} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {GrApple} from "react-icons/gr";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../../FirebaseConfig';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {

    const validation = Yup.object({
        email: Yup.string()
            .email('Enter the correct email')
            .required("The email field is required"),
        password: Yup.string()
            .min(6, 'The password must be at least 6 characters long')
            .required("The password field is required"),
    });

    const handleLogin = async (values: { email: string, password: string }) => {
        try {
            const {email, password} = values;
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            window.location.href = "/";
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validation}
            onSubmit={handleLogin}
        >
            {({isSubmitting, isValid}) => (
                <Form className="login" noValidate>
                    <div className="login__top-container">
                        <h1 className="login__top-container-headline">Sign in</h1>
                        <p className="login__top-container-text">Sign in to your account to see products catered to
                            you</p>
                    </div>

                    <div className="login__input">
                        <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="login__input-field"
                        />
                        <ErrorMessage name="email" component="div" className="error-message"/>

                        <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="login__input-field login__input-field--password"
                        />
                        <ErrorMessage name="password" component="div" className="error-message"/>
                    </div>

                    <button type="submit" className="login__sign-in-button" disabled={isSubmitting || !isValid}>
                        Sign In
                    </button>

                    <p>or, sign in with</p>
                    <div className="login__social-container">
                        <button className="login__social-links"><AiFillGoogleCircle/></button>
                        <button className="login__social-links"><FaFacebook/></button>
                        <button className="login__social-links"><GrApple/></button>
                    </div>

                    <div className="login__register-link">
                        <p>Don't have an account? <a href="/signup">Sign up</a></p>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;