"use client";

import { Formik, FormikHelpers } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signUpValidation,
    signUpInitialValues,
    signUpOnSubmit
} from "@/validationSchemas/sign-up/schema";
import FormUI from "@/components/ui/form/FormUI";

export type SignUpValues = { name: string; email: string; password: string };

export default function SignUpPage() {
    const { showAlert } = useAlert();
    const router = useRouter();

    return (
        <Formik<SignUpValues>
            initialValues={signUpInitialValues}
            validate={signUpValidation}
            onSubmit={async (values, { setSubmitting }: FormikHelpers<SignUpValues>) =>
                signUpOnSubmit(values, { setSubmitting }, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <FormUI
                    title="Sign Up"
                    description="Create your account"
                    isSubmitting={isSubmitting}
                    fields={[
                        { name: "name", type: "text", placeholder: "Name" },
                        { name: "email", type: "email", placeholder: "Email" },
                        { name: "password", type: "password", placeholder: "Password" }
                    ]}
                    submitLabel="Sign Up"
                />
            )}
        </Formik>
    );
}