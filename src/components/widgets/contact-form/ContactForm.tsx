"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Input, Textarea } from "@mui/joy";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Confetti from "react-confetti";
import styles from "./ContactForm.module.scss";
import { validationSchema, initialValues, sendContactRequest } from "./schema";
import { useAlert } from "@/context/AlertContext";

const ContactUsForm = () => {
    const { showAlert } = useAlert();
    const [showConfetti, setShowConfetti] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: typeof initialValues,
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
    ) => {
        try {
            await sendContactRequest(values);
            resetForm();
            setSuccessMsg("✅ Thanks! Your message has been sent.");
            setShowConfetti(true);
            showAlert("Success", "Your request has been sent!", "success");
            setTimeout(() => setShowConfetti(false), 6000);
        } catch {
            showAlert("Error", "Failed to send. Please try again.", "error");
        }
        setSubmitting(false);
    };

    return (
        <div className={styles.contactUsWrapper}>
            {showConfetti && <Confetti />}
            <div className={styles.contactForm}>
                <div className={styles.formTitle}>📬 Contact Us</div>
                <div className={styles.formDesc}>
                    Fill out the form below and we’ll get back to you as soon as possible.
                </div>

                {successMsg ? (
                    <div className={styles.successMsg}>{successMsg}</div>
                ) : (
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched, isSubmitting }) => (
                            <Form className={styles.form}>
                                <div className={styles.formGroupRow}>
                                    <div className={styles.formGroup}>
                                        <Field name="name">
                                            {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="First Name"
                                                    color={touched.name && errors.name ? "danger" : "neutral"}
                                                />
                                            )}
                                        </Field>
                                        {touched.name && errors.name && <div className={styles.error}>{errors.name}</div>}
                                    </div>

                                    <div className={styles.formGroup}>
                                        <Field name="secondName">
                                            {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                                <Input
                                                    {...field}
                                                    placeholder="Last Name"
                                                    color={touched.secondName && errors.secondName ? "danger" : "neutral"}
                                                />
                                            )}
                                        </Field>
                                        {touched.secondName && errors.secondName && <div className={styles.error}>{errors.secondName}</div>}
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <Field name="email">
                                        {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="Email"
                                                color={touched.email && errors.email ? "danger" : "neutral"}
                                            />
                                        )}
                                    </Field>
                                    {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}
                                </div>

                                <div className={styles.formGroup}>
                                    <Field name="phone">
                                        {({ field }: { field: React.InputHTMLAttributes<HTMLInputElement> }) => (
                                            <Input
                                                {...field}
                                                type="tel"
                                                placeholder="Phone Number"
                                                color={touched.phone && errors.phone ? "danger" : "neutral"}
                                            />
                                        )}
                                    </Field>
                                    {touched.phone && errors.phone && <div className={styles.error}>{errors.phone}</div>}
                                </div>

                                <div className={styles.formGroup}>
                                    <Field name="message">
                                        {({ field }: { field: React.TextareaHTMLAttributes<HTMLTextAreaElement> }) => (
                                            <Textarea
                                                {...field}
                                                placeholder="Message (optional)"
                                                minRows={4}
                                                color="neutral"
                                            />
                                        )}
                                    </Field>
                                </div>

                                <ButtonUI
                                    type="submit"
                                    fullWidth
                                    loading={isSubmitting}
                                    text="🚀 Send Message"
                                    sx={{ mt: 2 }}
                                />
                            </Form>
                        )}
                    </Formik>
                )}
            </div>
        </div>
    );
};

export default ContactUsForm;
