import { AlertColor } from "@mui/material/Alert";

export const signUpInitialValues = {
    name: "",
    email: "",
    password: "",
    terms: false, // ✅ нове поле
};

type SignUpErrors = {
    name?: string;
    email?: string;
    password?: string;
    terms?: string;
};

export const signUpValidation = (values: typeof signUpInitialValues) => {
    const errors: SignUpErrors = {};

    if (!values.name) errors.name = "Required";
    if (!values.email) errors.email = "Required";
    if (!values.password) errors.password = "Required";
    if (!values.terms)
        errors.terms = "You must agree to the Terms and Conditions";

    return errors;
};

export const signUpOnSubmit = async (
    values: typeof signUpInitialValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });
        const data = await res.json();

        if (res.ok && data?.user) {
            showAlert("Registration successful!", "", "success");
            router.replace("/");
            router.refresh();
        } else {
            showAlert(data?.message || "Registration failed", "", "error");
        }
    } catch (e: any) {
        showAlert(e?.message || "Network error", "", "error");
    } finally {
        setSubmitting(false);
    }
};
