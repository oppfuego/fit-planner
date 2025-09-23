"use client";
import React from "react";
import styles from "./HighlightStrip.module.scss";

interface HighlightStripProps {
    messages: string[];
}

const HighlightStrip: React.FC<HighlightStripProps> = ({ messages }) => {
    return (
        <div className={styles.strip}>
            <div className={styles.track}>
                {messages.concat(messages).map((msg, i) => (
                    <span key={i} className={styles.item}>
            {msg}
          </span>
                ))}
            </div>
        </div>
    );
};

export default HighlightStrip;
