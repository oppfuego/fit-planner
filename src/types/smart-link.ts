import React from "react";

export type SmartLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
    ariaLabel?: string;
    title?: string;
    target?: string;
    rel?: string;
};