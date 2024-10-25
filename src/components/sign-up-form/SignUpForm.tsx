import React from 'react';
import './SignUpForm.scss';
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrApple } from "react-icons/gr";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../FirebaseConfig';
import { setDoc, doc } from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserRoles } from '../../services/UserRoles';

const SignUpForm = () => {
    const validation = Yup.object({
        firstName: Yup.string()
            .matches(/^[a-zA-Z]+$/, "The first name must be a string")
            .required("The first name field is required"),
        secondName: Yup.string()
            .matches(/^[a-zA-Z]+$/, "The first name must be a string")
            .required("The second name field is required"),
        email: Yup.string()
            .email('Enter the correct email')
            .required("The email field is required"),
        phoneNumber: Yup.string()
            .matches(/^[0-9]+$/, "The phone number must be a number")
        .required("The phone number field is required"),

        password: Yup.string()
            .min(6, 'Password must be more than 6 characters')
            .required("The password field is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required("The confirm password field is required"),
    });

    const handleRegister = async (values: { firstName: string, secondName: string, email: string, phoneNumber: string, password: string }) => {
        try {
            const { firstName, secondName, email, phoneNumber, password } = values;
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    firstName,
                    secondName,
                    email: user.email,
                    phoneNumber,
                    password,
                    role: UserRoles.User
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
        <Formik
            initialValues={{
                firstName: '',
                secondName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validation}
            onSubmit={handleRegister}
        >
            {({ isSubmitting, isValid }) => (
                <Form className="sign-up" noValidate>
                    <div className="sign-up__top-container">
                        <h1 className="sign-up__top-container-headline">Sign up</h1>
                        <p className="sign-up__top-container-text">Sign up to get rewards, and many more</p>
                    </div>
                    <section className="sign-up__inputs">
                        <div className="sign-up__inputs-column">
                            <div className="sign-up__input-container">
                                <Field type="text"
                                       name="firstName"
                                       placeholder="First name"
                                       className="sign-up__input-field"
                                />
                                <ErrorMessage name="firstName" component="div" className="error-message" />
                            </div>
                            <div className="sign-up__input-container">
                                <Field type="text"
                                       name="secondName"
                                       placeholder="Second name"
                                       className="sign-up__input-field"
                                />
                                <ErrorMessage name="secondName" component="div" className="error-message" />
                            </div>
                            <div className="sign-up__input-container">
                                <Field type="email"
                                       name="email"
                                       placeholder="Email"
                                       className="sign-up__input-field"
                                />
                                <ErrorMessage name="email" component="div" className="error-message" />
                            </div>
                        </div>
                        <div className="sign-up__inputs-column">
                            <div className="sign-up__input-container">
                                <Field type="text"
                                       name="phoneNumber"
                                       placeholder="Phone number"
                                       className="sign-up__input-field"
                                />
                                <ErrorMessage name="phoneNumber" component="div" className="error-message" />
                            </div>
                            <div className="sign-up__input-container">
                                <Field type="password"
                                       name="password"
                                       placeholder="Password"
                                       className="sign-up__input-field"
                                />
                                <ErrorMessage name="password" component="div" className="error-message" />
                            </div>
                            <div className="sign-up__input-container">
                                <Field type="password"
                                       name="confirmPassword"
                                       placeholder="Confirm password"
                                       className="sign-up__input-field"
                                />
                                <ErrorMessage name="confirmPassword" component="div" className="error-message" />
                            </div>
                        </div>
                    </section>
                    <button type="submit" className="sign-up__button" disabled={isSubmitting || !isValid}>Sign Up</button>
                    <p>or, sign up with</p>
                    <div className="sign-up__social">
                        <button className="sign-up__social-icons"><AiFillGoogleCircle /></button>
                        <button className="sign-up__social-icons"><FaFacebook /></button>
                        <button className="sign-up__social-icons"><GrApple /></button>
                    </div>
                    <div className="login__register-link">
                        <p>Already have an account? <a href="/login">Sign in</a></p>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpForm;