import React from "react";
import { ContainerProps } from "./types";

const Container: React.FC<ContainerProps> = ({
                                                 display = "flex",
                                                 flexDirection = "row",
                                                 columns = 12,
                                                 gap = "16px",
                                                 alignItems = "stretch",
                                                 justifyContent = "stretch",
                                                 style,
                                                 children,
                                             }) => {
    const containerStyle: React.CSSProperties =
        display === "grid"
            ? {
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gap,
                alignItems,
                justifyItems: justifyContent,
                ...style,
            }
            : {
                display: "flex",
                flexDirection,
                gap,
                alignItems,
                justifyContent,
                ...style,
            };

    return <div style={containerStyle}>{children}</div>;
};

export default Container;