import { cookies } from "next/headers";
import { ComponentType, ReactNode } from "react";
import { UserProvider } from "@/context/UserContext";
import { baseURL } from "@/resources/content";
import { IUser, Nullable } from "@/types/user.types";

interface WrappedComponentProps { children?: ReactNode; }

export function authWrapper<T extends WrappedComponentProps>(Component: ComponentType<T>) {
    return async function WrappedComponent(props: T) {
        let user: Nullable<IUser> = null;

        try {
            const c = await cookies();
            const res = await fetch(`${baseURL}/api/auth/me`, {
                method: "GET",
                headers: { Cookie: c.toString() },
                cache: "no-store",
            });

            if (res.status === 200) {
                const json = await res.json();
                user = json.user;
            } else if (res.status === 401) {
                const r = await fetch(`${baseURL}/api/auth/refresh`, {
                    method: "POST",
                    headers: { Cookie: c.toString() },
                    cache: "no-store",
                });
                if (r.ok) {
                    const json = await r.json();
                    user = json.user;
                }
            }
        } catch (e) {
            console.error("authWrapper user fetch error:", e);
        }

        return (
            <UserProvider user={user}>
                <Component {...props} />
            </UserProvider>
        );
    };
}