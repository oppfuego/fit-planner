"use client";
import React from "react";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";
import styles from "./FormUI.module.scss";
import InputUI from "@/components/ui/input/InputUI";
import ButtonUI from "@/components/ui/button/ButtonUI";
import SelectUI from "@/components/ui/select/SelectUI";

interface FieldConfig {
    name: string;
    type: string;
    label?: string;
    placeholder?: string;
    autoComplete?: string;
    options?: Array<{ label: string; value: string }>;
    fullWidth?: boolean;
}

interface FormUIProps {
    title: string;
    description?: string;
    isSubmitting?: boolean;
    fields?: FieldConfig[];
    submitLabel?: string;
    showTerms?: boolean;
}

const defaultFields: FieldConfig[] = [
    { name: "email", type: "email", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
];

const FormUI: React.FC<FormUIProps> = ({
                                           title,
                                           description,
                                           isSubmitting,
                                           fields = defaultFields,
                                           submitLabel = "Sign In",
                                           showTerms = false,
                                       }) => {
    const { values } = useFormikContext<any>();

    const isButtonDisabled =
        isSubmitting || (showTerms ? !values.terms : false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>{title}</h2>

                {description && (
                    <p className={styles.description}>{description}</p>
                )}

                <Form className={styles.formContent}>
                    <div className={styles.fieldsGrid}>
                    {fields.map((field) => (
                        <div
                            key={field.name}
                            className={`${styles.fieldBlock} ${field.fullWidth ? styles.fullWidthField : ""}`}
                        >
                            {field.label && <label htmlFor={field.name} className={styles.fieldLabel}>{field.label}</label>}
                            {field.type === "select" ? (
                                <SelectUI
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    options={field.options || []}
                                    formik
                                />
                            ) : (
                                <InputUI
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    autoComplete={field.autoComplete}
                                    formik
                                />
                            )}
                        </div>
                    ))}
                    </div>

                    {showTerms && (
                        <div className={styles.termsBlock}>
                            <label className={styles.termsLabel}>
                                <Field
                                    type="checkbox"
                                    name="terms"
                                    className={styles.checkbox}
                                />
                                <span>
                                    I agree to the{" "}
                                    <a
                                        href="/terms-and-conditions"
                                        rel="noopener noreferrer"
                                    >
                                        Terms & Conditions
                                    </a>
                                </span>
                            </label>

                            <ErrorMessage
                                name="terms"
                                component="div"
                                className={styles.errorText}
                            />
                        </div>
                    )}

                    <ButtonUI
                        type="submit"
                        text={submitLabel}
                        disabled={isButtonDisabled}
                        loading={isSubmitting}
                        fullWidth
                    />
                </Form>
            </div>
        </div>
    );
};

export default FormUI;
