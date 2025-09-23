"use client";

import React from "react";
import { Document, Page, Text, StyleSheet, pdf } from "@react-pdf/renderer";
import { AiOrder } from "@/context/AllOrdersContext";

const styles = StyleSheet.create({
    page: {
        padding: 50,
        fontSize: 12,
        fontFamily: "Helvetica",
        lineHeight: 1.6,
    },
    title: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 16,
        marginTop: 15,
        marginBottom: 8,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 6,
        fontStyle: "italic",
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 8,
        textAlign: "left",
    },
    listItem: {
        marginLeft: 15,
        marginBottom: 4,
    },
    bold: {
        fontWeight: "bold",
    },
    footer: {
        position: "absolute",
        bottom: 20,
        left: 0,
        right: 0,
        fontSize: 10,
        textAlign: "center",
        color: "grey",
    },
});

// ✨ парсимо Markdown **...** у жирний + чистимо # і *
const renderParagraph = (line: string, idx: number) => {
    const cleanLine = line.replace(/[#*]/g, ""); // прибираємо # і *
    const parts = cleanLine.split(/(\*\*.*?\*\*)/g);

    // Визначаємо стилі для заголовків
    if (cleanLine.match(/^Day \d+/i)) {
        return (
            <Text key={idx} style={styles.sectionTitle}>
                {cleanLine}
            </Text>
        );
    }
    if (cleanLine.toLowerCase().startsWith("warm-up") || cleanLine.toLowerCase().startsWith("workout")) {
        return (
            <Text key={idx} style={styles.subTitle}>
                {cleanLine}
            </Text>
        );
    }

    return (
        <Text key={idx} style={styles.paragraph}>
            {parts.map((part, i) =>
                part.startsWith("**") && part.endsWith("**") ? (
                    <Text key={i} style={styles.bold}>
                        {part.replace(/\*\*/g, "")}
                    </Text>
                ) : (
                    part
                )
            )}
        </Text>
    );
};

interface PDFExtractorProps {
    order: AiOrder;
}

const PDFExtractor: React.FC<PDFExtractorProps> = ({ order }) => {
    const handleDownload = async () => {
        const content = order.response || "No content";

        // Витягуємо title з промпта або ставимо дефолт
        const rawPrompt = order.prompt || "";
        const titleMatch = rawPrompt.match(/7[- ]Day Workout Plan/i);
        const title = titleMatch ? titleMatch[0] : "Workout Plan";

        const MyDoc = (
            <Document>
                <Page style={styles.page} wrap>
                    <Text style={styles.title}>{title}</Text>
                    {content
                        .split("\n")
                        .filter((l) => l.trim())
                        .map((line, idx) => renderParagraph(line, idx))}
                    <Text
                        style={styles.footer}
                        render={({ pageNumber, totalPages }) =>
                            `${pageNumber} / ${totalPages}`
                        }
                    />
                </Page>
            </Document>
        );

        const blob = await pdf(MyDoc).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `workout-plan-${order._id}.pdf`;
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <button
            onClick={handleDownload}
            style={{
                marginTop: "0.75rem",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                background: "var(--primary-color)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: 500,
            }}
        >
            Download PDF
        </button>
    );
};

export default PDFExtractor;
