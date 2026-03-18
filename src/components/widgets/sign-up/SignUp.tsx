"use client";

import { Formik, FormikHelpers } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit,
    signUpCountryOptions,
} from "@/validationSchemas/sign-up/schema";
import FormUI from "@/components/ui/form/FormUI";
import { RegisterFormValues } from "@/shared/auth";

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();

    return (
        <Formik<RegisterFormValues>
            initialValues={signUpInitialValues}
            validate={signUpValidation}
            onSubmit={async (
                values,
                { setSubmitting }: FormikHelpers<RegisterFormValues>
            ) => signUpOnSubmit(values, { setSubmitting }, showAlert, router)}
        >
            {({ isSubmitting }) => (
                <FormUI
                    title="Sign Up"
                    description="Create your account"
                    isSubmitting={isSubmitting}
                    fields={[
                        { name: "firstName", label: "First name", type: "text", placeholder: "Enter your first name", autoComplete: "given-name" },
                        { name: "lastName", label: "Last name", type: "text", placeholder: "Enter your last name", autoComplete: "family-name" },
                        { name: "dateOfBirth", label: "Date of birth", type: "date", placeholder: "YYYY-MM-DD", autoComplete: "bday" },
                        { name: "email", label: "Email", type: "email", placeholder: "Enter your email", autoComplete: "email" },
                        { name: "phoneNumber", label: "Phone number", type: "text", placeholder: "Enter your phone number", autoComplete: "tel" },
                        { name: "country", label: "Country", type: "select", placeholder: "Select your country", options: signUpCountryOptions, autoComplete: "country" },
                        { name: "city", label: "City", type: "text", placeholder: "Enter your city", autoComplete: "address-level2" },
                        { name: "postCode", label: "Post code", type: "text", placeholder: "Enter your post code", autoComplete: "postal-code" },
                        { name: "street", label: "Street", type: "text", placeholder: "Enter your street address", autoComplete: "address-line1", fullWidth: true },
                        { name: "password", label: "Password", type: "password", placeholder: "Create a password", autoComplete: "new-password" },
                        { name: "confirmPassword", label: "Confirm password", type: "password", placeholder: "Confirm your password", autoComplete: "new-password" },
                    ]}
                    submitLabel="Sign Up"
                    showTerms
                />
            )}
        </Formik>
    );
}
