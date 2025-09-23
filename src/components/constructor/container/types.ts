import React, { CSSProperties, ReactNode } from "react";

export interface ContainerProps {
    display?: "grid" | "flex";
    flexDirection?: "row" | "column";
    columns?: number;
    gap?: string | number;
    alignItems?: CSSProperties["alignItems"];
    justifyContent?: CSSProperties["justifyContent"];
    style?: CSSProperties;
    children: ReactNode;
}