"use client";
import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import styles from "./FAQ.module.scss";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Frequently Asked Questions</h2>
            <div className={styles.faq}>
                {items.map((item, idx) => (
                    <div key={idx} className={styles.item}>
                        <button
                            className={styles.question}
                            onClick={() => toggle(idx)}
                            aria-expanded={openIndex === idx}
                        >
                            {item.question}
                            <span
                                className={openIndex === idx ? styles.arrowOpen : styles.arrow}><IoIosArrowDown/></span>
                        </button>
                        <div
                            className={styles.answer}
                            style={{
                                maxHeight: openIndex === idx ? "500px" : "0",
                                opacity: openIndex === idx ? 1 : 0,
                            }}
                        >
                            <div className={styles.answerContent}>{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default FAQ;