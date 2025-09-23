"use client";
import React, { FC, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useRouter, usePathname } from "next/navigation";
import { ProtectedRouteProps } from "@/components/features/protected-route/types";
import { authRoutes } from "./authRoutes";
import { disallowedRoutes } from "./authRoutes";


const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const user = useUser();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (authRoutes.includes(pathname) && !user) {
            router.replace("/sign-in");
        }
        if (disallowedRoutes.includes(pathname) && user) {
            router.replace("/dashboard");
        }
    }, [user, router, pathname]);

    if (authRoutes.includes(pathname) && !user) return null;
    if (disallowedRoutes.includes(pathname) && user) return null;

    return <>{children}</>;
};

export default ProtectedRoute;