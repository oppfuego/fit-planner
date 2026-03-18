export type UserRole = "user" | "admin";

export interface IUser {
    _id: string;
    name: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    phoneNumber: string | null;
    dateOfBirth: string | null;
    street: string | null;
    city: string | null;
    country: string | null;
    postCode: string | null;
    role: UserRole;
    tokens: number | null;
    createdAt: string;
    updatedAt: string;
}

export type Nullable<T> = T | null;

export interface UserResponse {
    user: IUser;
}
