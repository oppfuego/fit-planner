import {CSSProperties, ReactNode} from "react";

export interface GridProps {
    columns?: number;
    gap?: string | number;
    alignItems?: CSSProperties['alignItems'];
    justifyItems?: CSSProperties['justifyItems'];
    style?: CSSProperties;
    children: ReactNode;
}