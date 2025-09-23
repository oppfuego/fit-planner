"use client";

import { Formik, FormikHelpers } from "formik";
import { useAlert } from "@/context/AlertContext";
import { useRouter } from "next/navigation";
import {
    signInValidation,
    signInInitialValues,
    signInOnSubmit
} from "@/validationSchemas/sign-in/schema";
import FormUI from "@/components/ui/form/FormUI";

export type SignInValues = { email: string; password: string };

export default function SignInPage() {
    const { showAlert } = useAlert();
    const router = useRouter();

    return (
        <Formik<SignInValues>
            initialValues={signInInitialValues}
            validate={signInValidation}
            onSubmit={async (values, { setSubmitting }: FormikHelpers<SignInValues>) =>
                signInOnSubmit(values, { setSubmitting }, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <FormUI
                    title="Sign In"
                    description="Welcome back! Please enter your details."
                    isSubmitting={isSubmitting}
                    fields={[
                        { name: "email", type: "email", placeholder: "Email" },
                        { name: "password", type: "password", placeholder: "Password" }
                    ]}
                    submitLabel="Sign In"
                />
            )}
        </Formik>
    );
}