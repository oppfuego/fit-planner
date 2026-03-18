import { AlertColor } from "@mui/material/Alert";
import { allowedCountries } from "@/shared/countries";
import { normalizeRegisterPayload, RegisterFormValues, validateRegisterPayload } from "@/shared/auth";

export const signUpInitialValues: RegisterFormValues = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    street: "",
    city: "",
    country: "",
    postCode: "",
    password: "",
    confirmPassword: "",
    terms: false,
};

export const signUpCountryOptions = allowedCountries.map((country) => ({
    label: country.name,
    value: country.code,
}));

export const signUpValidation = (values: RegisterFormValues) => {
    const errors = validateRegisterPayload(values);
    if (!values.confirmPassword) errors.confirmPassword = "Please confirm your password";
    else if (values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match";
    if (!values.terms) errors.terms = "You must agree to the Terms and Conditions";
    return errors;
};

export const signUpOnSubmit = async (
    values: RegisterFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void },
    showAlert: (msg: string, desc?: string, severity?: AlertColor) => void,
    router: { replace: (url: string) => void; refresh: () => void }
) => {
    try {
        const payload = normalizeRegisterPayload({
            firstName: values.firstName,
            lastName: values.lastName,
            dateOfBirth: values.dateOfBirth,
            email: values.email,
            phoneNumber: values.phoneNumber,
            street: values.street,
            city: values.city,
            country: values.country,
            postCode: values.postCode,
            password: values.password,
        });

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(payload),
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
