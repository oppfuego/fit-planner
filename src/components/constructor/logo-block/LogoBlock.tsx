"use client";
import React from "react";
import Image from "next/image";
import { media } from "@/resources/media";
import styles from "./LogoBlock.module.scss";

interface LogoBlockProps {
    width?: number;
    height?: number;
    alt?: string;
}

const LogoBlock: React.FC<LogoBlockProps> = ({
                                                 width = 180,
                                                 height = 60,
                                                 alt = "FitPlanner Logo",
                                             }) => {
    return (
        <div className={styles.logoWrapper}>
            <Image
                src={media.logo}
                alt={alt}
                width={width}
                height={height}
                priority
            />
        </div>
    );
};

export default LogoBlock;
