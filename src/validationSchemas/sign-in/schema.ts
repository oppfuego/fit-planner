import { UserResponse } from "@/types/user.types";
import { AlertColor } from "@mui/material/Alert";
import {SignInValues} from "@/components/widgets/sign-in/SignIn";

export const signInInitialValues: SignInValues = {
    email: "",
    password: "",
};

export function signInValidation(values: SignInValues) {
    const errors: Partial<Record<keyof SignInValues, string>> = {};
    if (!values.email) errors.email = "Required";
    if (!values.password) errors.password = "Required";
    return errors;
}

export async function signInOnSubmit(
    values: SignInValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) {
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(values),
        });

        const data = (await res.json()) as Partial<UserResponse> & { message?: string; type?: string };

        if (res.ok && data?.user) {
            showAlert("Login successful!", "", "success");
            router.replace("/");
            router.refresh();
        } else {
            showAlert(data?.message || "Login failed", "", "error");
        }
    } catch (error) {
        const errMsg = error instanceof Error ? error.message : "Network error";
        showAlert(errMsg, "", "error");
    } finally {
        setSubmitting(false);
    }
}