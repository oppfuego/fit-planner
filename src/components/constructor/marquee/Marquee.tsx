"use client";
import React from "react";
import styles from "./Marquee.module.scss";

const Marquee: React.FC<{ items: { text: string }[] }> = ({ items }) => {
    const doubled = [...items, ...items];

    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {doubled.map((item, i) => (
                    <span key={i} className={styles.item}>
            {item.text}
          </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
