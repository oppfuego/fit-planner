import { isAllowedCountryCode } from "@/shared/countries";

export interface RegisterFormValues {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    street: string;
    city: string;
    country: string;
    postCode: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

export interface RegisterPayload {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email: string;
    phoneNumber: string;
    street: string;
    city: string;
    country: string;
    postCode: string;
    password: string;
}

export function normalizeRegisterPayload(values: RegisterPayload): RegisterPayload {
    return {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        dateOfBirth: values.dateOfBirth.trim(),
        email: values.email.trim().toLowerCase(),
        phoneNumber: values.phoneNumber.trim(),
        street: values.street.trim(),
        city: values.city.trim(),
        country: values.country.trim().toUpperCase(),
        postCode: values.postCode.trim(),
        password: values.password,
    };
}

export function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidDateInput(value: string): boolean {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const date = new Date(`${value}T00:00:00.000Z`);
    if (Number.isNaN(date.getTime())) return false;
    return date.toISOString().slice(0, 10) === value;
}

export function validateRegisterPayload(values: RegisterPayload): Partial<Record<keyof RegisterPayload | "confirmPassword" | "terms", string>> {
    const data = normalizeRegisterPayload(values);
    const errors: Partial<Record<keyof RegisterPayload | "confirmPassword" | "terms", string>> = {};

    if (!data.firstName) errors.firstName = "First name is required";
    if (!data.lastName) errors.lastName = "Last name is required";
    if (!data.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    else if (!isValidDateInput(data.dateOfBirth)) errors.dateOfBirth = "Enter a valid date";
    if (!data.email) errors.email = "Email is required";
    else if (!isValidEmail(data.email)) errors.email = "Enter a valid email address";
    if (!data.phoneNumber) errors.phoneNumber = "Phone number is required";
    if (!data.street) errors.street = "Street is required";
    if (!data.city) errors.city = "City is required";
    if (!data.country) errors.country = "Country is required";
    else if (!isAllowedCountryCode(data.country)) errors.country = "This country is not supported";
    if (!data.postCode) errors.postCode = "Post code is required";
    if (!data.password) errors.password = "Password is required";

    return errors;
}
