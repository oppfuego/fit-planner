"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Media.module.scss";

interface MediaProps {
    src: string | StaticImageData;
    type?: "image" | "video";
    alt?: string;
    className?: string;
    objectFit?: "cover" | "contain" | "fill";
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    aspectRatio?: string;
}

const Media: React.FC<MediaProps> = ({
                                         src,
                                         type = "image",
                                         alt = "media",
                                         className = "",
                                         objectFit = "cover",
                                         controls = true,
                                         autoPlay = false,
                                         loop = false,
                                         muted = false,
                                         aspectRatio = "16/6",
                                     }) => {
    return (
        <div
            className={`${styles.mediaWrapper} ${className}`}
            style={{ aspectRatio }}
        >
            {type === "image" ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{ objectFit }}
                    className={styles.image}
                />
            ) : (
                typeof src === "string" && (
                    <video
                        src={src}
                        controls={controls}
                        autoPlay={autoPlay}
                        loop={loop}
                        muted={muted}
                        className={styles.video}
                        style={{ objectFit }}
                    />
                )
            )}
        </div>
    );
};

export default Media;
