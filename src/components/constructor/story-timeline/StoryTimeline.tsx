"use client";
import React from "react";
import styles from "./StoryTimeline.module.scss";

interface TimelineStep {
    year: string;
    description: string;
}

const StoryTimeline: React.FC<{ steps: TimelineStep[] }> = ({ steps }) => {
    return (
        <div className={styles.timeline}>
            {steps.map((s, i) => (
                <div key={i} className={styles.step}>
                    <div className={styles.year}>{s.year}</div>
                    <div className={styles.text}>{s.description}</div>
                </div>
            ))}
        </div>
    );
};

export default StoryTimeline;
