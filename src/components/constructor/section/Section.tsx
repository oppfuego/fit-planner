import React from "react";
import styles from "./Section.module.scss";

interface SectionProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
    reverse?: boolean;
    gap?: string;
    align?: "center" | "start" | "end";
    justify?: "center" | "space-between" | "start" | "end";
}

const Section: React.FC<SectionProps> = ({
                                             left,
                                             right,
                                             reverse = false,
                                             gap = "2rem",
                                             align = "center",
                                             justify = "center",
                                         }) => {
    const isSingle = !left || !right;

    return (
        <div
            className={`${styles.section} ${isSingle ? styles.single : ""}`}
            style={{
                flexDirection: reverse ? "row-reverse" : "row",
                gap,
                alignItems: align,
                justifyContent: isSingle ? "center" : justify,
            }}
        >
            {left && <div className={styles.left}>{left}</div>}
            {right && <div className={styles.right}>{right}</div>}
        </div>
    );
};

export default Section;
