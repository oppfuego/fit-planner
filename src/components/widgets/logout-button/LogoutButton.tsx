"use client";
import React from "react";
import { useAlert } from "@/context/AlertContext";
import { useAuthActions } from "@/utils/logoutClient";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {FaSignOutAlt} from "react-icons/fa";

export function LogoutButton({ all = false }: { all?: boolean }) {
    const { logout, logoutAll } = useAuthActions();
    const { showAlert } = useAlert();

    const handleClick = async () => {
        const ok = all ? await logoutAll() : await logout();
        showAlert(ok ? "Logged out" : "Logout failed", "", ok ? "success" : "error");
    };

    return (
        <ButtonUI
            variant="solid"
            color="danger"
            size="lg"
            hoverEffect="scale"
            hoverColor="danger"
            endIcon={<FaSignOutAlt/>}
            onClick={handleClick}
        >
            {all ? "Log out from all devices" : "Log out"}
        </ButtonUI>

    );
}