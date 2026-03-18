import { IUserSchema, UserType } from "@/backend/types/user.types";

function splitName(name?: string | null): { firstName: string | null; lastName: string | null } {
    const trimmed = name?.trim();
    if (!trimmed) return { firstName: null, lastName: null };

    const [firstName, ...rest] = trimmed.split(/\s+/);
    return {
        firstName: firstName || null,
        lastName: rest.length > 0 ? rest.join(" ") : null,
    };
}

export function mapUserToResponse(user: IUserSchema): UserType {
    const fallback = splitName(user.name);

    return {
        _id: user._id.toString(),
        name: user.name,
        firstName: user.firstName ?? fallback.firstName,
        lastName: user.lastName ?? fallback.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber ?? null,
        dateOfBirth: user.dateOfBirth ?? null,
        street: user.street ?? null,
        city: user.city ?? null,
        country: user.country ?? null,
        postCode: user.postCode ?? null,
        role: user.role,
        tokens: user.tokens,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
}
