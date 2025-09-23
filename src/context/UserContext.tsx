"use client";
import React, { createContext, useContext } from "react";
import {IUser, Nullable} from "@/types/user.types";

export const UserContext = createContext<Nullable<IUser>>(null);

export function useUser(): Nullable<IUser> {
    return useContext(UserContext);
}

export function UserProvider({
                                 user,
                                 children,
                             }: {
    user: Nullable<IUser>;
    children: React.ReactNode;
}) {
    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
