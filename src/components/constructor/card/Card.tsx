import React from "react";
import Media from "../image/Media";
import styles from "./Card.module.scss";
import { StaticImageData } from "next/image";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { FaArrowRight } from "react-icons/fa6"; // ✅ іконка з react-icons

interface CardProps {
    image: string | StaticImageData;
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, buttonLink }) => (
    <div className={styles.card}>
        <div className={styles.imageWrapper}>
            <Media
                src={image}
                type="image"
                width="100%"
                height="250px"
                alt={title}
                objectFit="cover"
            />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            {buttonText && buttonLink && (
                <a
                    href={buttonLink}
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <ButtonUI
                        variant="outlined"
                        size="lg"
                        color="primary"
                        hoverEffect="scale"
                        hoverTextColor="#fff"
                        endIcon={<FaArrowRight />}
                    >
                        {buttonText}
                    </ButtonUI>
                </a>
            )}
        </div>
    </div>
);

export default Card;
