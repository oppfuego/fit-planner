"use client";

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { formSchema, buildPrompt } from "./formSchema";

import Textarea from "@mui/joy/Textarea";
import Checkbox from "@mui/joy/Checkbox";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

import styles from "./ManualGenerator.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";

const ManualGenerator = () => {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const { showAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const buildInitialValues = () => {
        const init: Record<string, any> = {};
        [...formSchema.expectations, ...formSchema.selectors, ...formSchema.advanced].forEach((field) => {
            init[field.name] = field.type === "checkbox" ? false : "";
        });
        return init;
    };

    const buildValidationSchema = () => {
        const shape: Record<string, any> = {};
        [...formSchema.expectations, ...formSchema.selectors].forEach((field) => {
            if (field.required) {
                shape[field.name] = Yup.string().required("This field is required");
            }
        });
        return Yup.object().shape(shape);
    };

    const handleSubmit = async (values: Record<string, any>) => {
        const prompt = buildPrompt(values);
        setLoading(true);

        try {
            const res = await fetch("/api/ai/create-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ prompt }),
            });

            const data = await res.json();

            if (res.ok) {
                showAlert("Success", "Your document is being prepared. You can download it as PDF shortly.", "success");
            } else {
                showAlert("Error", data.message || "Failed to generate document", "error");
            }
        } catch (err) {
            console.error("AI Request Error:", err);
            showAlert("Error", "Something went wrong while generating document", "error");
        }

        setLoading(false);
    };

    return (
        <Formik
            initialValues={buildInitialValues()}
            validationSchema={buildValidationSchema()}
            onSubmit={handleSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form className={styles.form}>
                    {formSchema.expectations.map((field) => (
                        <div key={field.name} className={styles.fullWidth}>
                            <label className={styles.label}>{field.label}</label>
                            {field.description && <p className={styles.description}>{field.description}</p>}
                            <Field
                                name={field.name}
                                as={Textarea}
                                minRows={4}
                                placeholder={field.label}
                            />
                        </div>
                    ))}

                    <div className={styles.selectGrid}>
                        {formSchema.selectors.map((field) => (
                            <div key={field.name} className={styles.formGroup}>
                                <label className={styles.label}>{field.label}</label>
                                {field.description && <p className={styles.description}>{field.description}</p>}
                                <Select
                                    placeholder={field.label}
                                    value={values[field.name]}
                                    onChange={(_, value) => setFieldValue(field.name, value)}
                                >
                                    {field.options.map((opt: string) => (
                                        <Option key={opt} value={opt}>{opt}</Option>
                                    ))}
                                </Select>
                            </div>
                        ))}
                    </div>

                    <ButtonUI
                        type="button"
                        variant="outlined"
                        hoverTextColor="white"
                        color="neutral"
                        onClick={() => setShowAdvanced((prev) => !prev)}
                    >
                        {showAdvanced ? "Hide Advanced Options" : "Show Advanced Options"}
                    </ButtonUI>

                    {showAdvanced && (
                        <div className={styles.checkboxGrid}>
                            {formSchema.advanced.map((field) => (
                                <div key={field.name} className={styles.checkboxItem}>
                                    <Checkbox
                                        label={field.label}
                                        checked={values[field.name]}
                                        onChange={(e) => setFieldValue(field.name, e.target.checked)}
                                    />
                                    {field.description && <p className={styles.description}>{field.description}</p>}
                                </div>
                            ))}
                        </div>
                    )}

                    <ButtonUI type="submit" color="primary" loading={loading}>
                        Generate Document
                    </ButtonUI>
                </Form>
            )}
        </Formik>
    );
};

export default ManualGenerator;
