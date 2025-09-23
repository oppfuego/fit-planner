"use client";
import React, { useState } from "react";
import styles from "./Slider.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import ButtonUI from "@/components/ui/button/ButtonUI";

interface SliderProps {
    images: StaticImageData[];
    height?: string | number;
}

const Slider: React.FC<SliderProps> = ({ images, height = "400px" }) => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current - 1 + images.length) % images.length);
    const next = () => setCurrent((current + 1) % images.length);

    return (
        <div className={styles.slider} style={{ height, position: "relative" }}>
            <div className={styles.navWrapperLeft}>
                <ButtonUI
                    sx={{ height: "150px", width: "40px", minWidth: 0, padding: 0 }}
                    onClick={prev}
                    aria-label="Previous"
                >
                    &#8592;
                </ButtonUI>
            </div>
            <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((img, idx) => (
                    <div className={styles.slide} key={idx}>
                        <Image
                            src={img}
                            alt={`Slide ${idx + 1}`}
                            className={styles.image}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.navWrapperRight}>
                <ButtonUI
                    sx={{ height: "150px", width: "40px", minWidth: 0, padding: 0 }}
                    onClick={next}
                    aria-label="Next"
                >
                    &#8594;
                </ButtonUI>
            </div>
        </div>
    );
};

export default Slider;